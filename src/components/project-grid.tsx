
import { projects } from "@/data/projects";
export default function ProjectGrid() {
    return (
        <section 
            id="projects"
            className="px-8 py-32">
            <div className="max-w-7xl mx-auto">
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                    Portfolio
                </p>
                <h2 className="text-5xl font-bold mt-4 mb-16">
                    Project Archive
                </h2>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="
                            bg-zinc-950
                            border 
                            border-zinc-800
                            rounded-3xl
                            p-8 
                            transition-all duration-300
                            hover:border-[#C8A97E]
                            hover:-translate-y-1
                            "
                        >
                            <h3 className="text-2xl font-semibold mb-6">
                                {project.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="
                                        text-sm text-zinc-300
                                        border border-zinc-800
                                        bg-zinc-900 
                                        px-3 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}