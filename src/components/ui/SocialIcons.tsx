import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { socialLinks } from "@/config/social";
import { cn } from "@/lib/utils";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
  email: Mail,
} as const;

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
  size?: number;
  variant?: "light" | "dark" | "onAccent";
}

export function SocialIcons({
  className,
  iconClassName,
  size = 20,
  variant = "light",
}: SocialIconsProps) {
  const color =
    variant === "dark"
      ? "text-white/80 hover:text-white"
      : variant === "onAccent"
        ? "text-white hover:opacity-80"
        : "text-text-dark-muted hover:text-accent";

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.id as keyof typeof iconMap];
        const isExternal = "external" in link && link.external;

        return (
          <a
            key={link.id}
            href={link.href}
            {...(isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            aria-label={link.label}
            className={cn(color, iconClassName)}
          >
            <Icon size={size} strokeWidth={1.75} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
