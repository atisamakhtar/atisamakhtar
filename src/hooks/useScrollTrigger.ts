"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "@/lib/gsap/config";
import { useReducedMotion } from "./useReducedMotion";

/** Keep GSAP scroll animations in sync (native scroll only) */
export function useScrollTriggerRefresh(): void {
  const reducedMotion = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    if (reducedMotion) return;

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [pathname, reducedMotion]);
}
