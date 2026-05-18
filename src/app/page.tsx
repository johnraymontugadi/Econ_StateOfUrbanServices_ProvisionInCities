import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Film, ImageIcon, Link2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

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
      "Ten captioned photographs of the urban services frontline — streets, transit, water, waste.",
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
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-background to-accent/15"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 right-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl"
        />

        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur animate-in fade-in slide-in-from-top-2 duration-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Economics — Final Group Project
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary animate-in fade-in slide-in-from-bottom-2 duration-500">
              The Urban Services Divide
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl animate-in fade-in slide-in-from-bottom-3 duration-700">
              Who cities{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient_6s_ease_infinite]">
                work for
              </span>
              {" — "}
              and who they{" "}
              <span className="relative inline-block">
                don&rsquo;t
                <svg
                  aria-hidden
                  viewBox="0 0 200 14"
                  className="absolute -bottom-2 left-0 w-full text-accent"
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
              .
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Cities are engines of economic growth, technology, and culture. Yet
              beneath the modern skylines lies a growing divide: millions of urban
              residents still lack reliable access to clean water, sanitation,
              transportation, electricity, and digital connectivity. This is the{" "}
              <strong className="text-foreground">urban services divide</strong> — and
              this site is our group&rsquo;s look at it.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-5 duration-1000">
              <Link
                href="/the-divide"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group h-11 px-5 text-base hover:bg-primary/90"
                )}
              >
                See the Manila case study
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/blog"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-11 px-5 text-base"
                )}
              >
                Read the essays
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="animate-in fade-in slide-in-from-bottom-6 duration-1000"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="bg-gradient-to-br from-primary to-accent bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                    {s.number}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-muted-foreground md:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            What&apos;s inside
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Five entry points into the divide.
          </h2>
          <p className="mt-3 text-muted-foreground">
            The team&apos;s research, organized into essays, papers, videos, photographs, and
            curated links — plus a featured interactive case study on Manila.
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
