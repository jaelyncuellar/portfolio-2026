import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-8"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="uppercase tracking-[0.3em] text-[rgb(var(--muted))] text-sm">
            Career
          </p>

          <h2 className="heading-1 text-4xl md:text-5xl font-bold mt-4 mb-16">
            Professional Experience
          </h2>
        </div>

        <div className="relative border-l border-[rgb(var(--border))] ml-4">

          {experiences.map((job) => (
            <div
              key={job.title}
              className="relative mb-16 pl-12"
            >
              <div
                className="
                  absolute
                  left-[-9px]
                  top-2
                  w-4
                  h-4
                  rounded-full
                  bg-[rgb(var(--accent)/0.6)]
                "
              />

              <div
                className="
                  bg-[rgb(var(--background))]
                  border
                  border-[rgb(var(--border))]
                  rounded-3xl
                  p-8
                "
              >
                <p className="text-sm text-[rgb(var(--accent))] mb-2">
                  {job.period}
                </p>

                <h3 className="text-2xl font-semibold">
                  {job.title}
                </h3>

                <p className="text-[rgb(var(--muted))] mt-1">
                  {job.company}
                </p>

                <p className="text-[rgb(var(--muted))] mt-6 leading-relaxed">
                  {job.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}