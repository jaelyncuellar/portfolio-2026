"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

/**
 * tone="dark": sits over the dark hero — light text until scrolled,
 * then settles into a frosted paper bar. tone="light": always paper.
 */
export default function Navbar({ tone = "light" }: { tone?: "dark" | "light" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const overDark = tone === "dark" && !scrolled && !menuOpen;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        overDark
          ? "bg-transparent border-b border-transparent"
          : "bg-[rgb(var(--background)/0.88)] backdrop-blur-md border-b hairline"
      }`}
    >
      <div className="container flex justify-between items-center h-[72px]">
        <Link
          href="/"
          className={`text-[1.15rem] font-semibold tracking-tight transition-colors ${
            overDark
              ? "text-white"
              : "text-[rgb(var(--foreground))]"
          }`}
          style={{ fontFamily: "var(--font-heading)" }}
          aria-label="Jaelyn Cuellar — home"
        >
          {profile.name}
          <span className="text-[rgb(var(--accent))]">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-[0.9rem]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`transition-colors ${
                overDark
                  ? "text-white/65 hover:text-white"
                  : "text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))]"
              }`}
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/cv"
            className="inline-flex items-center gap-1 px-5 py-2 rounded-full bg-[rgb(var(--accent))] text-white text-sm font-semibold hover:bg-[rgb(var(--accent-hover))] transition-colors"
          >
            CV
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={`md:hidden p-2 -mr-2 transition-colors ${
            overDark ? "text-white" : "text-[rgb(var(--foreground))]"
          }`}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t hairline bg-[rgb(var(--background)/0.97)] backdrop-blur-md">
          <div className="container py-4 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-[1.05rem] border-b hairline last:border-0"
              >
                {l.label}
              </a>
            ))}
            <Link
              href="/cv"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-[1.05rem] font-semibold text-[rgb(var(--accent-hover))]"
            >
              View CV
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
