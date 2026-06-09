"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { services } from "@/lib/content/services";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % services.length);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(goNext, 6000);
    return () => window.clearInterval(timer);
  }, [goNext]);

  return (
    <section
      id="services"
      className="section-padding section-light"
      aria-labelledby="services-heading"
    >
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          {/* Left — stacked service cards (defines scroll height) */}
          <div className="relative order-2 lg:order-1">
            <div
              className="relative rounded-[2rem] px-5 py-10 sm:px-8 sm:py-12"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,45,85,0.06) 0%, rgba(255,245,240,1) 45%, rgba(255,230,235,0.5) 100%)",
              }}
            >
              <div className="space-y-4" role="list" aria-label="Services offered">
                {services.map((service, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <motion.div
                      key={service.id}
                      role="listitem"
                      layout
                      className={cn(
                        "w-full transition-transform duration-300",
                        isActive ? "scale-[1.02]" : "scale-100 opacity-90 hover:opacity-100",
                      )}
                    >
                      <div
                        role="button"
                        tabIndex={0}
                        aria-pressed={isActive}
                        onClick={() => setActiveIndex(index)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setActiveIndex(index);
                          }
                        }}
                        className="cursor-pointer rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        {isActive ? (
                          <div className="rounded-2xl bg-gradient-to-r from-accent via-[#c084fc] to-accent-soft p-[3px] shadow-deep">
                            <div className="rounded-[14px] bg-white p-5 sm:p-6">
                              <div className="flex items-start gap-4">
                                <ServiceIcon icon={service.icon} active />
                                <ServiceCardBody service={service} />
                              </div>
                              <ServiceReadMoreLink serviceId={service.id} />
                            </div>
                          </div>
                        ) : (
                          <div className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-card backdrop-blur-sm sm:p-6">
                            <div className="flex items-start gap-4">
                              <ServiceIcon icon={service.icon} />
                              <ServiceCardBody service={service} />
                            </div>
                            <ServiceReadMoreLink serviceId={service.id} />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-col items-center gap-3">
                <button
                  type="button"
                  onClick={goNext}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-text-dark text-white shadow-card transition-transform hover:scale-105 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="View next service"
                >
                  <ChevronDown size={20} aria-hidden="true" />
                </button>
                <div className="flex gap-2" aria-hidden="true">
                  {services.map((s, i) => (
                    <span
                      key={s.id}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        i === activeIndex ? "w-6 bg-accent" : "w-1.5 bg-text-dark/20",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — stretches to left column height; inner panel sticks at top */}
          <div className="order-1 lg:order-2">
            <div className="flex flex-col lg:sticky lg:top-[calc(var(--header-total)+2rem)]">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              What I do best
            </p>
            <h2
              id="services-heading"
              className="mt-3 font-display text-4xl font-extrabold leading-tight text-text-dark sm:text-5xl lg:text-[3.25rem]"
            >
              My Awesome
              <br />
              <span className="text-accent">Services</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-text-dark-muted">
              End-to-end solutions for startups, agencies, and product teams—from
              high-converting frontends to secure APIs and production-ready deployments.
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={active?.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="mt-6 max-w-md"
              >
                <p className="text-sm font-semibold text-text-dark">{active?.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-text-dark-muted line-clamp-4">
                  {active?.details}
                </p>
                {active && (
                  <Link
                    href={`/services/${active.id}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-accent hover:underline"
                  >
                    Read more →
                  </Link>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Hire {siteConfig.firstName}
              </Link>
              <Link
                href="/projects"
                className="text-sm font-bold uppercase tracking-wider text-text-dark-muted transition-colors hover:text-accent"
              >
                See my work →
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ icon, active = false }: { icon: string; active?: boolean }) {
  return (
    <span
      className={cn(
        "flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-2xl sm:h-16 sm:w-16",
        active
          ? "bg-accent-muted shadow-glow"
          : "bg-[#ffe8ec] text-text-dark",
      )}
      aria-hidden="true"
    >
      {icon}
    </span>
  );
}

function ServiceCardBody({ service }: { service: (typeof services)[number] }) {
  return (
    <div className="min-w-0 pt-0.5">
      <h3 className="text-lg font-bold text-text-dark sm:text-xl">{service.shortTitle}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-text-dark-muted line-clamp-2">
        {service.description}
      </p>
    </div>
  );
}

function ServiceReadMoreLink({ serviceId }: { serviceId: string }) {
  return (
    <Link
      href={`/services/${serviceId}`}
      onClick={(e) => e.stopPropagation()}
      className="mt-4 inline-flex text-xs font-bold uppercase tracking-wider text-accent hover:underline"
    >
      Read more →
    </Link>
  );
}
