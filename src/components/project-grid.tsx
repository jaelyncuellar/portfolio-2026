
import { projects } from "@/data/projects";
export default function ProjectGrid() {
    return (
        <section 
            id="projects"
            className="px-8 py-32">
            <div className="max-w-6xl mx-auto px-6">
                
                <p className="text-sm uppercase tracking-[0.3em] text-[rgb(var(--muted))]">
                    Portfolio
                </p>
                <h2 className="heading-1 text-4xl md:text-5xl font-bold mt-4 mb-16">
                    Project Archive
                </h2>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="
                            bg-[rgb(var(--surface))]
                            border 
                            border-[rgb(var(--border))]
                            rounded-3xl
                            p-8 
                            transition-all duration-300
                            hover:border-[rgb(var(--accent))]
                            hover:-translate-y-1
                            "
                        >
                            <h3 className="text-xl font-semibold mb-6">
                                {project.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="
                                        text-sm md:text-md 
                                        text-[rgb(var(--accent))] 
                                        bg-[rgb(var(--background)/0.5)] 
                                        px-3 py-1 md:px-5 md:py-3 
                                        rounded-full
                                        "
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