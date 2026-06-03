"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { getParticleCount } from "@/lib/three/helpers";

interface ParticleFieldProps {
  mouse?: { x: number; y: number };
}

/** Animated particle background — 5000+ points on desktop, fewer on mobile */
export function ParticleField({ mouse = { x: 0, y: 0 } }: ParticleFieldProps) {
  const ref = useRef<THREE.Points>(null);
  const count = getParticleCount();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.02;
    ref.current.rotation.y = state.clock.elapsedTime * 0.03 + mouse.x * 0.1;
    ref.current.rotation.x += mouse.y * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#7c3aed"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}
