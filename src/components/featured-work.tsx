// large luxury cards: 
// ━━━━━━━━━━━━━━━━━━

import { projects } from "@/data/projects";
import Image from "next/image";

export default function FeaturedWork() {
    const featuredProjects = projects.filter(project => project.featured);

    return (
        <section className="px-8 py-32">
            {/* max width container */}
            <div className="max-w-6xl mx-auto px-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[rgb(var(--muted))]">
                    Featured Work
                </p>
                <h2 className="heading-1 text-4xl md:text-5xl font-bold mt-4 mb-16">
                    Signature Projects
                </h2>
                <div className="space-y-10">
                    {/* TITLE */}
                    {featuredProjects.map((project) => (
                        <div
                            key={project.title}
                            className="
                            bg-[rgb(var(--surface))]
                            border border-[rgb(var(--border))]
                            rounded-3xl
                            p-8 md:p-12
                            "
                        >
                            {/* CARDS - COLS ON LG SCREENS */}
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                {/* LEFT SIDE */}
                                <div>
                                    {/* TITLE */}
                                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                                        {project.title}
                                    </h3>
                                    {/* DESCRIPTION */}
                                    <p className="text-lg md:text-lg text-[rgb(var(--muted))] mb-8">
                                        {project.description}
                                    </p>
                                    {/* TECH STACK */}
                                    <div className="flex flex-wrap gap-3">
                                        {project.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="text-sm md:text-md 
                                                text-[rgb(var(--accent))] 
                                                bg-[rgb(var(--background)/0.5)] 
                                                px-4 py-2 md:px-5 md:py-3 
                                                rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {/* RIGHT SIDE - IMAGES*/}
                                <div className="relative h-[350px] group"> 
                                    {project.images.slice(0,3).map((image, index)=> (
                                        <div
                                            key={image}
                                            className="
                                                absolute inset-0
                                                transition-all duration-500
                                                group-hover:scale-[1.02]
                                            "
                                            style={{
                                                transform: `
                                                    translate(${index*12}px, ${index*12}px)
                                                    rotate(${index === 0 ? 0 : index % 2 ? - 3 : 3}deg)
                                                `,
                                                zIndex: 3-index,
                                            }}
                                        >
                                            <Image
                                                src={image}
                                                alt="project.title"
                                                fill
                                                className="
                                                    object-cover rounded-2xl
                                                    border border-[rgb(var(--border))]
                                                    shadow-lg
                                                    group-hover:-translate-y-4
                                                "
                                            ></Image>
                                        </div>
                                    ))}
                                </div>
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