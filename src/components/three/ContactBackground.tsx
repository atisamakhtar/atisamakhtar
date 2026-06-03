"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const Scene = dynamic(() => import("./Scene").then((m) => m.Scene), { ssr: false });
const DistortedPlane = dynamic(
  () => import("./DistortedPlane").then((m) => m.DistortedPlane),
  { ssr: false },
);

export function ContactBackground() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-accent/5 to-transparent"
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden="true">
      <Scene className="h-full w-full" camera={{ position: [0, 2, 5], fov: 60 }}>
        <DistortedPlane />
      </Scene>
    </div>
  );
}
