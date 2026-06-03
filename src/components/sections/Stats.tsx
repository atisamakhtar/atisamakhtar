"use client";

import { siteConfig } from "@/config/site";

/** Stats strip — always visible (no scroll animations) */
export function Stats() {
  return (
    <section className="border-y border-accent/30 bg-accent py-14" aria-label="Statistics">
      <div className="container-custom">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <p className="font-display text-4xl font-extrabold md:text-5xl">{stat.value}</p>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider opacity-95">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
