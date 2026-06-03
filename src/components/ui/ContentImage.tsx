import Image from "next/image";
import { cn } from "@/lib/utils";

interface ContentImageProps {
  src: string;
  alt: string;
  className?: string;
  aspect?: "video" | "square" | "portrait" | "wide";
  priority?: boolean;
}

const aspectMap = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  wide: "aspect-[21/9]",
};

export function ContentImage({
  src,
  alt,
  className,
  aspect = "video",
  priority = false,
}: ContentImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/10",
        aspectMap[aspect],
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  );
}
