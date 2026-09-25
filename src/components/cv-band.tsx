import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CvBand() {
  return (
    <section className="section">
      <div className="container">
        <div className="border-y hairline py-14 md:py-16 text-center">
          <p className="section-label mb-4">The short version</p>
          <h2 className="heading-2 mb-4">Take the CV with you.</h2>
          <p className="text-[rgb(var(--muted))] max-w-xl mx-auto mb-8">
            An interactive, print-ready CV mirroring my résumé — Full-Stack and
            Backend editions, ready to save as PDF.
          </p>
          <Link
            href="/cv"
            className="inline-flex items-center gap-1.5 font-medium u-link text-lg"
          >
            Open the interactive CV
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
