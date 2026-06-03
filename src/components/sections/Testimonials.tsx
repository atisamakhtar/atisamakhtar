import { testimonials } from "@/lib/content/testimonials";
import { TestimonialCarousel } from "./TestimonialCarousel";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section
      className="section-padding section-light"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-custom">
        <h2 id="testimonials-heading" className="heading-accent">
          Testimonials
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm text-text-dark-muted">
          What clients say about working with me.
        </p>

        <TestimonialCarousel items={testimonials} />
      </div>
    </section>
  );
}
