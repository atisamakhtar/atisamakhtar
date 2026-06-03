import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbSchema,
  buildItemListSchema,
  buildWebPageSchema,
  combineSchemas,
} from "@/lib/seo/schemas";
import { projects } from "@/lib/content/projects";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata(
  "Projects",
  "Explore case studies: SaaS dashboards, e-commerce, APIs and 3D web experiences. Filter by stack and see live demos and repos.",
  "/projects",
);

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = combineSchemas(
    buildWebPageSchema(
      "Projects",
      "/projects",
      "Portfolio projects by Atisam Akhtar",
    ),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
    ]),
    buildItemListSchema(
      projects.map((p) => ({
        name: p.title,
        url: absoluteUrl(`/projects/${p.slug}`, siteConfig.url),
      })),
    ),
  );

  return (
    <>
      <JsonLd data={schemas} />
      {children}
    </>
  );
}
