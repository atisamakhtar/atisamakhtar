"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import Link from "next/link";
import { portfolioProjects } from "@/data/projects";
import { getPortfolioCategories } from "@/data/portfolio-categories";
import type { PortfolioCategoryId, PortfolioProject } from "@/types/portfolio";
import { PortfolioTabs } from "./PortfolioTabs";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

const PortfolioModal = dynamic(
  () => import("./PortfolioModal").then((m) => m.PortfolioModal),
  { ssr: false },
);

interface PortfolioShowcaseProps {
  id?: string;
  variant?: "dark" | "light";
  featuredOnly?: boolean;
  showViewAllLink?: boolean;
  className?: string;
  heading?: string;
  subheading?: string;
}

export function PortfolioShowcase({
  id,
  variant = "dark",
  featuredOnly = false,
  showViewAllLink = false,
  className,
  heading = "Portfolio",
  subheading = "Selected work across WordPress, Next.js, React, full stack, and e-commerce builds.",
}: PortfolioShowcaseProps) {
  const source = featuredOnly
    ? portfolioProjects.filter((p) => p.featured)
    : portfolioProjects;

  const categories = useMemo(
    () => getPortfolioCategories(source.map((p) => p.category)),
    [source],
  );

  const [activeCategory, setActiveCategory] = useState<PortfolioCategoryId | "all">("all");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = useMemo(() => {
    if (activeCategory === "all") return source;
    return source.filter((p) => p.category === activeCategory);
  }, [activeCategory, source]);

  const openPreview = (project: PortfolioProject) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const isDark = variant === "dark";

  return (
    <>
      <section
        id={id}
        className={cn(
          featuredOnly ? "section-padding section-dark" : "",
          className,
        )}
        aria-labelledby="portfolio-showcase-heading"
      >
        <div className="container-custom">
          <div className="text-center">
            <h2
              id="portfolio-showcase-heading"
              className={cn(
                "font-display text-3xl font-bold md:text-4xl",
                isDark ? "text-accent" : "text-accent",
              )}
            >
              {heading}
            </h2>
            {subheading && (
              <p
                className={cn(
                  "mx-auto mt-4 max-w-2xl",
                  isDark ? "text-white/75" : "text-text-dark-muted",
                )}
              >
                {subheading}
              </p>
            )}
          </div>

          {!featuredOnly && (
            <div className="mt-10">
              <PortfolioTabs
                categories={categories}
                active={activeCategory}
                onChange={setActiveCategory}
                variant={variant}
              />
            </div>
          )}

          <div
            className={cn(
              "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
              featuredOnly ? "mt-14" : "mt-12",
            )}
          >
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onPreview={openPreview}
                priority={index < 3}
              />
            ))}
          </div>

          {showViewAllLink && (
            <div className="mt-12 text-center">
              <Link href="/projects" className="btn-primary">
                View all projects
              </Link>
            </div>
          )}
        </div>
      </section>

      <PortfolioModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  );
}
