import { ArrowUpRight, Play } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { videos } from "@/lib/videos-data";

export const metadata = {
  title: "Multimedia Gallery",
  description:
    "Five curated videos that frame the urban services divide — from the WRI to TU Delft to Singapore's AI traffic system.",
};

export default function VideosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Multimedia Gallery"
        title="Five videos worth your time."
        description="Lectures, documentaries, and explainers. Each card has a short summary plus the key insights from the team's notes — watch on the source for the full thing."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <ul className="flex flex-col gap-8">
          {videos.map((v, i) => (
            <li key={v.id}>
              <Card className="group overflow-hidden border-border/60 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="grid gap-6 p-6 md:grid-cols-[1.1fr_1fr] md:p-8">
                  {/* Video player — embedded iframe when we have a YouTube ID,
                      otherwise a gradient placeholder linking to the source. */}
                  {v.youtubeId ? (
                    <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                        title={v.title}
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="absolute inset-0 h-full w-full border-0"
                      />
                      <div className="pointer-events-none absolute left-3 top-3 rounded-md bg-background/85 px-2 py-1 text-xs font-medium backdrop-blur">
                        Video {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={v.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Watch: ${v.title}`}
                      className="group/thumb relative block aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30"
                    >
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]"
                      />
                      <div className="absolute inset-0 grid place-items-center">
                        <div className="grid h-16 w-16 place-items-center rounded-full bg-background/90 shadow-lg backdrop-blur transition-all duration-300 group-hover/thumb:scale-110 group-hover/thumb:bg-background">
                          <Play className="h-6 w-6 fill-primary text-primary translate-x-0.5" />
                        </div>
                      </div>
                      <div className="absolute left-3 top-3 rounded-md bg-background/85 px-2 py-1 text-xs font-medium backdrop-blur">
                        Video {String(i + 1).padStart(2, "0")}
                      </div>
                    </a>
                  )}

                  {/* Content */}
                  <div className="flex flex-col">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {v.source}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
                      {v.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {v.summary}
                    </p>

                    <div className="mt-5">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                        Key insights
                      </p>
                      <ul className="space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                        {v.insights.map((insight, j) => (
                          <li key={j} className="flex gap-2">
                            <span aria-hidden className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <span>{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={v.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-1 self-start text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      Watch on source
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
