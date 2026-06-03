declare module "vanilla-tilt" {
  interface VanillaTiltOptions {
    max?: number;
    speed?: number;
    glare?: boolean;
    "max-glare"?: number;
  }

  interface VanillaTiltInstance {
    destroy(): void;
  }

  export default class VanillaTilt {
    static init(element: HTMLElement, options?: VanillaTiltOptions): VanillaTiltInstance;
  }
}
