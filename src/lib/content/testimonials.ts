import { getFiverrReviewsSorted, reviewServiceLabel } from "./fiverr-reviews";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
  date?: string;
  avatarUrl?: string;
  source?: "client";
}

function fromClientReviews(): Testimonial[] {
  return getFiverrReviewsSorted().map((r) => ({
    id: `review-${r.id}`,
    quote: r.comment,
    author: r.username.replace(/_/g, " "),
    role: r.repeat_buyer ? "Repeat client" : "Client",
    company: [reviewServiceLabel(r), r.reviewer_country].filter(Boolean).join(" · "),
    rating: r.value,
    date: r.created_at,
    avatarUrl: r.user_image_url,
    source: "client" as const,
  }));
}

export const testimonials: Testimonial[] = fromClientReviews();
