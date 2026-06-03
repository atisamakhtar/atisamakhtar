export type ProjectCategory =
  | "all"
  | "web"
  | "mobile"
  | "fullstack"
  | "3d"
  | "open-source";

export interface Project {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: Exclude<ProjectCategory, "all">;
  featured: boolean;
  thumbnail: string;
  images: string[];
  stack: string[];
  role: string;
  problem: string;
  solution: string;
  liveUrl?: string;
  githubUrl?: string;
  year: number;
  keywords: string[];
}
