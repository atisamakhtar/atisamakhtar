"use client";

import type { ReactNode } from "react";
import { useScrollTriggerRefresh } from "@/hooks/useScrollTrigger";

interface AppProvidersProps {
  children: ReactNode;
}

function ScrollSetup({ children }: { children: ReactNode }) {
  useScrollTriggerRefresh();
  return <>{children}</>;
}

export function AppProviders({ children }: AppProvidersProps) {
  return <ScrollSetup>{children}</ScrollSetup>;
}
