"use client";

import { motion } from "framer-motion";
import type { PortfolioCategory, PortfolioCategoryId } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface PortfolioTabsProps {
  categories: PortfolioCategory[];
  active: PortfolioCategoryId | "all";
  onChange: (id: PortfolioCategoryId | "all") => void;
  variant?: "dark" | "light";
}

export function PortfolioTabs({
  categories,
  active,
  onChange,
  variant = "dark",
}: PortfolioTabsProps) {
  const isDark = variant === "dark";

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
      role="tablist"
      aria-label="Filter portfolio by category"
    >
      {categories.map((cat) => {
        const selected = active === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(cat.id)}
            className={cn(
              "relative pb-2 text-sm font-semibold uppercase tracking-wider transition-colors md:text-base",
              isDark
                ? selected
                  ? "text-white"
                  : "text-white/50 hover:text-white/80"
                : selected
                  ? "text-text-dark"
                  : "text-text-dark-muted hover:text-text-dark",
            )}
          >
            {cat.label}
            {selected && (
              <motion.span
                layoutId="portfolio-tab-indicator"
                className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
