import { totalsFor, type Beat } from "@/lib/divide-data";

type Props = {
  beatsSoFar: Beat[];
  totalBeats: number;
  activeIndex: number;
};

function fmtMin(value: number) {
  if (value < 60) return `${Math.round(value)} min`;
  const h = Math.floor(value / 60);
  const m = Math.round(value % 60);
  return m === 0 ? `${h}h` : `${h}h ${m}m`;
}

function fmtCost(value: number) {
  const sign = value < 0 ? "−" : "";
  return `${sign}₱${Math.abs(Math.round(value)).toLocaleString("en-PH")}`;
}

function fmtDist(value: number) {
  return value < 1000
    ? `${Math.round(value)} m`
    : `${(value / 1000).toFixed(1)} km`;
}

export function RunningTally({ beatsSoFar, totalBeats, activeIndex }: Props) {
  const m = totalsFor(beatsSoFar, "maria");
  const p = totalsFor(beatsSoFar, "clara");
  const progress = totalBeats === 0 ? 0 : (activeIndex + 1) / totalBeats;

  return (
    <div className="border-t border-white/10 bg-zinc-950/85 backdrop-blur">
      {/* progress bar */}
      <div
        aria-hidden
        className="h-0.5 origin-left bg-gradient-to-r from-sky-400 via-fuchsia-400 to-amber-400 transition-transform duration-500 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-3 px-4 py-3 text-[11px] md:grid-cols-3 md:gap-6 md:px-6 md:py-4 md:text-xs">
        <TallyCol label="Time on services" mariaText={fmtMin(m.minutes)} claraText={fmtMin(p.minutes)} />
        <TallyCol label="Cost of services" mariaText={fmtCost(m.cost)} claraText={fmtCost(p.cost)} />
        <TallyCol label="Distance walked" mariaText={fmtDist(m.distance)} claraText={fmtDist(p.distance)} />
      </div>
    </div>
  );
}

function TallyCol({
  label,
  mariaText,
  claraText,
}: {
  label: string;
  mariaText: string;
  claraText: string;
}) {
  return (
    <div>
      <p className="text-zinc-500 uppercase tracking-[0.2em]">{label}</p>
      <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono">
        <span className="text-sky-300">M · {mariaText}</span>
        <span className="text-amber-300">C · {claraText}</span>
      </div>
    </div>
  );
}
