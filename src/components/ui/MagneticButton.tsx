"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  as?: "button" | "div";
}

export function MagneticButton({
  children,
  className,
  strength = 0.35,
  onClick,
  as = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement & HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  };

  const Component = as === "button" ? motion.button : motion.div;

  return (
    <Component
      ref={ref}
      className={cn(
        "inline-flex transition-transform duration-base",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={reducedMotion ? undefined : { scale: 0.95 }}
      type={as === "button" ? "button" : undefined}
    >
      {children}
    </Component>
  );
}
