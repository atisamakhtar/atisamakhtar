import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerNav } from "@/config/navigation";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-light bg-bg-light py-16">
      <div className="container-custom">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-xl font-bold text-text-dark"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-bold text-white">
                {siteConfig.firstName.charAt(0)}
              </span>
              {siteConfig.firstName}
            </Link>
            <p className="mt-4 max-w-sm text-text-dark-muted">
              {siteConfig.jobTitle} crafting bold, high-performance web experiences.
            </p>
            <div className="mt-6">
              <SocialIcons size={22} />
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-accent">
              Explore
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              {footerNav.explore.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-text-dark-muted hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-accent">
              Connect
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              {footerNav.connect.map((item) => (
                <li key={item.href}>
                  {"external" in item && item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-dark-muted hover:text-accent"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className="text-text-dark-muted hover:text-accent">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-light pt-8 text-sm text-text-dark-muted md:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Designed with passion · Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
