"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8">
      <div className="max-w-5xl mx-auto text-center">

        <motion.p
          className="section-label mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          SOFTWARE ENGINEER
        </motion.p>

        <motion.h1
          className="hero-title text-6xl font-bold leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Jaelyn
          <br />
          Cuellar
        </motion.h1>

        <p className="mt-8 text-[rgb(var(--muted))] max-w-xl text-lg">
          Building intelligent systems,
          modern web applications,
          and scalable software.
        </p>

      </div>
    </section>
  );
}