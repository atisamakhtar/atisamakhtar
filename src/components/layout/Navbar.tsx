"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { TopBar } from "./TopBar";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      setOnDark(pathname === "/");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setOnDark(entry?.isIntersecting ?? false),
      { threshold: 0.2 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <TopBar />
      <nav
        className={cn(
          "border-b transition-colors duration-300",
          onDark && pathname === "/"
            ? "border-white/10 bg-bg-dark"
            : "border-border-light bg-bg-light shadow-sm",
        )}
        aria-label="Main navigation"
      >
        <div className="container-custom flex h-[var(--nav-height)] items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-xl font-bold"
            aria-label={`${siteConfig.name} home`}
          >
            <span
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-lg font-bold text-white",
                "bg-accent",
              )}
            >
              {siteConfig.firstName.charAt(0)}
            </span>
            <span
              className={cn(
                onDark && pathname === "/" ? "text-white" : "text-text-dark",
              )}
            >
              {siteConfig.firstName}
            </span>
          </Link>

          <ul className="hidden items-center gap-6 lg:flex xl:gap-8" role="list">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-xs font-semibold uppercase tracking-[0.15em] transition-colors",
                    isActive(item.href)
                      ? "text-accent"
                      : onDark && pathname === "/"
                        ? "text-white/80 hover:text-white"
                        : "text-text-dark-muted hover:text-text-dark",
                  )}
                  prefetch={!item.href.startsWith("/#")}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={cn(
              "flex h-10 w-10 items-center justify-center lg:hidden",
              onDark && pathname === "/" ? "text-white" : "text-text-dark",
            )}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-[var(--header-total)] z-40 bg-bg-light lg:hidden"
          >
            <ul className="flex flex-col gap-1 p-6" role="list">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-lg px-4 py-3 text-lg font-semibold uppercase tracking-wider text-text-dark hover:bg-accent-muted hover:text-accent"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
