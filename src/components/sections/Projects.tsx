"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { getFeaturedProjects } from "@/lib/content/projects";
import { projectImages } from "@/config/images";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop&q=85";

function getImage(slug: string): string {
  return projectImages[slug] ?? FALLBACK_IMAGE;
}

export function Projects() {
  const projects = getFeaturedProjects();

  return (
    <section
      id="portfolio"
      className="section-padding section-dark"
      aria-labelledby="projects-heading"
    >
      <div className="container-custom">
        <h2 id="projects-heading" className="text-center font-display text-3xl font-bold text-accent md:text-4xl">
          Portfolio
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-white/80">
          Real projects from my LinkedIn profile—AI platforms, e-commerce, LMS, and MERN apps.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.05}>
              <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={getImage(project.slug)}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-white">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-white/75">{project.excerpt}</p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-accent hover:gap-2"
                  >
                    View project
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/projects" className="btn-primary">
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
