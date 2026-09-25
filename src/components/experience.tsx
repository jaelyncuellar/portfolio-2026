"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { experiences } from "@/data/experience";

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-label mb-4">02 — Career</p>
        <h2 className="heading-2 font-semibold mb-4">Professional experience</h2>
        <p className="text-[rgb(var(--muted))] max-w-2xl mb-14">
          The same roles and achievements as my résumé — tap any entry to
          expand the details.
        </p>

        <div className="max-w-4xl">
          {experiences.map((job, i) => {
            const isOpen = open === i;
            return (
              <div
                key={`${job.title}-${job.company}`}
                className={`border-b border-[rgb(var(--border))] ${
                  i === 0 ? "border-t" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-5 py-7 text-left group"
                >
                  <span
                    className={`hidden sm:block w-36 shrink-0 text-sm ${
                      isOpen
                        ? "text-[rgb(var(--accent-hover))] font-semibold"
                        : "text-[rgb(var(--muted))]"
                    }`}
                  >
                    {job.period}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-semibold text-lg md:text-xl group-hover:text-[rgb(var(--accent-hover))] transition-colors">
                      {job.title}
                    </span>
                    <span className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[rgb(var(--muted))]">
                      <span>{job.company}</span>
                      <span aria-hidden>·</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={13} />
                        {job.location}
                      </span>
                      <span aria-hidden className="sm:hidden">
                        · {job.period}
                      </span>
                    </span>
                  </span>
                  <span
                    className={`w-10 h-10 shrink-0 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-[rgb(var(--accent))] border-[rgb(var(--accent))] text-white rotate-180"
                        : "border-[rgb(var(--border))] text-[rgb(var(--muted))] group-hover:border-[rgb(var(--accent))]"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 sm:pl-[11rem]">
                        <ul className="space-y-3">
                          {job.bullets.map((b, j) => (
                            <li
                              key={j}
                              className="flex gap-3 text-[rgb(var(--foreground)/0.85)] leading-relaxed"
                            >
                              <span className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--accent))]" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {job.tags.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 rounded-full text-xs border border-[rgb(var(--border))] bg-[rgb(var(--surface)/0.6)] text-[rgb(var(--muted))]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
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
