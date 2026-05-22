export type GalleryPhoto = {
  /** Path under /public */
  src: string;
  /** Short title shown as the photo's heading */
  title: string;
  /** Short caption shown beneath the title (also used as alt text) */
  caption: string;
};

// Titles and captions provided by the team (content/Photo Captions with
// Titles.pdf). Order follows that table. Source files live in content/Gallery
// Photos/ and were copied to public/gallery/ with clean, URL-safe filenames.
export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/gallery/bike-lane-urban.jpeg",
    title: "Urban Protected Bike Lane",
    caption: "Image of a well-spaced bike lane in an urban area.",
  },
  {
    src: "/gallery/bike-lane-two-lane.jpeg",
    title: "Cyclists at a Dual Bike Lane",
    caption: "Image of people using a well-spaced, two-lane bike lane.",
  },
  {
    src: "/gallery/informal-settlement-riverbank.jpg",
    title: "Informal Settlement Along a Riverbank",
    caption: "An informal settlement near a riverbank.",
  },
  {
    src: "/gallery/congested-highways.png",
    title: "Heavy Traffic on a Multi-Lane Highway",
    caption: "A photo of two congested 4-lane highways.",
  },
  {
    src: "/gallery/garbage-recycling-center.jpg",
    title: "Modern Waste Recycling Facility Operations",
    caption: "An image of a garbage disposal and recycling center.",
  },
  {
    src: "/gallery/recycling-bins-cleaning.jpeg",
    title: "Sorting and Processing at a Recycling Center",
    caption: "An image of a recycling center cleaning recycling bins for future use.",
  },
  {
    src: "/gallery/safety-first-sign.jpg",
    title: "Road Safety Signage in Urban Area",
    caption: "A safety first sign near a road.",
  },
  {
    src: "/gallery/traffic-congestion-night.jpg",
    title: "Nighttime Urban Traffic Congestion",
    caption: "A photo of large-scale congested traffic at night.",
  },
  {
    src: "/gallery/traffic-congestion-crossing.jpg",
    title: "Rush Hour Traffic at City Intersection",
    caption: "A shot in the center of congested traffic between two lanes at a crossing.",
  },
  {
    src: "/gallery/informal-settlement-community.jpg",
    title: "Informal Settlement Community",
    caption: "An image of a large informal settlement community.",
  },
  {
    src: "/gallery/water-distribution-pipes.jpg",
    title: "Water Distribution Infrastructure System",
    caption: "An image of pipes in a water distribution system.",
  },
  {
    src: "/gallery/water-treatment-aeration.png",
    title: "Aeration Tanks in Wastewater Treatment Plant",
    caption: "A photo of large aeration tanks aerating water at a water treatment plant.",
  },
  {
    src: "/gallery/creek-garbage-blocked.jpg",
    title: "Pollution in Waterways Near Informal Settlements",
    caption:
      "A photo of a creek surrounded by informal settlements, completely blocked by floating garbage and waste.",
  },
  {
    src: "/gallery/smart-power-grid.jpg",
    title: "Smart City Power Grid System",
    caption: "A representative graphic photo of a smart power grid running a city.",
  },
  {
    src: "/gallery/soweto-township.jpg",
    title: "Urban Informal Settlement in Soweto, South Africa",
    caption: "An image of Soweto, an informal settlement community in South Africa.",
  },
  {
    src: "/gallery/mozambique-workers-building.jpg",
    title: "Community Housing Construction in Mozambique",
    caption: "An image of Mozambique workers building a house.",
  },
  {
    src: "/gallery/informal-vs-private-housing.jpg",
    title: "Contrast Between Informal and Formal Urban Housing",
    caption:
      "An image showing two communities: on the left are informal settlements, and on the right is private housing.",
  },
  {
    src: "/gallery/urban-neighborhood-uk.jpg",
    title: "Residential Urban Neighborhood Development in the UK",
    caption: "A photo of an urban neighborhood in the UK.",
  },
  {
    src: "/gallery/machine-learning-graphic.jpg",
    title: "Concept of Machine Learning and Artificial Intelligence",
    caption: "A graphic image representing machine learning.",
  },
  {
    src: "/gallery/waste-treatment-facility.webp",
    title: "Industrial Waste Treatment Facility",
    caption: "An image of a waste treatment facility.",
  },
];
