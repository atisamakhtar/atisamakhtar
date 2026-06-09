"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const ReactPdfDocument = dynamic(
  () => import("./PdfViewerInner").then((m) => m.PdfViewerInner),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[320px] items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm text-white/60">
        Loading PDF preview…
      </div>
    ),
  },
);

interface PdfViewerProps {
  file: string;
}

export function PdfViewer({ file }: PdfViewerProps) {
  const [useFallback, setUseFallback] = useState(false);

  if (useFallback) {
    return (
      <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
        <iframe
          src={`${file}#toolbar=0&navpanes=0`}
          title="Project PDF presentation"
          className="h-[70vh] w-full"
        />
      </div>
    );
  }

  return <ReactPdfDocument file={file} onFallback={() => setUseFallback(true)} />;
}
