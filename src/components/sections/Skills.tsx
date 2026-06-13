"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/config/site";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  SKILLS_SHOWCASE_PER_PAGE,
  skillShowcaseItems,
} from "@/lib/content/skills";
import { cn } from "@/lib/utils";

const AUTO_SCROLL_MS = 5000;

export function Skills() {
  const reducedMotion = useReducedMotion();
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pageRef = useRef(page);

  const totalPages = Math.ceil(skillShowcaseItems.length / SKILLS_SHOWCASE_PER_PAGE);

  const visibleSkills = useMemo(
    () =>
      skillShowcaseItems.slice(
        page * SKILLS_SHOWCASE_PER_PAGE,
        page * SKILLS_SHOWCASE_PER_PAGE + SKILLS_SHOWCASE_PER_PAGE,
      ),
    [page],
  );

  const goToPage = useCallback(
    (next: number) => {
      setPage(((next % totalPages) + totalPages) % totalPages);
    },
    [totalPages],
  );

  useEffect(() => {
    pageRef.current = page;
  }, [page]);

  useEffect(() => {
    if (reducedMotion || totalPages <= 1 || isPaused) return;

    const timer = window.setInterval(() => {
      goToPage(pageRef.current + 1);
    }, AUTO_SCROLL_MS);

    return () => window.clearInterval(timer);
  }, [goToPage, isPaused, reducedMotion, totalPages]);

  return (
    <section
      id="skills"
      className="section-padding section-dark"
      aria-labelledby="skills-heading"
    >
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center">
            <h2
              id="skills-heading"
              className="font-display text-3xl font-bold text-white md:text-4xl"
            >
              Skills
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
              I&apos;m {siteConfig.name} — a professional {siteConfig.jobTitle} with{" "}
              {siteConfig.stats?.find((s) => s.label.includes("Experience"))?.value ?? "1.5+"}{" "}
              years of experience building modern web applications, WordPress sites, and
              production-ready MERN stack products for clients worldwide.
            </p>
          </div>
        </ScrollReveal>

        <div
          className="mt-14 flex items-stretch gap-5 md:mt-16 md:gap-8 lg:gap-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setIsPaused(false);
            }
          }}
        >
          <div className="min-w-0 flex-1">
            <div
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5"
              role="list"
              aria-live="polite"
              aria-label={`Skills page ${page + 1} of ${totalPages}`}
            >
              {visibleSkills.map((skill, index) => (
                <ScrollReveal key={`${page}-${skill.id}`} delay={index * 0.05}>
                  <article
                    role="listitem"
                    className="group flex aspect-square flex-col items-center justify-between rounded-xl border border-border-light bg-white p-4 transition-transform duration-300 hover:-translate-y-1 sm:p-5"
                  >
                    <div className="flex flex-1 items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={skill.icon}
                        alt={`${skill.label} logo`}
                        width={56}
                        height={56}
                        className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <p className="mt-3 text-center text-[11px] font-bold uppercase tracking-wider text-text-dark sm:text-xs">
                      {skill.label}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {totalPages > 1 && (
            <nav
              className="hidden shrink-0 flex-col items-center justify-center gap-3 sm:flex"
              aria-label="Skills pages"
            >
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToPage(i)}
                  aria-label={`Show skills page ${i + 1}`}
                  aria-current={page === i ? "true" : undefined}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    page === i
                      ? "h-10 w-[3px] bg-accent"
                      : "h-8 w-px bg-white hover:bg-white/80",
                  )}
                />
              ))}
            </nav>
          )}
        </div>

        {totalPages > 1 && (
          <nav
            className="mt-8 flex justify-center gap-2 sm:hidden"
            aria-label="Skills pages"
          >
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToPage(i)}
                aria-label={`Show skills page ${i + 1}`}
                aria-current={page === i ? "true" : undefined}
                className={cn(
                  "rounded-full transition-all duration-300",
                  page === i ? "h-2 w-8 bg-accent" : "h-2 w-2 bg-white",
                )}
              />
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
