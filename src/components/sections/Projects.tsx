import { PortfolioShowcase } from "@/components/portfolio/PortfolioShowcase";

export function Projects() {
  return (
    <PortfolioShowcase
      id="portfolio"
      variant="dark"
      featuredOnly
      showViewAllLink
      heading="Portfolio"
      subheading="Real projects from my LinkedIn profile—AI platforms, e-commerce, LMS, and MERN apps."
    />
  );
}
