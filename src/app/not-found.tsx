import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-8xl font-bold text-accent">404</h1>
      <p className="mt-4 text-xl text-text-secondary">Page not found</p>
      <p className="mt-2 text-text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8">
        <Button href="/">Back to Home</Button>
      </div>
    </section>
  );
}
