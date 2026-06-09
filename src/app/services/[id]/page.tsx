import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import {
  getAdjacentServices,
  getServiceById,
  services,
} from "@/lib/content/services";
import { createMetadata } from "@/lib/seo/metadata";
import {
  buildBreadcrumbSchema,
  buildWebPageSchema,
  combineSchemas,
} from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";

interface ServicePageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${id}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) notFound();

  const { prev, next } = getAdjacentServices(id);

  const schemas = combineSchemas(
    buildWebPageSchema(service.title, `/services/${id}`, service.description),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/#services" },
      { name: service.title, path: `/services/${id}` },
    ]),
  );

  return (
    <>
      <JsonLd data={schemas} />
      <article>
        <header className="section-padding bg-bg-light pt-[var(--header-total)]">
          <div className="container-custom max-w-4xl">
            <Link
              href="/#services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              All services
            </Link>
            <div className="mt-6 flex items-center gap-4">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-muted text-2xl"
                aria-hidden="true"
              >
                {service.icon}
              </span>
              <p className="text-sm font-bold uppercase tracking-wider text-accent">
                {service.shortTitle}
              </p>
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold text-text-dark md:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-dark-muted">
              {service.description}
            </p>
          </div>
        </header>

        <section className="section-padding bg-white">
          <div className="container-custom grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border-light shadow-deep">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
                priority
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-dark">Overview</h2>
              <p className="mt-4 leading-relaxed text-text-dark-muted">
                {service.details}
              </p>

              <h3 className="mt-8 text-lg font-bold text-text-dark">
                What&apos;s included
              </h3>
              <ul className="mt-4 space-y-3" role="list">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-dark-muted">
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact" size="lg">
                  Get a quote
                </Button>
                <Button href="/projects" variant="outline" size="lg">
                  View portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>

        <nav
          className="border-t border-border-light bg-bg-light py-10"
          aria-label="Other services"
        >
          <div className="container-custom flex flex-col justify-between gap-6 sm:flex-row">
            {prev ? (
              <Link
                href={`/services/${prev.id}`}
                className="group flex flex-col text-sm text-text-dark-muted hover:text-accent"
              >
                <span className="flex items-center gap-1 font-mono text-xs uppercase">
                  <ArrowLeft size={14} /> Previous
                </span>
                <span className="mt-1 font-semibold text-text-dark group-hover:text-accent">
                  {prev.shortTitle}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/services/${next.id}`}
                className="group flex flex-col text-right text-sm text-text-dark-muted hover:text-accent sm:items-end"
              >
                <span className="flex items-center gap-1 font-mono text-xs uppercase">
                  Next <ArrowRight size={14} />
                </span>
                <span className="mt-1 font-semibold text-text-dark group-hover:text-accent">
                  {next.shortTitle}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </nav>
      </article>
    </>
  );
}
