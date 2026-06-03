import type { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    slug: "nextjs-performance-checklist",
    title: "Next.js Performance Checklist for Production Apps",
    excerpt:
      "A step-by-step guide I use on every client project: images, fonts, caching, and bundle size—targeting 90+ Lighthouse on mobile.",
    content: `## Why Performance Matters

Slow sites lose users and rankings. Here's my checklist before every launch.

## Images & Fonts

Use \`next/image\` with sizes attribute. Self-host fonts with \`display: swap\`.

## Data Fetching

Prefer static generation and ISR for marketing pages. Use React Server Components where possible.

## Measuring

Run Lighthouse CI in GitHub Actions and fix regressions before merging to main.`,
    category: "Performance",
    tags: ["Next.js", "Performance", "Lighthouse"],
    publishedAt: "2025-05-12",
    featured: true,
    coverImage: "/images/blog/performance.jpg",
    readingTime: 8,
  },
  {
    slug: "mern-stack-best-practices",
    title: "MERN Stack Best Practices I Follow in 2025",
    excerpt:
      "Folder structure, error handling, validation, and deployment tips from 20+ MERN projects.",
    content: `## Project Structure

Separate routes, controllers, and services. Use TypeScript on both client and server.

## Security

Validate with Zod, hash passwords with bcrypt, and never expose secrets in the frontend.

## Deployment

Dockerize the API, host frontend on Vercel, MongoDB Atlas for the database.`,
    category: "Backend",
    tags: ["MERN", "Node.js", "MongoDB"],
    publishedAt: "2025-04-28",
    featured: false,
    coverImage: "/images/blog/mern.jpg",
    readingTime: 7,
  },
  {
    slug: "gsap-scrolltrigger-patterns",
    title: "GSAP ScrollTrigger Patterns for Portfolio Sites",
    excerpt:
      "Pinned sections, horizontal scroll, and reduced-motion fallbacks—copy-paste patterns for client sites.",
    content: `## Setup

Register ScrollTrigger once. Use \`@gsap/react\` for automatic cleanup on route change.

## Horizontal Scroll

Pin the wrapper and animate the track's x position based on scroll progress.

## Accessibility

Always respect \`prefers-reduced-motion\` and provide static fallbacks.`,
    category: "Animation",
    tags: ["GSAP", "Animation", "UX"],
    publishedAt: "2025-04-20",
    featured: false,
    coverImage: "/images/blog/gsap.jpg",
    readingTime: 6,
  },
  {
    slug: "freelance-developer-tips",
    title: "5 Lessons from Freelancing as a Developer in Pakistan",
    excerpt:
      "Pricing, contracts, time zones, and building trust with international clients—honest advice from the field.",
    content: `## Price for Value

Don't compete on hourly rate alone. Package outcomes and milestones.

## Communication

Over-communicate early. Weekly Loom videos beat long email threads.

## Portfolio

Your site is your best salesperson. Keep case studies updated.`,
    category: "Career",
    tags: ["Freelance", "Career", "Remote"],
    publishedAt: "2025-03-15",
    featured: false,
    coverImage: "/images/blog/freelance.jpg",
    readingTime: 5,
  },
  {
    slug: "tailwind-design-system",
    title: "Building a Tailwind Design System for Client Projects",
    excerpt:
      "CSS variables, component tokens, and reusable patterns that speed up handoff between design and code.",
    content: `## Tokens First

Define colors, spacing, and radii in \`tokens.css\` before writing components.

## Components

Build Button, Card, and Input once. Document variants in Storybook if the team is large.

## Consistency

Match Figma naming to Tailwind classes so designers and devs speak the same language.`,
    category: "Design",
    tags: ["Tailwind", "Design System", "CSS"],
    publishedAt: "2025-02-10",
    featured: false,
    coverImage: "/images/blog/tailwind.jpg",
    readingTime: 6,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((p) => p.featured) ?? blogPosts[0];
}
