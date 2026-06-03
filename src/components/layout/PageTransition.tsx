"use client";

import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

/** Curtain element — GSAP animates .page-transition-curtain on route change */
export function PageTransition({ children }: PageTransitionProps) {
  return (
    <>
      <div
        className="page-transition-curtain pointer-events-none fixed inset-0 z-[9995] origin-top bg-accent"
        style={{ transform: "scaleY(0)" }}
        aria-hidden="true"
      />
      {children}
    </>
  );
}
