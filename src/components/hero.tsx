"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/data/profile";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[rgb(var(--ink))] text-white">
      {/* atmosphere */}
      <div aria-hidden className="absolute inset-0 dot-grid opacity-60" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 45% at 72% 18%, rgba(178,134,58,0.22), transparent 70%), radial-gradient(40% 35% at 12% 85%, rgba(178,134,58,0.10), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(17,17,20,0.9), transparent)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative container pt-40 md:pt-48 pb-20 md:pb-28"
      >
        <motion.div variants={item} className="flex items-center gap-4 mb-8">
          <span className="h-px w-12 bg-[rgb(var(--accent))]" />
          <p className="text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[rgb(var(--accent))]">
            {profile.title}
          </p>
        </motion.div>

        <motion.h1 variants={item} className="hero-title max-w-5xl">
          {profile.firstName}
          <br />
          <span className="italic text-[rgb(var(--accent))]">
            {profile.lastName}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 text-lg md:text-xl text-white/65 max-w-2xl leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <Link
            href="/cv"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[rgb(var(--accent))] text-white font-semibold hover:bg-[rgb(var(--accent-hover))] transition-colors w-fit"
          >
            <FileText size={18} />
            View interactive CV
          </Link>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-1.5 px-8 py-4 rounded-full border border-white/25 font-semibold text-white/90 hover:border-[rgb(var(--accent))] hover:text-white transition-colors w-fit"
          >
            Selected work
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 pt-8 border-t hairline-light grid grid-cols-2 md:grid-cols-4 gap-6 text-sm"
        >
          <div>
            <p className="text-white/40 text-xs uppercase tracking-[0.18em] mb-1.5">
              Based in
            </p>
            <p className="text-white/90 font-medium">{profile.location}</p>
          </div>
          <div>
            <p className="text-white/40 text-xs uppercase tracking-[0.18em] mb-1.5">
              Status
            </p>
            <p className="text-white/90 font-medium inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Open to roles
            </p>
          </div>
          <div>
            <p className="text-white/40 text-xs uppercase tracking-[0.18em] mb-1.5">
              Focus
            </p>
            <p className="text-white/90 font-medium">
              Full-stack · Backend systems
            </p>
          </div>
          <div className="flex items-end gap-5 md:justify-end">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-white/60 hover:text-[rgb(var(--accent))] transition-colors"
            >
              <GithubIcon size={22} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-white/60 hover:text-[rgb(var(--accent))] transition-colors"
            >
              <LinkedinIcon size={22} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-white/60 hover:text-[rgb(var(--accent))] transition-colors text-sm font-semibold u-link-light"
            >
              Email
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-[rgb(var(--accent))] transition-colors"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
