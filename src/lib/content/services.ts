import { serviceImages } from "@/config/images";

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  details: string;
  highlights: string[];
  icon: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "wordpress",
    title: "WordPress Design & Development",
    shortTitle: "WordPress",
    description:
      "Custom WordPress design and development—themes, Elementor, WooCommerce, LMS sites, and business websites built to convert.",
    details:
      "I design and build complete WordPress solutions tailored to your brand: custom themes, Elementor layouts, WooCommerce stores, LMS portals, blogs, and corporate sites. From Figma to launch, you get clean code, mobile-first UI, and SEO-ready structure.",
    highlights: [
      "Custom themes & Elementor Pro builds",
      "WooCommerce & e-commerce storefronts",
      "LMS, training, and membership sites",
      "Figma-to-WordPress design handoff",
      "Speed optimization & on-page SEO",
      "Blogs, magazines, and content sites",
    ],
    icon: "◫",
    image: serviceImages.wordpress,
  },
  {
    id: "fullstack",
    title: "MERN Full Stack Development",
    shortTitle: "MERN Full Stack",
    description:
      "Production-ready web apps with React, Next.js, Node.js, Express, and MongoDB—dashboards, SaaS, APIs, and full product builds.",
    details:
      "End-to-end MERN and Next.js development: authentication, admin panels, REST APIs, database design, payments, and deployment. Ideal for startups shipping an MVP or teams scaling an existing product.",
    highlights: [
      "React, Next.js, Node.js & Express",
      "MongoDB, PostgreSQL & Prisma",
      "Auth, roles & admin dashboards",
      "REST APIs & third-party integrations",
      "TypeScript codebases that scale",
      "Vercel, Docker & production deploys",
    ],
    icon: "⚡",
    image: serviceImages.fullstack,
  },
  {
    id: "ai-development",
    title: "AI Rapid Development",
    shortTitle: "AI Rapid Builds",
    description:
      "Fast AI-assisted builds with Lovable, Bolt, Cursor, and Next.js—MVPs, landing pages, and apps shipped in days, not months.",
    details:
      "Sometimes called vibe coding: I combine AI tooling with solid engineering to prototype quickly, then harden the result for production. Perfect when you need a polished site or app fast without sacrificing quality.",
    highlights: [
      "Lovable, Bolt & AI-first prototyping",
      "Next.js + Supabase / MERN MVPs",
      "Landing pages & SaaS concepts",
      "Cursor-assisted development workflows",
      "Rapid iteration with clean handoff code",
      "From idea to live URL in short sprints",
    ],
    icon: "✦",
    image: serviceImages.frontend,
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    shortTitle: "E-Commerce",
    description:
      "Online stores with WooCommerce or custom stacks—cart, checkout, inventory, payments, and order dashboards.",
    details:
      "WooCommerce and custom e-commerce builds for wholesale, retail, and digital products. Stripe integration, product catalogs, discount flows, and mobile-first shopping experiences.",
    highlights: [
      "WooCommerce & custom online stores",
      "Cart, checkout & order management",
      "Product catalogs & discount codes",
      "Stripe & payment gateway setup",
      "Admin dashboards for orders",
      "Mobile-first shopping UX",
    ],
    icon: "◎",
    image: serviceImages.ecommerce,
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function getAdjacentServices(id: string): {
  prev: Service | null;
  next: Service | null;
} {
  const index = services.findIndex((s) => s.id === id);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: services[index - 1] ?? null,
    next: services[index + 1] ?? null,
  };
}
