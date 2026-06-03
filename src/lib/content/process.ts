export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const workProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery & Planning",
    description:
      "We discuss your goals, target users, and must-have features. I deliver a scope document, sitemap, and rough timeline within 3–5 days.",
  },
  {
    step: 2,
    title: "Design & Prototype",
    description:
      "Wireframes and high-fidelity UI in Figma. You approve layouts, colors, and flows before a single production line is written.",
  },
  {
    step: 3,
    title: "Development",
    description:
      "Agile sprints with demo links every week. Frontend, backend, database, and integrations built with Next.js, React, and Node.",
  },
  {
    step: 4,
    title: "Testing & Launch",
    description:
      "Cross-browser QA, performance audit, SEO setup, and deployment to Vercel or your preferred host. Training included if needed.",
  },
  {
    step: 5,
    title: "Support & Growth",
    description:
      "30 days post-launch bug fixes included. Optional monthly retainers for new features, analytics, and security updates.",
  },
];
