import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, FileText, Film, ImageIcon, Link2, Play } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { essays } from "@/lib/blog-data";
import { papers } from "@/lib/papers-data";
import { videos } from "@/lib/videos-data";

type FeaturedItem =
  | { kind: "blog"; href: string; title: string; excerpt: string; meta: string }
  | { kind: "paper"; href: string; title: string; excerpt: string; meta: string }
  | { kind: "video"; href: string; title: string; excerpt: string; meta: string };

function pickEssay(slug: string): FeaturedItem {
  const e = essays.find((x) => x.slug === slug);
  if (!e) throw new Error(`Missing essay ${slug}`);
  return {
    kind: "blog",
    href: `/blog/${e.slug}`,
    title: e.title,
    excerpt: e.excerpt,
    meta: `Essay · ${e.readTime}`,
  };
}
function pickPaper(id: string): FeaturedItem {
  const p = papers.find((x) => x.id === id);
  if (!p) throw new Error(`Missing paper ${id}`);
  return {
    kind: "paper",
    href: "/papers",
    title: p.title,
    excerpt:
      p.summary.length > 200 ? `${p.summary.slice(0, 200).trim()}…` : p.summary,
    meta: `Paper · ${p.authors.split(",")[0]} · ${p.year}`,
  };
}
function pickVideo(id: string): FeaturedItem {
  const v = videos.find((x) => x.id === id);
  if (!v) throw new Error(`Missing video ${id}`);
  return {
    kind: "video",
    href: "/videos",
    title: v.title,
    excerpt: v.summary.length > 200 ? `${v.summary.slice(0, 200).trim()}…` : v.summary,
    meta: `Video · ${v.source}`,
  };
}

const themedDives = [
  {
    eyebrow: "An everyday cost",
    headline: "Why does your neighbor pay more for water than you?",
    body: "In cities like Manila, some households pay 5 to 10 times more per liter of water — not by choice, but because the formal grid never reached their block. Below: an essay, a paper, and a video on why that happens, and what's worked to close the gap.",
    accent: "from-sky-500/15 via-cyan-500/5",
    items: [
      pickEssay("bridging-the-gap"),
      pickPaper("trimmer-2023"),
      pickVideo("why-unequal-cities-matter"),
    ],
  },
  {
    eyebrow: "A daily question",
    headline: "Can a smart city actually be fair?",
    body: "Sensors, AI, and live maps promise smoother service. But if the tech only sees the wealthy parts of town, it can widen the gap instead of close it. Here's what the research found about who shows up on the dashboard — and who doesn't.",
    accent: "from-violet-500/15 via-fuchsia-500/5",
    items: [
      pickEssay("digital-and-data-evolution"),
      pickPaper("das-2024"),
      pickVideo("can-ai-fix-traffic"),
    ],
  },
  {
    eyebrow: "An hour you didn't choose",
    headline: "Does where you live decide how long your day is?",
    body: "Housing far from transit adds an extra hour (or two) of daily commute. In many neighborhoods, that isn't preference — it's planning. Three reads on what that planning gets wrong, and how cities are starting to fix it.",
    accent: "from-emerald-500/15 via-teal-500/5",
    items: [
      pickEssay("structural-transformations"),
      pickPaper("moretto-2023"),
      pickVideo("urban-planning-city-governance"),
    ],
  },
];

const kindStyles: Record<FeaturedItem["kind"], { label: string; icon: typeof BookOpen; tint: string }> = {
  blog: { label: "Blog", icon: BookOpen, tint: "text-primary bg-primary/10" },
  paper: { label: "Paper", icon: FileText, tint: "text-amber-700 dark:text-amber-300 bg-accent/15" },
  video: { label: "Video", icon: Play, tint: "text-foreground bg-foreground/10" },
};

const sections = [
  {
    href: "/blog",
    label: "Critical Perspectives",
    description:
      "Five essays on resilient infrastructure, digital utilities, structural inequality, circular metabolism, and inclusive governance.",
    icon: BookOpen,
    accent: "from-primary/30 to-primary/0",
  },
  {
    href: "/papers",
    label: "Academic Compendium",
    description:
      "Peer-reviewed research on water provision, smart cities, and urban resilience — summarized in plain English.",
    icon: FileText,
    accent: "from-accent/30 to-accent/0",
  },
  {
    href: "/videos",
    label: "Multimedia Gallery",
    description:
      "Curated lectures and documentaries — from urban metabolism to AI-driven traffic systems.",
    icon: Film,
    accent: "from-chart-3/30 to-chart-3/0",
  },
  {
    href: "/gallery",
    label: "Photo Gallery",
    description:
      "Twenty captioned photographs of the urban services frontline — streets, transit, water, waste.",
    icon: ImageIcon,
    accent: "from-chart-4/30 to-chart-4/0",
  },
  {
    href: "/links",
    label: "Further Reading",
    description:
      "Trusted datasets, dashboards, and reports for going deeper than this site.",
    icon: Link2,
    accent: "from-chart-5/30 to-chart-5/0",
  },
];

