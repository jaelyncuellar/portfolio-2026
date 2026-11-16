import Image from "next/image";
import ChapterHead from "./chapter-head";
import { profile } from "@/data/profile";
import { education } from "@/data/education";

const facts: { label: string; value: string; href?: string }[] = [
  { label: "Location", value: "New York, NY" },
  { label: "Focus", value: "Backend systems & robotics perception" },
  {
    label: "Education",
    value: `Duke University - B.S. Computer Science (AI & ML), ${education.period}`,
  },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
];

export default function About() {
  return (
    <section id="about" className="section tint-fuchsia">
      <div className="container">
        <ChapterHead
          index="01"
          label="About"
          className="mb-10 max-w-2xl"
          title={
            <>
              Engineer, end to end -{" "}
              <span className="italic text-[rgb(var(--accent-hover))]">
                robots included.
              </span>
            </>
          }
        />

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <div className="flex gap-6 items-start">
              <div className="hidden sm:flex flex-col items-center gap-3 shrink-0">
                <Image
                  src="/images/jaelyn-portrait.png"
                  alt="Portrait of Jaelyn Cuellar"
                  width={160}
                  height={160}
                  className="w-28 h-28 rounded-full object-cover border-2 border-[rgb(var(--accent)/0.5)] shadow-[0_12px_36px_-10px_rgba(233,63,216,0.45)] rotate-[-2deg]"
                />
                <p className="text-[0.8rem] font-semibold tracking-wide text-[rgb(var(--accent2))] whitespace-nowrap">
                  ✦ engineering the extraordinary
                </p>
              </div>
              <p className="text-lg leading-relaxed">{profile.summary}</p>
            </div>
            {/* <p className="mt-5 text-[rgb(var(--muted))] leading-relaxed">
              I care about the parts users never see as much as the parts they
              do - schema design, API contracts, auth flows, caching - and the
              interfaces that sit on top of them. The same instinct now runs
              through my perception work: detectors, trackers, and filters are
              only useful if a robot can trust them frame after frame.
            </p> */}
            <p className="mt-6 text-sm text-[rgb(var(--muted))]">
              {education.honors.join(" · ")}
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="panel-soft px-6 py-2 md:px-7">
              <dl>
                {facts.map((f, i) => (
                  <div
                    key={f.label}
                    className={`grid grid-cols-[110px_1fr] gap-4 py-3.5 ${
                      i < facts.length - 1 ? "border-b hairline" : ""
                    }`}
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
      </div>
    </section>
  );
}
