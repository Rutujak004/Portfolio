import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogs, personalInfo } from "@/data";
import BlogContent from "@/components/BlogContent";

// ─── Static Params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.id }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.id === params.slug);
  if (!blog) return { title: "Post Not Found" };

  return {
    title: `${blog.title} — ${personalInfo.name} ${personalInfo.lastName}`,
    description: blog.excerpt,
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.id === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-24">
      {/* ── Back link ── */}
      <Link
        href="/blog"
        className="text-accent hover:underline text-sm flex items-center gap-1 w-fit transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      {/* ── Article header ── */}
      <header className="mt-8">
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-800 text-white mt-4 leading-tight">
          {blog.title}
        </h1>

        <p className="text-navy-400 text-sm mt-3">
          Published {blog.date} &middot; {blog.readTime}
        </p>

        <hr className="border-b border-navy-800 mt-6 mb-8" />
      </header>

      {/* ── Article content ── */}
      <BlogContent content={blog.content} />
    </article>
  );
}
