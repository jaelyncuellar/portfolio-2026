import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="pt-36 md:pt-44 pb-16 md:pb-24">
      <div className="container">
        <p className="section-label mb-6">
          {profile.title} · {profile.location}
        </p>
        <h1 className="hero-title max-w-4xl">
          {profile.firstName} {profile.lastName}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[rgb(var(--muted))] max-w-2xl leading-relaxed">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-[0.95rem]">
          <Link
            href="/cv"
            className="inline-flex items-center gap-1.5 font-medium u-link"
          >
            View CV
            <ArrowUpRight size={16} />
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 font-medium u-link"
          >
            {profile.email}
            <ArrowUpRight size={16} />
          </a>
          <span className="flex items-center gap-5 text-[rgb(var(--muted))]">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-[rgb(var(--foreground))] transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[rgb(var(--foreground))] transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
          </span>
        </div>

        <p className="mt-10 text-sm text-[rgb(var(--faint))]">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 mr-2 align-middle" />
          Available for new opportunities — {profile.availability}
        </p>
      </div>
    </section>
  );
}
