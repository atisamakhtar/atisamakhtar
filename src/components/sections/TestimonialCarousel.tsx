import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import type { Testimonial } from "@/lib/content/testimonials";
import { formatDate } from "@/lib/utils";

const CAROUSEL_NAME = "client-testimonials";

interface TestimonialCarouselProps {
  items: Testimonial[];
}

/**
 * CSS-only carousel (radio + label). Works without client JS, so it still
 * functions if dev CSP or hydration ever blocks React event handlers.
 */
export function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const count = items.length;
  if (count === 0) return null;

  const showRules = items
    .map(
      (_, i) =>
        `#${CAROUSEL_NAME}-radio-${i}:checked ~ .testimonial-slides .testimonial-slide-${i}{display:block}`,
    )
    .join("");

  return (
    <div className="relative z-10 mx-auto mt-12 max-w-3xl">
      <style
        dangerouslySetInnerHTML={{
          __html: `.testimonial-slide{display:none}${showRules}`,
        }}
      />

      {items.map((_, i) => (
        <input
          key={`radio-${i}`}
          type="radio"
          name={CAROUSEL_NAME}
          id={`${CAROUSEL_NAME}-radio-${i}`}
          defaultChecked={i === 0}
          className="sr-only"
          aria-hidden={i !== 0}
        />
      ))}

      <div className="testimonial-slides">
        {items.map((item, i) => {
          const prev = (i - 1 + count) % count;
          const next = (i + 1) % count;

          return (
            <article
              key={item.id}
              className={`testimonial-slide testimonial-slide-${i} rounded-2xl border border-border-light bg-white p-8 shadow-card md:p-12`}
            >
              <div className="flex items-center justify-between gap-4">
                <Quote className="shrink-0 text-accent" size={36} aria-hidden="true" />
                {item.rating != null && (
                  <div
                    className="flex shrink-0 items-center gap-1"
                    aria-label={`${item.rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star
                        key={star}
                        size={16}
                        className={
                          star < item.rating!
                            ? "fill-accent text-accent"
                            : "fill-gray-200 text-gray-200"
                        }
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                )}
              </div>

              <p className="mt-6 text-lg leading-relaxed text-text-dark-muted">
                &ldquo;{item.quote}&rdquo;
              </p>

              <footer className="mt-8 flex items-center gap-4 border-t border-border-light pt-6">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-accent bg-gray-100">
                  {item.avatarUrl ? (
                    <Image
                      src={item.avatarUrl}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-lg font-bold text-accent">
                      {item.author.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <cite className="not-italic font-bold text-text-dark">{item.author}</cite>
                  <p className="text-sm text-text-dark-muted">
                    {item.role} · {item.company}
                  </p>
                  {item.date && (
                    <p className="mt-0.5 text-xs text-text-dark-muted">
                      {formatDate(item.date)}
                    </p>
                  )}
                </div>
              </footer>

              <nav
                className="relative z-30 mt-8 flex items-center justify-center gap-4"
                aria-label="Testimonial navigation"
              >
                <label
                  htmlFor={`${CAROUSEL_NAME}-radio-${prev}`}
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-border-light bg-white text-text-dark shadow-sm transition-colors hover:border-accent hover:text-accent [&_svg]:pointer-events-none"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={22} aria-hidden="true" />
                </label>
                <span className="min-w-[4.5rem] select-none text-center text-sm tabular-nums text-text-dark-muted">
                  {i + 1} / {count}
                </span>
                <label
                  htmlFor={`${CAROUSEL_NAME}-radio-${next}`}
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-border-light bg-white text-text-dark shadow-sm transition-colors hover:border-accent hover:text-accent [&_svg]:pointer-events-none"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={22} aria-hidden="true" />
                </label>
              </nav>
            </article>
          );
        })}
      </div>
    </div>
  );
}
