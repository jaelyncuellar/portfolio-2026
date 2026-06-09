// show as badges 
// rather than progress bars 

import { skillGroups } from "@/data/skills";

export default function Skills() {
    return (
        <section 
            id="skills"
            className="py-32 px-8"
        >
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                        Expertise
                    </p>
                    <h2 className="text-5xl font-bold mt-3">
                        Technical Expertise
                    </h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                    {Object.entries(skillGroups).map(
                        ([category, skills]) => (
                        <div 
                            key={category}
                            className="bg-zinc-950
                            border border-ziznc-800
                            rounded-3xl
                            p-8
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
                                            bg-zinc-900 border border-zinc-800
                                            text-zinc-300 bg-card text-text rounded-full text-sm"
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