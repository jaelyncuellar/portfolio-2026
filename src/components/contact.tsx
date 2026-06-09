export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-8"
    >
      <div className="max-w-4xl mx-auto">

        <div
          className="
            bg-[rgba(var(--surface),0.8)]
            border
            border-[rgb(var(--border))]
            rounded-[40px]
            p-12
            text-center
          "
        >
          <p className="uppercase tracking-[0.3em] text-[rgb(var(--muted))] text-sm">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4 px-0">
            Let's Build Something Great
          </h2>

          <div
            className="
              flex
              flex-col
              md:flex-row
              justify-center
              gap-4
              mt-12
            "
          >
            <a
              href="mailto:jluvcuellar@gmail.com"
              className="
                px-6
                py-3
                rounded-full
                bg-[rgba(var(--accent)/0.8)]
                text-black
                font-medium
              "
            >
              Email Me
            </a>

            <a
              href="https://github.com/jaelyncuellar"
              target="_blank"
              className="
                px-6
                py-3
                rounded-full
                border
                border-zinc-700
              "
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/jaelyncuellar"
              target="_blank"
              className="
                px-6
                py-3
                rounded-full
                border
                border-zinc-700
              "
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}