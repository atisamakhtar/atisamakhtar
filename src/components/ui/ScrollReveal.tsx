"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in seconds (reference uses ~60ms steps) */
  delay?: number;
}

/** Fade + rise on scroll — matches reference experience reveal */
export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
