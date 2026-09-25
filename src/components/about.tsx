import { Briefcase, GraduationCap, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { education } from "@/data/education";

const facts = [
  {
    icon: MapPin,
    label: "Based in",
    value: `${profile.location} — ${profile.availability}`,
  },
  {
    icon: Briefcase,
    label: "Currently",
    value: "Software Engineer · building full-stack platforms & backend systems",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "Duke University — B.S. Computer Science (AI & ML), May 2025",
  },
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label mb-4">01 — About</p>
        <h2 className="heading-2 font-semibold mb-12">Engineer, end to end.</h2>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <p className="text-lg leading-relaxed text-[rgb(var(--foreground)/0.9)]">
              {profile.summary}
            </p>
            <p className="mt-6 text-[rgb(var(--muted))] leading-relaxed">
              I care about the parts users never see as much as the parts they
              do — schema design, API contracts, auth flows, caching — and the
              interfaces that sit on top of them. From healthcare data platforms
              to booking systems to ML pipelines, I take products from idea to
              production and keep them reliable once they&apos;re there.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {education.honors.map((h) => (
                <span
                  key={h}
                  className="px-4 py-1.5 rounded-full text-sm border border-[rgb(var(--accent)/0.5)] text-[rgb(var(--accent-hover))] bg-[rgb(var(--accent)/0.08)]"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="rounded-[var(--radius-lg)] border border-[rgb(var(--border))] bg-[rgb(var(--surface)/0.7)] p-8 shadow-[var(--shadow-subtle)]">
              <p className="uppercase tracking-[0.2em] text-xs text-[rgb(var(--muted))] mb-6">
                Quick facts
              </p>
              <ul className="space-y-6">
                {facts.map((f) => (
                  <li key={f.label} className="flex gap-4">
                    <span className="w-10 h-10 shrink-0 rounded-full bg-[rgb(var(--accent)/0.12)] text-[rgb(var(--accent-hover))] flex items-center justify-center">
                      <f.icon size={18} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.15em] text-[rgb(var(--muted))]">
                        {f.label}
                      </span>
                      {f.href ? (
                        <a
                          href={f.href}
                          className="font-medium hover:text-[rgb(var(--accent-hover))] transition-colors break-all"
                        >
                          {f.value}
                        </a>
                      ) : (
                        <span className="font-medium">{f.value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
