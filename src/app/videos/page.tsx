import { Play } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";

const videos = [
  {
    title: "Placeholder video #1",
    source: "TBD — TED Talk / lecture / news clip",
    duration: "TBD",
    note: "We'll embed the actual YouTube/Vimeo player here once a real link is locked in.",
  },
  {
    title: "Placeholder video #2",
    source: "TBD",
    duration: "TBD",
    note: "Each card holds one video plus a short caption explaining why we picked it.",
  },
  {
    title: "Placeholder video #3",
    source: "TBD",
    duration: "TBD",
    note: "Mix of explainer videos, interviews, and short-form documentaries.",
  },
  {
    title: "Placeholder video #4",
    source: "TBD",
    duration: "TBD",
    note: "Visitors can hover to see a play affordance — clicking opens the embedded player.",
  },
  {
    title: "Placeholder video #5",
    source: "TBD",
    duration: "TBD",
    note: "Final video slot. Real titles, durations, and embeds replace these placeholders.",
  },
];

export const metadata = {
  title: "Videos",
  description: "Five videos to watch before forming your own opinion.",
};

export default function VideosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Videos"
        title="Watch before you weigh in."
        description="Five short videos that frame different angles of the urban services conversation. Real embeds will replace the placeholder thumbnails soon."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <Card
              key={i}
              className="group overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Placeholder thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30">
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_60%)]"
                />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-background/90 shadow-lg backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:bg-background">
                    <Play className="h-6 w-6 fill-primary text-primary translate-x-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 rounded-md bg-background/80 px-2 py-1 text-xs font-medium backdrop-blur">
                  {v.duration}
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-base font-semibold tracking-tight transition-colors group-hover:text-primary">
                  {v.title}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {v.source}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {v.note}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
