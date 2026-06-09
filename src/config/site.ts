export const siteConfig = {
  name: "Atisam Akhtar",
  title: "Atisam Akhtar — Full Stack Developer",
  description:
    "Atisam Akhtar — Full Stack MERN Developer. React, Next.js, Node.js, WordPress. 1.5+ years building web apps. UMT graduate. Based in Lahore, Pakistan.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://atisamakhtar.com",
  email: "atisam.akhter@gmail.com",
  phone: "+92 320 4672882",
  firstName: "Atisam",
  heroTitle: "Full Stack Website",
  heroBio:
    "I build user-friendly, responsive web applications with React.js, Next.js, Node.js, Express, and MongoDB—and deliver WordPress sites for clients worldwide. Currently Website Developer at Xeven Solutions.",
  aboutBio:
    "I'm Atisam Akhtar, a Computer Science graduate from UMT (2024) with 1.5+ years of professional experience in website design and development. I've shipped AI platforms, e-commerce stores, LMS portals, and corporate sites for clients in Pakistan and abroad.",
  aboutBioExtra:
    "Previously Full Stack Developer at Dappster (AgentFlo, ChainAgent, Dappster Studio) and Frontend Developer at Poshmaal Technologies. I also grew my skills as a Level 2 Fiverr WordPress seller. I'm excited to contribute in dynamic, collaborative teams.",
  locale: "en",
  author: "Atisam Akhtar",
  jobTitle: "Full Stack MERN Developer",
  roles: [
    "Full Stack Developer",
    "Next.js Engineer",
    "MERN Stack Developer",
    "UI/UX Developer",
  ],
  social: {
    github: "https://github.com/atisamakhtar/",
    linkedin: "https://pk.linkedin.com/in/atisam-akhtar",
    whatsapp: "https://wa.me/923204672882",
  },
  keywords: [
    "Atisam Akhtar",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "MERN",
    "Pakistan Developer",
  ],
  availability: "available" as const,
  cvUrl: "/cv/atisam-akhtar-cv.pdf",
  location: "Lahore, Pakistan · Remote Worldwide",
  tagline:
    "Building bold, high-performance websites and apps that help your business grow online.",
  yearsExperience: 2,
  stats: [
    { label: "LinkedIn Projects", value: "17+" },
    { label: "Professional Experience", value: "1.5+" },
    { label: "GitHub Repos", value: "27+" },
    { label: "UMT Graduate", value: "2024" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
