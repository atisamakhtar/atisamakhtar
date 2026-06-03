"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { values } from "@/lib/content/values";

export function Values() {
  return (
    <section className="section-padding section-dark" aria-labelledby="values-heading">
      <div className="container-custom">
        <h2 id="values-heading" className="text-center font-display text-3xl font-bold text-accent md:text-4xl">
          My Values
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-white/80">
          How I work with every client—transparency, craft, and results that last.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.05}>
              <article className="h-full rounded-2xl border border-white/15 bg-white/10 p-6 text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl text-white">
                  {item.icon}
                </span>
                <h3 className="mt-4 font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{item.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
