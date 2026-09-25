"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgb(var(--background)/0.85)] backdrop-blur-xl border-b border-[rgb(var(--border))]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-[76px]">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Jaelyn Cuellar — home"
        >
          <span className="w-10 h-10 rounded-full bg-[rgb(var(--foreground))] text-[rgb(var(--background))] flex items-center justify-center font-semibold tracking-wide text-sm">
            {profile.initials}
          </span>
          <span className="hidden sm:block font-semibold tracking-tight">
            {profile.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7 text-[0.95rem]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/cv"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[rgb(var(--accent))] text-white font-medium text-sm hover:bg-[rgb(var(--accent-hover))] transition-colors"
          >
            <FileText size={16} />
            View CV
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface)/0.7)] backdrop-blur-md"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mb-4 rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--surface)/0.95)] backdrop-blur-xl p-6 flex flex-col gap-1 text-center shadow-xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-lg text-[rgb(var(--foreground))]"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/cv"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[rgb(var(--accent))] text-white font-medium"
          >
            <FileText size={16} />
            View CV
          </Link>
        </div>
      </div>
    </nav>
  );
}
