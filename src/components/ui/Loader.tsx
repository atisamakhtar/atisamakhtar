"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap, registerGSAP } from "@/lib/gsap/config";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { siteConfig } from "@/config/site";

interface LoaderProps {
  onComplete: () => void;
}

const MAX_LOADER_MS = 2800;

export function Loader({ onComplete }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);
  const reducedMotion = useReducedMotion();
  const completedRef = useRef(false);

  const finish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    setDone(true);
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const fallback = window.setTimeout(finish, MAX_LOADER_MS);

    const run = () => {
      registerGSAP();
      const container = containerRef.current;
      const counter = counterRef.current;
      if (!container || !counter) return false;

      if (reducedMotion) {
        counter.textContent = "100";
        gsap.to(container, { opacity: 0, duration: 0.3, onComplete: finish });
        return true;
      }

      const obj = { value: 0 };
      gsap.to(obj, {
        value: 100,
        duration: 1.8,
        ease: "power2.out",
        onUpdate: () => {
          counter.textContent = `${Math.round(obj.value)}`;
        },
      });

      gsap.timeline({ onComplete: finish }).to(container, {
        yPercent: -100,
        duration: 0.7,
        ease: "power4.inOut",
        delay: 2,
      });

      return true;
    };

    if (!run()) requestAnimationFrame(() => run() || finish());

    return () => clearTimeout(fallback);
  }, [reducedMotion, finish]);

  if (done) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-accent"
      role="progressbar"
      aria-label="Loading"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white font-display text-3xl font-bold text-accent">
        {siteConfig.firstName.charAt(0)}
      </span>
      <p className="mt-6 font-display text-xl font-bold uppercase tracking-widest text-white">
        {siteConfig.firstName}
      </p>
      <p className="mt-4 font-mono text-white/90" aria-live="polite">
        <span ref={counterRef}>0</span>%
      </p>
    </div>
  );
}
