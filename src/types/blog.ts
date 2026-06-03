export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  featured: boolean;
  coverImage: string;
  readingTime: number;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  coverImage: string;
  readingTime: number;
  featured: boolean;
}
