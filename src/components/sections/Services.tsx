"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { services } from "@/lib/content/services";

export function Services() {
  return (
    <section
      id="services"
      className="section-padding section-light"
      aria-labelledby="services-heading"
    >
      <div className="container-custom">
        <h2 id="services-heading" className="heading-accent">
          Services
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-text-dark-muted">
          End-to-end solutions tailored for startups, agencies, and product teams.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.06}>
              <article className="group overflow-hidden rounded-2xl border border-border-light bg-white shadow-card transition-shadow hover:shadow-deep">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-lg text-white shadow-glow">
                    {service.icon}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-dark">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-dark-muted">
                    {service.description}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-text-dark-muted">
                    {service.details}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/contact" className="btn-primary">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
