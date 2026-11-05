import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CvBand() {
  return (
    <section aria-label="Interactive CV">
      <div className="chapter-ink relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 glitter opacity-40" />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(55% 60% at 18% 0%, rgba(233,63,216,0.26), transparent 70%), radial-gradient(45% 55% at 85% 100%, rgba(45,212,191,0.20), transparent 70%)",
          }}
        />
        <div className="relative container py-16 md:py-20 text-center">
          <p className="section-label mb-4" style={{ color: "#2dd4bf" }}>
            The short version
          </p>
          <h2
            className="heading-2 mb-4 text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Take the CV with you.
          </h2>
          <p className="lead lead--dark mx-auto mb-9">
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
    </section>
  );
}
