"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface BlobShapesProps {
  variant?: "hero" | "about" | "footer";
  className?: string;
}

/** Organic magenta blobs — animated like Dribbble portfolio references */
export function BlobShapes({ variant = "hero", className }: BlobShapesProps) {
  const reducedMotion = useReducedMotion();

  if (variant === "hero") {
    return (
      <div
        className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
        aria-hidden="true"
      >
        <svg
          className={cn(
            "blob-float absolute -right-[15%] top-[10%] h-[70%] w-[55%] text-accent",
            !reducedMotion && "blob-morph-slow",
          )}
          viewBox="0 0 400 500"
          fill="currentColor"
        >
          <path d="M320,50 Q420,150 380,280 Q340,420 200,450 Q60,480 40,300 Q20,120 150,60 Q250,10 320,50 Z" />
        </svg>
        <svg
          className={cn(
            "blob-float-delayed absolute -bottom-[20%] -right-[5%] h-[50%] w-[45%] text-accent opacity-90",
            !reducedMotion && "blob-morph",
          )}
          viewBox="0 0 350 350"
          fill="currentColor"
        >
          <path d="M280,30 Q350,120 300,220 Q250,320 120,300 Q20,280 50,150 Q80,40 180,20 Q240,5 280,30 Z" />
        </svg>
        <svg
          className={cn(
            "absolute left-[5%] top-[40%] h-32 w-32 text-accent/40",
            !reducedMotion && "blob-float",
          )}
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <circle cx="50" cy="50" r="45" />
        </svg>
      </div>
    );
  }

  if (variant === "about") {
    return (
      <div
        className={cn("pointer-events-none absolute -left-20 top-20 h-40 w-40", className)}
        aria-hidden="true"
      >
        <svg
          className={cn("h-full w-full text-accent/20", !reducedMotion && "blob-float")}
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50,5 Q95,30 90,70 Q85,95 50,95 Q15,95 10,55 Q5,20 50,5 Z" />
        </svg>
      </div>
    );
  }

  return null;
}
