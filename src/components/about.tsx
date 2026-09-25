import { profile } from "@/data/profile";
import { education } from "@/data/education";

const facts: { label: string; value: string; href?: string }[] = [
  { label: "Location", value: profile.location },
  { label: "Focus", value: "Full-stack platforms & backend systems" },
  {
    label: "Education",
    value: `Duke University — B.S. Computer Science (AI & ML), ${education.period}`,
  },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label mb-4">01 · About</p>
        <h2 className="heading-2 mb-10 max-w-2xl">Engineer, end to end.</h2>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed">{profile.summary}</p>
            <p className="mt-5 text-[rgb(var(--muted))] leading-relaxed">
              I care about the parts users never see as much as the parts they
              do — schema design, API contracts, auth flows, caching — and the
              interfaces that sit on top of them. From healthcare data platforms
              to booking systems to ML pipelines, I take products from idea to
              production and keep them reliable once they&apos;re there.
            </p>
            <p className="mt-6 text-sm text-[rgb(var(--muted))]">
              {education.honors.join(" · ")}
            </p>
          </div>

          <div className="md:col-span-5">
            <dl className="border-t hairline">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="grid grid-cols-[110px_1fr] gap-4 py-4 border-b hairline"
                >
                  <dt className="text-sm text-[rgb(var(--faint))]">{f.label}</dt>
                  <dd className="text-[0.95rem] font-medium">
                    {f.href ? (
                      <a href={f.href} className="u-link break-all">
                        {f.value}
                      </a>
                    ) : (
                      f.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
