"use client";

import Image from "next/image";
import { PortfolioShowcase } from "@/components/portfolio/PortfolioShowcase";
import { images } from "@/config/images";

export default function ProjectsPage() {
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
                Browse case studies by category—WordPress, Next.js, React, full stack,
                e-commerce, and custom builds.
              </p>
            </div>
          </div>
        </div>
      </div>

      <PortfolioShowcase
        variant="light"
        heading="Work"
        subheading="Click any project to open an in-page preview—no new tabs, no downloads required."
        className="pb-8"
      />
    </section>
  );
}
