"use client";

import Link from "next/link";
import { useCallback, useEffect, useState, type FormEvent } from "react";
import { ArrowLeft, LogOut, Plus, Trash2 } from "lucide-react";
import type { BlogPost } from "@/data/blog";
import { getSupabaseClient } from "@/lib/supabase";

type Draft = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string;
};

const emptyDraft: Draft = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  tags: "",
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function BlogAdmin() {
  const supabase = getSupabaseClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(Boolean(supabase));
  const [signingIn, setSigningIn] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [saving, setSaving] = useState(false);

  const loadPosts = useCallback(async () => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("updated_at", { ascending: false });

    if (error) {
      setErrorMessage(`Could not load your posts: ${error.message}`);
      return;
    }
    setPosts(data);
  }, [supabase]);

  useEffect(() => {
    if (!supabase) return;

    let active = true;
    supabase.auth.getSession().then(({ data, error }) => {
      if (!active) return;
      if (error) setErrorMessage(`Could not check sign-in: ${error.message}`);
      setUserId(data.session?.user.id ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserId(session?.user.id ?? null);
      setMessage("");
      setErrorMessage("");
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  useEffect(() => {
    if (!supabase || !userId) return;
    let active = true;

    supabase
      .from("blog_posts")
      .select("*")
      .order("updated_at", { ascending: false })
      .then(({ data, error }) => {
        if (!active) return;
        if (error) {
          setErrorMessage(`Could not load your posts: ${error.message}`);
          return;
        }
        setPosts(data);
      });

    return () => {
      active = false;
    };
  }, [supabase, userId]);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!supabase) return;

    setSigningIn(true);
    setMessage("");
    setErrorMessage("");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setSigningIn(false);
    if (error) {
      setErrorMessage(`Could not sign in: ${error.message}`);
      return;
    }
    setPassword("");
  }

  function startNewPost() {
    setEditing(null);
    setDraft(emptyDraft);
    setMessage("");
    setErrorMessage("");
  }

  function startEditing(post: BlogPost) {
    setEditing(post);
    setDraft({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      tags: post.tags.join(", "),
    });
    setMessage("");
    setErrorMessage("");
  }

  async function savePost(published: boolean) {
    if (!supabase || !userId) return;
    setSaving(true);
    setMessage("");
    setErrorMessage("");

    const now = new Date().toISOString();
    const payload = {
      title: draft.title.trim(),
      slug: slugify(draft.slug || draft.title),
      excerpt: draft.excerpt.trim(),
      content: draft.content.trim(),
      tags: draft.tags
        .split(",")
        .map((tag) => tag.trim().replace(/^#/, ""))
        .filter(Boolean),
      published,
      published_at: published
        ? editing?.published_at ?? now
        : null,
      updated_at: now,
    };

    const result = editing
      ? await supabase
          .from("blog_posts")
          .update(payload)
          .eq("id", editing.id)
          .select()
          .single()
      : await supabase
          .from("blog_posts")
          .insert({ ...payload, author_id: userId })
          .select()
          .single();

    setSaving(false);
    if (result.error) {
      setErrorMessage(`Could not save your post: ${result.error.message}`);
      return;
    }

    setMessage(published ? "Your essay is published." : "Draft saved.");
    setEditing(result.data);
    setDraft({
      title: result.data.title,
      slug: result.data.slug,
      excerpt: result.data.excerpt,
      content: result.data.content,
      tags: result.data.tags.join(", "),
    });
    await loadPosts();
  }

  async function deletePost(post: BlogPost) {
    if (!supabase || !window.confirm(`Delete "${post.title}"? This can't be undone.`)) {
      return;
    }
    setErrorMessage("");
    const { error } = await supabase
      .from("blog_posts")
      .delete()
      .eq("id", post.id);

    if (error) {
      setErrorMessage(`Could not delete your post: ${error.message}`);
      return;
    }
    if (editing?.id === post.id) startNewPost();
    setMessage("Post deleted.");
    await loadPosts();
  }

  async function signOut() {
    if (!supabase) return;
    const { error } = await supabase.auth.signOut();
    if (error) setErrorMessage(`Could not sign out: ${error.message}`);
  }

  return (
    <main className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      <header className="border-b hairline">
        <div className="container flex h-[72px] items-center justify-between">
          <Link href="/blog" className="text-sm text-[rgb(var(--muted))] hover:text-white">
            <span className="inline-flex items-center gap-2">
              <ArrowLeft size={16} /> Back to blog
            </span>
          </Link>
          {userId && (
            <button
              onClick={signOut}
              className="inline-flex items-center gap-2 text-sm text-[rgb(var(--muted))] hover:text-white"
            >
              <LogOut size={15} /> Sign out
            </button>
          )}
        </div>
      </header>

      <section className="container max-w-4xl py-12 md:py-16">
        <p className="section-label mb-3">Private author area</p>
        <h1 className="heading-2">Blog studio</h1>

        {!supabase ? (
          <div className="panel-soft mt-8 p-6">
            <h2 className="heading-3">Connect Supabase to get started</h2>
            <p className="mt-3 text-[rgb(var(--muted))]">
              Add your Supabase project URL and anon key to the local
              environment, then deploy those same values as site environment
              variables. Setup steps are in the project README.
            </p>
          </div>
        ) : loading ? (
          <p className="mt-8 text-[rgb(var(--muted))]" role="status">
            Checking sign-in…
          </p>
        ) : !userId ? (
          <form onSubmit={signIn} className="panel-soft mt-8 max-w-xl p-6 md:p-8">
            <h2 className="heading-3">Sign in to write</h2>
            <p className="mt-2 text-sm text-[rgb(var(--muted))]">
              Sign in with your author email and password.
            </p>
            <label htmlFor="author-email" className="mt-6 block text-sm font-medium">
              Email address
            </label>
            <input
              id="author-email"
              required
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-xl border hairline bg-[rgb(var(--background))] px-4 py-3 outline-none focus:border-[rgb(var(--accent))]"
            />
            <label htmlFor="author-password" className="mt-5 block text-sm font-medium">
              Password
            </label>
            <input
              id="author-password"
              required
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-xl border hairline bg-[rgb(var(--background))] px-4 py-3 outline-none focus:border-[rgb(var(--accent))]"
            />
            <button
              type="submit"
              disabled={signingIn}
              className="mt-5 rounded-full bg-[rgb(var(--accent))] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[rgb(var(--accent-hover))] disabled:opacity-60"
            >
              {signingIn ? "Signing in…" : "Sign in"}
            </button>
          </form>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)]">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                void savePost(false);
              }}
              className="panel-soft p-6 md:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="heading-3">
                  {editing ? "Edit essay" : "Write an essay"}
                </h2>
                {editing && (
                  <button
                    type="button"
                    onClick={startNewPost}
                    className="text-sm text-[rgb(var(--muted))] hover:text-white"
                  >
                    New post
                  </button>
                )}
              </div>

              <label htmlFor="post-title" className="mt-6 block text-sm font-medium">
                Title
              </label>
              <input
                id="post-title"
                required
                maxLength={160}
                value={draft.title}
                onChange={(event) => {
                  const title = event.target.value;
                  setDraft((current) => ({
                    ...current,
                    title,
                    slug: editing ? current.slug : slugify(title),
                  }));
                }}
                className="mt-2 w-full rounded-xl border hairline bg-[rgb(var(--background))] px-4 py-3 outline-none focus:border-[rgb(var(--accent))]"
              />

              <label htmlFor="post-slug" className="mt-5 block text-sm font-medium">
                URL slug
              </label>
              <input
                id="post-slug"
                required
                value={draft.slug}
                onChange={(event) =>
                  setDraft((current) => ({
                    ...current,
                    slug: slugify(event.target.value),
                  }))
                }
                className="mt-2 w-full rounded-xl border hairline bg-[rgb(var(--background))] px-4 py-3 outline-none focus:border-[rgb(var(--accent))]"
              />

              <label htmlFor="post-excerpt" className="mt-5 block text-sm font-medium">
                Short intro
              </label>
              <textarea
                id="post-excerpt"
                required
                maxLength={300}
                rows={3}
                value={draft.excerpt}
                onChange={(event) =>
                  setDraft((current) => ({ ...current, excerpt: event.target.value }))
                }
                className="mt-2 w-full rounded-xl border hairline bg-[rgb(var(--background))] px-4 py-3 outline-none focus:border-[rgb(var(--accent))]"
              />

              <div className="mt-5">
                  <label htmlFor="post-tags" className="block text-sm font-medium">
                    Tags <span className="text-[rgb(var(--faint))]">(comma-separated)</span>
                  </label>
                  <input
                    id="post-tags"
                    value={draft.tags}
                    onChange={(event) =>
                      setDraft((current) => ({ ...current, tags: event.target.value }))
                    }
                    placeholder="AI, robotics, research"
                    className="mt-2 w-full rounded-xl border hairline bg-[rgb(var(--background))] px-4 py-3 outline-none focus:border-[rgb(var(--accent))]"
                  />
              </div>

              <label htmlFor="post-content" className="mt-5 block text-sm font-medium">
                Essay <span className="text-[rgb(var(--faint))]">(Markdown supported)</span>
              </label>
              <textarea
                id="post-content"
                required
                rows={16}
                value={draft.content}
                onChange={(event) =>
                  setDraft((current) => ({ ...current, content: event.target.value }))
                }
                className="mt-2 w-full rounded-xl border hairline bg-[rgb(var(--background))] px-4 py-3 font-mono text-sm leading-relaxed outline-none focus:border-[rgb(var(--accent))]"
              />
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-full border hairline px-5 py-2.5 font-semibold transition-colors hover:bg-white/5 disabled:opacity-60"
                >
                  {saving ? "Saving…" : "Save draft"}
                </button>
                <button
                  type="button"
                  disabled={saving}
                  onClick={() => void savePost(true)}
                  className="rounded-full bg-[rgb(var(--accent))] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[rgb(var(--accent-hover))] disabled:opacity-60"
                >
                  {saving ? "Saving…" : editing?.published ? "Update & publish" : "Publish essay"}
                </button>
              </div>
            </form>

            <aside>
              <h2 className="heading-3 mb-4">Your posts</h2>
              {posts.length ? (
                <ul className="space-y-3">
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="rounded-2xl border hairline bg-[rgb(var(--surface))] p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => startEditing(post)}
                          className="text-left font-medium hover:text-[rgb(var(--accent-hover))]"
                        >
                          {post.title}
                        </button>
                        <button
                          type="button"
                          onClick={() => void deletePost(post)}
                          aria-label={`Delete ${post.title}`}
                          className="text-[rgb(var(--faint))] hover:text-red-300"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="mt-2 text-xs text-[rgb(var(--faint))]">
                        {post.published ? "Published" : "Draft"}
                        {post.tags.length
                          ? ` · ${post.tags.map((tag) => `#${tag}`).join(" ")}`
                          : ""}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-[rgb(var(--muted))]">
                  Your saved essays will show up here.
                </p>
              )}
              <button
                type="button"
                onClick={startNewPost}
                className="mt-4 inline-flex items-center gap-2 text-sm text-[rgb(var(--accent-hover))] hover:text-white"
              >
                <Plus size={16} /> Start a new essay
              </button>
            </aside>
          </div>
        )}

        {(message || errorMessage) && (
          <p
            role={errorMessage ? "alert" : "status"}
            className={`mt-6 text-sm ${
              errorMessage ? "text-red-300" : "text-[rgb(var(--accent2))]"
            }`}
          >
            {errorMessage || message}
          </p>
        )}
      </section>
    </main>
  );
}
