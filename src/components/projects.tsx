"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects, type Project } from "@/data/projects";

type Filter = "all" | "resume" | "client";

const tabs: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "resume", label: "Résumé" },
  { id: "client", label: "Client work" },
];

function matches(p: Project, f: Filter) {
  if (f === "all") return true;
  if (f === "resume") return p.resume;
  return !p.resume;
}

function ProjectRow({ p }: { p: Project }) {
  return (
    <article className="group border-b hairline py-7 grid gap-3 md:grid-cols-[1fr_auto] md:gap-8 items-baseline">
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3
            className="text-[1.45rem] font-semibold tracking-tight group-hover:text-[rgb(var(--accent-hover))] transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {p.images && p.images.length > 0 ? (
              <Link href={`/projects/${p.slug}`}>{p.title}</Link>
            ) : (
              p.title
            )}
          </h3>
          {p.resume && (
            <span className="text-[0.7rem] uppercase tracking-[0.14em] text-[rgb(var(--accent-hover))] font-semibold">
              Résumé
            </span>
          )}
        </div>
        <p className="mt-1.5 text-[0.95rem] text-[rgb(var(--muted))] leading-relaxed max-w-2xl">
          {p.description}
        </p>
        <p className="mt-2.5 text-sm text-[rgb(var(--faint))]">
          {p.tech.join(" · ")}
        </p>
      </div>

      <div className="flex md:flex-col items-start gap-3 md:gap-2 md:text-right text-sm shrink-0">
        {(p.period || p.role) && (
          <p className="text-[rgb(var(--faint))]">
            {[p.role, p.period].filter(Boolean).join(" · ")}
          </p>
        )}
        <span className="flex gap-4">
          {p.images && p.images.length > 0 && (
            <Link
              href={`/projects/${p.slug}`}
              className="inline-flex items-center gap-1 font-medium u-link"
            >
              Case study
              <ArrowUpRight size={15} />
            </Link>
          )}
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))] transition-colors"
            >
              <GithubIcon size={15} />
              Code
            </a>
          )}
        </span>
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = projects.filter((p) => matches(p, filter));

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label mb-4">03 · Work</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <h2 className="heading-2 mb-4">Selected projects</h2>
            <p className="text-[rgb(var(--muted))] max-w-2xl">
              Engineering work from my résumé, plus shipped client projects.
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setFilter(t.id)}
                aria-pressed={filter === t.id}
                className={`pb-1 border-b transition-colors ${
                  filter === t.id
                    ? "border-[rgb(var(--foreground))] font-semibold text-[rgb(var(--foreground))]"
                    : "border-transparent text-[rgb(var(--faint))] hover:text-[rgb(var(--foreground))]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t hairline">
          {visible.map((p) => (
            <ProjectRow key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
