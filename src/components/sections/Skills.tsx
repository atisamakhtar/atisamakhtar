"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { skillCategories } from "@/lib/content/skills";

export function Skills() {
  return (
    <section id="skills" className="section-padding section-light" aria-labelledby="skills-heading">
      <div className="container-custom">
        <h2 id="skills-heading" className="heading-accent">
          Skills
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-text-dark-muted">
          MERN stack, Next.js, TypeScript, WordPress, and modern frontend tooling.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, catIndex) => (
            <FadeIn key={category.name} delay={catIndex * 0.05}>
              <div className="h-full rounded-2xl border border-border-light bg-white p-6 shadow-card">
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent">
                  {category.name}
                </h3>
                <ul className="mt-4 space-y-4" role="list">
                  {category.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex justify-between text-sm text-text-dark">
                        <span>{skill.name}</span>
                        <span className="font-semibold text-accent">{skill.level}%</span>
                      </div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-accent"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
