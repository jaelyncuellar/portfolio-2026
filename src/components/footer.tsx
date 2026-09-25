import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[rgb(var(--faint))]">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <div className="flex items-center gap-5 text-[rgb(var(--faint))]">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-[rgb(var(--foreground))] transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[rgb(var(--foreground))] transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="hover:text-[rgb(var(--foreground))] transition-colors"
          >
            <Mail size={18} />
          </a>
          <Link
            href="/cv"
            className="text-sm font-medium hover:text-[rgb(var(--foreground))] transition-colors"
          >
            CV
          </Link>
        </div>
      </div>
    </footer>
  );
}
