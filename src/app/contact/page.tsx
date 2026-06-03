import type { Metadata } from "next";
import Image from "next/image";
import { Phone } from "lucide-react";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  buildBreadcrumbSchema,
  buildWebPageSchema,
  combineSchemas,
} from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "@/components/sections/ContactForm";
import { BlobShapes } from "@/components/ui/BlobShapes";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import { phoneTel } from "@/config/social";

export const metadata: Metadata = createPageMetadata(
  "Contact",
  "Get in touch for freelance, contract, or full-time roles. Send a message—Atisam Akhtar typically replies within 48 hours.",
  "/contact",
);

export default function ContactPage() {
  const schemas = combineSchemas(
    buildWebPageSchema("Contact", "/contact", "Contact Atisam Akhtar"),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
  );

  const available = siteConfig.availability === "available";

  return (
    <>
      <JsonLd data={schemas} />
      <section className="relative section-padding bg-bg-light pt-[var(--header-total)]">
        <div className="absolute inset-0 overflow-hidden opacity-30" aria-hidden="true">
          <BlobShapes variant="about" />
        </div>
        <div className="container-custom relative z-10">
          <div className="mx-auto mb-10 flex max-w-4xl flex-col items-center gap-10 md:flex-row md:items-start md:justify-center">
            <div className="relative aspect-[4/5] w-48 shrink-0 overflow-hidden rounded-2xl border-4 border-accent shadow-deep sm:w-56">
              <Image
                src={images.contact}
                alt={siteConfig.name}
                fill
                sizes="(max-width: 768px) 192px, 224px"
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left">
          <h1 className="font-display text-4xl font-bold uppercase md:text-6xl">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="mt-4 max-w-lg text-text-dark-muted">
            Tell me about your project. I&apos;ll get back to you within 48 hours.
          </p>
            </div>
          </div>

          <div className="mx-auto mt-2 flex flex-col items-center gap-3 text-sm text-text-dark-muted sm:flex-row sm:justify-center sm:gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-accent hover:underline"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${phoneTel}`}
              className="flex items-center gap-1.5 font-medium text-accent hover:underline"
            >
              <Phone size={16} aria-hidden="true" />
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent hover:underline"
            >
              WhatsApp
            </a>
          </div>

          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <span
              className={`h-2 w-2 rounded-full ${available ? "bg-green-500" : "bg-yellow-500"}`}
              aria-hidden="true"
            />
            <span className="text-sm font-medium text-text-dark-muted">
              {available ? "Available for new projects" : "Limited availability"}
            </span>
          </div>

          <div className="mt-12">
            <ContactForm />
          </div>

          <div className="mt-12 flex flex-col items-center gap-3">
            <p className="text-sm font-bold uppercase tracking-wider text-text-dark-muted">
              Connect with me
            </p>
            <SocialIcons size={28} />
          </div>
        </div>
      </section>
    </>
  );
}
