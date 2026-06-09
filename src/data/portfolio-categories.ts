import type { PortfolioCategory, PortfolioCategoryId } from "@/types/portfolio";

/** Add new categories here — tabs update automatically when projects use them. */
export const PORTFOLIO_CATEGORY_DEFINITIONS: PortfolioCategory[] = [
  { id: "all", label: "All" },
  { id: "wordpress", label: "WordPress" },
  { id: "nextjs", label: "Next.js" },
  { id: "react", label: "React.js" },
  { id: "fullstack", label: "Full Stack" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "custom", label: "Custom Development" },
];

export function getPortfolioCategories(
  projectCategories: PortfolioCategoryId[],
): PortfolioCategory[] {
  const active = new Set(projectCategories);
  return PORTFOLIO_CATEGORY_DEFINITIONS.filter(
    (cat) => cat.id === "all" || active.has(cat.id as PortfolioCategoryId),
  );
}

export function getCategoryLabel(id: PortfolioCategoryId): string {
  return (
    PORTFOLIO_CATEGORY_DEFINITIONS.find((c) => c.id === id)?.label ?? id
  );
}
