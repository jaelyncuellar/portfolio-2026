import ChapterHead from "./chapter-head";
import { LinkedinIcon, GithubIcon } from "./icons";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="relative tint-center">
      <div className="container section">
        <div className="max-w-3xl mx-auto text-center">
          <ChapterHead
            index="05"
            label="Contact"
            align="center"
            titleClassName="heading-1"
            title={
              <>
                Have a role in mind?
                <br />
                <span className="italic text-[rgb(var(--accent-hover))]">
                  Let&apos;s talk.
                </span>
              </>
            }
          />
          <p className="lead mx-auto mt-6">
            Open to software engineering roles, remote, or East Coast. 
          </p>

          <div aria-hidden className="mt-10 flex items-center gap-4 max-w-xs mx-auto">
            <hr className="divider-wave flex-1" />
            <span className="text-[rgb(var(--accent))] text-sm">✦</span>
            <hr className="divider-wave flex-1" />
          </div>

          <p className="mt-8">
            <a
              href={`mailto:${profile.email}`}
              className="text-2xl md:text-4xl font-semibold u-link tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {profile.email}
            </a>
          </p>

          <div className="mt-10 flex items-center justify-center gap-6 text-[rgb(var(--muted))]">
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
