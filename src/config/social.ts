import { siteConfig } from "./site";

/** E.164 without + for WhatsApp wa.me links */
export const phoneDigits = "923204672882";

export const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/atisamakhtar/",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://pk.linkedin.com/in/atisam-akhtar",
    external: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: `https://wa.me/${phoneDigits}`,
    external: true,
  },
  {
    id: "email",
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
] as const;

export const phoneTel = `+${phoneDigits}`;
