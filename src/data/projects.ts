import type { PortfolioCategoryId, PortfolioProject } from "@/types/portfolio";

/** Same full-page capture for card + modal preview */
function pageProject(
  id: string,
  title: string,
  category: PortfolioCategoryId,
  image: string,
  options: Partial<Omit<PortfolioProject, "id" | "title" | "category" | "thumbnail" | "previewType" | "previewFiles">> = {},
): PortfolioProject {
  return {
    id,
    title,
    category,
    thumbnail: image,
    previewType: "images",
    previewFiles: [image],
    ...options,
  };
}

export const portfolioProjects: PortfolioProject[] = [
  // ── WordPress ──────────────────────────────────────────────
  pageProject(
    "aj-coaches-ltd",
    "AJ Coaches Ltd",
    "wordpress",
    "/portfolio/wordpress/ajcoachesltd-co-uk.webp",
    {
      description: "Professional coaching services website built on WordPress with a clean, trust-focused layout.",
      technologies: ["WordPress", "Custom Theme", "Responsive Design"],
      projectType: "Business Website",
      websiteUrl: "https://ajcoachesltd.co.uk",
      featured: true,
    },
  ),
  pageProject(
    "amber-driving-schools",
    "Amber Driving Schools",
    "wordpress",
    "/portfolio/wordpress/amberdrivingschools.webp",
    {
      description: "Driving school website showcasing services, pricing, and contact flows for a Bahamas-based client.",
      technologies: ["WordPress", "Responsive Design"],
      projectType: "Local Business",
      websiteUrl: "https://amberdrivingschools.com",
      featured: true,
    },
  ),
  pageProject(
    "baumeister-corp",
    "Baumeister Corp",
    "wordpress",
    "/portfolio/wordpress/baumeistercorp.webp",
    {
      description: "Corporate WordPress site with branded UI, structured services, and conversion-focused content.",
      technologies: ["WordPress", "Custom CSS", "Responsive Design"],
      projectType: "Corporate Website",
      clientName: "Baumeister Corp",
      websiteUrl: "https://baumeistercorp.com",
      featured: true,
    },
  ),
  pageProject(
    "noc-conference",
    "NOC Conference",
    "wordpress",
    "/portfolio/wordpress/noc-conference.webp",
    {
      description: "Conference and events website with schedules, speaker highlights, and registration pathways.",
      technologies: ["WordPress", "Events", "Custom Development"],
      projectType: "Events Website",
      websiteUrl: "https://noc-conference.com",
    },
  ),
  pageProject(
    "optimus-fleet-llc",
    "Optimus Fleet LLC",
    "wordpress",
    "/portfolio/wordpress/optimusfleetsllc.webp",
    {
      description: "Fleet management services site with service pages and lead-generation layout.",
      technologies: ["WordPress", "Custom Theme"],
      projectType: "Corporate Website",
      websiteUrl: "https://optimusfleetsllc.com",
    },
  ),
  pageProject(
    "optimus-fleet-us",
    "Optimus Fleet US",
    "wordpress",
    "/portfolio/wordpress/optimusfleetsus.webp",
    {
      description: "US fleet services WordPress build with service positioning and contact conversion paths.",
      technologies: ["WordPress", "Custom Theme"],
      projectType: "Corporate Website",
      websiteUrl: "https://optimusfleets.us",
    },
  ),
  pageProject(
    "tas-mining",
    "TAS Mining",
    "wordpress",
    "/portfolio/wordpress/tasmining.webp",
    {
      description: "Mining industry website presenting company capabilities, services, and corporate information.",
      technologies: ["WordPress", "Custom Development"],
      projectType: "Corporate Website",
      websiteUrl: "https://tasmining.com",
    },
  ),
  pageProject(
    "xeven-skills",
    "Xeven Skills",
    "wordpress",
    "/portfolio/wordpress/xevenskills.webp",
    {
      description: "Skills and training platform site with course positioning and professional brand presentation.",
      technologies: ["WordPress", "E-Learning", "Custom CSS"],
      projectType: "E-Learning",
      websiteUrl: "https://xevenskills.com",
    },
  ),
  pageProject(
    "safe-securities-ltd",
    "Safe Securities LTD",
    "wordpress",
    "/portfolio/wordpress/safesecuritiesltd.webp",
    {
      description:
        "Corporate WordPress site for wholesale trade, interactive leisure software, and employment placement services.",
      technologies: ["WordPress", "Custom Theme", "Elementor"],
      projectType: "Corporate Website",
      websiteUrl: "https://safesecuritiesltd.co.uk",
    },
  ),
  pageProject(
    "ua7-ltd",
    "UA7 Ltd",
    "wordpress",
    "/portfolio/wordpress/ua7ltd.webp",
    {
      description:
        "Business services website covering wholesale trade, software development, and employment placement solutions.",
      technologies: ["WordPress", "Custom Theme", "Responsive Design"],
      projectType: "Corporate Website",
      websiteUrl: "https://ua7ltd.com",
    },
  ),
  pageProject(
    "ace-fm-solutions",
    "ACE FM Solutions Ltd",
    "wordpress",
    "/portfolio/wordpress/acefmsolutions.webp",
    {
      description:
        "K9 security services website with service pages for patrol, event security, construction sites, and uniformed guards.",
      technologies: ["WordPress", "Custom Development", "Contact Forms"],
      projectType: "Security Services",
      websiteUrl: "https://acefmsolutions.com",
    },
  ),
  pageProject(
    "the-vast-reach",
    "The Vast Reach",
    "wordpress",
    "/portfolio/wordpress/thevastreach.webp",
    {
      description:
        "Lead generation and referral network platform for buyers and sellers—showcasing process, services, and conversion-focused growth messaging.",
      technologies: ["WordPress", "Custom Theme", "Landing Pages", "Lead Gen"],
      projectType: "Marketing & Lead Generation",
      websiteUrl: "https://thevastreach.com",
    },
  ),

  // ── Next.js ────────────────────────────────────────────────
  pageProject(
    "dappster-studio",
    "Dappster Studio",
    "nextjs",
    "/portfolio/nextjs/dappsterstudio.webp",
    {
      description: "Agency marketing site built with Next.js—modern UI, service showcase, and performance-focused delivery.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      projectType: "Agency Website",
      websiteUrl: "https://dappsterstudio.com",
      featured: true,
    },
  ),
  pageProject(
    "xeven-solutions",
    "Xeven Solutions",
    "nextjs",
    "/portfolio/nextjs/xevensolutions.webp",
    {
      description: "Software house corporate site with service pages, team positioning, and polished Next.js frontend.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      projectType: "Corporate Website",
      websiteUrl: "https://xevensolutions.com",
      featured: true,
    },
  ),

  // ── E-Commerce ─────────────────────────────────────────────
  pageProject(
    "gold-swan-24k",
    "Gold Swan 24K",
    "ecommerce",
    "/portfolio/ecommerce/goldswan24k.webp",
    {
      description: "Luxury gold and jewellery e-commerce storefront with product-focused layout and premium branding.",
      technologies: ["E-Commerce", "WooCommerce", "WordPress"],
      projectType: "E-Commerce",
      websiteUrl: "https://goldswan24k.com",
      featured: true,
    },
  ),
  pageProject(
    "roghane-khalis",
    "Roghane Khalis",
    "ecommerce",
    "/portfolio/ecommerce/roghanekhalis.webp",
    {
      description: "Natural products e-commerce website with catalog presentation and streamlined shopping experience.",
      technologies: ["E-Commerce", "WooCommerce", "WordPress"],
      projectType: "E-Commerce",
      websiteUrl: "https://roghanekhalis.com",
    },
  ),
  pageProject(
    "leo-wholesale",
    "Leo Wholesale",
    "ecommerce",
    "/portfolio/wordpress/leowholesale.webp",
    {
      description:
        "UK wholesale e-commerce store for smartphones, laptops, smartwatches, and home appliances with full WooCommerce shopping flows.",
      technologies: ["WordPress", "WooCommerce", "E-Commerce"],
      projectType: "E-Commerce",
      websiteUrl: "https://leowholesale.co.uk",
      featured: true,
    },
  ),
];

export const HOME_FEATURED_PROJECT_LIMIT = 6;

export function getFeaturedPortfolioProjects(): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.featured).slice(0, HOME_FEATURED_PROJECT_LIMIT);
}

export function getPortfolioProjectById(id: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.id === id);
}

export function filterPortfolioProjects(
  category: PortfolioCategoryId | "all",
): PortfolioProject[] {
  if (category === "all") return portfolioProjects;
  return portfolioProjects.filter((p) => p.category === category);
}
