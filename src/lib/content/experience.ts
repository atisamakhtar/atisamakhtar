export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  type: "work" | "education";
}

/** Experience aligned with LinkedIn profile */
export const experience: ExperienceItem[] = [
  {
    id: "exp-xeven",
    company: "Xeven Solutions",
    role: "Website Developer",
    period: "Jul 2025 — Present",
    description:
      "Building and maintaining client websites at a leading AI development & solutions company in Lahore. Focus on performance-optimized UIs, React/Next.js, and WordPress delivery.",
    highlights: [
      "Delivered corporate sites including Baumeister Corp",
      "React.js, Next.js, and Tailwind CSS for modern frontends",
      "Collaborating with cross-functional teams on client projects",
    ],
    type: "work",
  },
  {
    id: "exp-dappster",
    company: "Dappster",
    role: "Full Stack Developer",
    period: "Nov 2024 — Jul 2025",
    description:
      "Full stack development for Dappster—IT services consultancy. Built company website and contributed to AI/blockchain-related products.",
    highlights: [
      "Built official Dappster Studio website (React, Node, TypeScript)",
      "Worked on AgentFlo.io and ChainAgent platforms",
      "End-to-end features from UI to API integration",
    ],
    type: "work",
  },
  {
    id: "exp-poshmaal",
    company: "Poshmaal Technologies",
    role: "Frontend Website Developer",
    period: "Aug 2023 — Oct 2024",
    description:
      "Frontend and WordPress development for web, mobile, and digital marketing clients—custom sites, e-commerce, and LMS projects.",
    highlights: [
      "Barclay Training LMS, buy7day, Integrated IT Training",
      "Responsive WordPress and React-based builds",
      "Client communication and Figma-to-code handoffs",
    ],
    type: "work",
  },
  {
    id: "exp-fiverr",
    company: "Fiverr (Level 2 Seller)",
    role: "WordPress Website Developer",
    period: "Jan 2022 — Jan 2024",
    description:
      "Freelance WordPress development for international clients—e-commerce, directories, travel, and corporate sites.",
    highlights: [
      "Find a Contractor, Experience Senegal, Francazona",
      "Custom themes, plugins, and CSS customization",
      "Maintained Level 2 seller rating with on-time delivery",
    ],
    type: "work",
  },
  {
    id: "exp-umt",
    company: "University of Management and Technology (UMT)",
    role: "B.S. Computer Science",
    period: "2020 — 2024",
    description:
      "Computer Science graduate with foundations in OOP, DSA, algorithms, MySQL, and software engineering. Final year project: Assessment Portal.",
    highlights: [
      "Assessment Portal FYP (TypeScript, full stack)",
      "Strong foundation in data structures and algorithms",
      "LeetCode practice and continuous self-learning",
    ],
    type: "education",
  },
];
