import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label mb-4">04 · Skills</p>
        <h2 className="heading-2 mb-4">Technical stack</h2>
        <p className="text-[rgb(var(--muted))] max-w-2xl mb-12">
          The same stack as my résumé.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 max-w-5xl">
          {Object.entries(skillGroups).map(([cat, list]) => (
            <div key={cat} className="border-t hairline pt-5">
              <h3 className="text-[0.78rem] uppercase tracking-[0.16em] font-semibold text-[rgb(var(--muted))] mb-3">
                {cat}
              </h3>
              <p className="text-[0.95rem] leading-relaxed">
                {list.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
