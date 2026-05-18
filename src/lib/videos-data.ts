// Videos featured on /videos.
// Titles, summaries, and key insights from Miguel Lorenzo Clemente's
// "Videos/Summaries" tab in the team research doc.

export type Video = {
  id: string;
  title: string;
  source: string; // publisher / channel
  href: string;
  embedSrc?: string; // YouTube embed URL when available
  summary: string;
  insights: string[];
};

export const videos: Video[] = [
  {
    id: "why-unequal-cities-matter",
    title: "Why Unequal Cities Matter: Closing the Urban Services Divide",
    source: "WRI Ross Center for Sustainable Cities",
    href: "https://www.wri.org/insights/transformations-to-solve-urban-inequality",
    summary:
      "The video addresses the urban services divide, highlighting the stark disparities in access to essential services within cities worldwide. Not all urban residents experience city life equally — daily activities are straightforward for some but a significant challenge for others. The divide is particularly pronounced in low-income countries, where a substantial portion of the urban population lacks consistent access to basic services.",
    insights: [
      "Over one billion people globally face challenges due to inadequate urban services.",
      "In low-income countries, roughly two-thirds of urban residents are underserved.",
      "Essential services like water supply may be available only intermittently — sometimes just a few hours per week.",
      "Access to employment often involves arduous and unsafe journeys, adding to the burden.",
      "Closing the divide yields benefits for everyone, not only the underserved — equitable provision lifts the whole city.",
    ],
  },
  {
    id: "intro-urban-services",
    title: "Introduction to Urban Services & Infrastructure",
    source: "TU Delft OpenCourseWare (AMS Institute)",
    href: "https://ocw.tudelft.nl/course-lectures/introduction-urban-services-infrastructures/",
    summary:
      "This TU Delft lecture frames urban infrastructure as the foundation of sustainable and equitable urban development. Infrastructure is more than physical structures like roads or pipes — it is the systems and services that support daily life, including the distribution of energy and water. Using the UN-Habitat City Prosperity Index, the video shows how prosperity depends on infrastructure, equity, productivity, and environmental sustainability.",
    insights: [
      "Infrastructure includes both physical assets (roads, pipes, grids) and the services they enable.",
      "Prosperity rests on the interplay between infrastructure, equity, productivity, and environment.",
      "Cities must adapt to climate change through mitigation and adaptation, particularly in transport and energy.",
      "Shifting from a linear economy to a circular one is essential for long-term sustainability.",
    ],
  },
  {
    id: "what-is-urban-metabolism",
    title: "What is Urban Metabolism?",
    source: "Metabolism of Cities",
    href: "https://archive.metabolismofcities.org/videos/43-what-is-urban-metabolism",
    summary:
      "This video introduces urban metabolism, a framework that views the city as a living organism with resources flowing in and waste flowing out. Cities currently consume 75% of Earth's resources and contribute 60–80% of greenhouse gas emissions. By 2050 over two-thirds of the world's population will live in cities, putting immense pressure on a finite resource base. Urban metabolism helps cities transition from linear systems to circular ones — closing loops, reusing waste, and improving resource efficiency.",
    insights: [
      "Cities consume roughly 75% of Earth's resources today.",
      "At current rates, humanity would need 1.6 Earths to sustain consumption.",
      "Linear metabolism (extract → consume → discard) dominates most cities; circular metabolism closes the loop.",
      "Wastewater treatment plants can clean water, capture methane for energy, and recover nutrients for soils.",
      "Urban metabolism studies help cities save money, reduce emissions, and educate decision-makers.",
    ],
  },
  {
    id: "smart-cities-documentary",
    title: "Smart Cities: Building for the Cities of Tomorrow",
    source: "Smart City Korea (Documentary, 2015)",
    href: "https://smartcity.go.kr/2017/10/03/smart-cities-building-for-the-cities-of-tomorrow-documentary-2015/",
    summary:
      "This documentary explores the urgent need to create sustainable, energy-efficient urban environments. With 50% of people living in cities (vs. 10% at the start of the 20th century), the shift presents both challenges — space scarcity, pollution, noise — and opportunities for resource efficiency and innovative infrastructure. Case studies range from Abu Dhabi's Sheikh Zayed Desert Learning Center and Masdar City to Austrian smart-grid pilots and plus-energy buildings.",
    insights: [
      "Sustainable building can blend traditional architecture with advanced technology — e.g., the desert learning center stays cool at 50°C outside.",
      "Masdar City aims to be a CO₂-neutral oasis for 40,000 residents and 50,000 commuters in the UAE.",
      "Austrian retrofits achieve up to 90% reductions in power consumption with 320 kW peak photovoltaics.",
      "Smart grids in Kristin Dorf coordinate 43 PV systems with electric cars used as buffer storage.",
      "Energy and mobility innovations succeed only when paired with social change — car sharing and EVs still face adoption barriers.",
    ],
  },
  {
    id: "singapore-ai-traffic",
    title: "Singapore's AI Traffic Management System",
    source: "YouTube",
    href: "https://youtu.be/ni3teWmnOR0",
    summary:
      "Singapore has developed a cutting-edge AI traffic management system that significantly reduces congestion, setting a global example in urban mobility. The system, built on a $2.4 billion Intelligent Transport System, uses AI and machine learning to keep delays minimal even at high density.",
    insights: [
      "Average American drivers lose 54 hours/year in traffic; Londoners lose 148; Singaporeans only 25.",
      "Singapore's $2.4B Intelligent Transport investment is the backbone of the reduction.",
      "AI and machine learning continuously adapt signal timings and route guidance based on live demand.",
      "Demonstrates that congestion is a solvable problem with the right combination of governance and technology.",
    ],
  },
];
