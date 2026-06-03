import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { phoneTel } from "@/config/social";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function TopBar() {
  return (
    <div className="bg-accent text-white">
      <div className="container-custom flex h-[var(--topbar-height)] items-center justify-between gap-4 text-xs sm:text-sm">
        <div className="flex min-w-0 flex-wrap items-center gap-3 sm:gap-5">
          <a
            href={`mailto:${siteConfig.email}`}
            className="truncate hover:opacity-90"
          >
            {siteConfig.email}
          </a>
          <a
            href={`tel:${phoneTel}`}
            className="flex shrink-0 items-center gap-1.5 hover:opacity-90"
          >
            <Phone size={14} aria-hidden="true" />
            <span>{siteConfig.phone}</span>
          </a>
        </div>
        <SocialIcons variant="onAccent" size={18} />
      </div>
    </div>
  );
}
