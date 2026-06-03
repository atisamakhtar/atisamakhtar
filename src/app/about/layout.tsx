import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata(
  "About",
  "Learn how Atisam Akhtar designs scalable web products—from architecture to animation—with a focus on performance, UX and clean code.",
  "/about",
);

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
