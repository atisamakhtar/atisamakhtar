"use client";

import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

interface BlogPostContentProps {
  content: string;
}

/** Renders markdown-like content with Shiki highlighting for fenced code blocks */
export function BlogPostContent({ content }: BlogPostContentProps) {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    const render = async () => {
      const parts = content.split(/```(\w+)?\n([\s\S]*?)```/g);
      let result = "";

      for (let i = 0; i < parts.length; i++) {
        if (i % 3 === 0) {
          result += parts[i]
            ?.replace(/^## (.+)$/gm, '<h2 class="mt-8 text-2xl font-bold">$1</h2>')
            .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold">$1</h1>')
            .replace(/\n\n/g, "</p><p class='mt-4 text-text-secondary leading-relaxed'>")
            ?? "";
        } else if (i % 3 === 2) {
          const lang = parts[i - 1] || "typescript";
          const code = parts[i] ?? "";
          try {
            const highlighted = await codeToHtml(code.trim(), {
              lang,
              theme: "github-dark",
            });
            result += `<pre class="mt-4 overflow-x-auto rounded-lg">${highlighted}</pre>`;
          } catch {
            result += `<pre class="mt-4 rounded-lg bg-bg-secondary p-4"><code>${code}</code></pre>`;
          }
        }
      }

      setHtml(`<div class="prose-invert mt-8"><p class='text-text-secondary leading-relaxed'>${result}</p></div>`);
    };
    void render();
  }, [content]);

  return (
    <div
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
