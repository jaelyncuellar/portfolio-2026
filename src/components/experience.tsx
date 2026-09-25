"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { experiences } from "@/data/experience";

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-label mb-4">02 · Experience</p>
        <h2 className="heading-2 mb-4">Where I&apos;ve worked</h2>
        <p className="text-[rgb(var(--muted))] max-w-2xl mb-12">
          The same roles as my résumé — select any entry for details.
        </p>

        <div className="max-w-4xl border-t hairline">
          {experiences.map((job, i) => {
            const isOpen = open === i;
            return (
              <div key={`${job.title}-${job.company}`} className="border-b hairline">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-baseline gap-6 py-6 text-left group"
                >
                  <span className="hidden sm:block w-40 shrink-0 text-sm text-[rgb(var(--faint))]">
                    {job.period}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-lg font-semibold tracking-tight group-hover:text-[rgb(var(--accent-hover))] transition-colors">
                      {job.title}
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
                      <div className="pb-7 sm:pl-[11.5rem]">
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
