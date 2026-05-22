"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryPhoto } from "@/lib/gallery-data";

export function GalleryLightbox({ photos }: { photos: GalleryPhoto[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  );
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? i : (i - 1 + photos.length) % photos.length,
      ),
    [photos.length],
  );

  // While the overlay is open: lock body scroll and wire up keyboard controls
  // (Esc to close, ←/→ to step between photos).
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, next, prev]);

  const active = activeIndex === null ? null : photos[activeIndex];

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Enlarge photo ${i + 1}: ${p.caption}`}
            className="group block w-full cursor-zoom-in overflow-hidden rounded-xl border border-border/60 bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <span className="relative block aspect-[4/3] overflow-hidden bg-muted">
              <Image
                src={p.src}
                alt={p.caption}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-md bg-background/80 px-2 py-1 text-xs font-medium backdrop-blur">
                Photo {String(i + 1).padStart(2, "0")}
              </span>
            </span>
            <span className="block p-4 text-sm leading-relaxed text-muted-foreground">
              {p.caption}
            </span>
          </button>
        ))}
      </div>

      {isOpen && active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${activeIndex + 1} of ${photos.length}`}
          onClick={close}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm duration-200 animate-in fade-in md:p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-4"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-4"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Panel — image + caption beside it (stacked on mobile). */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-card shadow-2xl md:flex-row"
          >
            <div className="relative min-h-[45vh] flex-1 bg-black md:min-h-[60vh]">
              <Image
                src={active.src}
                alt={active.caption}
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="shrink-0 overflow-y-auto p-6 md:w-[320px]">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Photo {String(activeIndex + 1).padStart(2, "0")}
                <span className="text-muted-foreground">
                  {" / "}
                  {String(photos.length).padStart(2, "0")}
                </span>
              </span>
              <p className="mt-3 text-base leading-relaxed text-foreground md:text-lg">
                {active.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
