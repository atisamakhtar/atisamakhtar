# Portfolio Master Plan — Atisam Akhtar

> **Project:** Dark Luxury Tech personal portfolio  
> **Owner:** Atisam Akhtar — Full Stack Developer  
> **Signature accent:** Electric Violet `#7C3AED`  
> **Last updated:** June 3, 2026

---

## 1. Scalable Directory Structure (Annotated)

```
portfolio/                              # Repository root (atisamakhtar)
├── PLAN.md                             # This document — architecture source of truth
├── SETUP.md                            # Post-build install & customization guide
├── public/
│   ├── fonts/                          # Self-hosted WOFF2 variable fonts (Clash, Satoshi, JetBrains)
│   ├── images/
│   │   ├── projects/                   # Project thumbnails & gallery assets
│   │   ├── og/                         # Static OG fallbacks; dynamic via /api/og
│   │   └── avatar/                     # Profile photos for About & schema
│   ├── models/                         # .glb/.gltf for ModelViewer (optional hero asset)
│   ├── icons/                          # SVG sprite sheet (sprite.svg + symbols)
│   └── robots.txt                      # Crawl rules; sitemap URL reference
├── src/
│   ├── app/                            # Next.js 15 App Router — routes & layouts
│   │   ├── layout.tsx                  # Root: fonts, providers, JsonLd, Lenis, cursor
│   │   ├── page.tsx                    # Home — composes all landing sections
│   │   ├── about/page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx                # Filterable grid
│   │   │   └── [slug]/page.tsx         # generateStaticParams + CreativeWork schema
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx         # MDX via compileMDX
│   │   ├── contact/page.tsx
│   │   ├── api/
│   │   │   ├── contact/route.ts        # POST — validation, rate limit, honeypot
│   │   │   └── og/route.tsx            # @vercel/og ImageResponse per page
│   │   ├── not-found.tsx
│   │   ├── error.tsx                   # Client boundary with retry
│   │   ├── loading.tsx                 # Route-level skeleton
│   │   └── sitemap.ts                  # Dynamic sitemap from content lib
│   ├── components/
│   │   ├── layout/                     # Shell: Navbar, Footer, PageTransition
│   │   ├── ui/                         # Primitives: Button, Magnetic, Cursor, Loader
│   │   ├── sections/                   # Page blocks: Hero, Skills, Projects, etc.
│   │   ├── three/                      # R3F scenes — dynamic import, no SSR
│   │   ├── seo/                        # JsonLd, MetaTags wrappers
│   │   └── providers/                  # LenisProvider, ThemeProvider, GSAPProvider
│   ├── hooks/                          # useGSAP, useScrollTrigger, useReducedMotion, etc.
│   ├── lib/
│   │   ├── gsap/                       # Plugin registration + reusable timelines
│   │   ├── three/                      # R3F helpers, materials, dispose utils
│   │   ├── seo/                        # metadata factory + schema builders
│   │   ├── content/                    # Typed static content (projects, blog, skills)
│   │   ├── mdx/                        # MDX compile utilities + Shiki highlighter
│   │   ├── security/                   # sanitize, rateLimit, csrf token helpers
│   │   └── utils.ts                    # cn(), formatDate, slugify
│   ├── config/
│   │   ├── site.ts                     # name, url, email, socials, default SEO
│   │   └── navigation.ts               # Nav links + footer columns
│   ├── styles/
│   │   ├── globals.css                 # Tailwind directives + base resets
│   │   ├── animations.css              # Keyframes: shimmer, grain, glow, ripple
│   │   └── tokens.css                  # Design tokens (CSS custom properties)
│   └── types/                          # project.ts, blog.ts, seo.ts
├── next.config.ts                      # Security headers, images, bundle analyzer
├── tailwind.config.ts                  # Maps tokens → Tailwind theme extension
├── tsconfig.json
├── middleware.ts                       # CSP nonce, rate limit, security headers
├── .env.example                        # Documented placeholders
├── .env.local                          # Gitignored — secrets (gitignored via .gitignore)
├── package.json                        # Exact version pins
├── eslint.config.mjs
├── .prettierrc
├── .husky/pre-commit                   # lint-staged
└── dependabot.yml                      # Automated dependency PRs
```

