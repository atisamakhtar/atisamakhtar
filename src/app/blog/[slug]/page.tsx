import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogEnabled } from "@/config/features";
import { blogPosts, getPostBySlug } from "@/lib/content/blog";
import { createMetadata } from "@/lib/seo/metadata";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildWebPageSchema,
  combineSchemas,
} from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
import { BlogPostContent } from "@/components/blog/BlogPostContent";
import { formatDate } from "@/lib/utils";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  if (!blogEnabled) return [];
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt.slice(0, 160),
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    keywords: post.tags,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  if (!blogEnabled) notFound();

  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const schemas = combineSchemas(
    buildWebPageSchema(post.title, `/blog/${slug}`, post.excerpt),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${slug}` },
    ]),
    buildArticleSchema(post),
  );

  return (
    <>
      <JsonLd data={schemas} />
      <article className="section-padding pt-32">
        <div className="container-custom max-w-3xl">
          <header>
            <span className="font-mono text-sm text-accent">{post.category}</span>
            <h1 className="mt-2 text-4xl font-bold md:text-5xl">{post.title}</h1>
            <p className="mt-4 font-mono text-sm text-text-muted">
              {formatDate(post.publishedAt)} · {post.readingTime} min read
            </p>
          </header>
          <BlogPostContent content={post.content} />
          <footer className="mt-12 border-t border-white/10 pt-8">
            <h2 className="text-lg font-semibold">Related Posts</h2>
            <ul className="mt-4 space-y-2" role="list">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/blog/${r.slug}`} className="text-accent hover:underline">
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </footer>
        </div>
      </article>
    </>
  );
}
