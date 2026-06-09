"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { PortfolioProject } from "@/types/portfolio";
import { getCategoryLabel } from "@/data/portfolio-categories";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: PortfolioProject;
  onPreview: (project: PortfolioProject) => void;
  priority?: boolean;
}

export function ProjectCard({ project, onPreview, priority = false }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl bg-[#111]"
    >
      <button
        type="button"
        onClick={() => onPreview(project)}
        className="relative block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark"
        aria-label={`View preview of ${project.title}`}
      >
        <div className="relative h-[340px] w-full overflow-hidden sm:h-[380px] lg:h-[400px]">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top object-left transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            priority={priority}
          />

          {/* Default gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

          {/* Hover overlay — agency-style */}
          <div
            className={cn(
              "absolute inset-0 flex flex-col items-center justify-center gap-5 bg-black/75 px-6 text-center opacity-0 backdrop-blur-[2px] transition-all duration-500",
              "group-hover:opacity-100 group-focus-visible:opacity-100",
            )}
          >
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                {getCategoryLabel(project.category)}
              </p>
              <h3 className="text-lg font-bold text-white md:text-xl">{project.title}</h3>
              {project.description && (
                <p className="mx-auto max-w-xs text-sm leading-relaxed text-white/75 line-clamp-4">
                  {project.description}
                </p>
              )}
            </div>
            <span className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
              View Preview
            </span>
          </div>
        </div>
      </button>
    </motion.article>
  );
}
