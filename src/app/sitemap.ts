import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projects } from "@/lib/content/projects";
import { blogPosts } from "@/lib/content/blog";
import { services } from "@/lib/content/services";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/projects", "/blog", "/contact"].map(
    (path) => ({
      url: absoluteUrl(path || "/", siteConfig.url),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const projectRoutes = projects.map((p) => ({
    url: absoluteUrl(`/projects/${p.slug}`, siteConfig.url),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const serviceRoutes = services.map((s) => ({
    url: absoluteUrl(`/services/${s.id}`, siteConfig.url),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`, siteConfig.url),
    lastModified: new Date(p.updatedAt ?? p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes];
}
