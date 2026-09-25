"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
        scrolled || menuOpen
          ? "bg-[rgb(var(--background)/0.9)] backdrop-blur-md border-b hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex justify-between items-center h-[68px]">
        <Link
          href="/"
          className="font-semibold tracking-tight text-[1.05rem]"
          style={{ fontFamily: "var(--font-heading)" }}
          aria-label="Jaelyn Cuellar — home"
        >
          {profile.name}
        </Link>

        <div className="hidden md:flex items-center gap-7 text-[0.9rem]">
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
            className="font-medium u-link"
          >
            CV
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 -mr-2 text-[rgb(var(--foreground))]"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t hairline">
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
              className="py-3 text-[1.05rem] font-medium"
            >
              CV
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
