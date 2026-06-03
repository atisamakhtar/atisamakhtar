"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const Scene = dynamic(() => import("./Scene").then((m) => m.Scene), { ssr: false });
const ModelViewer = dynamic(
  () => import("./ModelViewer").then((m) => m.ModelViewer),
  { ssr: false },
);

export function AboutScene() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className="aspect-square rounded-lg bg-gradient-to-br from-accent/20 to-bg-secondary" />
    );
  }

  return (
    <div className="aspect-square w-full max-w-md">
      <Scene className="h-full w-full rounded-lg" camera={{ position: [0, 0, 4], fov: 45 }}>
        <ModelViewer />
      </Scene>
    </div>
  );
}
