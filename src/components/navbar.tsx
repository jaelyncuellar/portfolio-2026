
"use client"; 

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { menu } from "framer-motion/client";



export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => 
        window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <nav
        className={`
            fixed top-0 left-0 right-0 z-50
            transition-all duration-300 border-[rgb(var(--border)/0.1)]
            ${
                scrolled 
                ? "backdrop-blur-xl bg-[rgb(var(--background)/0.2)] border-b border-[rgb(var(--border)/0.5)]"
                : "bg-transparent"
            }
        `}
        > 
        <div className="max-w-7xl mx-auto px-8 py-6 lg:px-8 flex justify-between items-center">
            {/* LOGO */}
            <Link 
                href="/" 
                className="font-semibold text-lg"
            >
                JC
            </Link>
            {/* Desktop nav */}
            <div className="hidden gap-8 text-lg md:flex">
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>
            </div>


            {/* MOBILE HAMBURGER */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="
                md:hidden
                flex items-center justify-center
                w-10 h-10
                rounded-lg
                border border-zinc-700
                bg-zinc-900/40
                backdrop-blur-md
                transition-all duration-500
                hover:bg-zinc-700
                hover:shadow-[0_0_18px_rgba(255,255,255,0.06)]
                "
            >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>


            {/* MOBILE DROPDOWN  */}
            <div 
                className={`
                    md:hidden overflow-hidden
                    transition-all duration-300 ease-in-out
                    ${
                        menuOpen                        
                            ? "max-h-screen opacity-100"
                            : "max-h-0 opacity-0"
                    }
                `}
            >
                <div
                className="
                mx-4 mb-4
                rounded-2xl
                bg-zinc-900/80 border border-zinc-800
                p-6 flex flex-col gap-5
                text-center
                "
                >
                <a
                    href="#projects"
                    onClick={()=>setMenuOpen(false)}
                >
                    Projects
                </a>
                <a
                    href="#skills"
                    onClick={()=>setMenuOpen(false)}
                >
                    Skills
                </a>
                <a
                    href="#experience"
                    onClick={()=>setMenuOpen(false)}
                >
                    Experience
                </a>
                <a
                    href="#contact"
                    onClick={()=>setMenuOpen(false)}
                >
                    Contact
                </a>
                </div>
            </div>
        </div>
    </nav>
    );
}