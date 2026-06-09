export type PortfolioPreviewType = "pdf" | "images";

export type PortfolioCategoryId =
  | "wordpress"
  | "nextjs"
  | "react"
  | "fullstack"
  | "ecommerce"
  | "custom";

export interface PortfolioCategory {
  id: PortfolioCategoryId | "all";
  label: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: PortfolioCategoryId;
  thumbnail: string;
  description?: string;
  previewType: PortfolioPreviewType;
  previewFiles: string[];
  technologies?: string[];
  projectType?: string;
  clientName?: string;
  websiteUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}
