import * as THREE from "three";

/** Detect mobile for reduced particle counts */
export function isMobileViewport(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

export function getParticleCount(): number {
  return isMobileViewport() ? 1500 : 5000;
}

/** Dispose geometry and material on unmount */
export function disposeObject(object: THREE.Object3D): void {
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.geometry?.dispose();
      const material = child.material;
      if (Array.isArray(material)) {
        material.forEach((m) => m.dispose());
      } else if (material) {
        material.dispose();
      }
    }
  });
}
