import ChapterHead from "./chapter-head";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="section-sm">
      <div className="container">
        <ChapterHead
          index="04"
          label="Education"
          title="Education"
          className="mb-8"
        />

        {/* quiet interlude: one elegant row + a compact certifications line */}
        <div className="max-w-4xl">
          <div className="panel-soft px-6 py-6 md:px-8 md:py-7 grid gap-2 md:grid-cols-[1fr_auto] md:gap-8 items-baseline">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                {education.school}
              </h3>
              <p className="mt-1 text-[rgb(var(--muted))]">
                {education.degree} · {education.minor}
              </p>
              <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                {education.gpa} · {education.honors.join(" · ")}
              </p>
            </div>
            <p className="text-sm text-[rgb(var(--faint))] md:text-right shrink-0">
              {education.period}
              <br />
              {education.location}
            </p>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-[rgb(var(--muted))]">
            <span className="section-label mr-3">Certifications</span>
            {education.certifications
              .map((c) => `${c.name} - ${c.org}, ${c.year}`)
              .join("  ·  ")}
          </p>
        </div>
      </div>
    </section>
  );
}
