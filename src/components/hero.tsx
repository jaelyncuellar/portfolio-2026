"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Mail,
  MapPin,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/data/profile";

function CountUp({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[76px]">
      {/* soft radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 38%, rgba(212,164,115,0.16), transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-6xl mx-auto px-6 text-center w-full"
      >
        <motion.div variants={item} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface)/0.7)] text-sm text-[rgb(var(--muted))]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            Available for new opportunities
          </span>
        </motion.div>

        <motion.p variants={item} className="section-label mb-6">
          {profile.title}
        </motion.p>

        <motion.h1
          variants={item}
          className="hero-title font-semibold"
          style={{ letterSpacing: "-0.02em" }}
        >
          {profile.firstName}
          <br />
          {profile.lastName}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 text-[rgb(var(--muted))] max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/cv"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[rgb(var(--foreground))] text-[rgb(var(--background))] font-medium hover:bg-[rgb(var(--accent-hover))] hover:text-white transition-colors"
          >
            <FileText size={18} />
            View interactive CV
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[rgb(var(--foreground)/0.25)] font-medium hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent-hover))] transition-colors"
          >
            Get in touch
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex items-center justify-center gap-6 text-[rgb(var(--muted))]"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-[rgb(var(--accent-hover))] transition-colors"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[rgb(var(--accent-hover))] transition-colors"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="hover:text-[rgb(var(--accent-hover))] transition-colors"
          >
            <Mail size={22} />
          </a>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-sm">
            <MapPin size={16} />
            {profile.location}
          </span>
        </motion.div>
      </motion.div>

      {/* stats */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative max-w-6xl mx-auto px-6 w-full mt-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[rgb(var(--border))] pt-8">
          {profile.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="text-4xl md:text-5xl font-semibold text-[rgb(var(--foreground))]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <CountUp
                  value={s.value}
                  suffix={s.suffix}
                  prefix={"prefix" in s ? (s as { prefix: string }).prefix : ""}
                />
              </p>
              <p className="mt-2 text-sm text-[rgb(var(--muted))] max-w-[180px] mx-auto">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[rgb(var(--muted))] hover:text-[rgb(var(--accent-hover))] transition-colors"
      >
        <ArrowDown size={22} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
