export type GalleryPhoto = {
  /** Path under /public */
  src: string;
  /** Short caption shown beneath the photo (also used as alt text) */
  caption: string;
};

// Captions provided by the team (content/Photo Captions.pdf). Order follows
// that table. Source files live in content/Gallery Photos/ and were copied to
// public/gallery/ with clean, URL-safe filenames.
export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/gallery/bike-lane-urban.jpeg",
    caption: "Image of a well-spaced bike lane in an urban area.",
  },
  {
    src: "/gallery/bike-lane-two-lane.jpeg",
    caption: "Image of people using a well-spaced, two-lane bike lane.",
  },
  {
    src: "/gallery/informal-settlement-riverbank.jpg",
    caption: "An informal settlement near a riverbank.",
  },
  {
    src: "/gallery/congested-highways.png",
    caption: "A photo of two congested 4-lane highways.",
  },
  {
    src: "/gallery/garbage-recycling-center.jpg",
    caption: "An image of a garbage disposal and recycling center.",
  },
  {
    src: "/gallery/recycling-bins-cleaning.jpeg",
    caption: "An image of a recycling center cleaning recycling bins for future use.",
  },
  {
    src: "/gallery/safety-first-sign.jpg",
    caption: "A safety first sign near a road.",
  },
  {
    src: "/gallery/traffic-congestion-night.jpg",
    caption: "A photo of large-scale congested traffic at night.",
  },
  {
    src: "/gallery/traffic-congestion-crossing.jpg",
    caption: "A shot in the center of congested traffic between two lanes at a crossing.",
  },
  {
    src: "/gallery/informal-settlement-community.jpg",
    caption: "An image of a large informal settlement community.",
  },
  {
    src: "/gallery/water-distribution-pipes.jpg",
    caption: "An image of pipes in a water distribution system.",
  },
  {
    src: "/gallery/water-treatment-aeration.png",
    caption: "A photo of large aeration tanks aerating water at a water treatment plant.",
  },
  {
    src: "/gallery/creek-garbage-blocked.jpg",
    caption:
      "A photo of a creek surrounded by informal settlements, completely blocked by floating garbage and waste.",
  },
  {
    src: "/gallery/smart-power-grid.jpg",
    caption: "A representative graphic photo of a smart power grid running a city.",
  },
  {
    src: "/gallery/soweto-township.jpg",
    caption: "An image of Soweto, an informal settlement community in South Africa.",
  },
  {
    src: "/gallery/mozambique-workers-building.jpg",
    caption: "An image of Mozambique workers building a house.",
  },
  {
    src: "/gallery/informal-vs-private-housing.jpg",
    caption:
      "An image showing two communities: on the left are informal settlements, and on the right is private housing.",
  },
  {
    src: "/gallery/urban-neighborhood-uk.jpg",
    caption: "A photo of an urban neighborhood in the UK.",
  },
  {
    src: "/gallery/machine-learning-graphic.jpg",
    caption: "A graphic image representing machine learning.",
  },
  {
    src: "/gallery/waste-treatment-facility.webp",
    caption: "An image of a waste treatment facility.",
  },
];
