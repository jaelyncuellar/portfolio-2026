import { Award, GraduationCap } from "lucide-react";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="section-label mb-4">05 — Education</p>
        <h2 className="heading-2 font-semibold mb-12">Education</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          <div className="rounded-[var(--radius-lg)] border border-[rgb(var(--border))] bg-[rgb(var(--surface)/0.7)] p-8 md:p-10 shadow-[var(--shadow-subtle)]">
            <span className="w-12 h-12 rounded-2xl bg-[rgb(var(--accent)/0.12)] text-[rgb(var(--accent-hover))] flex items-center justify-center mb-6">
              <GraduationCap size={24} />
            </span>
            <p className="text-sm text-[rgb(var(--accent-hover))] font-semibold mb-2">
              {education.period} · {education.location}
            </p>
            <h3 className="heading-3 font-semibold">{education.school}</h3>
            <p className="mt-2 text-lg">{education.degree}</p>
            <p className="text-[rgb(var(--muted))]">{education.minor}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[rgb(var(--foreground))] text-[rgb(var(--background))]">
                {education.gpa}
              </span>
              {education.honors.map((h) => (
                <span
                  key={h}
                  className="px-3 py-1 rounded-full text-xs border border-[rgb(var(--accent)/0.5)] text-[rgb(var(--accent-hover))] bg-[rgb(var(--accent)/0.08)]"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-[rgb(var(--border))] bg-[rgb(var(--foreground))] text-[rgb(var(--background))] p-8 md:p-10">
            <span className="w-12 h-12 rounded-2xl bg-[rgb(var(--accent)/0.2)] text-[rgb(var(--accent))] flex items-center justify-center mb-6">
              <Award size={24} />
            </span>
            <h3 className="heading-3 font-semibold mb-2">Certifications</h3>
            <p className="text-[rgb(var(--background)/0.65)] text-sm mb-6">
              Continuous learning, credentialed.
            </p>
            <ul className="space-y-5">
              {education.certifications.map((c) => (
                <li
                  key={c.name}
                  className="flex items-start justify-between gap-4 border-b border-[rgb(var(--background)/0.12)] pb-5 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{c.name}</p>
                    <p className="text-sm text-[rgb(var(--background)/0.6)]">
                      {c.org}
                    </p>
                  </div>
                  <span className="text-sm text-[rgb(var(--accent))] font-semibold shrink-0">
                    {c.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
