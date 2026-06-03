import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/content/blog";
import { blogImages } from "@/config/images";
import { formatDate } from "@/lib/utils";

function getCover(slug: string): string {
  return (
    blogImages[slug] ??
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop&q=85"
  );
}

export function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="section-padding section-light" aria-labelledby="blog-preview-heading">
      <div className="container-custom">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="blog-preview-heading" className="heading-accent !text-left">
              Latest Articles
            </h2>
            <p className="mt-2 text-text-dark-muted">
              Tips on Next.js, MERN stack, freelancing, and web performance.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-bold uppercase tracking-wider text-accent hover:underline"
          >
            View all posts →
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-2xl border border-border-light bg-white shadow-card"
            >
              <div className="relative aspect-video">
                <Image
                  src={getCover(post.slug)}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase text-accent">
                  {post.category}
                </span>
                <h3 className="mt-2 font-bold text-text-dark group-hover:text-accent">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-text-dark-muted">
                  {post.excerpt}
                </p>
                <p className="mt-3 text-xs text-text-dark-muted">
                  {formatDate(post.publishedAt)} · {post.readingTime} min read
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
