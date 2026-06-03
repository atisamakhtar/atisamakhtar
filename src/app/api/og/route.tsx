import { ImageResponse } from "@vercel/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? siteConfig.name;
  const subtitle = searchParams.get("subtitle") ?? siteConfig.jobTitle;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #111111 0%, #ff2d55 50%, #111111 100%)",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#ff2d55",
            marginBottom: 16,
            fontFamily: "system-ui",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#fafafa",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 28, color: "#a1a1aa", marginTop: 24 }}>{subtitle}</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
