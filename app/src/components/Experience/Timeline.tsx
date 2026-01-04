import { useEffect, useRef, useState } from "react";
import type { ExperienceData } from "./ExperienceItem";

export default function Timeline({ items }: { items: ExperienceData[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const height = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), height);

      setProgress((scrolled / height) * 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* 👇 keep this in DOM but hide visually on mobile */}
      <div className="sticky top-40 h-[70vh] hidden md:flex items-start">
        {/* Timeline line */}
        <div className="relative w-[2px] h-full bg-white/15 overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-blue-400/80"
            style={{ height: `${progress}%` }}
          />
        </div>

        {/* Timeline labels */}
        <div className="ml-6 flex flex-col justify-between h-full py-2">
          {/* Present first */}
          {["Present", ...items.map((i) => i.startDate)].map(
            (label, i, arr) => {
              const checkpoint = (i / (arr.length - 1)) * 100;
              const active = progress >= checkpoint;

              return (
                <div key={i} className="relative py-6">
                  {active && (
                    <div
                      className="
                      absolute -left-4 top-1/2 -translate-y-1/2
                      w-40 h-10
                      bg-blue-500/30
                      blur-2xl
                      rounded-full
                    "
                    />
                  )}

                  <span
                    className={`
                    relative z-10
                    text-sm font-semibold
                    transition-all duration-300
                    ${active ? "text-white scale-110" : "text-slate-400"}
                  `}
                  >
                    {label}
                  </span>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
