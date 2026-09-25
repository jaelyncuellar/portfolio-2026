import Link from "next/link";
import { FileText, Printer } from "lucide-react";

export default function CvBand() {
  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[rgb(var(--foreground))] text-[rgb(var(--background))] px-8 py-16 md:p-20 text-center">
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(60% 80% at 50% 0%, rgba(212,164,115,0.28), transparent 70%)",
            }}
          />
          <div className="relative">
            <p className="section-label mb-4" style={{ color: "rgb(var(--accent))" }}>
              The short version
            </p>
            <h2
              className="heading-2 font-semibold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Take the CV with you.
            </h2>
            <p className="text-[rgb(var(--background)/0.7)] max-w-xl mx-auto mb-10">
              An interactive, print-ready CV that mirrors my résumé — switch
              between the Full-Stack and Backend editions, then print or save as
              PDF.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/cv"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[rgb(var(--accent))] text-white font-medium hover:bg-[rgb(var(--accent-hover))] transition-colors"
              >
                <FileText size={18} />
                Open interactive CV
              </Link>
              <Link
                href="/cv"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[rgb(var(--background)/0.3)] font-medium hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))] transition-colors"
              >
                <Printer size={18} />
                Print / Save PDF
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
