export type JsonLdSchema = Record<string, unknown>;

export interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}
