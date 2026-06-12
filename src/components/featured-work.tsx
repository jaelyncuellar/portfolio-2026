// large luxury cards: 
// ━━━━━━━━━━━━━━━━━━

"use client"
import { Project, projects } from "@/data/projects";
import next from "next";
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function FeaturedWork() {
    const featuredProjects = projects.filter(project => project.featured);
    const [selectedImages, setSelectedImages] = useState<Record<string, number>>({}); 
    const [activeProject, setActiveProject] = useState<string | null>(null); 
    const galleryProject = featuredProjects.find(p=>p.slug === activeProject); 

    const getCurrentImage = (slug:string) => 
        selectedImages[slug] ?? 0; 

    const openGallery = (slug:string) => { 
        setActiveProject(slug); 
    }; 
    const closeGallery = () => { 
        setActiveProject(null); 
    }; 

    const nextImage = (project: any) => { 
        setSelectedImages(prev => ({
            ...prev,
            [project.slug]:
                ((prev[project.slug] ?? 0)+1)
                % project.images.length
        }));
    };

    // cycles backward 
    const prevImage = (project: any) => {
        setSelectedImages(prev => ({
            ...prev,
            [project.slug]:
                ((prev[project.slug] ?? 0) - 1 +
                project.images.length)
            % project.images.length 
        }));
    };

    return (
        <section 
            id="featured-work"
            className="px-8 py-32"
        >
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
                            <div className={`grid gap-12 ${ 
                                project.images?.length ? "md:grid-cols-2" : "md:grid-cols-1"
                            }`}>
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
                                {project.images?.length > 0 && ( 
                                    <div 
                                        className="relative h-[350px] 
                                            group cursor-pointer
                                            transition-transform duration-500
                                            hover:scale-[1.02]
                                        "
                                        onClick={() => openGallery(project.slug)} // image is clickable 
                                    > 
                                        {project.images.slice(0,3).map((image, index) => (
                                            <div
                                                key={image} // current image 
                                                className="absolute inset-0"
                                                style={{
                                                    transform: `
                                                        translate(${index*12}px, ${index*12}px)
                                                        rotate(${index === 0 ? 0 : index % 2 ? -3 : 3}deg)
                                                    `,
                                                    zIndex: 3-index,
                                                }}
                                            >
                                                <Image
                                                    src={image}
                                                    alt={project.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="
                                                        object-cover
                                                        rounded-2xl
                                                        border border-[rgb(var(--border))]
                                                        shadow-xl
                                                        transition-all duration-500
                                                        group-hover:-translate-y-3
                                                    "
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}


                    {/* MODAL */}
                    {activeProject && galleryProject && ( 
                        <div 
                            className="
                                fixed inset-0 
                                z-50 bg-black/90 
                                backdrop-blur-md 
                                flex items-center justify-center 
                                p-8
                            "
                        >
                            {/* LEFT ARROW */}
                            <button 
                                onClick={()=>prevImage(galleryProject)}
                                className="
                                    absolute left-6
                                    text-white text-5xl
                                "
                                > ← 
                            </button>

                            <div className="relative w-full max-w-6xl h-[80vh]">
                                <Image
                                    src={galleryProject.images[
                                        getCurrentImage(galleryProject.slug)
                                        ]
                                    }
                                    alt={galleryProject.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-contain"
                                />
                            </div>

                            {/* RIGHT ARROW */}
                            <button
                                onClick={() => nextImage(galleryProject)}
                                className="
                                    absolute right-6
                                    text-white text-3xl
                                    "
                                >
                                → 
                            </button>

                            {/* x  */}
                            <button
                            onClick={closeGallery}
                            className="absolute top-6 right-6 text-white text-3xl"
                            >
                            ✕
                            </button>
                        </div>
                    )}
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