import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { galleryPhotos } from "@/lib/gallery-data";

export const metadata = {
  title: "Gallery",
  description:
    "Twenty captioned photographs from streets, transit, water, waste, and the infrastructure that holds cities together.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="The services frontline, in photos."
        description="Photographs from cities, infrastructure, and the everyday services that hold them together — each with a short caption from the team."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPhotos.map((p, i) => (
            <figure
              key={p.src}
              className="group overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={p.src}
                  alt={p.caption}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
