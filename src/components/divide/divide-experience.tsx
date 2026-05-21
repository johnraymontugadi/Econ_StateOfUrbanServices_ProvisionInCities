"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CharacterPanel } from "./character-panel";
import { RunningTally } from "./running-tally";
import { beats, maria, clara, formatTime } from "@/lib/divide-data";
import { cn } from "@/lib/utils";

const AUTO_SCROLL_DELAY_MS = 1800;

export function DivideExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasAutoScrolledRef = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  // "Replay the day" (dispatched from the day summary below) resets the
  // timeline to the first beat and scrolls back up to the start.
  useEffect(() => {
    const onReplay = () => {
      hasAutoScrolledRef.current = false;
      setActiveIndex(0);
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("divide:replay", onReplay);
    return () => window.removeEventListener("divide:replay", onReplay);
  }, []);

  // Keyboard navigation: ←/→ to step, Home/End to jump.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(beats.length - 1, i + 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(0, i - 1));
      } else if (e.key === "Home") {
        e.preventDefault();
        setActiveIndex(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setActiveIndex(beats.length - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // When the user reaches the last beat, auto-scroll to the day summary
  // after a short pause. Only fires once per page load.
  useEffect(() => {
    if (activeIndex !== beats.length - 1) return;
    if (hasAutoScrolledRef.current) return;
    const timer = window.setTimeout(() => {
      hasAutoScrolledRef.current = true;
      const target = document.getElementById("day-summary");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, AUTO_SCROLL_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  const activeBeat = beats[activeIndex];
  const beatsSoFar = useMemo(
    () => beats.slice(0, activeIndex + 1),
    [activeIndex],
  );

  const goPrev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const goNext = () =>
    setActiveIndex((i) => Math.min(beats.length - 1, i + 1));
  const atStart = activeIndex === 0;
  const atEnd = activeIndex === beats.length - 1;

  return (
    <section
      ref={sectionRef}
      className="relative scroll-mt-24 bg-zinc-950 px-4 py-16 md:px-6 md:py-24"
      aria-label="Two lives, one day — interactive timeline"
    >
      <div className="mx-auto max-w-5xl">
        {/* Eyebrow strip */}
        <div className="mb-6 flex items-center justify-between text-xs text-zinc-500 md:mb-8">
          <span className="font-mono">
            Beat {String(activeIndex + 1).padStart(2, "0")} / {String(beats.length).padStart(2, "0")}
          </span>
          <span className="font-mono uppercase tracking-[0.25em]">
            Two lives, one day
          </span>
        </div>

        {/* Contained comparison card */}
        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
          <div
            key={activeBeat.id}
            className="grid min-h-[26rem] animate-in fade-in duration-300 grid-cols-1 md:grid-cols-2 md:min-h-[28rem]"
          >
            <CharacterPanel character={maria} beat={activeBeat} />
            <CharacterPanel character={clara} beat={activeBeat} />
          </div>
        </div>

        {/* Time control: ◄  time + headline  ► */}
        <div className="mt-10 flex items-center justify-center gap-6 md:gap-10">
          <button
            type="button"
            onClick={goPrev}
            disabled={atStart}
            aria-label="Previous beat"
            className={cn(
              "inline-flex h-12 w-12 items-center justify-center rounded-full text-white/80 transition-all",
              "hover:bg-white/5 hover:text-white",
              "disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:bg-transparent",
            )}
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <div className="min-w-[12rem] text-center md:min-w-[16rem]">
            <div className="font-mono text-3xl text-white md:text-4xl">
              {formatTime(activeBeat.time)}
            </div>
            <div className="mt-1.5 text-xs uppercase tracking-[0.25em] text-zinc-400 md:text-sm">
              {activeBeat.headline}
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            disabled={atEnd}
            aria-label="Next beat"
            className={cn(
              "inline-flex h-12 w-12 items-center justify-center rounded-full text-white/80 transition-all",
              "hover:bg-white/5 hover:text-white",
              "disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:bg-transparent",
            )}
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>

        <p className="mt-5 text-center text-[11px] uppercase tracking-[0.25em] text-zinc-600">
          Use ← → arrows
        </p>

        {/* Running tally — contained inside the same max-width */}
        <div className="mt-12 overflow-hidden rounded-xl border border-white/10">
          <RunningTally
            beatsSoFar={beatsSoFar}
            totalBeats={beats.length}
            activeIndex={activeIndex}
          />
        </div>
      </div>
    </section>
  );
}
