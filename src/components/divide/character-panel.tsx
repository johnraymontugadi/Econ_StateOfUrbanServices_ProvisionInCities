import { Clock, Coins, Footprints } from "lucide-react";
import type { Beat, Character, Setting } from "@/lib/divide-data";
import { cn } from "@/lib/utils";

type Props = {
  character: Character;
  beat: Beat;
};

const settingStyles: Record<
  Setting,
  { container: string; accent: string; tag: string }
> = {
  formal: {
    container:
      "bg-gradient-to-br from-sky-950/60 via-zinc-950 to-indigo-950/40",
    accent: "text-sky-300",
    tag: "bg-sky-500/15 text-sky-200 border-sky-400/30",
  },
  informal: {
    container:
      "bg-gradient-to-br from-amber-950/50 via-zinc-950 to-rose-950/40",
    accent: "text-amber-300",
    tag: "bg-amber-500/15 text-amber-200 border-amber-400/30",
  },
};

function formatCost(value: number) {
  const sign = value < 0 ? "−" : "";
  return `${sign}₱${Math.abs(value).toLocaleString("en-PH")}`;
}

export function CharacterPanel({ character, beat }: Props) {
  const styles = settingStyles[character.setting];
  const moment = character.setting === "formal" ? beat.maria : beat.pia;

  return (
    <div
      className={cn(
        "relative flex h-full flex-col overflow-hidden border border-white/5 px-6 py-10 md:px-10",
        styles.container,
      )}
    >
      {/* corner identity */}
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <p className={cn("text-xs uppercase tracking-[0.3em]", styles.accent)}>
            {character.setting === "formal" ? "Formal city" : "Informal city"}
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
            {character.name}, {character.age}
          </h2>
          <p className="mt-1 text-sm text-zinc-400">
            {character.occupation} · {character.neighborhood}
          </p>
        </div>
        <div
          className={cn(
            "shrink-0 rounded-full border px-3 py-1 font-mono text-xs",
            styles.tag,
          )}
        >
          {beat.time}
        </div>
      </div>

      {/* the beat */}
      <div className="mt-10 flex-1">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
          {beat.service === "framing" ? "—" : beat.service}
        </p>
        <h3 className="mt-2 text-lg font-medium text-white md:text-xl">
          {beat.headline}
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-300 md:text-lg">
          {moment.description}
        </p>
      </div>

      {/* per-beat stats */}
      <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
        <Stat
          icon={<Clock className="h-3.5 w-3.5" />}
          label="Minutes"
          value={moment.minutes ? `+${moment.minutes}` : "—"}
        />
        <Stat
          icon={<Coins className="h-3.5 w-3.5" />}
          label="Cost"
          value={moment.cost !== 0 ? formatCost(moment.cost) : "—"}
        />
        <Stat
          icon={<Footprints className="h-3.5 w-3.5" />}
          label="Walked"
          value={moment.distance ? `${moment.distance}m` : "—"}
        />
      </dl>
    </div>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div>
      <dt className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
        {icon}
        {label}
      </dt>
      <dd className="mt-1.5 font-mono text-base text-white md:text-lg">
        {value}
      </dd>
    </div>
  );
}
