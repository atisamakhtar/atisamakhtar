export interface FAQ {
  question: string;
  answer: string;
}

export const hireFaqs: FAQ[] = [
  {
    question: "Are you available for freelance work?",
    answer:
      "Yes. I'm currently taking new projects starting within 2 weeks. Typical engagements run 4–12 weeks depending on scope.",
  },
  {
    question: "Do you work remotely with international clients?",
    answer:
      "Absolutely. I'm based in Pakistan (PST) and collaborate with teams in the US, UK, UAE, and Europe via Slack, Zoom, and GitHub.",
  },
  {
    question: "What is your primary tech stack?",
    answer:
      "MERN stack (MongoDB, Express, React, Node.js), Next.js, TypeScript, PostgreSQL, Tailwind CSS, and Framer Motion / GSAP for animations.",
  },
  {
    question: "How do you charge for projects?",
    answer:
      "Fixed-price for well-defined scopes, or hourly for ongoing work. I provide a detailed quote after the discovery call—no hidden fees.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. I specialize in redesigns and migrations—from WordPress or legacy React to modern Next.js with better performance and SEO.",
  },
  {
    question: "Do you offer maintenance after launch?",
    answer:
      "Yes. Monthly maintenance packages include security patches, dependency updates, small feature requests, and uptime monitoring.",
  },
];
