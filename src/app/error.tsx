"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("[portfolio-error]", error.digest ?? error.message);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="mt-4 text-text-secondary">
        An unexpected error occurred. Please try again.
      </p>
      <div className="mt-8 flex gap-4">
        <Button onClick={reset}>Try Again</Button>
        <Button href="/" variant="outline">
          Go Home
        </Button>
      </div>
    </section>
  );
}
