// show as badges 
// rather than progress bars 

import { skillGroups } from "@/data/skills";

export default function Skills() {
    return (
        <section 
            id="skills"
            className="py-32 px-8"
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-16">
                    <p className="text-sm uppercase tracking-[0.3em] text-[rgb(var(--muted))]">
                        Expertise
                    </p>
                    <h2 className="heading-1 text-4xl md:text-5xl font-bold mt-4 mb-16">
                        Technical Expertise
                    </h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                    {Object.entries(skillGroups).map(
                        ([category, skills]) => (
                        <div 
                            key={category}
                            className="bg-[rgb(var(--surface))]
                            border border-[rgb(var(--border))]
                            rounded-3xl
                            p-8
                            transition-all duration-300
                            hover:border-[rgb(var(--accent))]
                            hover:-translate-y-1
                            "
                        >
                            <h3 className="text-2xl font-semibold mb-4">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="
                                            px-3 py-1 
                                            md:px-5 md:py-3
                                            bg-[rgb(var(--background)/0.5)] 
                                            text-[rgb(var(--accent))] bg-card text-text 
                                            rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
     </section>
    );
}