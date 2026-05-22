import { PageHeader } from "@/components/page-header";
import { galleryPhotos } from "@/lib/gallery-data";
import { GalleryLightbox } from "@/components/gallery-lightbox";

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
        description="Photographs from cities, infrastructure, and the everyday services that hold them together — click any photo to enlarge it and read its caption."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <GalleryLightbox photos={galleryPhotos} />
      </section>
    </>
  );
}
