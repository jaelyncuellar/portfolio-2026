import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BlogArchive from "@/components/blog-archive";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { BlogPost } from "@/data/blog";
import { getSupabaseClient } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | Jaelyn Cuellar",
  description:
    "Notes and articles on technology, health, and everything in between.",
};

export default async function BlogPage() {
  const supabase = getSupabaseClient();
  let posts: BlogPost[] = [];

  if (supabase) {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("published", true)
      .order("published_at", { ascending: false });

    if (error) throw new Error(`Could not load blog posts: ${error.message}`);
    posts = data;
  }

  return (
    <main className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      <Navbar />
      <section className="container max-w-5xl pb-24 pt-32 md:pt-40">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-label mb-3">Musings</p>
            <h1 className="heading-1">Blog</h1>
            <p className="lead mt-5">
            A space for all the things I find interesting or simply worth sharing.
            </p>
          </div>
          <Link
            href="/blog/admin"
            className="inline-flex items-center gap-1.5 text-sm text-[rgb(var(--muted))] transition-colors hover:text-[rgb(var(--foreground))]"
          >
            Author sign in <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="divider-wave mt-10" />
        <BlogArchive posts={posts} />
        {!supabase && (
          <p className="mt-6 text-center text-sm text-[rgb(var(--faint))]">
            Blog publishing is being set up. Please check back soon.
          </p>
        )}
      </section>
      <Footer />
    </main>
  );
}
