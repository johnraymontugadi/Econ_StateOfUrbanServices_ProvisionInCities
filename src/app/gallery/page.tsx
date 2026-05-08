import { ImageIcon } from "lucide-react";
import { PageHeader } from "@/components/page-header";

const photos = Array.from({ length: 10 }, (_, i) => ({
  caption: `Placeholder caption #${i + 1} — short description of the photo, what's pictured, and why it matters to the topic.`,
}));

const gradients = [
  "from-primary/40 via-accent/30 to-primary/40",
  "from-accent/40 via-primary/30 to-accent/40",
  "from-chart-3/40 via-primary/30 to-chart-3/40",
  "from-chart-4/40 via-accent/30 to-chart-4/40",
  "from-chart-5/40 via-primary/30 to-chart-5/40",
  "from-primary/40 via-chart-3/30 to-accent/40",
  "from-accent/40 via-chart-4/30 to-primary/40",
  "from-chart-3/40 via-chart-5/30 to-primary/40",
  "from-primary/40 via-accent/30 to-chart-3/40",
  "from-accent/40 via-chart-5/30 to-primary/40",
];

export const metadata = {
  title: "Gallery",
  description: "Ten photos with short captions from streets, transit, and infrastructure.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Ten photos, ten captions."
        description="Photographs from cities, infrastructure, and the everyday services that hold them together. Real images from the team will replace these gradient placeholders."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p, i) => (
            <figure
              key={i}
              className="group overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${gradients[i % gradients.length]}`}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_60%)]"
                />
                <div className="absolute inset-0 grid place-items-center">
                  <ImageIcon className="h-10 w-10 text-background/80 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute left-3 top-3 rounded-md bg-background/80 px-2 py-1 text-xs font-medium backdrop-blur">
                  Photo {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <figcaption className="p-4 text-sm leading-relaxed text-muted-foreground">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
