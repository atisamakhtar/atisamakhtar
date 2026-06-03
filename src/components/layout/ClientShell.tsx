"use client";

import { useState, useEffect, type ReactNode } from "react";
import { Loader } from "@/components/ui/Loader";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PageTransition } from "./PageTransition";

interface ClientShellProps {
  children: ReactNode;
}

export function ClientShell({ children }: ClientShellProps) {
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const seen = sessionStorage.getItem("portfolio-loaded");
    if (!seen) setLoading(true);
  }, []);

  const handleLoadComplete = () => {
    sessionStorage.setItem("portfolio-loaded", "1");
    setLoading(false);
  };

  return (
    <>
      {mounted && loading && <Loader onComplete={handleLoadComplete} />}
      <Navbar />
      <PageTransition>
        <main id="main-content">{children}</main>
      </PageTransition>
      <Footer />
    </>
  );
}
