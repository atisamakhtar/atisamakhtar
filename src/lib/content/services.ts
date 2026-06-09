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
    title: "WordPress Design and Development",
    shortTitle: "WordPress",
    description:
      "Custom WordPress solutions—themes, plugins, e-commerce, LMS, blogs, and any type of website you need.",
    details:
      "I build complete WordPress custom solutions tailored to your business: custom themes, custom plugins, WooCommerce stores, LMS and e-learning portals, blogging platforms, corporate sites, and more. From performance-focused theme rebuilds to full site delivery, I create all types of WordPress websites with clean code and mobile-first design.",
    highlights: [
      "Custom WordPress themes from scratch or child themes",
      "Custom plugins and feature extensions",
      "WooCommerce & e-commerce storefronts",
      "LMS, training, and membership sites",
      "Blogs, magazines, and content-heavy sites",
      "Speed optimization & SEO-ready structure",
    ],
    icon: "◫",
    image: serviceImages.wordpress,
  },
  {
    id: "fullstack",
    title: "Full Stack Web Apps",
    shortTitle: "Full Stack",
    description:
      "Custom dashboards, SaaS platforms, and internal tools built with the MERN stack or Next.js full stack.",
    details:
      "Includes authentication, admin panels, REST/GraphQL APIs, database design, and deployment. Perfect for startups validating an MVP or scaling an existing product.",
    highlights: [
      "MERN & Next.js full stack architecture",
      "Auth, roles, and admin dashboards",
      "REST / GraphQL API design",
      "MongoDB & PostgreSQL data modeling",
      "CI/CD and production deployment",
      "Scalable codebases with TypeScript",
    ],
    icon: "⚡",
    image: serviceImages.fullstack,
  },
  {
    id: "frontend",
    title: "Frontend & Landing Pages",
    shortTitle: "UI / UX",
    description:
      "High-converting marketing sites, portfolios, and product landing pages with modern animations.",
    details:
      "Responsive layouts, GSAP scroll effects, form integrations, CMS hookup (Sanity/Contentful), and Lighthouse scores above 90.",
    highlights: [
      "Responsive, mobile-first UI",
      "GSAP & Framer Motion interactions",
      "Landing pages that convert",
      "Portfolio & marketing sites",
      "CMS integration (Sanity, Contentful)",
      "Lighthouse performance above 90",
    ],
    icon: "✦",
    image: serviceImages.frontend,
  },
  {
    id: "backend",
    title: "API & Backend Development",
    shortTitle: "Backend",
    description:
      "Secure Node.js APIs, microservices, payment integrations, and third-party webhooks.",
    details:
      "JWT auth, Stripe/Razorpay, email automation, Redis caching, Docker setup, and OpenAPI documentation for your mobile or web clients.",
    highlights: [
      "Secure Node.js & Express APIs",
      "JWT auth & role-based access",
      "Stripe, Razorpay & payment flows",
      "Webhooks & third-party integrations",
      "Redis caching & rate limiting",
      "OpenAPI / Swagger documentation",
    ],
    icon: "◈",
    image: serviceImages.backend,
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    shortTitle: "E-Commerce",
    description:
      "Online stores with cart, checkout, inventory, and order management—headless or custom built.",
    details:
      "Stripe integration, product catalogs, discount codes, admin order dashboard, and mobile-first shopping experiences.",
    highlights: [
      "Custom & headless online stores",
      "Cart, checkout & order management",
      "Product catalogs & discount codes",
      "Stripe payment integration",
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
