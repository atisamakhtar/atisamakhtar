"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  educationExperience,
  workExperience,
  type ExperienceItem,
} from "@/lib/content/experience";
import { cn } from "@/lib/utils";

function SectionDivider({
  label,
  count,
}: {
  label: string;
  count: number;
}) {
  return (
    <ScrollReveal className="mb-10 flex items-end gap-4 md:mb-12">
      <div className="shrink-0">
        <span className="text-sm font-bold uppercase tracking-[0.18em] text-text-dark md:text-[15px]">
          {label}
        </span>
        <span
          className="mt-1 block h-[3px] w-full rounded-full bg-accent"
          aria-hidden="true"
        />
      </div>
      <span className="mb-0.5 h-px flex-1 bg-border-light" aria-hidden="true" />
      <span className="mb-0.5 font-display text-sm font-semibold text-text-dark-muted">
        {String(count).padStart(2, "0")}
      </span>
    </ScrollReveal>
  );
}

function ExperienceRow({
  item,
  index,
  variant,
}: {
  item: ExperienceItem;
  index: number;
  variant: "work" | "education";
}) {
  const isWork = variant === "work";
  const indexLabel = `${String(index + 1).padStart(2, "0")} —`;

  return (
    <ScrollReveal delay={index * 0.06}>
      <article
        className={cn(
          "group relative grid gap-5 border-b border-border-light py-9 md:grid-cols-[minmax(9rem,18%)_1fr_minmax(8.5rem,16%)] md:gap-x-12 md:py-11",
          index === 0 && "border-t border-border-light",
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 -inset-x-5 rounded-xl bg-accent-muted/0 transition-colors duration-300 group-hover:bg-accent-muted/35 md:-inset-x-8"
          aria-hidden="true"
        />

        {/* Left — index & period */}
        <div className="relative z-[1] pt-1">
          <p className="font-display text-sm tracking-wide text-text-dark-muted">
            {indexLabel}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-text-dark-muted">
            <strong
              className={cn(
                "mb-2 block text-xs font-bold uppercase tracking-[0.14em]",
                isWork ? "text-accent" : "text-accent-soft",
              )}
            >
              {item.statusLabel}
            </strong>
            <span className="text-[15px] text-text-dark">{item.period}</span>
          </p>
        </div>

        {/* Middle — company, role, copy */}
        <div className="relative z-[1] min-w-0">
          <h3 className="font-display text-[clamp(1.35rem,2.5vw,2rem)] font-bold leading-tight tracking-tight text-text-dark">
            {isWork ? item.company : item.role}
          </h3>
          <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-text-dark-muted">
            {isWork ? item.role : item.company}
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-text-dark-muted">
            {item.description}
          </p>
          <ul className="mt-5 flex flex-col gap-1.5" role="list">
            {item.highlights.map((highlight) => (
              <li
                key={highlight}
                className="relative pl-3.5 text-[13px] leading-relaxed text-text-dark-muted before:absolute before:left-0 before:top-[0.6rem] before:h-px before:w-1 before:bg-text-dark-muted/70"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — tags & live badge */}
        <div className="relative z-[1] flex flex-wrap items-start gap-2.5 pt-1 md:flex-col md:items-end">
          {item.isCurrent && (
            <span className="inline-flex items-center gap-2 rounded-md border border-accent/30 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-accent">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" aria-hidden="true" />
              Live role
            </span>
          )}
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-accent px-3 py-1.5 text-sm font-semibold tracking-wide text-white shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </ScrollReveal>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="section-padding section-light"
      aria-labelledby="experience-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
        <header className="grid items-end gap-8 border-b border-border-light pb-12 md:grid-cols-2 md:gap-10 md:pb-14">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-dark-muted">
              Selected record
            </p>
            <h2
              id="experience-heading"
              className="mt-4 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold leading-[1.02] tracking-tight text-text-dark"
            >
              Work &amp;
              <br />
              <span className="text-accent">Education</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-text-dark-muted md:text-[17px] md:leading-[1.75] md:justify-self-end">
            Four years of building across agencies, startups, and freelance—from WordPress
            to full-stack TypeScript to AI-adjacent products.
          </p>
        </header>
        </ScrollReveal>

        {/* Work */}
        <div className="mt-14 md:mt-20">
          <SectionDivider label="Work history" count={workExperience.length} />
          {workExperience.map((item, index) => (
            <ExperienceRow key={item.id} item={item} index={index} variant="work" />
          ))}
        </div>

        {/* Education */}
        <div className="mt-16 md:mt-20">
          <SectionDivider label="Education" count={educationExperience.length} />
          {educationExperience.map((item, index) => (
            <ExperienceRow key={item.id} item={item} index={index} variant="education" />
          ))}
        </div>

      </div>
    </section>
  );
}
