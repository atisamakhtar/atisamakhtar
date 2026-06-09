"use client";

import Image from "next/image";
import type { PortfolioProject } from "@/types/portfolio";

interface ImagePresentationProps {
  files: PortfolioProject["previewFiles"];
  title: string;
}

export function ImagePresentation({ files, title }: ImagePresentationProps) {
  return (
    <div className="flex flex-col gap-6 pb-4">
      {files.map((src, index) => (
        <div
          key={`${src}-${index}`}
          className="overflow-hidden rounded-xl border border-white/10 bg-[#111] shadow-lg"
        >
          <Image
            src={src}
            alt={`${title} — screen ${index + 1}`}
            width={1400}
            height={900}
            sizes="(max-width: 1024px) 92vw, 50vw"
            className="h-auto w-full object-cover object-top"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );
}
