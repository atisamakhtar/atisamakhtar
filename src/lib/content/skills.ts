export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML / CSS / SASS", level: 95 },
      { name: "Framer Motion / GSAP", level: 85 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js / Express", level: 92 },
      { name: "MongoDB / Mongoose", level: 88 },
      { name: "PostgreSQL / Prisma", level: 82 },
      { name: "REST APIs / GraphQL", level: 88 },
      { name: "Authentication (JWT/OAuth)", level: 90 },
    ],
  },
  {
    name: "Tools & DevOps",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Docker", level: 75 },
      { name: "Vercel / AWS basics", level: 78 },
      { name: "Figma → Code", level: 85 },
      { name: "Postman / API testing", level: 88 },
    ],
  },
  {
    name: "Other",
    skills: [
      { name: "SEO & Metadata", level: 85 },
      { name: "Responsive Design", level: 95 },
      { name: "Agile / Scrum", level: 80 },
      { name: "Technical Writing", level: 75 },
    ],
  },
];

export const techStackLogos = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Tailwind",
  "Git",
  "Docker",
  "Figma",
  "Vercel",
] as const;

export const allSkillNames = skillCategories.flatMap((c) =>
  c.skills.map((s) => s.name),
);
