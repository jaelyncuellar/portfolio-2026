import { LinkedinIcon, GithubIcon } from "./icons";
import { Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto rounded-[40px] border border-[rgb(var(--border))] bg-[rgb(var(--surface)/0.8)] p-10 md:p-16 text-center shadow-[var(--shadow-subtle)]">
          <p className="section-label mb-4">06 — Contact</p>
          <h2
            className="heading-1 font-semibold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Let&apos;s build something great.
          </h2>
          <p className="mt-6 text-[rgb(var(--muted))] max-w-xl mx-auto">
            I&apos;m currently open to software engineering roles — remote or on
            the East Coast. My inbox is always open.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[rgb(var(--accent))] text-white font-medium hover:bg-[rgb(var(--accent-hover))] transition-colors"
            >
              <Mail size={18} />
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[rgb(var(--foreground)/0.25)] font-medium hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent-hover))] transition-colors"
            >
              <GithubIcon size={18} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[rgb(var(--foreground)/0.25)] font-medium hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent-hover))] transition-colors"
            >
              <LinkedinIcon size={18} />
              LinkedIn
            </a>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-[rgb(var(--muted))]">
            <MapPin size={15} />
            {profile.location} · {profile.availability}
          </p>
        </div>
      </div>
    </section>
  );
}
