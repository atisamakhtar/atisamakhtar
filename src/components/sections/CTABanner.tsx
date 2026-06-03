"use client";

import Image from "next/image";
import Link from "next/link";
import { BlobShapes } from "@/components/ui/BlobShapes";
import { siteConfig } from "@/config/site";
import { images } from "@/config/images";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden section-dark py-24" aria-labelledby="cta-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={images.cta}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-bg-primary/75" />
      </div>
      <BlobShapes variant="hero" className="opacity-40" />
      <div className="container-custom relative z-10 text-center">
        <h2 id="cta-heading" className="font-display text-3xl font-extrabold uppercase text-white md:text-5xl">
          Let&apos;s build your
          <br />
          <span className="text-accent">next project</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-white/80">
          Ready to collaborate? {siteConfig.firstName} is available for freelance and contract
          work.
        </p>
        <Link href="/contact" className="btn-primary mt-8">
          Contact me
        </Link>
      </div>
    </section>
  );
}
