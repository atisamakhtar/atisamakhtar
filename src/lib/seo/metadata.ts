import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { PageMetadataInput } from "@/types/seo";
import { absoluteUrl } from "@/lib/utils";

const TITLE_TEMPLATE = "%s | Atisam Akhtar — Full Stack Developer";

export function createMetadata(input: PageMetadataInput): Metadata {
  const {
    title,
    description,
    path,
    keywords = [],
    ogImage,
    noIndex = false,
    type = "website",
    publishedTime,
    modifiedTime,
  } = input;

  const url = absoluteUrl(path, siteConfig.url);
  const image =
    ogImage ?? absoluteUrl(`/api/og?title=${encodeURIComponent(title)}`, siteConfig.url);

  const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.title,
      template: TITLE_TEMPLATE,
    },
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author,
    alternates: {
      canonical: url,
      languages: {
        en: url,
        "x-default": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: type === "article" ? "article" : "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(type === "article" && publishedTime
        ? { publishedTime, modifiedTime: modifiedTime ?? publishedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@atisamakhtar",
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };

  return metadata;
}

export function createPageMetadata(
  pageTitle: string,
  description: string,
  path: string,
  extra?: Partial<PageMetadataInput>,
): Metadata {
  return createMetadata({
    title: pageTitle,
    description,
    path,
    ...extra,
  });
}
