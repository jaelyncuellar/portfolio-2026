import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-8"
    >
      <div className="max-w-5xl mx-auto">

        <div className="mb-16">
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
            Career
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Professional Experience
          </h2>
        </div>

        <div className="relative border-l border-zinc-800 ml-4">

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
                  bg-[#C8A97E]
                "
              />

              <div
                className="
                  bg-zinc-950
                  border
                  border-zinc-800
                  rounded-3xl
                  p-8
                "
              >
                <p className="text-sm text-[#C8A97E] mb-2">
                  {job.period}
                </p>

                <h3 className="text-2xl font-semibold">
                  {job.title}
                </h3>

                <p className="text-zinc-400 mt-1">
                  {job.company}
                </p>

                <p className="text-zinc-300 mt-6 leading-relaxed">
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