"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { images } from "@/config/images";
import { BlobShapes } from "@/components/ui/BlobShapes";
import { useGSAP } from "@/hooks/useGSAP";
import { createHeroTimeline } from "@/lib/gsap/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!containerRef.current) return;
      createHeroTimeline(containerRef.current, reducedMotion);
    },
    { scope: containerRef, dependencies: [reducedMotion] },
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-bg-dark pt-[var(--header-total)]"
      aria-labelledby="hero-heading"
    >
      <BlobShapes variant="hero" />

      <div className="container-custom relative z-10 grid min-h-[calc(100vh-var(--header-total))] items-center gap-8 py-10 lg:grid-cols-2 lg:gap-4">
        {/* Left — typography */}
        <div className="order-2 lg:order-1 lg:pr-8">
          <p
            data-hero-line
            className="text-lg font-medium text-white/90 sm:text-xl md:text-2xl"
          >
            I&apos;m {siteConfig.firstName}
          </p>
          <h1
            id="hero-heading"
            data-hero-line
            className="mt-2 max-w-xl font-display text-[clamp(1.75rem,3.2vw,4rem)] font-extrabold uppercase leading-[1.18] tracking-[0.03em] text-white"
          >
            <span className="block">
              Full Stack <span className="hero-highlight-word">Website</span>
            </span>
            <span className="mt-1 block">Developer</span>
          </h1>
          <p
            data-hero-line
            className="mt-6 max-w-md text-sm leading-relaxed text-white/70 sm:text-base"
          >
            {siteConfig.heroBio ??
              "I design and build high-performance web applications with stunning interfaces, clean code, and measurable business impact."}
          </p>
          <div data-hero-cta className="mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-[var(--radius-pill)] bg-accent px-10 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-glow transition-transform hover:scale-105 hover:bg-accent-hover"
            >
              Portfolio
            </Link>
          </div>
        </div>

        {/* Right — portrait, vertically centered, facing toward copy (left) */}
        <div
          data-hero-line
          className="relative order-1 flex w-full max-w-lg items-center justify-center self-center lg:order-2 lg:max-w-none lg:justify-end lg:-translate-y-8"
        >
          <div className="relative aspect-[3/4] h-[min(72vh,560px)] w-full max-w-[380px] sm:max-w-[420px] lg:h-[min(78vh,620px)] lg:max-w-[500px]">
            <Image
              src={images.hero}
              alt={`${siteConfig.name} — professional portrait`}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 500px"
              className="relative z-10 -scale-x-100 object-contain object-center drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* White wave into About section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 leading-[0]" aria-hidden="true">
        <svg
          viewBox="0 0 1440 120"
          className="block w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,80 C360,120 720,0 1080,60 C1260,90 1380,100 1440,80 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
}
