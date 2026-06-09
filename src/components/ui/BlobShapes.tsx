"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface BlobShapesProps {
  variant?: "hero" | "about" | "contact" | "footer";
  className?: string;
}

/** Organic magenta blobs — animated like Dribbble portfolio references */
export function BlobShapes({ variant = "hero", className }: BlobShapesProps) {
  const reducedMotion = useReducedMotion();

  if (variant === "hero") {
    const motion = (name: string) => (!reducedMotion ? name : "");

    return (
      <div
        className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
        aria-hidden="true"
      >
        {/* Soft vignette — blends glows into the dark hero */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_45%,rgba(255,45,85,0.14)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_55%,rgba(255,45,85,0.06)_0%,transparent_45%)]" />

        {/* Primary glow — behind portrait */}
        <div
          className={cn(
            "absolute right-[-6%] top-[18%] h-[min(68vh,580px)] w-[min(48vw,480px)] rounded-[42%] bg-gradient-to-br from-accent/50 via-accent-soft/35 to-accent/10 blur-[90px]",
            motion("hero-glow"),
          )}
        />
        {/* Secondary depth layer */}
        <div
          className={cn(
            "absolute right-[8%] bottom-[14%] h-[min(36vh,320px)] w-[min(32vw,300px)] rounded-full bg-gradient-to-tr from-accent-soft/40 to-accent/5 blur-[72px]",
            motion("hero-glow-secondary"),
          )}
        />
        {/* Subtle left accent — avoids harsh circle on copy */}
        <div
          className={cn(
            "absolute -left-[6%] top-[38%] h-56 w-56 rounded-full bg-accent/20 blur-[80px] sm:h-72 sm:w-72",
            motion("hero-glow-tertiary"),
          )}
        />

        {/* Thin organic ring — frames portrait without solid fill */}
        <svg
          className={cn(
            "absolute right-[6%] top-[20%] hidden h-[min(62vh,520px)] w-[min(38vw,380px)] text-accent/20 lg:block",
            motion("blob-float-delayed"),
          )}
          viewBox="0 0 400 500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M320,50 Q420,150 380,280 Q340,420 200,450 Q60,480 40,300 Q20,120 150,60 Q250,10 320,50 Z"
            strokeDasharray="6 10"
          />
        </svg>

        {/* Small animated accents — same language as Get In Touch */}
        <svg
          className={cn(
            "absolute left-[4%] top-[48%] h-16 w-16 text-accent/22 sm:h-20 sm:w-20",
            motion("blob-float"),
            !reducedMotion && "blob-morph-slow",
          )}
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50,5 Q95,30 90,70 Q85,95 50,95 Q15,95 10,55 Q5,20 50,5 Z" />
        </svg>
        <svg
          className={cn(
            "absolute right-[22%] top-[12%] h-14 w-14 text-accent/25 sm:h-16 sm:w-16",
            motion("blob-float-delayed"),
          )}
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <circle cx="50" cy="50" r="45" />
        </svg>
        <svg
          className={cn(
            "absolute bottom-[26%] left-[6%] h-10 w-10 text-accent/15 sm:h-12 sm:w-12",
            motion("blob-float-delayed"),
            !reducedMotion && "blob-morph",
          )}
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50,5 Q95,30 90,70 Q85,95 50,95 Q15,95 10,55 Q5,20 50,5 Z" />
        </svg>
        <svg
          className={cn(
            "absolute bottom-[22%] right-[14%] h-16 w-16 text-accent/22 sm:h-20 sm:w-20",
            motion("blob-float"),
          )}
          viewBox="0 0 350 350"
          fill="currentColor"
        >
          <path d="M280,30 Q350,120 300,220 Q250,320 120,300 Q20,280 50,150 Q80,40 180,20 Q240,5 280,30 Z" />
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

  if (variant === "contact") {
    return (
      <div
        className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
        aria-hidden="true"
      >
        <svg
          className={cn(
            "blob-float absolute -left-[12%] top-[8%] h-[55%] w-[42%] text-accent opacity-50",
            !reducedMotion && "blob-morph-slow",
          )}
          viewBox="0 0 400 500"
          fill="currentColor"
        >
          <path d="M320,50 Q420,150 380,280 Q340,420 200,450 Q60,480 40,300 Q20,120 150,60 Q250,10 320,50 Z" />
        </svg>
        <svg
          className={cn(
            "blob-float-delayed absolute -right-[10%] bottom-[5%] h-[50%] w-[38%] text-accent opacity-40",
            !reducedMotion && "blob-morph",
          )}
          viewBox="0 0 350 350"
          fill="currentColor"
        >
          <path d="M280,30 Q350,120 300,220 Q250,320 120,300 Q20,280 50,150 Q80,40 180,20 Q240,5 280,30 Z" />
        </svg>
        <svg
          className={cn(
            "absolute right-[18%] top-[22%] h-24 w-24 text-accent/25",
            !reducedMotion && "blob-float",
          )}
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <circle cx="50" cy="50" r="45" />
        </svg>
        <svg
          className={cn(
            "absolute bottom-[28%] left-[20%] h-16 w-16 text-accent/20",
            !reducedMotion && "blob-float-delayed",
          )}
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
