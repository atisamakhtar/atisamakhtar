"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import type { Testimonial } from "@/lib/content/testimonials";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

const AUTO_ADVANCE_MS = 6000;

interface TestimonialCarouselProps {
  items: Testimonial[];
}

function formatReviewDate(date: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={cn(
            i < rating ? "fill-accent text-accent" : "fill-gray-200 text-gray-200",
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function ReviewerAvatar({ item }: { item: Testimonial }) {
  const initial = item.author.charAt(0).toUpperCase();

  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-accent/20 bg-gray-50 font-bold text-accent">
      {item.avatarUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.avatarUrl} alt="" className="h-full w-full object-cover" />
      ) : (
        initial
      )}
    </span>
  );
}

export function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeRef = useRef(active);

  const count = items.length;
  const current = items[active];
  const rated = items.filter((item) => item.rating != null);
  const averageRating =
    rated.length > 0
      ? rated.reduce((sum, item) => sum + (item.rating ?? 0), 0) / rated.length
      : null;

  const goTo = useCallback(
    (index: number) => {
      setActive(((index % count) + count) % count);
    },
    [count],
  );

  const goNext = useCallback(() => goTo(activeRef.current + 1), [goTo]);
  const goPrev = useCallback(() => goTo(activeRef.current - 1), [goTo]);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    if (reducedMotion || count <= 1 || isPaused) return;
    const timer = window.setInterval(goNext, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [count, goNext, isPaused, reducedMotion]);

  if (count === 0 || !current) return null;

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      {/* Header */}
      <div className="text-center">
        <h2
          id="testimonials-heading"
          className="font-display text-3xl font-bold text-text-dark md:text-4xl"
        >
          Client Reviews
        </h2>
        <span
          className="mx-auto mt-3 block h-1 w-10 rounded-full bg-accent"
          aria-hidden="true"
        />
        <p className="mx-auto mt-4 max-w-lg text-sm text-text-dark-muted md:text-base">
          {count} verified client reviews
          {averageRating != null && (
            <>
              {" "}
              ·{" "}
              <span className="font-semibold text-text-dark">
                {averageRating.toFixed(1)} average rating
              </span>
            </>
          )}
        </p>
      </div>

      {/* Carousel */}
      <div className="relative mx-auto mt-10 max-w-3xl md:mt-12">
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous review"
              className="absolute -left-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border-light bg-white text-text-dark shadow-sm transition-colors hover:border-accent hover:text-accent sm:-left-14 sm:h-11 sm:w-11"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next review"
              className="absolute -right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border-light bg-white text-text-dark shadow-sm transition-colors hover:border-accent hover:text-accent sm:-right-14 sm:h-11 sm:w-11"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </>
        )}

        <AnimatePresence mode="wait">
          <motion.article
            key={current.id}
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-2xl border border-border-light bg-white px-6 py-8 sm:px-10 sm:py-10"
            aria-live="polite"
          >
            <div className="flex items-start justify-between gap-4">
              <Quote className="shrink-0 text-accent/80" size={36} aria-hidden="true" />
              {current.rating != null && <StarRating rating={current.rating} />}
            </div>

            <blockquote className="mt-6 text-base leading-relaxed text-text-dark sm:text-lg sm:leading-relaxed">
              &ldquo;{current.quote.trim()}&rdquo;
            </blockquote>

            <footer className="mt-8 flex items-center gap-4 border-t border-border-light pt-6">
              <ReviewerAvatar item={current} />
              <div className="min-w-0">
                <cite className="not-italic font-display text-base font-bold capitalize text-text-dark">
                  {current.author}
                </cite>
                <p className="mt-0.5 text-sm text-text-dark-muted">
                  {current.role}
                  {current.company ? ` · ${current.company}` : ""}
                </p>
                {current.date && (
                  <p className="mt-1 text-xs text-text-dark-muted">
                    {formatReviewDate(current.date)}
                  </p>
                )}
              </div>
            </footer>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* Pagination */}
      {count > 1 && (
        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="text-sm tabular-nums text-text-dark-muted">
            <span className="font-semibold text-text-dark">{active + 1}</span>
            <span className="mx-1.5 text-text-dark-muted/60">/</span>
            <span>{count}</span>
          </p>
          <nav aria-label="Review pagination" className="flex max-w-full items-center gap-1.5 overflow-x-auto px-2 pb-1">
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to review ${index + 1} from ${item.author}`}
                aria-current={index === active ? "true" : undefined}
                className={cn(
                  "h-2 shrink-0 rounded-full transition-all duration-300",
                  index === active
                    ? "w-8 bg-accent"
                    : "w-2 bg-gray-300 hover:bg-accent/50",
                )}
              />
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
