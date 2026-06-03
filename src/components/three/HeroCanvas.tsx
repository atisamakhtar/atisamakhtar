"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const Scene = dynamic(() => import("./Scene").then((m) => m.Scene), { ssr: false });
const ParticleField = dynamic(
  () => import("./ParticleField").then((m) => m.ParticleField),
  { ssr: false },
);
const FloatingGeometry = dynamic(
  () => import("./FloatingGeometry").then((m) => m.FloatingGeometry),
  { ssr: false },
);

export function HeroCanvas() {
  const reducedMotion = useReducedMotion();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  if (reducedMotion) {
    return (
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/10 to-transparent"
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className="absolute inset-0 -z-10"
      onMouseMove={(e) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        setMouse({ x, y });
      }}
      aria-hidden="true"
    >
      <Scene>
        <ParticleField mouse={mouse} />
        <FloatingGeometry />
      </Scene>
    </div>
  );
}
