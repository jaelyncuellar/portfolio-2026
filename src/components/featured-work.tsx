// large luxury cards: 
// ━━━━━━━━━━━━━━━━━━

import { projects } from "@/data/projects";

export default function FeaturedWork() {
    const featuredProjects = projects.filter(project => project.featured);

    return (
        <section className="px-8 py-32">
            <div className="max-w-7xl mx-auto">
                
                <p className="text-sm uppercase tracking-[0.3em] text-[rgb(var(--muted))]">
                    Featured Work
                </p>
                <h2 className="heading-1 text-5xl font-bold mt-4 mb-16">
                    Signature Projects
                </h2>
                <div className="grid gap-8">
                    {featuredProjects.map((project) => (
                        <div
                            key={project.title}
                            className="
                            bg-[rgb(var(--surface))]
                            border border-[rgb(var(--border))]
                            rounded-3xl
                            p-10
                            "
                        >
                            <h3 className="text-3xl font-semibold mb-4">
                                {project.title}
                            </h3>
                            <p className="text-[rgb(var(--muted))] mb-6">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="text-sm text-[rgb(var(--accent))] bg-[rgb(var(--background)/0.5)] px-3 py-1 rounded-full"
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

// CARECONNECT

// Healthcare Workflow Platform

// React
// PostgreSQL
// Express

// large spacing, 
// big typography,
// dark background, 
// white text,subtle animations,
// ━━━━━━━━━━━━━━━━━━