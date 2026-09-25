"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import {
  projects,
  projectKicker,
  type Project,
  type ProjectCategory,
} from "@/data/projects";

type Filter = "all" | ProjectCategory;

const tabs: { id: Filter; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "professional", label: "Professional" },
  { id: "client", label: "Client" },
  { id: "personal", label: "Personal" },
];

function matches(p: Project, f: Filter) {
  return f === "all" || p.category === f;
}

function FeaturedCard({ p }: { p: Project }) {
  const kicker = projectKicker(p);
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link
        href={`/projects/${p.slug}`}
        className="block relative overflow-hidden rounded-[var(--radius-md)] border hairline bg-[rgb(var(--ink))]"
        aria-label={`${p.title} case study`}
      >
        <div className="relative aspect-[16/10]">
          <Image
            src={p.images![0]}
            alt={p.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
        </div>
        <span className="absolute bottom-5 right-5 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 text-sm font-semibold text-[rgb(var(--ink))] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          Case study
          <ArrowUpRight size={15} />
        </span>
      </Link>

      <div className="pt-5">
        {kicker && <p className="section-label mb-2">{kicker}</p>}
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <Link href={`/projects/${p.slug}`}>
            <h3
              className="heading-3 tracking-tight group-hover:text-[rgb(var(--accent-hover))] transition-colors"
            >
              {p.title}
            </h3>
          </Link>
          {(p.period || p.role) && (
            <p className="text-sm text-[rgb(var(--faint))]">
              {[p.role, p.period].filter(Boolean).join(" · ")}
            </p>
          )}
        </div>
        <p className="mt-2 text-[0.95rem] text-[rgb(var(--muted))] leading-relaxed">
          {p.description}
        </p>
        <div className="mt-3 flex items-center justify-between gap-4">
          <p className="text-sm text-[rgb(var(--faint))]">{p.tech.join(" · ")}</p>
          <div className="flex items-center gap-4 shrink-0">
            {p.site && (
              <a
                href={p.site}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))] transition-colors"
              >
                Live site
                <ArrowUpRight size={14} />
              </a>
            )}
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.title} on GitHub`}
                className="text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))] transition-colors"
              >
                <GithubIcon size={17} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CompactRow({ p }: { p: Project }) {
  return (
    <article className="group border-b hairline py-6 grid gap-2 md:grid-cols-[1fr_auto] md:gap-8 items-baseline">
      <div className="min-w-0">
        <h3 className="text-xl font-semibold tracking-tight">
          {p.title}
        </h3>
        <p className="mt-1 text-[0.95rem] text-[rgb(var(--muted))] leading-relaxed max-w-2xl">
          {p.description}
        </p>
        <p className="mt-2 text-sm text-[rgb(var(--faint))]">
          {p.tech.join(" · ")}
        </p>
      </div>
      <div className="flex md:flex-col items-start gap-2 md:text-right text-sm shrink-0">
        {(p.period || p.role) && (
          <p className="text-[rgb(var(--faint))]">
            {[p.role, p.period].filter(Boolean).join(" · ")}
          </p>
        )}
        {p.site && (
          <a
            href={p.site}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))] transition-colors"
          >
            Live site
            <ArrowUpRight size={14} />
          </a>
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
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = projects.filter((p) => matches(p, filter));
  const featured = visible.filter((p) => p.images && p.images.length > 0);
  const rest = visible.filter((p) => !p.images || p.images.length === 0);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4">
          <div>
            <p className="section-label mb-4">03 · Work</p>
            <h2 className="heading-2">Selected work</h2>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-sm">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setFilter(t.id)}
                aria-pressed={filter === t.id}
                className={`pb-1 border-b-2 transition-colors ${
                  filter === t.id
                    ? "border-[rgb(var(--accent))] font-bold text-[rgb(var(--foreground))]"
                    : "border-transparent text-[rgb(var(--faint))] hover:text-[rgb(var(--foreground))]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <p className="text-[rgb(var(--muted))] max-w-2xl mb-12">
          Professional experience, client work, and independent engineering —
          each with the story behind the build.
        </p>

        {featured.length > 0 && (
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
            {featured.map((p) => (
              <FeaturedCard key={p.slug} p={p} />
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <div className={featured.length > 0 ? "mt-16" : ""}>
            <p className="section-label section-label--muted mb-2">
              More engineering
            </p>
            <div className="border-t hairline">
              {rest.map((p) => (
                <CompactRow key={p.slug} p={p} />
              ))}
            </div>
          </div>
        )}

        <Link
          href="/cv"
          className="mt-12 inline-flex items-center gap-2 font-semibold u-link"
        >
          See how this maps to my résumé
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
