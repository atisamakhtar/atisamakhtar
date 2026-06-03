import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBlogSchema,
  buildBreadcrumbSchema,
  buildWebPageSchema,
  combineSchemas,
} from "@/lib/seo/schemas";

export const metadata: Metadata = createPageMetadata(
  "Blog",
  "Articles on Next.js, performance, 3D on the web, and full stack patterns—written by Atisam Akhtar for developers and teams.",
  "/blog",
);

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const schemas = combineSchemas(
    buildWebPageSchema("Blog", "/blog", "Blog by Atisam Akhtar"),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
    ]),
    buildBlogSchema(),
  );

  return (
    <>
      <JsonLd data={schemas} />
      {children}
    </>
  );
}
