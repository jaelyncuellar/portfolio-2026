import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

type Props = { 
    params: { 
        slug: string; 
    }; 
}; 
export default function ProjectPage({
    params,
}: Props) { 
    const project = projects.find(
        (p)=> p.slug === params.slug
    );
    if (!project) {
        notFound();
    }
    return ( 
        <main className="min-h-screen bg-black text-foreground">
            <section className="max-w-5xl mx-auto px-8 py-32">
                <h1 className="text-6xl font-bold">
                    {project.title}
                </h1>
                <p className="mt-8">
                    {project.description}
                </p>
                <div className="flex gap-2 flex-wrap mt-10">
                    {project.tech.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-sm border border-foreground px-3 py-1 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>
        </main>
    );
}