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

export interface SkillShowcaseItem {
  id: string;
  label: string;
  icon: string;
}

const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}.svg`;

const simpleIcon = (name: string, color?: string) =>
  color
    ? `https://cdn.simpleicons.org/${name}/${color.replace("#", "")}`
    : `https://cdn.simpleicons.org/${name}`;

/** Logo grid — derived from skillCategories + WordPress stack */
export const skillShowcaseItems: SkillShowcaseItem[] = [
  // Frontend (skillCategories)
  { id: "react", label: "React", icon: devicon("react/react-original") },
  { id: "nextjs", label: "Next.js", icon: devicon("nextjs/nextjs-original") },
  { id: "typescript", label: "TypeScript", icon: devicon("typescript/typescript-original") },
  { id: "tailwind", label: "Tailwind CSS", icon: devicon("tailwindcss/tailwindcss-original") },
  { id: "html", label: "HTML", icon: devicon("html5/html5-original") },
  { id: "css", label: "CSS", icon: devicon("css3/css3-original") },
  { id: "sass", label: "SASS", icon: devicon("sass/sass-original") },
  {
    id: "framer-motion",
    label: "Framer Motion",
    icon: simpleIcon("framer", "0055FF"),
  },
  // Backend
  { id: "nodejs", label: "Node.js", icon: devicon("nodejs/nodejs-original") },
  {
    id: "express",
    label: "Express",
    icon: simpleIcon("express", "000000"),
  },
  { id: "mongodb", label: "MongoDB", icon: devicon("mongodb/mongodb-original") },
  {
    id: "postgresql",
    label: "PostgreSQL",
    icon: devicon("postgresql/postgresql-original"),
  },
  { id: "prisma", label: "Prisma", icon: devicon("prisma/prisma-original") },
  { id: "graphql", label: "GraphQL", icon: devicon("graphql/graphql-plain") },
  // WordPress & CMS
  { id: "wordpress", label: "WordPress", icon: devicon("wordpress/wordpress-original") },
  { id: "elementor", label: "Elementor", icon: simpleIcon("elementor", "92003B") },
  {
    id: "woocommerce",
    label: "WooCommerce",
    icon: simpleIcon("woocommerce", "96588A"),
  },
  { id: "php", label: "PHP", icon: devicon("php/php-original") },
  // Tools & DevOps
  { id: "github", label: "Git / GitHub", icon: devicon("github/github-original") },
  { id: "docker", label: "Docker", icon: devicon("docker/docker-original") },
  { id: "vercel", label: "Vercel", icon: devicon("vercel/vercel-original") },
  { id: "figma", label: "Figma", icon: devicon("figma/figma-original") },
  { id: "postman", label: "Postman", icon: devicon("postman/postman-original") },
  {
    id: "javascript",
    label: "JavaScript",
    icon: devicon("javascript/javascript-original"),
  },
];

export const SKILLS_SHOWCASE_PER_PAGE = 10;

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
