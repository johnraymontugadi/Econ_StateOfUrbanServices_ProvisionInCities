"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { dayTotals } from "@/lib/divide-data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function fmtHours(value: number) {
  const h = Math.floor(value / 60);
  const m = Math.round(value % 60);
  if (h === 0) return `${m} min`;
  return m === 0 ? `${h} hours` : `${h}h ${m}m`;
}

function fmtCost(value: number) {
  const sign = value < 0 ? "−" : "";
  return `${sign}₱${Math.abs(Math.round(value)).toLocaleString("en-PH")}`;
}

export function DaySummary() {
  const minuteGap = dayTotals.clara.minutes - dayTotals.maria.minutes;
  const costGap = dayTotals.clara.cost - dayTotals.maria.cost;
  const distanceGap = dayTotals.clara.distance - dayTotals.maria.distance;
  const hoursOnly = (minuteGap / 60).toFixed(1);

  // Annualized impact (250 working days)
  const annualHours = Math.round((minuteGap / 60) * 250);
  const annualPesos = Math.round(costGap * 250);

  return (
    <section
      id="day-summary"
      className="scroll-mt-16 bg-zinc-950 px-4 py-24 text-white md:px-6 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
          The day, totalled
        </p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
          By bedtime, the divide cost Clara{" "}
          <span className="bg-gradient-to-r from-amber-300 via-rose-400 to-amber-300 bg-clip-text text-transparent">
            {hoursOnly} extra hours
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-r from-amber-300 via-rose-400 to-amber-300 bg-clip-text text-transparent">
            {fmtCost(costGap)}
          </span>
          .
        </h2>

        <div className="mt-12 grid gap-6 border-y border-white/10 py-10 md:grid-cols-3">
          <Total label="Time gap" value={fmtHours(minuteGap)} sub={`+${annualHours} hours / year`} />
          <Total label="Cost gap" value={fmtCost(costGap)} sub={`+${fmtCost(annualPesos)} / year`} />
          <Total
            label="Distance gap"
            value={`${(distanceGap / 1000).toFixed(1)} km`}
            sub={`+${Math.round((distanceGap / 1000) * 250)} km / year`}
          />
        </div>

        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
          One day, two lives. Multiply by every Tondo household. That gap, summed
          across a city, is what economists call the <em>poverty premium</em> —
          and it's the daily tax of an unequal urban services system.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/papers"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 bg-white px-5 text-base text-zinc-950 hover:bg-white/90",
            )}
          >
            Read the research
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() =>
              window.dispatchEvent(new CustomEvent("divide:replay"))
            }
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-11 border-white/20 bg-transparent px-5 text-base text-white hover:bg-white/10 hover:text-white",
            )}
          >
            Replay the day
          </button>
        </div>
      </div>
    </section>
  );
}

function Total({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
        {label}
      </p>
      <p className="mt-3 font-mono text-3xl text-white md:text-4xl">{value}</p>
      <p className="mt-2 text-sm text-zinc-400">{sub}</p>
    </div>
  );
}
