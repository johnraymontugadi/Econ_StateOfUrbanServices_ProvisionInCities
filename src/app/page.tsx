import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Film, ImageIcon, Link2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

const sections = [
  {
    href: "/blog",
    label: "Blog",
    description: "Five short reads on urban services and how cities work.",
    icon: BookOpen,
    accent: "from-primary/30 to-primary/0",
  },
  {
    href: "/papers",
    label: "Papers",
    description: "Five academic and journal references shaping our argument.",
    icon: FileText,
    accent: "from-accent/30 to-accent/0",
  },
  {
    href: "/videos",
    label: "Videos",
    description: "Five videos to watch before forming your own opinion.",
    icon: Film,
    accent: "from-chart-3/30 to-chart-3/0",
  },
  {
    href: "/gallery",
    label: "Gallery",
    description: "Ten captioned photos from streets, transit, and infrastructure.",
    icon: ImageIcon,
    accent: "from-chart-4/30 to-chart-4/0",
  },
  {
    href: "/links",
    label: "Links",
    description: "Trusted dashboards, datasets, and further reading.",
    icon: Link2,
    accent: "from-chart-5/30 to-chart-5/0",
  },
];

const stats = [
  { number: "5", label: "Blog posts" },
  { number: "5", label: "Academic papers" },
  { number: "5", label: "Videos" },
  { number: "10", label: "Captioned photos" },
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

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl animate-in fade-in slide-in-from-bottom-3 duration-700">
              The{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient_6s_ease_infinite]">
                state
              </span>{" "}
              of urban services in{" "}
              <span className="relative inline-block">
                cities
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
              {siteConfig.tagline} We dig into who has access to which services, where
              gaps appear, and what the data is telling us about the cities we live in.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-5 duration-1000">
              <Link
                href="/blog"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group h-11 px-5 text-base hover:bg-primary/90"
                )}
              >
                Start reading
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/gallery"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-11 px-5 text-base"
                )}
              >
                Browse the gallery
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="animate-in fade-in slide-in-from-bottom-6 duration-1000"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="bg-gradient-to-br from-primary to-accent bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                    {s.number}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground md:text-sm">
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
            Six places to dig into the topic.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Each section meets a content requirement from our professor — written analysis,
            academic sources, video, photography, and curated links.
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
