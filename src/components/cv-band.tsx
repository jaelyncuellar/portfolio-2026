import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CvBand() {
  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-[var(--radius-md)] bg-[rgb(var(--pine))] text-white px-8 py-16 md:py-20 text-center">
          <div
            aria-hidden
            className="absolute inset-0 dot-grid opacity-50"
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(60% 80% at 50% 0%, rgba(178,134,58,0.25), transparent 70%)",
            }}
          />
          <div className="relative">
            <p className="section-label mb-4" style={{ color: "#d8b25c" }}>
              The short version
            </p>
            <h2
              className="heading-2 mb-4 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Take the CV with you.
            </h2>
            <p className="text-white/65 max-w-xl mx-auto mb-9">
              An interactive, print-ready CV mirroring my résumé — Full-Stack
              and Backend editions, ready to save as PDF.
            </p>
            <Link
              href="/cv"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[rgb(var(--accent))] text-white font-semibold hover:bg-[rgb(var(--accent-hover))] transition-colors"
            >
              Open the interactive CV
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
