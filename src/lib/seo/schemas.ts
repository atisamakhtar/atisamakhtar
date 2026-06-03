import { siteConfig } from "@/config/site";
import { allSkillNames } from "@/lib/content/skills";
import type { BlogPost } from "@/types/blog";
import type { Project } from "@/types/project";
import type { BreadcrumbItem, JsonLdSchema } from "@/types/seo";
import { absoluteUrl } from "@/lib/utils";

const personId = `${siteConfig.url}/#person`;

export function buildPersonSchema(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: siteConfig.name,
    jobTitle: siteConfig.jobTitle,
    url: siteConfig.url,
    email: siteConfig.email,
    image: absoluteUrl("/images/avatar/atisam-hero.png", siteConfig.url),
    sameAs: Object.values(siteConfig.social),
    knowsAbout: allSkillNames,
  };
}

export function buildWebSiteSchema(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildWebPageSchema(
  name: string,
  path: string,
  description: string,
): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(path, siteConfig.url),
    isPartOf: { "@id": siteConfig.url },
    about: { "@id": personId },
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path, siteConfig.url),
    })),
  };
}

export function buildFAQSchema(
  faqs: { question: string; answer: string }[],
): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildItemListSchema(
  projects: { name: string; url: string }[],
): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: p.name,
      url: p.url,
    })),
  };
}

export function buildCreativeWorkSchema(project: Project): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: absoluteUrl(`/projects/${project.slug}`, siteConfig.url),
    image: absoluteUrl(project.thumbnail, siteConfig.url),
    author: { "@id": personId },
    keywords: project.keywords.join(", "),
    dateCreated: `${project.year}`,
  };
}

export function buildArticleSchema(post: BlogPost): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.coverImage, siteConfig.url),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@type": "Person", "@id": personId, name: siteConfig.name },
    keywords: post.tags.join(", "),
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`, siteConfig.url),
  };
}

export function buildBlogSchema(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} Blog`,
    url: absoluteUrl("/blog", siteConfig.url),
    author: { "@id": personId },
  };
}

export function combineSchemas(...schemas: JsonLdSchema[]): JsonLdSchema[] {
  return schemas;
}
