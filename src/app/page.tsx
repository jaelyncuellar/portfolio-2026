import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FeaturedWork from "@/components/featured-work";
import ProjectGrid from "@/components/project-grid";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

import Reveal from "@/components/reveal";

export default function Home() {
  return (
    <main className="bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      <Navbar />
        <Hero />
        <Reveal>
       <FeaturedWork />
       </Reveal>
    <Reveal>
      <ProjectGrid />
      </Reveal>
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}