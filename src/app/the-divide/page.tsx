import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { DivideExperience } from "@/components/divide/divide-experience";
import { DaySummary } from "@/components/divide/day-summary";
import { beats, maria, clara } from "@/lib/divide-data";

export const metadata = {
  title: "The Divide",
  description:
    "Two lives, one day. A scroll-driven look at how a city's services treat two people unequally.",
};

export default function TheDividePage() {
  return (
    <div className="bg-zinc-950 text-white">
      {/* Intro / opener */}
      <section className="relative isolate overflow-hidden border-b border-white/10 px-4 py-24 md:px-6 md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 30%, rgba(56,189,248,0.18), transparent 55%), radial-gradient(circle at 75% 70%, rgba(251,191,36,0.18), transparent 55%)",
          }}
        />
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Featured · The signature interactive
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            Two lives.{" "}
            <span className="bg-gradient-to-r from-sky-300 via-fuchsia-300 to-amber-300 bg-clip-text text-transparent">
              One day.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
            Maria lives in Quezon City. Clara lives in Tondo. Same age, same
            hustle. Different infrastructure. Step through their day below — beat
            by beat — and see what the urban services divide actually costs.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <CharCard char={maria} accent="sky" />
            <CharCard char={clara} accent="amber" />
          </div>

          <div className="mt-12 flex items-center gap-3 text-sm text-zinc-400">
            <ArrowDown className="h-4 w-4 animate-bounce" />
            {beats.length} beats · click through or use ← → arrows · ~6am to 10pm
          </div>
        </div>
      </section>

      <DivideExperience />

      <DaySummary />

      {/* Methodology footer */}
      <section className="border-t border-white/10 px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            About the numbers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            The minute counts, costs, and distances above are draft estimates
            grounded in the team's research — water vendor premiums, commute
            shares of household income, brownout impacts on informal economies.
            Each beat cites the paper or blog it draws from. Numbers are
            illustrative; verify against the linked sources before citing.
          </p>
          <p className="mt-3 text-base leading-relaxed text-zinc-400">
            Want the methodology in full? See{" "}
            <Link href="/papers" className="text-white underline-offset-4 hover:underline">
              the academic papers
            </Link>{" "}
            or{" "}
            <Link href="/blog" className="text-white underline-offset-4 hover:underline">
              the blog
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

function CharCard({
  char,
  accent,
}: {
  char: typeof maria | typeof clara;
  accent: "sky" | "amber";
}) {
  const accentClass =
    accent === "sky"
      ? "border-sky-400/30 bg-sky-500/5 text-sky-200"
      : "border-amber-400/30 bg-amber-500/5 text-amber-200";

  return (
    <div className={`rounded-xl border p-5 backdrop-blur ${accentClass}`}>
      <p className="text-xs uppercase tracking-[0.25em] opacity-80">
        {char.setting === "formal" ? "Formal city" : "Informal city"}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-white">
        {char.name}, {char.age}
      </h3>
      <p className="mt-1 text-sm text-zinc-300">
        {char.occupation} · {char.neighborhood}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{char.bio}</p>
    </div>
  );
}
