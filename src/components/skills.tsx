"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  const categories = Object.keys(skillGroups);
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label mb-4">04 — Toolbox</p>
        <h2 className="heading-2 font-semibold mb-4">Technical skills</h2>
        <p className="text-[rgb(var(--muted))] max-w-2xl mb-10">
          The same stack as my résumé — pick a category to explore.
        </p>

        <div className="max-w-4xl">
          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex flex-wrap gap-2 mb-8"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                  active === cat
                    ? "bg-[rgb(var(--accent))] border-[rgb(var(--accent))] text-white shadow-[0_8px_20px_rgba(212,164,115,0.35)]"
                    : "border-[rgb(var(--border))] bg-[rgb(var(--surface)/0.6)] text-[rgb(var(--muted))] hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--foreground))]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-[var(--radius-lg)] border border-[rgb(var(--border))] bg-[rgb(var(--surface)/0.7)] p-8 md:p-10 shadow-[var(--shadow-subtle)]"
            >
              <p className="uppercase tracking-[0.2em] text-xs text-[rgb(var(--accent-hover))] font-semibold mb-6">
                {active}
              </p>
              <div className="flex flex-wrap gap-3">
                {skillGroups[active].map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                    className="px-5 py-2.5 rounded-full bg-[rgb(var(--foreground))] text-[rgb(var(--background))] text-sm font-medium hover:bg-[rgb(var(--accent-hover))] hover:text-white hover:-translate-y-0.5 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
