import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--border))]">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-[rgb(var(--foreground))] text-[rgb(var(--background))] flex items-center justify-center font-semibold text-xs">
            {profile.initials}
          </span>
          <span className="font-semibold text-sm">{profile.name}</span>
        </Link>

        <p className="text-sm text-[rgb(var(--muted))]">
          © {new Date().getFullYear()} {profile.name} · Built with Next.js
        </p>

        <div className="flex items-center gap-5 text-[rgb(var(--muted))]">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-[rgb(var(--accent-hover))] transition-colors"
          >
            <GithubIcon size={19} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[rgb(var(--accent-hover))] transition-colors"
          >
            <LinkedinIcon size={19} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="hover:text-[rgb(var(--accent-hover))] transition-colors"
          >
            <Mail size={19} />
          </a>
          <Link
            href="/cv"
            className="text-sm font-medium hover:text-[rgb(var(--accent-hover))] transition-colors"
          >
            CV
          </Link>
        </div>
      </div>
    </footer>
  );
}
