"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { experience } from "@/lib/content/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-padding section-light"
      aria-labelledby="experience-heading"
    >
      <div className="container-custom">
        <h2 id="experience-heading" className="heading-accent">
          Experience
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-text-dark-muted">
          Professional journey from freelance WordPress to full stack roles at Dappster and
          Xeven Solutions.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {experience.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.05}>
              <article className="h-full rounded-2xl border border-border-light bg-white p-8 shadow-card">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  {item.type}
                </span>
                <h3 className="mt-2 text-xl font-bold text-text-dark">{item.role}</h3>
                <p className="font-semibold text-accent">{item.company}</p>
                <p className="mt-1 text-sm text-text-dark-muted">{item.period}</p>
                <p className="mt-4 text-sm leading-relaxed text-text-dark-muted">
                  {item.description}
                </p>
                <ul className="mt-4 space-y-1.5" role="list">
                  {item.highlights.map((h) => (
                    <li key={h} className="text-sm text-text-dark-muted">
                      <span className="mr-2 font-bold text-accent">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
