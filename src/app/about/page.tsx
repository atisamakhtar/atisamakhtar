import Image from "next/image";
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildWebPageSchema,
  combineSchemas,
} from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { skillCategories } from "@/lib/content/skills";
import { experience } from "@/lib/content/experience";
import { values } from "@/lib/content/values";
import { hireFaqs } from "@/lib/content/faqs";
import { siteConfig } from "@/config/site";
import { images } from "@/config/images";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  const schemas = combineSchemas(
    buildWebPageSchema(
      "About",
      "/about",
      "About Atisam Akhtar — Full Stack Developer",
    ),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ]),
    buildFAQSchema(hireFaqs),
  );

  return (
    <>
      <JsonLd data={schemas} />
      <section className="section-padding bg-bg-light pt-[var(--header-total)]">
        <div className="container-custom grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-accent">
              About Me
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold uppercase text-text-dark md:text-6xl">
              Crafting the web with{" "}
              <span className="text-accent">purpose</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-dark-muted">
              I&apos;m {siteConfig.name} — a {siteConfig.jobTitle} based in Pakistan.
              I build MERN and Next.js applications for clients who want speed, quality,
              and clear communication.
            </p>
            <p className="mt-4 text-text-dark-muted">{siteConfig.aboutBioExtra}</p>
          </div>
          <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-full border-[6px] border-accent p-2">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src={images.about}
                alt={siteConfig.name}
                fill
                sizes="400px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-text-dark">My Story</h2>
          <p className="mt-6 leading-relaxed text-text-dark-muted">
            I started coding in university, building small PHP and JavaScript projects for
            friends and local businesses. After graduating in 2019, I joined a Lahore software
            house where I learned professional workflows, Git, and client delivery.
          </p>
          <blockquote className="my-8 border-l-4 border-accent pl-6 text-xl italic text-text-dark">
            &ldquo;Good websites don&apos;t just look pretty—they solve real problems and
            load in under 3 seconds.&rdquo;
          </blockquote>
          <p className="leading-relaxed text-text-dark-muted">
            Since 2022 I&apos;ve freelanced full-time, working with healthcare startups,
            fashion brands, logistics companies, and creative agencies. I handle everything
            from database design to deployment, and I stay in touch long after launch for
            support and new features.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center text-3xl font-bold text-text-dark">What I Believe</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.id}
                className="rounded-2xl border border-border-light bg-white p-6 shadow-card"
              >
                <span className="text-2xl">{v.icon}</span>
                <h3 className="mt-3 font-bold text-text-dark">{v.title}</h3>
                <p className="mt-2 text-sm text-text-dark-muted">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-text-dark">Skills</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {skillCategories.map((cat) => (
              <div
                key={cat.name}
                className="rounded-2xl border border-border-light bg-white p-6 shadow-card"
              >
                <h3 className="font-bold uppercase tracking-wider text-accent">
                  {cat.name}
                </h3>
                <ul className="mt-4 space-y-3" role="list">
                  {cat.skills.map((s) => (
                    <li key={s.name}>
                      <div className="flex justify-between text-sm text-text-dark">
                        <span>{s.name}</span>
                        <span className="font-semibold text-accent">{s.level}%</span>
                      </div>
                      <div className="mt-1 h-2 rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-accent"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-text-dark">Experience & Education</h2>
          <ol className="mt-8 space-y-8 border-l-2 border-accent pl-8">
            {experience.map((item) => (
              <li key={item.id} className="relative">
                <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-accent" />
                <h3 className="text-xl font-bold text-text-dark">{item.role}</h3>
                <p className="font-semibold text-accent">{item.company}</p>
                <p className="text-sm text-text-dark-muted">{item.period}</p>
                <p className="mt-2 text-text-dark-muted">{item.description}</p>
                <ul className="mt-2 list-inside list-disc text-sm text-text-dark-muted">
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-text-dark">FAQ</h2>
          <dl className="mt-8 grid gap-4 md:grid-cols-2">
            {hireFaqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-border-light bg-white p-6"
              >
                <dt className="font-bold text-text-dark">{faq.question}</dt>
                <dd className="mt-2 text-sm text-text-dark-muted">{faq.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Hire Me
            </Button>
            <Button href={`mailto:${siteConfig.email}`} variant="outline" size="lg">
              Email Me
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
