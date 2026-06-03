"use client";

import { useRef, type ElementType, type RefObject } from "react";
import SplitType from "split-type";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap, registerGSAP } from "@/lib/gsap/config";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  splitBy?: "chars" | "words" | "lines";
  delay?: number;
}

export function AnimatedText({
  text,
  as: Tag = "h1",
  className,
  splitBy = "chars",
  delay = 0,
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      registerGSAP();
      const el = ref.current;
      if (!el || reducedMotion) return;

      const split = new SplitType(el, { types: splitBy });
      const targets =
        splitBy === "chars"
          ? split.chars
          : splitBy === "words"
            ? split.words
            : split.lines;

      if (!targets?.length) return;

      gsap.from(targets, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.03,
        delay,
        ease: "power3.out",
      });

      return () => split.revert();
    },
    { scope: ref as RefObject<HTMLElement>, dependencies: [text, reducedMotion] },
  );

  return (
    <Tag ref={ref} className={cn(className)}>
      {text}
    </Tag>
  );
}
