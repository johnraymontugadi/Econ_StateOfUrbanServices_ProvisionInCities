"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CharacterPanel } from "./character-panel";
import { RunningTally } from "./running-tally";
import { beats, maria, pia } from "@/lib/divide-data";

const BEAT_VIEWPORT_HEIGHTS = 1; // each beat occupies one screen of scroll

export function DivideExperience() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let raf = 0;
    const compute = () => {
      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight;
      // Distance scrolled into the section, in px.
      // rect.top goes from `viewportH` (just entering) down to 0 and beyond.
      const offset = -rect.top;
      const beatPx = viewportH * BEAT_VIEWPORT_HEIGHTS;
      const raw = Math.floor(offset / beatPx);
      const clamped = Math.max(0, Math.min(beats.length - 1, raw));
      setActiveIndex((prev) => (prev === clamped ? prev : clamped));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const beatsSoFar = useMemo(
    () => beats.slice(0, activeIndex + 1),
    [activeIndex],
  );
  const activeBeat = beats[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative bg-zinc-950"
      style={{ height: `${beats.length * 100 * BEAT_VIEWPORT_HEIGHTS}vh` }}
      aria-label="Two lives, one day — scrollytelling"
    >
      {/* sticky stage */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* progress / time strip */}
        <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-4 border-b border-white/10 bg-zinc-950/85 px-4 py-3 text-xs text-zinc-400 backdrop-blur md:px-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-zinc-500">
              Beat {String(activeIndex + 1).padStart(2, "0")} / {String(beats.length).padStart(2, "0")}
            </span>
            <span className="hidden h-3 w-px bg-white/10 md:inline-block" />
            <span className="hidden font-mono text-white md:inline">
              {activeBeat.time}
            </span>
            <span className="hidden h-3 w-px bg-white/10 md:inline-block" />
            <span className="hidden text-zinc-300 md:inline">
              {activeBeat.headline}
            </span>
          </div>
          <p className="font-mono uppercase tracking-[0.25em] text-zinc-500">
            Two lives, one day
          </p>
        </div>

        {/* split panels — vertical on mobile, horizontal on md+ */}
        <div
          key={activeBeat.id}
          className="grid h-full animate-in fade-in duration-500 grid-cols-1 md:grid-cols-2"
        >
          <CharacterPanel character={maria} beat={activeBeat} />
          <CharacterPanel character={pia} beat={activeBeat} />
        </div>

        <RunningTally
          beatsSoFar={beatsSoFar}
          totalBeats={beats.length}
          activeIndex={activeIndex}
        />
      </div>
    </section>
  );
}
