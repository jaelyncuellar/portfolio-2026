"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { BlogPost } from "@/data/blog";

const filters = ["All", "Tech", "Health", "Other"] as const;
type Filter = (typeof filters)[number];

export default function BlogArchive({ posts }: { posts: BlogPost[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const visiblePosts = useMemo(
    () =>
      filter === "All"
        ? posts
        : posts.filter((post) => post.category === filter),
    [filter, posts],
  );

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-2" aria-label="Filter posts">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              filter === item
                ? "border-[rgb(var(--accent))] bg-[rgb(var(--accent)/0.14)] text-[rgb(var(--foreground))]"
                : "hairline text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {visiblePosts.length ? (
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {visiblePosts.map((post) => (
            <article
              key={post.id}
              className="panel-soft flex h-full flex-col p-6 md:p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="section-label">{post.category}</span>
                <time
                  className="text-sm text-[rgb(var(--faint))]"
                  dateTime={post.published_at ?? post.created_at}
                >
                  {new Date(post.published_at ?? post.created_at).toLocaleDateString(
                    "en",
                    { year: "numeric", month: "long", day: "numeric" },
                  )}
                </time>
              </div>
              <h2
                className="mt-4 text-2xl font-semibold leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors hover:text-[rgb(var(--accent-hover))]"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-[rgb(var(--muted))]">
                {post.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border hairline px-2.5 py-1 text-xs text-[rgb(var(--faint))]"
                  >
                    {tag}
                  </span>
                ))}
                <Link
                  href={`/blog/${post.slug}`}
                  className="u-link ml-auto text-sm font-medium"
                >
                  Read essay
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-[var(--radius-lg)] border hairline bg-[rgb(var(--surface))] px-6 py-12 text-center">
          <p className="heading-3">Nothing here just yet.</p>
          <p className="mt-2 text-[rgb(var(--muted))]">
            {filter === "All"
              ? "New essays are on their way. Check back soon."
              : `No ${filter.toLowerCase()} essays yet. Try another topic.`}
          </p>
        </div>
      )}
    </>
  );
}
