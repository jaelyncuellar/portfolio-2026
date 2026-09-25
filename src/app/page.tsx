import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Education from "@/components/education";
import CvBand from "@/components/cv-band";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Reveal from "@/components/reveal";

export default function Home() {
  return (
    <main className="bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      <Navbar />
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Education />
      </Reveal>
      <Reveal>
        <CvBand />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Footer />
    </main>
  );
}
