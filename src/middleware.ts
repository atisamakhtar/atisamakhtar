import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { blogEnabled } from "@/config/features";

const isDev = process.env.NODE_ENV === "development";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!blogEnabled && (pathname === "/blog" || pathname.startsWith("/blog/"))) {
    return new NextResponse(null, { status: 404, statusText: "Not Found" });
  }

  const response = NextResponse.next();

  // Strict CSP breaks Next.js dev (React Refresh uses eval) and client hydration.
  // Apply full CSP in production only.
  if (!isDev) {
    const csp = [
      "default-src 'self'",
      // Next.js hydration requires inline + same-origin chunks; nonce is not wired in layout.
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://challenges.cloudflare.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; ");

    response.headers.set("Content-Security-Policy", csp);
  }

  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload",
  );
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  );
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  // CORP on HTML only — do not apply to Next.js chunks (handled via matcher exclusion).

  if (request.nextUrl.pathname.startsWith("/api/")) {
    const ip = request.headers.get("x-forwarded-for") ?? "anon";
    const key = `mw:${ip}:${request.nextUrl.pathname}`;
    const store = globalThis as typeof globalThis & {
      __rateLimit?: Map<string, { count: number; reset: number }>;
    };
    if (!store.__rateLimit) store.__rateLimit = new Map();
    const now = Date.now();
    const entry = store.__rateLimit.get(key);
    if (!entry || now > entry.reset) {
      store.__rateLimit.set(key, { count: 1, reset: now + 60_000 });
    } else if (entry.count >= 30) {
      return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
    } else {
      entry.count += 1;
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon|apple-icon|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|woff2|ico)$).*)",
  ],
};
