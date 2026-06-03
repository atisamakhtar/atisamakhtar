import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/security/contactSchema";
import { sanitizeObject } from "@/lib/security/sanitize";
import { checkRateLimit } from "@/lib/security/rateLimit";

export async function POST(request: Request) {
  try {
    if (request.method !== "POST") {
      return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
    }

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "anonymous";

    const rate = await checkRateLimit(`contact:${ip}`);
    if (!rate.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const body: unknown = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data. Please check your inputs." },
        { status: 400 },
      );
    }

    const data = sanitizeObject({
      name: parsed.data.name,
      email: parsed.data.email,
      subject: parsed.data.subject,
      message: parsed.data.message,
    });

    if (parsed.data.honeypot) {
      return NextResponse.json({ message: "Message sent successfully!" });
    }

    // Turnstile verification when configured
    if (process.env.TURNSTILE_SECRET_KEY && parsed.data.turnstileToken) {
      const verify = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            secret: process.env.TURNSTILE_SECRET_KEY,
            response: parsed.data.turnstileToken,
          }),
        },
      );
      const result = (await verify.json()) as { success: boolean };
      if (!result.success) {
        return NextResponse.json({ error: "Verification failed." }, { status: 400 });
      }
    }

    // Log server-side (integrate Resend/SendGrid/Nodemailer via env)
    console.info("[contact]", {
      name: data.name,
      email: data.email,
      subject: data.subject,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      message: "Thank you! Your message has been received. I'll respond within 48 hours.",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process your request. Please try again." },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
