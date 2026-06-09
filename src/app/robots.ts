import type { MetadataRoute } from "next";
import { blogEnabled } from "@/config/features";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/api/"];

  if (!blogEnabled) {
    disallow.push("/blog", "/blog/");
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow,
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
