import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="bg-[rgb(var(--ink))] text-white mt-8">
      <div className="container py-14 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-10 border-b hairline-light">
          <div>
            <p
              className="text-3xl md:text-4xl font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {profile.name}
              <span className="text-[rgb(var(--accent))]">.</span>
            </p>
            <p className="mt-3 text-white/55 max-w-md">
              {profile.title} — {profile.location}. Building reliable software,
              end to end.
            </p>
          </div>
          <Link
            href="/cv"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[rgb(var(--accent))] text-white font-semibold hover:bg-[rgb(var(--accent-hover))] transition-colors w-fit"
          >
            View CV
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex items-center gap-6 text-white/50">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-[rgb(var(--accent))] transition-colors"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[rgb(var(--accent))] transition-colors"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="hover:text-[rgb(var(--accent))] transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
