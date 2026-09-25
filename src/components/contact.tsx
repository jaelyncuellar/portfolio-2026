import { LinkedinIcon, GithubIcon } from "./icons";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container text-center">
        <p className="section-label mb-4">06 · Contact</p>
        <h2 className="heading-1 mb-6">Let&apos;s talk.</h2>
        <p className="text-[rgb(var(--muted))] max-w-xl mx-auto">
          Open to software engineering roles — remote or East Coast.
        </p>

        <p className="mt-8">
          <a
            href={`mailto:${profile.email}`}
            className="text-xl md:text-2xl font-medium u-link"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {profile.email}
          </a>
        </p>

        <div className="mt-8 flex items-center justify-center gap-6 text-[rgb(var(--muted))]">
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
          <span className="text-sm">{profile.location}</span>
        </div>
      </div>
    </section>
  );
}
