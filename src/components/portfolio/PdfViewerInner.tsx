"use client";

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

interface PdfViewerInnerProps {
  file: string;
  onFallback: () => void;
}

export function PdfViewerInner({ file, onFallback }: PdfViewerInnerProps) {
  const [numPages, setNumPages] = useState(0);
  const [width, setWidth] = useState(720);

  useEffect(() => {
    const update = () => setWidth(Math.min(900, window.innerWidth - 96));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <Document
      file={file}
      onLoadSuccess={({ numPages: total }) => setNumPages(total)}
      onLoadError={() => onFallback()}
      loading={
        <div className="flex min-h-[320px] items-center justify-center text-sm text-white/60">
          Rendering PDF…
        </div>
      }
      error={
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center text-sm text-white/60">
          PDF preview unavailable. Add the file to{" "}
          <code className="text-accent">public{file}</code>
        </div>
      }
      className="flex flex-col gap-6"
    >
      {Array.from({ length: numPages }, (_, index) => (
        <div
          key={`page-${index + 1}`}
          className="overflow-hidden rounded-xl border border-white/10 bg-white shadow-lg"
        >
          <Page
            pageNumber={index + 1}
            width={width}
            renderTextLayer
            renderAnnotationLayer
          />
        </div>
      ))}
    </Document>
  );
}
