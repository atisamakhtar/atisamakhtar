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
      "We align on goals, users, and must-haves. You get a clear scope, sitemap, and timeline within days.",
  },
  {
    step: 2,
    title: "Design & Prototype",
    description:
      "Wireframes and polished UI in Figma. Layouts and flows are approved before development begins.",
  },
  {
    step: 3,
    title: "Development",
    description:
      "Weekly demo links and agile sprints. Frontend, backend, and integrations built with modern stack tools.",
  },
  {
    step: 4,
    title: "Testing & Launch",
    description:
      "Cross-browser QA, performance checks, SEO setup, and a smooth handoff to Vercel or your host.",
  },
  {
    step: 5,
    title: "Support & Growth",
    description:
      "Post-launch fixes included. Optional retainers for new features, analytics, and ongoing improvements.",
  },
];
