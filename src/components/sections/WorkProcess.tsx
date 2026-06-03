"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { workProcess } from "@/lib/content/process";

export function WorkProcess() {
  return (
    <section className="section-padding section-light" aria-labelledby="process-heading">
      <div className="container-custom">
        <h2 id="process-heading" className="heading-accent">
          How I Work
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-text-dark-muted">
          A clear process from first call to launch.
        </p>

        <ol className="mt-14 space-y-6" role="list">
          {workProcess.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.04}>
              <li className="flex gap-6 rounded-2xl border border-border-light bg-white p-6 shadow-card">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-text-dark">{step.title}</h3>
                  <p className="mt-2 text-text-dark-muted">{step.description}</p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
