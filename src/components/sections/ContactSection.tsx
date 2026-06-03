import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function ContactSection() {
  return (
    <section className="section-padding section-light" aria-labelledby="contact-teaser">
      <div className="container-custom text-center">
        <h2 id="contact-teaser" className="heading-accent">
          Get In Touch
        </h2>
        <p className="mx-auto mt-4 max-w-md text-text-dark-muted">
          Have a project in mind? I&apos;d love to hear from you.
        </p>
        <Link
          href="/contact"
          className="btn-primary mt-8 inline-flex items-center gap-2"
        >
          <Mail size={18} aria-hidden="true" />
          {siteConfig.email}
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
        <SocialIcons className="mt-8 justify-center" size={24} />
      </div>
    </section>
  );
}
