import ChapterHead from "./chapter-head";
import { skillGroups } from "@/data/skills";

const FEATURED_KEY = "Robotics & Perception";

function Chips({
  list,
  featured = false,
}: {
  list: string[];
  featured?: boolean;
}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {list.map((skill) => (
        <li
          key={skill}
          className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[0.82rem] font-medium leading-none ${
            featured
              ? "border-[rgb(var(--accent)/0.45)] bg-white/[0.07] text-[rgb(var(--foreground))]"
              : "hairline bg-white/[0.04] text-[rgb(var(--foreground)/0.88)]"
          }`}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}

export default function Skills() {
  const featured = skillGroups[FEATURED_KEY] ?? [];
  const rest = Object.entries(skillGroups).filter(
    ([cat]) => cat !== FEATURED_KEY,
  );

  return (
    <section id="skills" className="section tint-teal">
      <div className="container">
        <ChapterHead
          index="02"
          label="Skills"
          title="Technical stack"
          // lead="Production-proven tools, grouped by discipline."
          className="mb-10"
        />

        {/* featured group - current focus, full-width panel */}
        <div
          className="panel-soft p-6 md:p-8 mb-5"
          style={{ borderColor: "rgb(var(--accent) / 0.38)" }}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-5">
            <div>
              <h3 className="section-label">{FEATURED_KEY}</h3>
              <span
                aria-hidden
                className="mt-2.5 block h-px w-10 bg-[rgb(var(--accent))]"
              />
            </div>
            {/* <p className="text-sm text-[rgb(var(--muted))]">
              Current focus - the stack behind my robotics portfolio
              projects.
            </p> */}
          </div>
          <Chips list={featured} featured />
        </div>

        {/* remaining groups - even two-column panel grid */}
        <div className="grid md:grid-cols-2 gap-5 items-stretch">
          {rest.map(([cat, list]) => (
            <div
              key={cat}
              className="h-full rounded-[var(--radius-lg)] border hairline bg-white/[0.04] p-6"
            >
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="section-label">{cat}</h3>
                  <span
                    aria-hidden
                    className="mt-2.5 block h-px w-8 bg-[rgb(var(--accent)/0.7)]"
                  />
                </div>
                <p className="text-xs text-[rgb(var(--faint))] shrink-0">
                  {list.length} skills
                </p>
              </div>
              <div className="mt-5">
                <Chips list={list} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
