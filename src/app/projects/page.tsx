import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { GithubIcon } from "@/components/icons";
import { projects, type Project, type ProjectCategory } from "@/data/projects";

export const metadata = {
  title: "All Projects — Jaelyn Cuellar",
  description:
    "Every project by Jaelyn Cuellar: robotics & perception, professional, client, and personal work, with GitHub and live links.",
};

const groups: { id: ProjectCategory; title: string; blurb: string }[] = [
  {
    id: "robotics",
    title: "Robotics & Perception",
    blurb: "Detection, tracking, sensor fusion, and ROS 2 — robots that see.",
  },
  {
    id: "professional",
    title: "Professional",
    blurb: "Platforms built for employers and production users.",
  },
  {
    id: "client",
    title: "Client",
    blurb: "Sites and systems built for clients and real events.",
  },
  {
    id: "personal",
    title: "Personal / Experiments",
    blurb: "Independent engineering — backends, ML pipelines, and apps.",
  },
];

function ProjectRow({ p }: { p: Project }) {
  return (
    <article className="border-b hairline py-7 grid gap-3 md:grid-cols-[1fr_auto] md:gap-10 items-baseline">
      <div className="min-w-0">
        <Link href={`/projects/${p.slug}`}>
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight hover:text-[rgb(var(--accent-hover))] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
            {p.title}
          </h3>
        </Link>
        <p className="mt-1.5 text-[0.95rem] text-[rgb(var(--muted))] leading-relaxed max-w-2xl">
          {p.description}
        </p>
        {p.bullets && (
          <ul className="mt-2.5 space-y-1">
            {p.bullets.slice(0, 2).map((b, i) => (
              <li key={i} className="text-sm text-[rgb(var(--muted))] leading-relaxed pl-4 relative">
                <span aria-hidden className="absolute left-0 text-[rgb(var(--accent))]">✦</span>
                {b}
              </li>
            ))}
          </ul>
        )}
        <p className="mt-2.5 text-sm text-[rgb(var(--faint))]">{p.tech.join(" · ")}</p>
      </div>
      <div className="flex md:flex-col items-start gap-2.5 md:text-right text-sm shrink-0">
        {(p.period || p.role) && (
          <p className="text-[rgb(var(--faint))]">{[p.role, p.period].filter(Boolean).join(" · ")}</p>
        )}
        <Link href={`/projects/${p.slug}`} className="inline-flex items-center gap-1.5 font-semibold u-link">
          Case study
          <ArrowRight size={14} />
        </Link>
        {p.site && (
          <a href={p.site} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))] transition-colors">
            Live site
            <ArrowUpRight size={14} />
          </a>
        )}
        {p.github && (
          <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-medium text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))] transition-colors">
            <GithubIcon size={15} />
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}

export default function AllProjectsPage() {
  return (
    <main className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      <Navbar />
      <section className="container pt-32 md:pt-40 pb-10 max-w-5xl">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))] transition-colors mb-10">
          <ArrowLeft size={16} />
          Selected work
        </Link>
        <p className="section-label mb-3">✦ The full archive</p>
        <h1 className="heading-1">All projects</h1>
        <p className="mt-5 text-lg text-[rgb(var(--muted))] leading-relaxed max-w-2xl">
          Everything meaningful in one place — {projects.length} projects across
          robotics &amp; perception, professional platforms, client work, and
          personal experiments. Each links to its case study and, where public,
          its code on GitHub.
        </p>
      </section>

      {groups.map((g) => {
        const items = projects.filter((p) => p.category === g.id);
        if (items.length === 0) return null;
        return (
          <section key={g.id} className="container max-w-5xl pb-14">
            <h2 className="heading-3 mb-1">{g.title}</h2>
            <p className="text-sm text-[rgb(var(--muted))] mb-2">{g.blurb}</p>
            <div className="border-t hairline">
              {items.map((p) => (
                <ProjectRow key={p.slug} p={p} />
              ))}
            </div>
          </section>
        );
      })}

      <Footer />
    </main>
  );
}
