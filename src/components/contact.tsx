import { LinkedinIcon, GithubIcon } from "./icons";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="max-w-3xl">
          <p className="section-label mb-4">06 · Contact</p>
          <h2 className="heading-1 mb-6">
            Have a role in mind?
            <br />
            <span className="italic text-[rgb(var(--accent-hover))]">
              Let&apos;s talk.
            </span>
          </h2>
          <p className="text-[rgb(var(--muted))] max-w-xl text-lg">
            Open to software engineering roles — remote or East Coast. The
            fastest way to reach me is email.
          </p>

          <p className="mt-10">
            <a
              href={`mailto:${profile.email}`}
              className="text-2xl md:text-4xl font-semibold u-link tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {profile.email}
            </a>
          </p>

          <div className="mt-10 flex items-center gap-6 text-[rgb(var(--muted))]">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-[rgb(var(--foreground))] transition-colors"
            >
              <GithubIcon size={22} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[rgb(var(--foreground))] transition-colors"
            >
              <LinkedinIcon size={22} />
            </a>
            <span className="text-sm">{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
