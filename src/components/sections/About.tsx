"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { images } from "@/config/images";
import { phoneTel } from "@/config/social";
import { BlobShapes } from "@/components/ui/BlobShapes";
import { FadeIn } from "@/components/ui/FadeIn";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function About() {
  return (
    <section
      id="about"
      className="relative bg-bg-light pb-20 pt-12 text-text-dark"
      aria-labelledby="about-heading"
    >
      <BlobShapes variant="about" />
      <div className="container-custom relative">
        <h2
          id="about-heading"
          className="mb-12 text-center font-display text-3xl font-bold text-accent md:text-4xl"
        >
          About Me
        </h2>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="relative mx-auto aspect-square w-[280px] sm:w-[320px]">
              <div className="absolute inset-0 rounded-full border-[6px] border-accent p-2 sm:border-[8px]">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src={images.about}
                    alt={siteConfig.name}
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-base leading-relaxed text-text-dark-muted sm:text-lg">
              {siteConfig.aboutBio}
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-dark-muted sm:text-lg">
              {siteConfig.aboutBioExtra}
            </p>
            <p className="mt-4 text-sm text-text-dark-muted">
              <strong className="text-text-dark">Email:</strong>{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                {siteConfig.email}
              </a>
              <br />
              <strong className="text-text-dark">Phone / WhatsApp:</strong>{" "}
              <a href={`tel:${phoneTel}`} className="text-accent hover:underline">
                {siteConfig.phone}
              </a>
            </p>
            <div className="mt-8 h-1 w-16 bg-accent" />
            <SocialIcons className="mt-6" size={24} />
            <Link
              href="/about"
              className="mt-8 inline-flex text-sm font-bold uppercase tracking-wider text-accent hover:underline"
            >
              Read full story →
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
