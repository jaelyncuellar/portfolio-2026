import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/projects";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      <Navbar />
      <section className="container pt-32 md:pt-40 pb-24 max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))] transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          All projects
        </Link>

        {(project.period || project.role) && (
          <p className="section-label mb-3">
            {[project.role, project.period].filter(Boolean).join(" · ")}
          </p>
        )}
        <h1 className="heading-1">{project.title}</h1>
        <p className="mt-6 text-lg text-[rgb(var(--muted))] leading-relaxed">
          {project.description}
        </p>

        {project.bullets && (
          <ul className="mt-6 space-y-2.5">
            {project.bullets.map((b, i) => (
              <li
                key={i}
                className="text-[0.95rem] text-[rgb(var(--foreground)/0.85)] leading-relaxed"
              >
                {b}
              </li>
            ))}
          </ul>
        )}

        <p className="mt-8 text-sm text-[rgb(var(--faint))]">
          {project.tech.join(" · ")}
        </p>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-1.5 font-medium u-link"
          >
            <GithubIcon size={16} />
            View on GitHub
            <ArrowUpRight size={15} />
          </a>
        )}

        {project.images && project.images.length > 0 && (
          <div className="mt-14 grid gap-10">
            {project.images.map((src, i) => (
              <figure
                key={src}
                className="border hairline bg-[rgb(var(--surface))] p-2 md:p-3"
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  width={1600}
                  height={1000}
                  className="w-full h-auto"
                />
              </figure>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
