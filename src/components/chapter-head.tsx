import type { ReactNode } from "react";

type ChapterHeadProps = {
  /** chapter number as shown in the label, e.g. "01" */
  index: string;
  /** chapter name as shown in the label, e.g. "About" */
  label: string;
  title: ReactNode;
  /** optional intro paragraph under the title, in the shared .lead voice */
  lead?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  /** heading size utility - defaults to the standard chapter size */
  titleClassName?: string;
  className?: string;
};

/**
 * Shared chapter opening: numbered label + gradient rule, Fraunces title,
 * optional lead. Every chapter opens the same way (cohesion) while each
 * chapter's body keeps its own layout.
 */
export default function ChapterHead({
  index,
  label,
  title,
  lead,
  tone = "light",
  align = "left",
  titleClassName = "heading-2",
  className = "",
}: ChapterHeadProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <div
        className={`flex items-center gap-4 mb-4 ${
          centered ? "justify-center" : ""
        }`}
      >
        {centered && (
          <span
            aria-hidden
            className="h-px w-10 bg-gradient-to-r from-transparent to-[rgb(var(--accent)/0.6)]"
          />
        )}
        <p className="section-label">
          {index} · {label}
        </p>
        <span
          aria-hidden
          className="h-px w-14 bg-gradient-to-r from-[rgb(var(--accent)/0.6)] to-[rgb(var(--accent2)/0.6)]"
        />
      </div>
      <h2 className={titleClassName}>{title}</h2>
      {lead ? (
        <p
          className={`lead mt-4 ${tone === "dark" ? "lead--dark" : ""} ${
            centered ? "mx-auto" : ""
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
