"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
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

const stickers = [
  { label: "Robotics & Perception", bg: "#e93fd8", rotate: "-3deg" },
  { label: "Backend Systems", bg: "#2dd4bf", color: "#0b0f1a", rotate: "2deg" },
  { label: "NYC-bound ✦", bg: "#fff8f0", color: "#0b0f1a", rotate: "-2deg" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[rgb(var(--ink))] text-white">
      {/* atmosphere: glitter + contour waves */}
      <div aria-hidden className="absolute inset-0 glitter opacity-50" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 45% at 78% 16%, rgba(233,63,216,0.28), transparent 70%), radial-gradient(42% 36% at 10% 88%, rgba(45,212,191,0.20), transparent 70%), radial-gradient(30% 30% at 45% 55%, rgba(233,63,216,0.10), transparent 70%)",
        }}
      />
      <svg
        aria-hidden
        className="absolute inset-x-0 bottom-0 w-full opacity-[0.16] pointer-events-none"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M-20 90 C240 30, 420 160, 720 100 S1180 30, 1460 110" stroke="#2dd4bf" strokeWidth="1.5" />
        <path d="M-20 120 C260 60, 440 190, 720 130 S1180 60, 1460 140" stroke="#e93fd8" strokeWidth="1.5" />
        <path d="M-20 150 C280 90, 460 220, 720 160 S1180 90, 1460 170" stroke="#ffffff" strokeWidth="1" />
        <path d="M-20 60 C220 10, 400 130, 720 70 S1180 0, 1460 80" stroke="#2dd4bf" strokeWidth="1" />
      </svg>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative container pt-32 md:pt-36 pb-16 md:pb-20"
      >
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-8 items-center">
          <div>
            <motion.div variants={item} className="flex items-center gap-4 mb-7">
              <span className="h-px w-12 bg-[rgb(var(--accent))]" />
              <p className="text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[rgb(var(--accent2))]">
                {profile.title}
              </p>
            </motion.div>

            <motion.h1 variants={item} className="hero-title max-w-3xl">
              {profile.firstName}
              <br />
              <span className="italic text-[rgb(var(--accent))]">
                {profile.lastName}
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
              {stickers.map((s) => (
                <span
                  key={s.label}
                  className="sticker"
                  style={{
                    background: s.bg,
                    color: s.color ?? "#fff",
                    transform: `rotate(${s.rotate})`,
                  }}
                >
                  {s.label}
                </span>
              ))}
            </motion.div>

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
                className="inline-flex items-center justify-center gap-1.5 px-8 py-4 rounded-full border border-white/25 font-semibold text-white/90 hover:border-[rgb(var(--accent2))] hover:text-white transition-colors w-fit"
              >
                Selected work
                <ArrowUpRight size={18} />
              </a>
            </motion.div>
          </div>

          {/* Portrait — tilted card, glowing ring echoing the photo's neon circle */}
          <motion.div variants={item} className="relative mx-auto w-full max-w-[380px] lg:max-w-[420px]">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-full opacity-70 blur-2xl"
              style={{
                background:
                  "conic-gradient(from 40deg, rgba(233,63,216,0.55), rgba(45,212,191,0.55), rgba(233,63,216,0.55))",
              }}
            />
            <div className="relative rotate-[2.5deg] hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/jaelyn-portrait.png"
                alt="Portrait of Jaelyn Cuellar with code and contour graphics"
                width={700}
                height={700}
                priority
                className="relative w-full h-auto rounded-full border-2 border-white/30 shadow-[0_30px_80px_-20px_rgba(233,63,216,0.45)]"
              />
              <span
                className="sticker absolute -bottom-3 -left-4"
                style={{ background: "#0b0f1a", color: "#2dd4bf", transform: "rotate(-4deg)" }}
              >
                ✦ she builds it end to end
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="mt-12 pt-6 border-t hairline-light grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 text-sm"
        >
          <div>
            <p className="text-white/40 text-xs uppercase tracking-[0.18em] mb-1.5">Based in</p>
            <p className="text-white/90 font-medium">Idaho — NYC-bound Jan ✦</p>
          </div>
          <div>
            <p className="text-white/40 text-xs uppercase tracking-[0.18em] mb-1.5">Status</p>
            <p className="text-white/90 font-medium inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--accent2))]" />
              Open to roles
            </p>
          </div>
          <div>
            <p className="text-white/40 text-xs uppercase tracking-[0.18em] mb-1.5">Focus</p>
            <p className="text-white/90 font-medium">Backend · Robotics perception</p>
          </div>
          <div className="flex items-end gap-5 md:justify-end">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/60 hover:text-[rgb(var(--accent))] transition-colors">
              <GithubIcon size={22} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/60 hover:text-[rgb(var(--accent2))] transition-colors">
              <LinkedinIcon size={22} />
            </a>
            <a href={`mailto:${profile.email}`} className="text-white/60 hover:text-white transition-colors text-sm font-semibold u-link-light">
              Email
            </a>
          </div>
        </motion.div>

        {/* stats strip from profile data — slim, divider-separated */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap gap-y-4"
        >
          {profile.stats.map((s, i) => (
            <div
              key={s.label}
              className={
                i === 0
                  ? "pr-6"
                  : "px-6 border-l border-white/10"
              }
            >
              <p className="text-2xl md:text-[1.7rem] font-bold tracking-tight leading-none">
                {"prefix" in s && s.prefix ? s.prefix : ""}
                {s.value.toLocaleString()}
                {s.suffix}
              </p>
              <p className="mt-1.5 text-xs text-white/45 leading-snug">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 hover:text-[rgb(var(--accent))] transition-colors"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
