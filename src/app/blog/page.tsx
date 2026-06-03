import Image from "next/image";
import Link from "next/link";
import { blogPosts, getFeaturedPost } from "@/lib/content/blog";
import { blogImages } from "@/config/images";
import { formatDate } from "@/lib/utils";

function getCover(slug: string): string {
  return (
    blogImages[slug] ??
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop&q=85"
  );
}

export default function BlogPage() {
  const featured = getFeaturedPost();
  const rest = blogPosts.filter((p) => p.slug !== featured?.slug);

  return (
    <section className="section-padding pt-32">
      <div className="container-custom">
        <h1 className="text-5xl font-bold md:text-7xl">
          <span className="text-gradient">Blog</span>
        </h1>
        <p className="mt-4 max-w-xl text-text-secondary">
          Deep dives on Next.js, animation, 3D on the web, and shipping production-grade
          products.
        </p>

        {featured && (
          <article className="group mt-12 overflow-hidden rounded-2xl border border-white/10">
            <div className="relative aspect-[21/9] md:aspect-[3/1]">
              <Image
                src={getCover(featured.slug)}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <span className="font-mono text-xs uppercase text-accent">Featured</span>
                <h2 className="mt-2 text-2xl font-bold md:text-4xl">
                  <Link href={`/blog/${featured.slug}`} className="hover:text-accent">
                    {featured.title}
                  </Link>
                </h2>
                <p className="mt-3 max-w-2xl text-text-secondary">{featured.excerpt}</p>
                <p className="mt-4 font-mono text-sm text-text-muted">
                  {formatDate(featured.publishedAt)} · {featured.readingTime} min read
                </p>
              </div>
            </div>
          </article>
        )}

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-xl border border-white/10 bg-surface"
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
              <div className="p-6">
                <span className="font-mono text-xs text-accent">{post.category}</span>
                <h2 className="mt-2 text-xl font-semibold">
                  <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-text-secondary line-clamp-3">
                  {post.excerpt}
                </p>
                <p className="mt-4 font-mono text-xs text-text-muted">
                  {formatDate(post.publishedAt)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
