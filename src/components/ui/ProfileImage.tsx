"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

interface ProfileImageProps {
  src?: string;
  alt: string;
  priority?: boolean;
  className?: string;
  showReplaceHint?: boolean;
  sizes?: string;
}

export function ProfileImage({
  src = images.hero,
  alt,
  priority = false,
  className,
  showReplaceHint = true,
  sizes = "(max-width: 768px) 100vw, 420px",
}: ProfileImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent via-violet-500/50 to-transparent opacity-80 blur-sm" />
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-bg-secondary shadow-deep">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top transition-transform duration-700 hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />
        {showReplaceHint && (
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-lg border border-white/10 bg-bg-primary/80 px-3 py-2 backdrop-blur-md">
            <Camera className="shrink-0 text-accent" size={16} aria-hidden="true" />
            <p className="text-xs text-text-secondary">
              Replace with your photo:{" "}
              <code className="text-accent">public/images/avatar/atisam-hero.jpg</code>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