const stats = [
  { number: "1 in 3", label: "urban residents lack basic services" },
  { number: "3.5B", label: "people without safe sanitation" },
  { number: "5–10×", label: "water price premium for informal settlers" },
  { number: "70%", label: "of humanity in cities by 2050" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="dark relative isolate -mt-20 overflow-hidden bg-zinc-950 pt-20 text-white md:-mt-24 md:pt-24">
        {/* Background video — aerial of Manila skyline / smog */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
        >
          <source src="/hero/manila-aerial.mp4" type="video/mp4" />
        </video>

        {/* Dark gradient overlay for contrast + readability */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/60 to-black/80"
        />

        {/* Brand-color blooms layered above the overlay so the gradient
            highlights on the headline still pop */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl mix-blend-screen"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 right-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl mix-blend-screen"
        />

        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-32">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur animate-in fade-in slide-in-from-top-2 duration-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Economics — Final Group Project
            </div>

            <p className="mb-4 text-sm font-semibold tracking-[0.15em] text-primary animate-in fade-in slide-in-from-bottom-2 duration-500">
              The State of Urban Services Provision in Cities
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl animate-in fade-in slide-in-from-bottom-3 duration-700">
              Why does the same city{" "}
              <span className="text-sky-400">work for some</span>
              <span className="text-amber-400">
                , and not{" "}
                <span className="relative inline-block">
                  others
                  <svg
                    aria-hidden
                    viewBox="0 0 200 14"
                    className="absolute -bottom-2 left-0 w-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 8 Q 50 0, 100 8 T 198 8"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
                ?
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
              The same address can mean a completely different daily life — who
              has reliable water, who walks an hour to a vendor, whose power
              blinks out during work. This site is what our group found out
              about the{" "}
              <strong className="text-foreground">urban services divide</strong> and
              what it costs the people on the wrong side of it.
            </p>

            <div className="mt-10 flex justify-center animate-in fade-in slide-in-from-bottom-5 duration-1000">
              <Link
                href="/the-divide"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group h-11 px-5 text-base hover:bg-primary/90"
                )}
              >
                Click here to see the divide in action
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-14 grid w-full grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="animate-in fade-in slide-in-from-bottom-6 duration-1000"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="bg-gradient-to-br from-sky-300 to-amber-300 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                    {s.number}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-zinc-300 md:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Themed deep dives — three everyday questions, each answered by one
          blog + one paper + one video from the team's research. */}
      <div className="mx-auto max-w-6xl px-4 pt-24 md:px-6 md:pt-32">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            First things first
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Have you ever wondered&hellip;
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Three questions you&rsquo;ve probably had walking around your own
            city. Each one has an essay, a paper, and a video below to help you
            answer it — pieces the team picked specifically because they speak
            to that wondering.
          </p>
        </div>

        <div className="flex flex-col gap-20 pb-24">
          {themedDives.map((theme, idx) => (
            <section key={theme.eyebrow}>
              <div
                className={cn(
                  "relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br p-6 md:p-10",
                  theme.accent,
                  "to-transparent",
                )}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  {theme.eyebrow}
                </p>
                <h3 className="mt-3 max-w-3xl text-2xl font-bold tracking-tight md:text-3xl">
                  {theme.headline}
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                  {theme.body}
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {theme.items.map((item) => {
                  const style = kindStyles[item.kind];
                  const Icon = style.icon;
                  return (
                    <Link
                      key={`${idx}-${item.kind}-${item.href}`}
                      href={item.href}
                      className="group block h-full"
                    >
                      <Card className="relative h-full overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                        <CardContent className="flex h-full flex-col gap-3 p-5">
                          <div className="flex items-center gap-2">
                            <span
                              className={cn(
                                "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest",
                                style.tint,
                              )}
                            >
                              <Icon className="h-3 w-3" />
                              {style.label}
                            </span>
                            <span className="text-[11px] text-muted-foreground">
                              {item.meta}
                            </span>
                          </div>
                          <h4 className="text-base font-semibold tracking-tight transition-colors group-hover:text-primary">
                            {item.title}
                          </h4>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {item.excerpt}
                          </p>
                          <div className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary">
                            {item.kind === "blog"
                              ? "Read the essay"
                              : item.kind === "paper"
                                ? "See the paper"
                                : "Watch the video"}
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* What's inside */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            What&apos;s inside
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Or browse the full set.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Every essay, paper, video, photograph, and link the team gathered — organized
            into five sections you can explore at your own pace.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.href}
                href={s.href}
                className="group relative block"
              >
                <Card className="relative h-full overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                  <div
                    aria-hidden
                    className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <CardContent className="relative flex flex-col gap-4 p-6">
                    <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {s.label}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Visit
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
