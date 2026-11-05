import ChapterHead from "./chapter-head";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <ChapterHead
          index="04"
          label="Skills"
          title="Technical stack"
          lead="The same stack as my résumé."
          className="mb-10"
        />

        {/* editorial flow: label + flowing text, hairline-separated */}
        <div className="grid md:grid-cols-2 gap-x-14 max-w-5xl">
          {Object.entries(skillGroups).map(([cat, list]) => (
            <div key={cat} className="border-t hairline py-5">
              <h3 className="section-label mb-2.5">{cat}</h3>
              <p className="text-[1rem] leading-relaxed text-[rgb(var(--foreground)/0.88)]">
                {list.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
