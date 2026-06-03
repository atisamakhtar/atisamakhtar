"use client";

import { Canvas } from "@react-three/fiber";
import type { ReactNode } from "react";

interface SceneProps {
  children: ReactNode;
  className?: string;
  camera?: { position: [number, number, number]; fov?: number };
}

export function Scene({
  children,
  className = "absolute inset-0 -z-10",
  camera = { position: [0, 0, 5], fov: 50 },
}: SceneProps) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: camera.position, fov: camera.fov }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#7c3aed" />
        {children}
      </Canvas>
    </div>
  );
}