**Scaling notes:**
- New projects/blog posts → add entries in `lib/content/` only; sitemap and static params auto-derive.
- New sections → `components/sections/` + import in relevant `page.tsx`.
- Heavy 3D/GSAP → always `dynamic(() => import(...), { ssr: false })` from page or section parent.

---

## 2. Page Inventory, Routes & SEO Metadata Plan

| Route | Purpose | Title (template) | Description (150–160 chars) | Keywords focus |
|-------|---------|------------------|----------------------------|----------------|
| `/` | Landing: hero, featured work, skills, CTA | Home \| Atisam Akhtar — Full Stack Developer | Atisam Akhtar builds fast, secure full stack apps with React, Next.js & Node. View projects, skills & hire for your next product. | full stack developer, Next.js, React, portfolio |
| `/about` | Bio, values, career timeline, FAQ | About \| Atisam Akhtar — Full Stack Developer | Learn how Atisam Akhtar designs scalable web products—from architecture to animation—with a focus on performance, UX & clean code. | about, experience, hire developer |
| `/projects` | Filterable project gallery | Projects \| Atisam Akhtar — Full Stack Developer | Explore case studies: SaaS dashboards, e-commerce, APIs & 3D web experiences. Filter by stack and see live demos & repos. | projects, case studies, web apps |
| `/projects/[slug]` | Case study detail | {Project} \| Atisam Akhtar — Full Stack Developer | {Dynamic: problem + outcome in 155 chars from project meta} | project name, tech stack |
| `/blog` | Article index + featured | Blog \| Atisam Akhtar — Full Stack Developer | Articles on Next.js, performance, 3D on the web, and full stack patterns—written by Atisam Akhtar for developers & teams. | blog, tutorials, web dev |
| `/blog/[slug]` | MDX article | {Post} \| Atisam Akhtar — Full Stack Developer | {Excerpt ≤160 chars} | article topic keywords |
| `/contact` | Form + availability | Contact \| Atisam Akhtar — Full Stack Developer | Get in touch for freelance, contract, or full-time roles. Send a message—Atisam Akhtar typically replies within 48 hours. | contact, hire, freelance |

**Global metadata rules:**
- `metadataBase`: `https://atisamakhtar.com` (configurable via `NEXT_PUBLIC_SITE_URL`)
- Title template: `%s | Atisam Akhtar — Full Stack Developer`
- Canonical: absolute URL per route via `alternates.canonical`
- OG image: `/api/og?title=...&type=...` (1200×630)
- `robots`: index,follow on public pages; noindex on `/api/*`
- `hreflang`: `en` default; `x-default` same URL (single-locale v1; structure ready for `en-PK` later)

---

## 3. Component Tree Overview

```
RootLayout
├── LenisProvider
├── ThemeProvider (dark default)
├── CursorFollower (client, reduced-motion off)
├── Loader / Preloader (first visit, sessionStorage flag)
├── Navbar
│   ├── Logo + AnimatedText
│   ├── NavLinks (Framer layoutId active pill)
│   └── MobileMenu (GSAP overlay timeline)
├── PageTransition (GSAP curtain + AnimatePresence)
├── {children} — page content
└── Footer

HomePage (/)
├── Hero
│   ├── ParticleField (R3F, dynamic)
│   ├── FloatingGeometry (R3F, dynamic)
│   ├── AnimatedText + RoleRotator
│   └── MagneticButton CTAs
├── TechMarquee
├── About (snapshot)
├── Projects (featured ×3, vanilla-tilt)
├── Skills (SkillSphere R3F OR SkillBars GSAP)
├── Experience (horizontal ScrollTrigger pin)
├── Testimonials (flip carousel)
├── CTABanner
└── Contact (inline teaser)

AboutPage
├── AboutHero + ModelViewer
├── StorySection
├── ValuesGrid
├── SkillsDeepDive
├── VerticalTimeline
└── HireCTA + FAQ accordion

ProjectsPage
├── ProjectsHero
├── FilterBar (Framer layout)
└── ProjectCard grid → link to [slug]

ProjectDetailPage
├── ParallaxHero
├── Overview / Gallery / TechDeepDive
├── DemoCTA
└── PrevNextNav

BlogPage / BlogPostPage
├── FeaturedPost / PostGrid
└── MDXContent + TOC + ReadingProgress

ContactPage
├── DistortedPlane (R3F)
├── ContactForm (RHF + Zod + GSAP fields)
└── SocialLinks + AvailabilityBadge
```

