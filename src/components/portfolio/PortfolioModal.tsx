"use client";

import dynamic from "next/dynamic";
import { ExternalLink, Github } from "lucide-react";
import {
  Dialog,
  DialogBody,
  DialogCloseButton,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getCategoryLabel } from "@/data/portfolio-categories";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import type { PortfolioProject } from "@/types/portfolio";
import { ImagePresentation } from "./ImagePresentation";

const PdfViewer = dynamic(() => import("./PdfViewer").then((m) => m.PdfViewer), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[240px] items-center justify-center text-sm text-white/60">
      Loading preview…
    </div>
  ),
});

interface PortfolioModalProps {
  project: PortfolioProject | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PortfolioModal({ project, open, onOpenChange }: PortfolioModalProps) {
  useLockBodyScroll(open);

  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        aria-describedby="portfolio-modal-description"
      >
        <DialogCloseButton />
        <DialogHeader>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {getCategoryLabel(project.category)}
            {project.projectType ? ` · ${project.projectType}` : ""}
          </p>
          <DialogTitle>{project.title}</DialogTitle>
          {project.description && (
            <DialogDescription id="portfolio-modal-description">
              {project.description}
            </DialogDescription>
          )}
        </DialogHeader>

        <DialogBody>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mb-8 flex flex-wrap gap-3">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-hover"
              >
                Live Website
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
              >
                GitHub
                <Github size={14} aria-hidden="true" />
              </a>
            )}
          </div>

          {project.clientName && (
            <p className="mb-6 text-sm text-white/50">
              Client: <span className="text-white/80">{project.clientName}</span>
            </p>
          )}

          {project.previewType === "pdf" && project.previewFiles[0] ? (
            <PdfViewer file={project.previewFiles[0]} />
          ) : (
            <ImagePresentation files={project.previewFiles} title={project.title} />
          )}
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}
