import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { phoneTel } from "@/config/social";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function TopBar() {
  return (
    <div className="bg-accent text-white">
      <div className="container-custom flex h-[var(--topbar-height)] flex-nowrap items-center justify-between gap-3 text-xs sm:gap-4 sm:text-sm">
        {/* Mobile — phone number only */}
        <a
          href={`tel:${phoneTel}`}
          className="flex min-w-0 items-center gap-1.5 hover:opacity-90 sm:hidden"
        >
          <Phone size={14} className="shrink-0" aria-hidden="true" />
          <span className="truncate text-[11px] font-medium">{siteConfig.phone}</span>
        </a>

        {/* Tablet+ — email + phone */}
        <div className="hidden min-w-0 items-center gap-4 sm:flex md:gap-5">
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
            <span className="whitespace-nowrap">{siteConfig.phone}</span>
          </a>
        </div>

        <SocialIcons
          variant="onAccent"
          size={16}
          className="shrink-0 gap-2.5 sm:gap-4"
          iconClassName="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/15 sm:h-auto sm:w-auto sm:rounded-none sm:hover:bg-transparent"
        />
      </div>
    </div>
  );
}
