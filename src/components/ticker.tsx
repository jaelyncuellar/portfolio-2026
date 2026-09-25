import { skillTicker } from "@/data/skills";

export default function Ticker() {
  const row = [...skillTicker, ...skillTicker];
  return (
    <div className="border-y border-[rgb(var(--border))] bg-[rgb(var(--surface)/0.5)] overflow-hidden py-5 select-none">
      <div className="ticker-track flex w-max">
        {row.map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-10 pr-10 whitespace-nowrap"
            aria-hidden={i >= skillTicker.length}
          >
            <span
              className="text-2xl text-[rgb(var(--foreground)/0.75)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {skill}
            </span>
            <span className="text-[rgb(var(--accent))] text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
