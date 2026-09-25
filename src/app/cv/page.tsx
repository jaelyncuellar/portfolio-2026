"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Printer } from "lucide-react";
import { profile } from "@/data/profile";
import {
  backendExperienceOrder,
  experiences,
  type Experience,
} from "@/data/experience";
import {
  skillGroupsBackend,
  skillGroupsFullStack,
} from "@/data/skills";
import { education } from "@/data/education";
import { projects } from "@/data/projects";

type Variant = "fullstack" | "backend";

const TITLES: Record<Variant, string> = {
  fullstack: "Full-Stack Software Engineer",
  backend: "Backend Software Engineer",
};

function orderExperiences(variant: Variant): Experience[] {
  if (variant === "backend") {
    const rank = new Map(backendExperienceOrder.map((k, i) => [k, i]));
    return [...experiences].sort(
      (a, b) =>
        (rank.get(`${a.title}|${a.company}`) ?? 99) -
        (rank.get(`${b.title}|${b.company}`) ?? 99)
    );
  }
  return experiences;
}

function CvSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="cv-section">
      <h2 className="cv-h2">{title}</h2>
      {children}
    </section>
  );
}

export default function CvPage() {
  const [variant, setVariant] = useState<Variant>("fullstack");
  const skills =
    variant === "backend" ? skillGroupsBackend : skillGroupsFullStack;
  const ordered = useMemo(() => orderExperiences(variant), [variant]);
  const relevant = ordered.slice(0, 3);
  const additional = ordered.slice(3);
  const resumeProjects = projects.filter((p) => p.resume);

  const bulletsFor = (e: Experience) =>
    variant === "backend" ? e.bulletsBackend ?? e.bullets : e.bullets;

  return (
    <main className="cv-page min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      {/* Toolbar — hidden when printing */}
      <div className="no-print sticky top-0 z-50 border-b border-[rgb(var(--border))] bg-[rgb(var(--background)/0.9)] backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to site
          </Link>

          <div
            role="tablist"
            aria-label="CV edition"
            className="flex gap-1 p-1 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface)/0.7)]"
          >
            {(
              [
                { id: "fullstack", label: "Full-Stack edition" },
                { id: "backend", label: "Backend edition" },
              ] as { id: Variant; label: string }[]
            ).map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={variant === t.id}
                onClick={() => setVariant(t.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  variant === t.id
                    ? "bg-[rgb(var(--foreground))] text-[rgb(var(--background))]"
                    : "text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[rgb(var(--accent))] text-white text-sm font-medium hover:bg-[rgb(var(--accent-hover))] transition-colors"
          >
            <Printer size={16} />
            Print / Save PDF
          </button>
        </div>
      </div>

      {/* CV sheet */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="no-print text-center text-sm text-[rgb(var(--muted))] mb-8 max-w-xl mx-auto">
          This page mirrors my résumé exactly. Switch editions above, then use
          <span className="font-medium text-[rgb(var(--foreground))]">
            {" "}
            Print / Save PDF{" "}
          </span>
          for a clean one-page document.
        </p>

        <article className="cv-sheet rounded-2xl border border-[rgb(var(--border))] bg-white shadow-[var(--shadow-subtle)] px-8 py-10 md:px-14 md:py-12">
          <header className="text-center mb-6">
            <h1 className="text-[2rem] font-bold tracking-wide text-neutral-900">
              {profile.name}
            </h1>
            <p className="text-[1.05rem] font-semibold text-neutral-700 mt-1">
              {TITLES[variant]}
            </p>
            <p className="text-[0.85rem] text-neutral-600 mt-2">
              {profile.email} ·{" "}
              <span className="text-neutral-800">jaelyncuellar.com</span> ·{" "}
              linkedin.com/in/jaelyncuellar · github.com/jaelyncuellar
            </p>
          </header>

          <CvSection title="Technical Skills">
            <div className="cv-skills">
              {Object.entries(skills).map(([cat, list]) => (
                <p key={cat}>
                  <span className="cv-cat">{cat}:</span> {list.join(", ")}
                </p>
              ))}
            </div>
          </CvSection>

          <CvSection title="Relevant Experience">
            {relevant.map((e) => (
              <div key={`${e.title}-${e.company}`} className="cv-entry">
                <div className="cv-row">
                  <span className="cv-left">
                    {e.title} — {e.company}
                  </span>
                  <span className="cv-right">
                    {e.period} · {e.location}
                  </span>
                </div>
                <ul className="cv-list">
                  {bulletsFor(e).map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CvSection>

          <CvSection title="Projects">
            {resumeProjects.map((p) => (
              <div key={p.slug} className="cv-entry">
                <div className="cv-row">
                  <span className="cv-left">
                    {p.title} — {p.role}
                  </span>
                  <span className="cv-right">{p.period}</span>
                </div>
                <p className="cv-sub">{p.tech.join(", ")}</p>
                <ul className="cv-list">
                  {p.bullets?.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CvSection>

          <CvSection title="Education">
            <div className="cv-row">
              <span className="cv-left">
                {education.school} — {education.degree}, {education.minor}
              </span>
              <span className="cv-right">
                {education.period} · {education.location}
              </span>
            </div>
            <p className="cv-edu-line">
              {education.gpa} · {education.honors.join(" · ")}
            </p>
            <p className="cv-edu-line">
              {education.certifications
                .map((c) => `${c.org} — ${c.name} (${c.year})`)
                .join("; ")}
            </p>
          </CvSection>

          <CvSection title="Additional Experience">
            {additional.map((e) => (
              <div key={`${e.title}-${e.company}`} className="cv-entry">
                <div className="cv-row">
                  <span className="cv-left">
                    {e.title} — {e.company}
                  </span>
                  <span className="cv-right">
                    {e.period} · {e.location}
                  </span>
                </div>
                <ul className="cv-list">
                  {bulletsFor(e).map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CvSection>
        </article>

        <p className="no-print text-center text-sm text-[rgb(var(--muted))] mt-8">
          Tip: in the print dialog choose “Save as PDF”, Letter size, and turn
          off headers &amp; footers for the cleanest result.
        </p>
      </div>
    </main>
  );
}
