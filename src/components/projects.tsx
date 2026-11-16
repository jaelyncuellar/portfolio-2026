"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import ChapterHead from "./chapter-head";
import {
  projects,
  projectKicker,
  type Project,
  type ProjectCategory,
} from "@/data/projects";

type Filter = "all" | ProjectCategory;

const tabs: { id: Filter; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "robotics", label: "Robotics" },
  { id: "professional", label: "Professional" },
  // { id: "client", label: "Client" },
  { id: "personal", label: "Personal" },
];

function matches(p: Project, f: Filter) {
  return f === "all" || p.category === f;
}

const gradients: Record<string, string> = {
  robotics:
    "linear-gradient(135deg, #0b0f1a 0%, #3b1040 48%, #0f3d3a 100%)",
  personal:
    "linear-gradient(135deg, #1a1030 0%, #5b1450 55%, #0b0f1a 100%)",
  client:
    "linear-gradient(135deg, #0f3d3a 0%, #14324a 55%, #3b1040 100%)",
  professional:
    "linear-gradient(135deg, #0b0f1a 0%, #241445 55%, #0f3d3a 100%)",
};

function FallbackVisual({ p }: { p: Project }) {
  return (
    <div
      className="absolute inset-0 flex flex-col justify-between p-6 md:p-7 text-white overflow-hidden"
      style={{ background: gradients[p.category] ?? gradients.personal }}
    >
      <div aria-hidden className="absolute inset-0 glitter opacity-40" />
      <svg aria-hidden className="absolute inset-x-0 bottom-0 w-full opacity-25" viewBox="0 0 400 90" preserveAspectRatio="none" fill="none">
        <path d="M-10 45 C70 10, 140 75, 220 40 S350 10, 410 50" stroke="#2dd4bf" strokeWidth="1.5" />
        <path d="M-10 65 C70 30, 140 95, 220 60 S350 30, 410 70" stroke="#e93fd8" strokeWidth="1.5" />
      </svg>
      <p className="relative text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[rgb(var(--accent2))]">
        {projectKicker(p) ?? p.category}
      </p>
      <div className="relative">
        <p className="text-2xl md:text-[1.7rem] font-semibold leading-tight tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
          {p.title}
        </p>
        <p className="mt-2 text-sm text-white/65">{p.tech.slice(0, 4).join(" · ")}</p>
      </div>
    </div>
  );
}

function FeaturedCard({ p }: { p: Project }) {
  const kicker = projectKicker(p);
  const hasImage = p.images && p.images.length > 0;
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
          {hasImage ? (
            <>
              <Image
                src={p.images![0]}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
            </>
          ) : (
            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
              <FallbackVisual p={p} />
            </div>
          )}
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
            <h3 className="heading-3 tracking-tight group-hover:text-[rgb(var(--accent-hover))] transition-colors">
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
        {p.bullets && (
          <ul className="mt-3 space-y-1.5">
            {p.bullets.slice(0, 2).map((b, i) => (
              <li key={i} className="text-sm text-[rgb(var(--muted))] leading-relaxed pl-4 relative">
                <span aria-hidden className="absolute left-0 text-[rgb(var(--accent))]">✦</span>
                {b}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-3 flex items-center justify-between gap-4">
          <p className="text-sm text-[rgb(var(--faint))]">{p.tech.join(" · ")}</p>
          <div className="flex items-center gap-4 shrink-0">
            {p.site && (
              <a href={p.site} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))] transition-colors">
                Live site
                <ArrowUpRight size={14} />
              </a>
            )}
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} on GitHub`} className="text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))] transition-colors">
                <GithubIcon size={17} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = projects.filter((p) => matches(p, filter));

  return (
    <section id="projects" className="section chapter-tint">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <ChapterHead index="03" label="Experience" title="Selected work" />
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
        <p className="lead mt-5 mb-10">
          Robotics, backend systems, and client platforms - selected for
          range and depth.
        </p>

        {visible.length > 0 && (
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
            {visible.map((p) => (
              <FeaturedCard key={p.slug} p={p} />
            ))}
          </div>
        )}

        <div className="mt-14 flex flex-wrap items-center gap-6">
          <Link href="/cv" className="inline-flex items-center gap-2 font-semibold u-link">
            See how this maps to my résumé
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
