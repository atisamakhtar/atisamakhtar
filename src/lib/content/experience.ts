export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  statusLabel: string;
  type: "work" | "education";
  isCurrent?: boolean;
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
    tags: ["React.js", "Next.js", "Tailwind", "WordPress"],
    statusLabel: "Current",
    type: "work",
    isCurrent: true,
  },
  {
    id: "exp-dappster",
    company: "Dappster",
    role: "Full Stack Developer",
    period: "Nov 2024 — Jul 2025",
    description:
      "Full stack development for an IT services consultancy. Built the company website and contributed to AI/blockchain-related products end-to-end.",
    highlights: [
      "Built official Dappster Studio website (React, Node, TypeScript)",
      "Worked on AgentFlo.io and ChainAgent platforms",
      "End-to-end features from UI to API integration",
    ],
    tags: ["TypeScript", "Node.js", "React", "Blockchain"],
    statusLabel: "Previous",
    type: "work",
  },
  {
    id: "exp-poshmaal",
    company: "Poshmaal Technologies",
    role: "Frontend Website Developer",
    period: "Aug 2023 — Oct 2024",
    description:
      "Frontend and WordPress development for web, mobile, and digital marketing clients—custom sites, e-commerce, and LMS projects across varied industries.",
    highlights: [
      "Barclay Training LMS, buy7day, Integrated IT Training",
      "Responsive WordPress and React-based builds",
      "Client communication and Figma-to-code handoffs",
    ],
    tags: ["WordPress", "React", "Figma", "LMS"],
    statusLabel: "Previous",
    type: "work",
  },
  {
    id: "exp-fiverr",
    company: "Fiverr",
    role: "WordPress Developer · Level 2 Seller",
    period: "Jan 2022 — Jan 2024",
    description:
      "Freelance WordPress development for international clients—e-commerce, directories, travel, and corporate sites with consistent five-star delivery.",
    highlights: [
      "Find a Contractor, Experience Senegal, Francazona",
      "Custom themes, plugins, and CSS customization",
      "Maintained Level 2 seller rating with on-time delivery",
    ],
    tags: ["WooCommerce", "Custom Themes", "Freelance", "CSS"],
    statusLabel: "Freelance",
    type: "work",
  },
  {
    id: "exp-umt",
    company: "University of Management and Technology (UMT)",
    role: "B.S. Computer Science",
    period: "2020 — 2024",
    description:
      "Computer Science graduate with strong foundations in OOP, DSA, algorithms, MySQL, and software engineering. Final year project: a full-stack Assessment Portal built in TypeScript.",
    highlights: [
      "Assessment Portal FYP — TypeScript, full stack",
      "Strong foundation in data structures and algorithms",
      "LeetCode practice and continuous self-learning",
    ],
    tags: ["Computer Science", "TypeScript", "DSA", "MySQL"],
    statusLabel: "Degree",
    type: "education",
  },
];

export const workExperience = experience.filter((item) => item.type === "work");
export const educationExperience = experience.filter((item) => item.type === "education");
