import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
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
      <section className="max-w-5xl mx-auto px-6 pt-36 pb-24">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))] transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        {(project.period || project.role) && (
          <p className="section-label mb-3">
            {[project.role, project.period].filter(Boolean).join(" · ")}
          </p>
        )}
        <h1
          className="heading-1 font-semibold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {project.title}
        </h1>
        <p className="mt-6 text-lg text-[rgb(var(--muted))] max-w-3xl leading-relaxed">
          {project.description}
        </p>

        {project.bullets && (
          <ul className="mt-6 space-y-3 max-w-3xl">
            {project.bullets.map((b, i) => (
              <li
                key={i}
                className="flex gap-3 text-[rgb(var(--foreground)/0.85)] leading-relaxed"
              >
                <span className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--accent))]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mt-8">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-4 py-1.5 rounded-full text-sm border border-[rgb(var(--border))] bg-[rgb(var(--surface)/0.6)] text-[rgb(var(--muted))]"
            >
              {t}
            </span>
          ))}
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[rgb(var(--foreground))] text-[rgb(var(--background))] font-medium hover:bg-[rgb(var(--accent-hover))] hover:text-white transition-colors"
          >
            <GithubIcon size={18} />
            View on GitHub
          </a>
        )}

        {project.images && project.images.length > 0 && (
          <div className="mt-14 grid gap-8">
            {project.images.map((src, i) => (
              <div
                key={src}
                className="relative rounded-[var(--radius-lg)] overflow-hidden border border-[rgb(var(--border))] shadow-[var(--shadow-subtle)]"
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  width={1600}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
