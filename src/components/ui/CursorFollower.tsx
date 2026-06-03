"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCursorPosition } from "@/hooks/useCursorPosition";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export function CursorFollower() {
  const { x, y } = useCursorPosition();
  const reducedMotion = useReducedMotion();
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    document.body.classList.add("custom-cursor-active");
    setVisible(true);

    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);

    const interactives = document.querySelectorAll("a, button, [data-cursor-hover]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.body.classList.remove("custom-cursor-active");
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [reducedMotion]);

  if (reducedMotion || !visible) return null;

  return (
    <>
      <motion.div
        className={cn(
          "pointer-events-none fixed z-[9999] rounded-full border border-white/80 mix-blend-difference",
          hovering ? "h-14 w-14" : "h-10 w-10",
        )}
        animate={{ left: x - (hovering ? 28 : 20), top: y - (hovering ? 28 : 20) }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none fixed z-[9999] h-2 w-2 rounded-full bg-white mix-blend-difference"
        animate={{ left: x - 4, top: y - 4 }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
        aria-hidden="true"
      />
    </>
  );
}
