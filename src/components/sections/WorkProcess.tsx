"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { workProcess } from "@/lib/content/process";

export function WorkProcess() {
  const stepCount = workProcess.length;

  return (
    <section
      id="process"
      className="relative overflow-hidden section-padding section-dark"
      aria-labelledby="process-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-bg-dark via-[#161b24] to-bg-dark"
        aria-hidden="true"
      />

      <div className="container-custom relative">
        <ScrollReveal>
          <header className="mb-12 md:mb-14">
            <div className="mb-6 flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/75">
                {stepCount} Simple Steps
              </p>
            </div>

            <div className="flex flex-col gap-6 md:flex-row md:items-end md:gap-10">
              <h2
                id="process-heading"
                className="shrink-0 font-display text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-white"
              >
                How I Work,
                <br />
                Idea to Launch
              </h2>
              <div
                className="hidden min-w-0 flex-1 pb-2 md:block"
                aria-hidden="true"
              >
                <span className="block h-px w-full bg-white/20" />
              </div>
            </div>
          </header>
        </ScrollReveal>

        <ol
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          role="list"
        >
          {workProcess.map((step, index) => (
            <li key={step.step} className="min-h-0">
              <ScrollReveal delay={index * 0.06} className="h-full">
                <article className="flex h-full min-h-[260px] flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-6 sm:min-h-[280px] sm:p-7">
                  <span className="font-display text-sm text-white/60">
                    {String(step.step).padStart(2, "0")}.
                  </span>
                  <h3 className="mt-8 flex-1 font-display text-lg font-bold leading-snug text-white sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-6 text-sm leading-relaxed text-white/65">
                    {step.description}
                  </p>
                </article>
              </ScrollReveal>
            </li>
          ))}
        </ol>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-6">
            <p className="text-sm leading-relaxed text-white/85 sm:text-base">
              Trusted by clients who{" "}
              <strong className="font-bold text-white">Choose Quality</strong>
            </p>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-white py-1.5 pl-1.5 pr-6 transition-opacity hover:opacity-90 sm:self-center"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                <ArrowRight className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span className="text-sm font-bold text-accent">Start a Project</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
