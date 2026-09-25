"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects, type Project } from "@/data/projects";

type Filter = "all" | "resume" | "client";

const tabs: { id: Filter; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "resume", label: "From the résumé" },
  { id: "client", label: "Client work" },
];

function matches(p: Project, f: Filter) {
  if (f === "all") return true;
  if (f === "resume") return p.resume;
  return !p.resume;
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-[var(--radius-lg)] border border-[rgb(var(--border))] bg-[rgb(var(--surface)/0.7)] overflow-hidden shadow-[var(--shadow-subtle)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.10)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
    >
      {p.images && p.images.length > 0 ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-[rgb(var(--border)/0.4)]">
          <Image
            src={p.images[0]}
            alt={p.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ) : (
        <div className="relative aspect-[16/10] overflow-hidden flex items-center justify-center bg-[rgb(var(--foreground))]">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(70% 90% at 50% 10%, rgba(212,164,115,0.35), transparent 70%)",
            }}
          />
          <Code2
            size={56}
            className="relative text-[rgb(var(--accent))] group-hover:scale-110 transition-transform duration-500"
            strokeWidth={1.25}
          />
          {p.resume && (
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-[rgb(var(--accent))] text-white">
              Résumé project
            </span>
          )}
        </div>
      )}

      <div className="p-7 flex flex-col flex-1">
        {(p.period || p.role) && (
          <p className="text-xs uppercase tracking-[0.18em] text-[rgb(var(--accent-hover))] font-semibold mb-2">
            {[p.role, p.period].filter(Boolean).join(" · ")}
          </p>
        )}
        <h3
          className="text-2xl font-semibold group-hover:text-[rgb(var(--accent-hover))] transition-colors"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {p.title}
        </h3>
        <p className="mt-3 text-[rgb(var(--muted))] leading-relaxed text-[0.95rem]">
          {p.description}
        </p>

        {p.bullets && (
          <ul className="mt-4 space-y-2">
            {p.bullets.map((b, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-sm text-[rgb(var(--foreground)/0.85)] leading-relaxed"
              >
                <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--accent))]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs border border-[rgb(var(--border))] bg-[rgb(var(--background)/0.6)] text-[rgb(var(--muted))]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 pt-5 border-t border-[rgb(var(--border))] flex items-center gap-4">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-[rgb(var(--accent-hover))] transition-colors"
            >
              <GithubIcon size={16} />
              Code
            </a>
          )}
          {p.images && p.images.length > 0 && (
            <Link
              href={`/projects/${p.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-[rgb(var(--accent-hover))] transition-colors"
            >
              Case study
              <ArrowUpRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = projects.filter((p) => matches(p, filter));

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label mb-4">03 — Selected work</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="heading-2 font-semibold mb-4">Projects</h2>
            <p className="text-[rgb(var(--muted))] max-w-2xl">
              Engineering projects straight from my résumé, plus shipped client
              work.
            </p>
          </div>
          <div className="flex gap-2 p-1.5 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface)/0.6)] w-fit">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setFilter(t.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === t.id
                    ? "bg-[rgb(var(--foreground))] text-[rgb(var(--background))]"
                    : "text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
