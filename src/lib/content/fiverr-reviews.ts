import rawReviews from "./fiverr-reviews.json";

/** Client review (sourced from freelance platform; no public profile link on site) */
export interface FiverrReview {
  id: string;
  comment: string;
  username: string;
  created_at: string;
  value: number;
  reviewer_country?: string;
  service_category?: string;
  gig_slug?: string;
  user_image_url?: string;
  repeat_buyer?: boolean;
}

export const fiverrReviews: FiverrReview[] = (rawReviews as FiverrReview[]).map(
  (r) => ({
    id: r.id,
    comment: r.comment.trim(),
    username: r.username,
    created_at: r.created_at,
    value: r.value,
    reviewer_country: r.reviewer_country,
    service_category: r.service_category,
    gig_slug: r.gig_slug,
    user_image_url: r.user_image_url,
    repeat_buyer: r.repeat_buyer,
  }),
);

const GIG_LABELS: Record<string, string> = {
  "create-lms-elearning-website-and-educational-course-website-learndash":
    "LMS & eLearning (LearnDash)",
  "build-lovable-ai-website-or-bolt-new-using-next-js-react-js-and-supabase":
    "Next.js / AI Website",
  "build-design-clinic-healthcare-homecare-medical-doctor-website":
    "Healthcare Website",
  "design-clone-duplicate-website-as-elementor-expert-or-elementor-pro-expert":
    "Elementor Website Rebuild",
};

export function reviewServiceLabel(review: FiverrReview): string {
  if (review.service_category) return review.service_category;
  if (review.gig_slug) return gigLabel(review.gig_slug);
  return "Fiverr Project";
}

export function gigLabel(slug?: string): string {
  if (!slug) return "Fiverr Project";
  return GIG_LABELS[slug] ?? "Fiverr Project";
}

/** Sorted newest first for display */
export function getFiverrReviewsSorted(): FiverrReview[] {
  return [...fiverrReviews].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  );
}
