"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/content/projects";
import { images, projectImages } from "@/config/images";
import type { ProjectCategory } from "@/types/project";
import { cn } from "@/lib/utils";

const categories: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Web & WordPress", value: "web" },
];

function getImage(slug: string): string {
  return (
    projectImages[slug] ??
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop&q=85"
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="section-padding pt-32">
      <div className="container-custom">
        <div className="relative mb-12 overflow-hidden rounded-2xl">
          <div className="relative aspect-[21/6] min-h-[180px]">
            <Image
              src={images.projectsBanner}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
              <h1 className="text-4xl font-bold md:text-6xl">
                <span className="text-gradient">Projects</span>
              </h1>
              <p className="mt-3 max-w-lg text-text-secondary">
                Real projects from my LinkedIn portfolio—AI platforms, e-commerce, LMS, WordPress, and MERN stack apps.
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              role="tab"
              aria-selected={filter === cat.value}
              onClick={() => setFilter(cat.value)}
              className={cn(
                "rounded-full px-4 py-2 font-mono text-sm transition-colors",
                filter === cat.value
                  ? "bg-accent text-white"
                  : "bg-surface text-text-secondary hover:text-text-primary",
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="group gradient-border overflow-hidden rounded-xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={getImage(project.slug)}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 to-transparent" />
                </div>
                <div className="glass-card p-6">
                  <span className="font-mono text-xs uppercase text-accent">
                    {project.category}
                  </span>
                  <h2 className="mt-2 text-xl font-semibold">{project.title}</h2>
                  <p className="mt-2 text-sm text-text-secondary line-clamp-2">
                    {project.excerpt}
                  </p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-4 inline-flex text-sm font-medium text-accent hover:underline"
                  >
                    View case study →
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
