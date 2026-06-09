import { blogEnabled } from "./features";
import { siteConfig } from "./site";

const allMainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const mainNav = allMainNav.filter(
  (item) => blogEnabled || item.href !== "/blog",
);

export const footerNav = {
  explore: [
    { label: "Portfolio", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/#about" },
  ].filter((item) => blogEnabled || item.href !== "/blog"),
  connect: [
    { label: "Contact", href: "/contact" },
    { label: "GitHub", href: siteConfig.social.github, external: true },
    { label: "LinkedIn", href: siteConfig.social.linkedin, external: true },
    { label: "WhatsApp", href: siteConfig.social.whatsapp, external: true },
  ],
} as const;