---

## 4. Animation Strategy (Library Separation)

| Concern | Library | Where | Reduced motion |
|---------|---------|-------|------------------|
| Hero orchestration, text splits, counters, horizontal pin, parallax | **GSAP 3** + ScrollTrigger + `@gsap/react` | `lib/gsap/*`, `hooks/useGSAP.ts` | `gsap.set()` instant state; kill ScrollTriggers |
| Route curtain wipe, menu morph | **GSAP** timelines | `PageTransition.tsx`, mobile menu | Crossfade only, no wipe |
| Particle field, geometry, skill sphere, contact plane | **R3F** + drei + `useFrame` | `components/three/*` | Static gradient fallback `<div>` |
| Grid filter, hover tap, whileInView cards | **Framer Motion** | `ui/*`, `sections/*` | `transition: { duration: 0 }` |
| Shimmer, grain, ripple, gradient borders | **CSS** | `animations.css`, `tokens.css` | `animation: none` via media query |
| Smooth scroll + GSAP sync | **Lenis** | `LenisProvider` — `lenis.on('scroll', ScrollTrigger.update)` | Native scroll, Lenis destroyed |

**Registration:** All GSAP plugins in `lib/gsap/config.ts` once at client init.  
**Split text:** Custom char-split utility (SplitText is Club GreenSock; use lightweight `split-type` or manual span wrap).

---

## 5. Color Palette & Design Token Plan

**Aesthetic:** Dark Luxury Tech — near-black surfaces, electric violet accent, frosted glass, film grain.

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-primary` | `#0A0A0B` | Page background |
| `--color-bg-secondary` | `#111113` | Alternating sections |
| `--color-surface` | `rgba(255,255,255,0.04)` | Glass cards |
| `--color-accent` | `#7C3AED` | CTAs, links, glow |
| `--color-accent-hover` | `#8B5CF6` | Hover states |
| `--color-accent-muted` | `rgba(124,58,237,0.25)` | Borders, badges |
| `--color-text-primary` | `#FAFAFA` | Headlines |
| `--color-text-secondary` | `#A1A1AA` | Body |
| `--color-text-muted` | `#71717A` | Captions |
| `--radius-sm/md/lg/full` | 4px / 8px / 16px / 9999px | Components |
| `--shadow-glow` | `0 0 40px rgba(124,58,237,0.35)` | Accent elements |
| `--shadow-card` | `0 8px 32px rgba(0,0,0,0.4)` | Cards |
| `--shadow-deep` | `0 24px 64px rgba(0,0,0,0.6)` | Modals |
| `--transition-fast/base/slow` | 150ms / 300ms / 500ms | UI |
| `--font-display` | Clash Display, fallback system-ui | H1–H3 |
| `--font-body` | Satoshi, fallback sans | Paragraphs |
| `--font-mono` | JetBrains Mono | Code, labels |

Tailwind extends these via `theme.extend.colors` referencing CSS variables.

---

## 6. Schema Markup Plan

| Page | Schemas (JSON-LD) | Notes |
|------|-------------------|-------|
| `/` | `Person`, `WebSite`, `WebPage` | Person: knowsAbout from skills; sameAs socials |
| `/about` | `WebPage`, `BreadcrumbList`, `FAQPage` | FAQ: hire timeline, remote, stack |
| `/projects` | `WebPage`, `BreadcrumbList`, `ItemList` | ListItem → project URLs |
| `/projects/[slug]` | `WebPage`, `BreadcrumbList`, `CreativeWork` | or SoftwareApplication if app |
| `/blog` | `WebPage`, `BreadcrumbList`, `Blog` | Blog listing |
| `/blog/[slug]` | `WebPage`, `BreadcrumbList`, `Article` | author Person @id |
| `/contact` | `WebPage`, `BreadcrumbList` | Optional ContactPage |

Injected via `<JsonLd data={...} />` in each page or layout segment.

---

## 7. Security Checklist

