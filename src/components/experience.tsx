"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import ChapterHead from "./chapter-head";
import { experiences } from "@/data/experience";

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="section">
      <div className="container">
        <ChapterHead
          index="02"
          label="Experience"
          title={<>Where I&apos;ve worked</>}
          lead={
            <>
              The same roles as my résumé — select any entry for details.
              Roles with a case-study link open the full build story.
            </>
          }
          className="mb-12"
        />

        <div className="relative max-w-4xl border-t hairline md:pl-10">
          {/* journey line — roles read as stops along one path (desktop) */}
          <span
            aria-hidden
            className="hidden md:block absolute left-[5px] top-3 bottom-3 w-px bg-gradient-to-b from-[rgb(var(--accent)/0.55)] via-[rgb(var(--border))] to-[rgb(var(--accent2)/0.55)]"
          />
          {experiences.map((job, i) => {
            const isOpen = open === i;
            return (
              <div
                key={`${job.title}-${job.company}`}
                className="relative border-b hairline"
              >
                <span
                  aria-hidden
                  className={`hidden md:block absolute -left-10 top-[1.72rem] w-2.5 h-2.5 -translate-x-[0.5px] rounded-full ring-4 ring-[rgb(var(--background))] transition-colors ${
                    isOpen ? "bg-[rgb(var(--accent))]" : "bg-[rgb(var(--faint))]"
                  }`}
                />
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-baseline gap-6 py-5 text-left group"
                >
                  <span className="hidden sm:block w-40 shrink-0 text-sm text-[rgb(var(--faint))]">
                    {job.period}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-lg font-bold tracking-tight group-hover:text-[rgb(var(--accent-hover))] transition-colors">
                        {job.title}
                      </span>
                      {job.caseStudySlug && (
                        <span className="text-[0.68rem] uppercase tracking-[0.16em] font-bold text-[rgb(var(--accent))]">
                          Case study
                        </span>
                      )}
                    </span>
                    <span className="mt-0.5 block text-sm text-[rgb(var(--muted))]">
                      {job.company} · {job.location}
                      <span className="sm:hidden"> · {job.period}</span>
                    </span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 self-center text-[rgb(var(--faint))] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 sm:pl-[11.5rem]">
                        <ul className="space-y-2.5 max-w-3xl">
                          {job.bullets.map((b, j) => (
                            <li
                              key={j}
                              className="text-[0.95rem] text-[rgb(var(--foreground)/0.85)] leading-relaxed"
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-4 text-sm text-[rgb(var(--faint))]">
                          {job.tags.join(" · ")}
                        </p>
                        {job.caseStudySlug && (
                          <Link
                            href={`/projects/${job.caseStudySlug}`}
                            className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold u-link"
                          >
                            View the {job.company} build
                            <ArrowUpRight size={15} />
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
