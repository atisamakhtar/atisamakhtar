"use client";

import { techStackLogos } from "@/lib/content/skills";

export function TechMarquee() {
  const items = [...techStackLogos, ...techStackLogos];

  return (
    <section
      className="overflow-hidden border-y border-border-light bg-white py-5"
      aria-label="Tech stack"
    >
      <div className="flex">
        <div className="marquee-track flex shrink-0 gap-10 whitespace-nowrap px-6">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="text-sm font-bold uppercase tracking-[0.2em] text-text-dark-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <div
          className="marquee-track-reverse flex shrink-0 gap-10 whitespace-nowrap px-6"
          aria-hidden="true"
        >
          {items.map((tech, i) => (
            <span
              key={`rev-${tech}-${i}`}
              className="text-sm font-bold uppercase tracking-[0.2em] text-accent/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
