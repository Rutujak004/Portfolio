import type { Metadata } from "next";
import Link from "next/link";
import { blogs } from "@/data";
import { personalInfo } from "@/data";

export const metadata: Metadata = {
  title: "Blog — Rutuja Patil | Full-Stack & NLP Engineering",
  description:
    "Thoughts on full-stack development, NLP, and engineering.",
};

export default function BlogPage() {
  const featuredPost = blogs.find((b) => b.featured) ?? blogs[0];

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      {/* ── Page header ── */}
      <span className="section-label">Writing</span>
      <h1 className="font-display text-4xl font-800 text-white">Blog</h1>
      <p className="text-navy-400 mt-3 max-w-2xl leading-relaxed">
        Lessons from building real projects — auth flows, Django models, NLP pipelines, and design systems.
      </p>

      {/* ── Featured post ── */}
      {featuredPost && (
        <Link href={`/blog/${featuredPost.id}`} className="block mt-12 group">
          <article className="card relative">
            {/* Featured badge */}
            <div className="absolute top-4 left-4">
              <span className="tag-accent">Featured</span>
            </div>

            <div className="mt-6">
              {/* Title */}
              <h2 className="text-white font-700 text-2xl group-hover:text-accent transition-colors leading-snug">
                {featuredPost.title}
              </h2>

              {/* Excerpt */}
              <p className="text-navy-400 mt-3 leading-relaxed">{featuredPost.excerpt}</p>

              {/* Meta */}
              <div className="mt-4 flex gap-4 flex-wrap">
                <span className="text-navy-500 text-sm">{featuredPost.date}</span>
                <span className="text-navy-500 text-sm">{featuredPost.readTime}</span>
              </div>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {featuredPost.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              {/* CTA */}
              <span className="text-accent text-sm font-500 hover:underline mt-4 inline-block">
                Read Post →
              </span>
            </div>
          </article>
        </Link>
      )}

      {/* ── All posts grid ── */}
      <div className="mt-16">
        <h2 className="text-white font-700 text-xl mb-6">All Posts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.id}`}
              className="block group"
              id={`blog-card-${blog.id}`}
            >
              <article className="card h-full flex flex-col">
                {/* Title */}
                <h3 className="text-white font-600 group-hover:text-accent transition-colors leading-snug">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-navy-400 text-sm mt-2 leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Meta */}
                <div className="mt-3 flex gap-3 flex-wrap">
                  <span className="text-navy-500 text-xs">{blog.date}</span>
                  <span className="text-navy-500 text-xs">{blog.readTime}</span>
                </div>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                {/* Read link */}
                <span className="text-accent text-xs mt-4 inline-block hover:underline mt-auto">
                  Read →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
