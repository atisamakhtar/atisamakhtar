"use client";

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { BlobShapes } from "@/components/ui/BlobShapes";
import { siteConfig } from "@/config/site";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function ContactSection() {
  return (
    <section
      className="relative overflow-hidden section-padding section-dark"
      aria-labelledby="contact-teaser"
    >
      <BlobShapes variant="contact" />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-bg-dark/80 via-bg-dark/40 to-bg-dark"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 text-center">
        <div className="relative isolate mx-auto max-w-xl px-2 py-2">
          <h2
            id="contact-teaser"
            className="relative font-display text-3xl font-bold text-white md:text-4xl"
          >
            Get In Touch
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-white/80">
            Have a project in mind? I&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="btn-primary relative mt-8 inline-flex items-center gap-2 shadow-glow"
          >
            <Mail size={18} aria-hidden="true" />
            {siteConfig.email}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <SocialIcons className="relative mt-8 justify-center" size={24} variant="dark" />
        </div>
      </div>
    </section>
  );
}
