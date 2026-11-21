import type { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { getSupabaseClient } from "@/lib/supabase";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const supabase = getSupabaseClient();
  if (!supabase) return { title: "Essay | Jaelyn Cuellar" };

  const { data } = await supabase
    .from("blog_posts")
    .select("title, excerpt")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  return data
    ? { title: `${data.title} | Jaelyn Cuellar`, description: data.excerpt }
    : { title: "Essay | Jaelyn Cuellar" };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const supabase = getSupabaseClient();
  if (!supabase) notFound();

  const { data: post, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error) throw new Error(`Could not load blog post: ${error.message}`);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      <Navbar />
      <article className="container max-w-3xl pb-24 pt-32 md:pt-40">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-sm text-[rgb(var(--muted))] transition-colors hover:text-[rgb(var(--foreground))]"
        >
          <ArrowLeft size={16} /> All essays
        </Link>
        <p className="section-label mb-3">{post.category}</p>
        <h1 className="heading-1">{post.title}</h1>
        <p className="mt-5 text-lg text-[rgb(var(--muted))]">{post.excerpt}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[rgb(var(--faint))]">
          <time dateTime={post.published_at ?? post.created_at}>
            {new Date(post.published_at ?? post.created_at).toLocaleDateString(
              "en",
              { year: "numeric", month: "long", day: "numeric" },
            )}
          </time>
          {post.tags.length > 0 && <span aria-hidden="true">·</span>}
          {post.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
        <div className="divider-wave my-10" />
        <div className="blog-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
      <Footer />
    </main>
  );
}
