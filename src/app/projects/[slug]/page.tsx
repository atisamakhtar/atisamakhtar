import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectImages } from "@/config/images";
import {
  getProjectBySlug,
  getAdjacentProjects,
  projects,
} from "@/lib/content/projects";
import { createMetadata } from "@/lib/seo/metadata";
import {
  buildBreadcrumbSchema,
  buildCreativeWorkSchema,
  buildWebPageSchema,
  combineSchemas,
} from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return createMetadata({
    title: project.title,
    description: project.excerpt.slice(0, 160),
    path: `/projects/${slug}`,
    keywords: project.keywords,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  const schemas = combineSchemas(
    buildWebPageSchema(project.title, `/projects/${slug}`, project.description),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
      { name: project.title, path: `/projects/${slug}` },
    ]),
    buildCreativeWorkSchema(project),
  );

  return (
    <>
      <JsonLd data={schemas} />
      <article>
        <header className="section-padding bg-bg-light pt-[var(--header-total)]">
          <div className="container-custom">
            <p className="text-sm font-bold uppercase text-accent">
              {project.category} · {project.year}
            </p>
            <h1 className="mt-4 text-4xl font-bold text-text-dark md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-text-dark-muted">
              {project.description}
            </p>
            <div className="relative mt-8 aspect-video max-w-4xl overflow-hidden rounded-2xl border border-white/10 shadow-deep">
              <Image
                src={
                  projectImages[project.slug] ??
                  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=675&fit=crop&q=85"
                }
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 896px"
                priority
              />
            </div>
          </div>
        </header>

        <section className="section-padding bg-gray-50">
          <div className="container-custom grid gap-12 md:grid-cols-3">
            <div>
              <h2 className="text-sm font-bold uppercase text-accent">My Role</h2>
              <p className="mt-2 text-text-dark">{project.role}</p>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase text-accent">The Challenge</h2>
              <p className="mt-2 text-text-dark-muted">{project.problem}</p>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase text-accent">The Solution</h2>
              <p className="mt-2 text-text-dark-muted">{project.solution}</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-bg-light">
          <div className="container-custom max-w-3xl">
            <h2 className="text-2xl font-bold text-text-dark">Project Overview</h2>
            <p className="mt-4 leading-relaxed text-text-dark-muted">
              This project was delivered over {project.year === 2025 ? "12" : "10"} weeks
              with weekly client demos. Key deliverables included responsive UI, secure
              authentication, admin dashboards, API documentation, and production deployment
              with monitoring. All dummy metrics and timelines can be replaced with your real
              case study data later.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-text-dark">Technologies Used</h2>
            <ul className="mt-4 flex flex-wrap gap-2" role="list">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-accent-muted px-3 py-1 font-mono text-sm text-accent"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              {project.liveUrl && (
                <Button href={project.liveUrl} variant="primary">
                  <ExternalLink size={16} className="mr-2 inline" aria-hidden="true" />
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button href={project.githubUrl} variant="outline">
                  <Github size={16} className="mr-2 inline" aria-hidden="true" />
                  GitHub
                </Button>
              )}
            </div>
          </div>
        </section>

        <nav
          className="container-custom flex justify-between border-t border-border-light py-8"
          aria-label="Project navigation"
        >
          {prev ? (
            <Link href={`/projects/${prev.slug}`} className="text-accent hover:underline">
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="text-accent hover:underline"
            >
              {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </>
  );
}
