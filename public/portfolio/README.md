# Portfolio assets

Drop project previews here. Paths match `src/data/projects.ts`.

## Recommended formats

| Use case | Format | Why |
|----------|--------|-----|
| Full landing page scroll (Behance-style) | **WebP or JPG** screenshots | Fast, sharp, easy to lazy-load in the modal |
| Slide decks / pitch PDFs | **PDF** | Use when you already have a presentation file |
| Thumbnails | **WebP** (~1200×1500) | Smaller files, great for cards |

**Tip:** For most web projects, export 3–5 full-page PNG/WebP screenshots (hero, features, mobile, etc.) and set `previewType: "images"` in `src/data/projects.ts`.

## Folder layout

```text
public/portfolio/
├── wordpress/
│   ├── barclay-thumb.webp
│   └── barclay-01.webp … barclay-04.webp
├── nextjs/
├── react/
├── fullstack/
├── ecommerce/
└── custom/
    └── find-a-contractor.pdf
```

Update `thumbnail` and `previewFiles` in `src/data/projects.ts` when you add real files.
