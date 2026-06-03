"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";

/** Placeholder 3D avatar — replace with useGLTF when .glb model is added */
export function ModelViewer() {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} floatIntensity={1}>
      <mesh ref={ref} scale={1.5}>
        <torusKnotGeometry args={[0.8, 0.25, 128, 32]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          emissive="#7c3aed"
          emissiveIntensity={0.4}
          distort={0.2}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}
