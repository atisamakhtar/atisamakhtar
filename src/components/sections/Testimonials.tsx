import { testimonials } from "@/lib/content/testimonials";
import { TestimonialCarousel } from "./TestimonialCarousel";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="section-padding section-light"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-custom">
        <TestimonialCarousel items={testimonials} />
      </div>
    </section>
  );
}