- [x] CSP with per-request nonce in `middleware.ts`; script-src `'self' 'nonce-{nonce}'`
- [x] HSTS, X-Content-Type-Options, X-Frame-Options DENY, Referrer-Policy, Permissions-Policy
- [x] COOP, CORP, COEP headers (COEP relaxed if third-party fonts required)
- [x] `poweredByHeader: false`, no prod source maps
- [x] `.env.local` gitignored; `.env.example` documented
- [x] Contact API: Zod server validation, honeypot, rate limit (in-memory + Upstash-ready)
- [x] CSRF: double-submit cookie or signed token in server action
- [x] Input sanitization (`isomorphic-dompurify` or validator strip)
- [x] Turnstile/reCAPTCHA hook (env-gated; dev bypass)
- [x] Generic API errors; server-side logging only
- [x] `npm audit` in CI; Dependabot config
- [x] Image `remotePatterns` whitelist in `next.config.ts`

---

## 8. Performance Optimization Strategy

1. **Images:** `next/image` — WebP/AVIF, `sizes`, blur placeholders, explicit dimensions.
2. **Fonts:** Self-hosted WOFF2, `font-display: swap`, preload in root layout.
3. **Code splitting:** Dynamic import all `components/three/*`, heavy GSAP sections, Preloader.
4. **R3F:** Lower particle count on mobile (`<768px` → 1500 vs 5000 points).
5. **Lenis + GSAP:** Single RAF via `gsap.ticker.add(lenis.raf)`.
6. **Caching:** Static generation for projects/blog slugs; `revalidate: 3600` where needed.
7. **Bundle:** `@next/bundle-analyzer` behind `ANALYZE=true`.
8. **CLS:** Reserved aspect-ratio boxes for images, skeletons for dynamic routes.
9. **Targets:** LCP < 2.5s (priority hero text, defer 3D), CLS < 0.1, INP < 200ms.

---

## 9. Tech Stack & Version Justification

| Package | Version | Why |
|---------|---------|-----|
| **next** | 15.3.x | App Router stable, improved caching, React 19 support |
| **react** / **react-dom** | 19.x | Concurrent features, aligns with Next 15 |
| **typescript** | 5.7.x | Strict typing across content + schemas |
| **tailwindcss** | 3.4.x | Utility + token mapping; v4 optional later |
| **gsap** | 3.12.x | Industry-standard timeline + ScrollTrigger |
| **@gsap/react** | 2.1.x | `useGSAP` context cleanup |
| **three** | 0.172.x | WebGL core for R3F |
| **@react-three/fiber** | 8.17.x | React renderer for Three |
| **@react-three/drei** | 9.117.x | Helpers: Points, Float, MeshDistortMaterial |
| **lenis** | 1.1.x | Modern smooth scroll (replaces deprecated studio-freight) |
| **framer-motion** | 11.15.x | Layout animations, presence |
| **react-hook-form** | 7.54.x | Performant forms |
| **zod** | 3.24.x | Shared client/server schemas |
| **next-mdx-remote** | 5.0.x | Server MDX compile for blog |
| **shiki** | 1.24.x | Accurate syntax highlighting |
| **@vercel/og** | 0.6.x | Edge OG image generation |
| **lucide-react** | 0.469.x | Tree-shakeable icons |
| **vanilla-tilt** | 1.8.x | Lightweight 3D card tilt |
| **split-type** | 0.3.x | Char/line split for GSAP (OSS) |
| **@upstash/ratelimit** | 2.x | Optional Redis rate limit (env-gated) |
| **isomorphic-dompurify** | 2.x | Sanitize user input server-side |
| **eslint** / **prettier** / **husky** | latest | Quality gate on commit |

**Deployment:** Vercel — Edge Middleware for CSP nonce + OG routes on Edge runtime.

---

## Implementation Phases (Execution Order)

| Phase | Deliverable | Status |
|-------|-------------|--------|
| 0 | PLAN.md | ✅ Complete |
| 1 | Directory scaffold + Next.js init | Next |
| 2 | tokens.css, globals, Tailwind theme | Next |
| 3 | GSAP/Lenis/R3F/Framer wiring + hooks | Next |
| 4 | All pages + sections | Next |
| 5 | SEO metadata + schemas + sitemap | Next |
| 6 | middleware security + contact API | Next |
| 7 | Performance passes + SETUP.md | Next |

---

*End of PLAN.md — proceed to Phase 1 scaffolding.*
