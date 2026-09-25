import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="section-label mb-4">05 · Education</p>
        <h2 className="heading-2 mb-10">Education</h2>

        <div className="max-w-4xl border-t hairline">
          <div className="py-7 border-b hairline grid gap-2 md:grid-cols-[1fr_auto] md:gap-8 items-baseline">
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

          {education.certifications.map((c) => (
            <div
              key={c.name}
              className="py-5 border-b hairline grid gap-1 md:grid-cols-[1fr_auto] md:gap-8 items-baseline"
            >
              <div>
                <p className="font-medium">{c.name}</p>
                <p className="text-sm text-[rgb(var(--muted))]">{c.org}</p>
              </div>
              <p className="text-sm text-[rgb(var(--faint))] shrink-0">
                {c.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
