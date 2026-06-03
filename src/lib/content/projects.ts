import type { Project } from "@/types/project";

/** Projects sourced from LinkedIn: linkedin.com/in/atisam-akhtar/details/projects/ */
export const projects: Project[] = [
  {
    slug: "agentflo",
    title: "AgentFlo.io — AI Digital Workforce",
    description:
      "AI-powered digital workforce platform that streamlines operations and enhances efficiency with adaptive intelligent agents.",
    excerpt:
      "Developed AgentFlo, an AI platform with intelligent agents to automate business workflows and boost team efficiency.",
    category: "fullstack",
    featured: true,
    thumbnail: "/images/projects/agentflo.jpg",
    images: [],
    stack: ["React.js", "Next.js", "Node.js", "TypeScript", "AI Integration"],
    role: "Full Stack Developer",
    problem:
      "Businesses needed a unified platform to deploy and manage AI agents without fragmented tooling.",
    solution:
      "Built full-stack features for AgentFlo—adaptive agents, workflow automation, and a responsive dashboard for monitoring operations.",
    year: 2025,
    keywords: ["AI", "SaaS", "automation", "AgentFlo"],
  },
  {
    slug: "chainagent",
    title: "ChainAgent — Blockchain Agent Workflows",
    description:
      "Platform for visually creating blockchain-integrated agent workflows with smart contracts, AI models, and data sources.",
    excerpt:
      "Frontend for ChainAgent—visual builder connecting smart contracts, AI models, and data pipelines.",
    category: "web",
    featured: true,
    thumbnail: "/images/projects/chainagent.jpg",
    images: [],
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Web3 UI"],
    role: "Frontend Developer",
    problem:
      "Users struggled to compose complex blockchain and AI workflows without a visual, approachable interface.",
    solution:
      "Delivered the ChainAgent frontend with drag-and-drop style workflows, clear node states, and production-ready responsive layouts.",
    year: 2024,
    keywords: ["blockchain", "AI", "frontend", "ChainAgent"],
  },
  {
    slug: "dappster-studio",
    title: "Dappster Studio — Official Website",
    description:
      "Official website for Dappster Studio built with React.js, Tailwind CSS, TypeScript, and Node.js—modern, responsive, full-stack.",
    excerpt:
      "Built Dappster Studio’s company site showcasing services with a modern stack and full-stack functionality.",
    category: "fullstack",
    featured: true,
    thumbnail: "/images/projects/dappster.jpg",
    images: [],
    stack: ["React.js", "Tailwind CSS", "TypeScript", "Node.js"],
    role: "Full Stack Developer",
    problem:
      "Dappster needed a professional web presence that reflected their brand and supported lead generation.",
    solution:
      "Designed and developed a responsive marketing site with performant UI, API-backed contact flows, and maintainable TypeScript codebase.",
    year: 2025,
    keywords: ["React", "Tailwind", "agency website"],
  },
  {
    slug: "baumeister-corp",
    title: "Baumeister Corp",
    description:
      "Corporate web project delivered while at Xeven Solutions—branded business website with modern UI and performance-focused build.",
    excerpt:
      "Professional corporate website for Baumeister Corp with responsive design and client-focused delivery.",
    category: "web",
    featured: true,
    thumbnail: "/images/projects/baumeister.jpg",
    images: [],
    stack: ["React.js", "Next.js", "Tailwind CSS", "WordPress"],
    role: "Website Developer",
    problem: "Client required a polished online presence aligned with corporate branding and mobile traffic.",
    solution:
      "Implemented responsive layouts, optimized assets, and structured content for clarity and conversion.",
    year: 2025,
    keywords: ["corporate", "business website"],
  },
  {
    slug: "barclay-training",
    title: "Barclay Training Institute — LMS",
    description:
      "Modern learning management system with course management, interactive tools, and progress tracking for students and educators.",
    excerpt:
      "LMS with course management, interactive learning tools, and progress tracking for streamlined education.",
    category: "fullstack",
    featured: false,
    thumbnail: "/images/projects/barclay.jpg",
    images: [],
    stack: ["WordPress", "LMS", "PHP", "Custom CSS"],
    role: "Full Stack / WordPress Developer",
    problem:
      "Training institute needed a centralized platform to deliver courses and track learner progress online.",
    solution:
      "Built Barclay Training with course catalogs, enrollment flows, and educator dashboards for managing content and students.",
    year: 2024,
    keywords: ["LMS", "e-learning", "education"],
  },
  {
    slug: "rapibyte",
    title: "RapiByte — Digital Products E-Commerce",
    description:
      "User-friendly e-commerce platform for selling digital products such as software license codes—focused on efficiency and market readiness.",
    excerpt:
      "E-commerce platform for digital goods like software licenses, built for speed and a smooth checkout experience.",
    category: "web",
    featured: false,
    thumbnail: "/images/projects/rapibyte.jpg",
    images: [],
    stack: ["React.js", "E-Commerce", "Payment Integration"],
    role: "Full Stack Developer",
    problem: "Digital product sellers needed a fast, simple storefront without physical inventory complexity.",
    solution:
      "Developed RapiByte with product listings, secure checkout, and automated delivery of license codes.",
    year: 2024,
    keywords: ["e-commerce", "digital products"],
  },
  {
    slug: "ecommerce-nextjs",
    title: "E-Commerce Platform — Next.js & Headless CMS",
    description:
      "Full-stack e-commerce platform with Next.js and a headless CMS, using TypeScript for maintainable code and seamless shopping.",
    excerpt:
      "Headless commerce build with Next.js, TypeScript, and CMS-driven product pages.",
    category: "fullstack",
    featured: false,
    thumbnail: "/images/projects/ecommerce-next.jpg",
    images: [],
    stack: ["Next.js", "TypeScript", "Headless CMS", "Tailwind CSS"],
    role: "Full Stack Developer",
    problem: "Client wanted a scalable store with editorial control via CMS and strong frontend performance.",
    solution:
      "Architected Next.js storefront with ISR, typed components, and CMS webhooks for product updates.",
    year: 2023,
    keywords: ["Next.js", "e-commerce", "headless CMS"],
  },
  {
    slug: "lets-talk",
    title: "Let'sTALK — Youth Mental Health Platform",
    description:
      "Youth mental health platform offering life skills resources, an upskilling toolkit, and an AR game for effective outreach.",
    excerpt:
      "Mental health platform with resources, upskilling tools, and AR engagement for young audiences.",
    category: "web",
    featured: false,
    thumbnail: "/images/projects/letstalk.jpg",
    images: [],
    stack: ["React.js", "Web Platform", "Content Architecture"],
    role: "Frontend Developer",
    problem:
      "Organization needed an engaging digital hub to reach youth with mental health and life skills content.",
    solution:
      "Created Let'sTALK with structured resource libraries, toolkit modules, and interactive AR game integration points.",
    year: 2023,
    keywords: ["mental health", "youth", "platform"],
  },
  {
    slug: "integrated-it-training",
    title: "Integrated IT Training — E-Learning",
    description:
      "E-learning platform offering comprehensive online courses and tutorials to help users build successful IT careers.",
    excerpt:
      "Online IT training portal with courses, tutorials, and career-focused learning paths.",
    category: "web",
    featured: false,
    thumbnail: "/images/projects/iit.jpg",
    images: [],
    stack: ["WordPress", "E-Learning", "Custom Development"],
    role: "WordPress Developer",
    problem: "Training provider needed a scalable site to sell and deliver IT courses online.",
    solution:
      "Developed integratedittraining.com with course catalogs, enrollment, and SEO-friendly content structure.",
    liveUrl: "https://integratedittraining.com",
    year: 2023,
    keywords: ["e-learning", "IT training", "WordPress"],
  },
  {
    slug: "buy7day",
    title: "Buy7Day — Children's Garments E-Commerce",
    description:
      "E-commerce website specializing in children's garments—seamless shopping focused on quality and convenience.",
    excerpt:
      "Pakistan-focused apparel e-commerce store for children's clothing with smooth UX.",
    category: "web",
    featured: false,
    thumbnail: "/images/projects/buy7day.jpg",
    images: [],
    stack: ["WordPress", "WooCommerce", "E-Commerce"],
    role: "WordPress Developer",
    problem: "Retailer needed an online channel to reach parents shopping for children's garments.",
    solution:
      "Built buy7day.pk with product categories, cart, checkout, and mobile-first responsive design.",
    liveUrl: "https://buy7day.pk",
    year: 2023,
    keywords: ["e-commerce", "fashion", "Pakistan"],
  },
  {
    slug: "digitech-outsourcing",
    title: "Digitech Outsourcing Solution",
    description:
      "Professional website for call center and outsourcing services—built from scratch on WordPress.",
    excerpt:
      "Corporate WordPress site for BPO and call center services with a professional brand presence.",
    category: "web",
    featured: false,
    thumbnail: "/images/projects/digitech.jpg",
    images: [],
    stack: ["WordPress", "Custom Theme", "CSS"],
    role: "WordPress Developer",
    problem: "Digitech needed a credible web presence to attract outsourcing and call center clients.",
    solution:
      "Delivered a custom WordPress site highlighting services, trust signals, and contact conversion paths.",
    liveUrl: "https://digitechoutsourcingsolution.com",
    year: 2024,
    keywords: ["WordPress", "BPO", "corporate"],
  },
  {
    slug: "experience-senegal",
    title: "Experience Senegal — Travel & Tours",
    description:
      "Travel website showcasing custom tour packages and seamless booking for clients exploring Senegal.",
    excerpt:
      "Tourism site with packages, itineraries, and booking flows for Senegal travel experiences.",
    category: "web",
    featured: false,
    thumbnail: "/images/projects/senegal.jpg",
    images: [],
    stack: ["WordPress", "Booking UX", "Custom CSS"],
    role: "WordPress Developer",
    problem: "Tour operator needed to present packages and capture inquiries online.",
    solution:
      "Built Experience Senegal with gallery-rich tour pages, package comparisons, and inquiry forms.",
    year: 2024,
    keywords: ["travel", "tourism", "WordPress"],
  },
  {
    slug: "citycarsgo",
    title: "citycarsgo.com",
    description:
      "Automotive website built with WordPress, custom code, and CSS—fully functional and client-approved.",
    excerpt:
      "WordPress automotive site with custom styling and client-approved launch.",
    category: "web",
    featured: false,
    thumbnail: "/images/projects/citycarsgo.jpg",
    images: [],
    stack: ["WordPress", "Custom CSS", "PHP"],
    role: "WordPress Developer",
    problem: "Automotive business needed a dependable web presence for listings and inquiries.",
    solution:
      "Launched citycarsgo.com with custom theme tweaks, responsive layouts, and lead capture forms.",
    liveUrl: "https://citycarsgo.com",
    year: 2024,
    keywords: ["WordPress", "automotive"],
  },
  {
    slug: "seunited",
    title: "SE United — Custom Social Platform",
    description:
      "Custom social platform using BuddyBoss and BuddyPress with posts, likes, shares, and comments.",
    excerpt:
      "Community platform with BuddyBoss—social feeds, engagement, and member interactions.",
    category: "fullstack",
    featured: false,
    thumbnail: "/images/projects/seunited.jpg",
    images: [],
    stack: ["WordPress", "BuddyBoss", "BuddyPress", "PHP"],
    role: "WordPress Developer",
    problem: "Client needed a private community with familiar social networking features.",
    solution:
      "Configured BuddyBoss/BuddyPress for profiles, activity feeds, reactions, and moderation-ready structure.",
    year: 2024,
    keywords: ["social network", "BuddyBoss", "community"],
  },
  {
    slug: "amber-driving-schools",
    title: "Amber Driving Schools",
    description:
      "Website for a Bahamian driving school—user-friendly design showcasing services to support business growth.",
    excerpt:
      "Driving school website for Bahamas client with service pages and contact flows.",
    category: "web",
    featured: false,
    thumbnail: "/images/projects/amber.jpg",
    images: [],
    stack: ["WordPress", "Responsive Design"],
    role: "WordPress Developer",
    problem: "Driving school needed local visibility and clear service information online.",
    solution:
      "Created Amber Driving Schools site with service breakdowns, pricing sections, and mobile-friendly UI.",
    year: 2023,
    keywords: ["WordPress", "local business"],
  },
  {
    slug: "francazona",
    title: "Francazona — Property Advisory",
    description:
      "Property advisory services website tailored to client needs—professional and user-friendly experience.",
    excerpt:
      "Real estate advisory site with service positioning and lead-focused layout.",
    category: "web",
    featured: false,
    thumbnail: "/images/projects/francazona.jpg",
    images: [],
    stack: ["WordPress", "Custom Design"],
    role: "WordPress Developer",
    problem: "Property advisor needed credibility and clear presentation of advisory services.",
    solution:
      "Built Francazona with service pages, testimonials sections, and contact funnels for inquiries.",
    year: 2023,
    keywords: ["real estate", "advisory", "WordPress"],
  },
  {
    slug: "find-a-contractor",
    title: "Find a Contractor",
    description:
      "Contractor discovery and listing platform connecting homeowners with service providers.",
    excerpt:
      "US-focused contractor listing site helping users find local service professionals.",
    category: "web",
    featured: false,
    thumbnail: "/images/projects/contractor.jpg",
    images: [],
    stack: ["WordPress", "Directory", "Custom Development"],
    role: "WordPress Developer",
    problem: "Platform needed to match users with contractors by location and trade.",
    solution:
      "Developed findacontractor.us with search, listings, and contractor profile pages.",
    liveUrl: "https://findacontractor.us",
    year: 2022,
    keywords: ["directory", "contractors", "WordPress"],
  },
  {
    slug: "assessment-portal-fyp",
    title: "Assessment Portal — Final Year Project",
    description:
      "University FYP assessment portal built with TypeScript—managing assessments, submissions, and academic workflows.",
    excerpt:
      "FYP: web-based assessment portal for academic evaluation and student submissions.",
    category: "fullstack",
    featured: false,
    thumbnail: "/images/projects/fyp.jpg",
    images: [],
    stack: ["TypeScript", "React", "Node.js", "MongoDB"],
    role: "Developer — FYP",
    problem: "Institution needed a digital system to replace manual assessment tracking.",
    solution:
      "Built Assessment Portal FYP with role-based access, assignment flows, and structured grading views.",
    githubUrl: "https://github.com/atisamakhtar/Assesment-Portal-FYP",
    year: 2024,
    keywords: ["FYP", "education", "portal"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: projects[index - 1] ?? null,
    next: projects[index + 1] ?? null,
  };
}
