/* eslint-disable @typescript-eslint/no-empty-object-type -- R3F augments React 19 JSX */
import type { ThreeElements } from "@react-three/fiber";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}
