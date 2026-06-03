import { serviceImages } from "@/config/images";

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "fullstack",
    title: "Full Stack Web Apps",
    description:
      "Custom dashboards, SaaS platforms, and internal tools built with the MERN stack or Next.js full stack.",
    details:
      "Includes authentication, admin panels, REST/GraphQL APIs, database design, and deployment. Perfect for startups validating an MVP or scaling an existing product.",
    icon: "⚡",
    image: serviceImages.fullstack,
  },
  {
    id: "frontend",
    title: "Frontend & Landing Pages",
    description:
      "High-converting marketing sites, portfolios, and product landing pages with modern animations.",
    details:
      "Responsive layouts, GSAP scroll effects, form integrations, CMS hookup (Sanity/Contentful), and Lighthouse scores above 90.",
    icon: "✦",
    image: serviceImages.frontend,
  },
  {
    id: "backend",
    title: "API & Backend Development",
    description:
      "Secure Node.js APIs, microservices, payment integrations, and third-party webhooks.",
    details:
      "JWT auth, Stripe/Razorpay, email automation, Redis caching, Docker setup, and OpenAPI documentation for your mobile or web clients.",
    icon: "◈",
    image: serviceImages.backend,
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    description:
      "Online stores with cart, checkout, inventory, and order management—headless or custom built.",
    details:
      "Stripe integration, product catalogs, discount codes, admin order dashboard, and mobile-first shopping experiences.",
    icon: "◎",
    image: serviceImages.ecommerce,
  },
];
