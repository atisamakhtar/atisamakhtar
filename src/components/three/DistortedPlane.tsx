"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";

/** Subtle distorted plane for contact page background */
export function DistortedPlane() {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 4, 0, 0]} scale={[8, 8, 1]}>
      <planeGeometry args={[2, 2, 32, 32]} />
      <MeshDistortMaterial
        color="#1a1a2e"
        emissive="#7c3aed"
        emissiveIntensity={0.15}
        distort={0.3}
        speed={1}
        wireframe
      />
    </mesh>
  );
}
