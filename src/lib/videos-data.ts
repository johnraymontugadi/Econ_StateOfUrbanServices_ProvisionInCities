// Videos featured on /videos.
// Titles, summaries, and key insights from Miguel Lorenzo Clemente's
// "Videos/Summaries" tab in the team research doc.

export type Video = {
  id: string;
  title: string;
  source: string; // publisher / channel
  href: string; // canonical link to the source
  youtubeId?: string; // if present, embed via youtube.com/embed/<id>
  summary: string;
  insights: string[];
};

export const videos: Video[] = [
  {
    id: "why-unequal-cities-matter",
    title: "Why Unequal Cities Matter: Closing the Urban Services Divide",
    source: "WRI Ross Center for Sustainable Cities",
    href: "https://www.youtube.com/watch?v=Po_XwLzmM58",
    youtubeId: "Po_XwLzmM58",
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
    id: "urban-infrastructure-how-a-city-designs",
    title: "Urban Infrastructure: How a City Designs Its Utilities and Public Services",
    source: "Miacademy & MiaPrep Learning Channel",
    href: "https://www.youtube.com/watch?v=toEQZapHYLA",
    youtubeId: "toEQZapHYLA",
    summary:
      "This video explains how urban infrastructure — the systems that keep urban life running, including utilities like water, electricity, and housing — determines a city's quality of life through how efficiently people can work and how well their general wellbeing is supported. Strong infrastructure improves economic growth and daily convenience; weak infrastructure creates inequalities and inefficiencies. Cities adapt their infrastructure to local geography, population, and economy.",
    insights: [
      "Strong infrastructure compounds into economic growth; weak infrastructure compounds into inequality.",
      "Cities design utilities and services around their geographic and economic constraints.",
      "Perth relies on highways and ports for resource-driven growth.",
      "Amsterdam adapts to low-lying land with canals, cycling networks, and flood management.",
      "Infrastructure design is one of the most consequential planning decisions a city makes.",
    ],
  },
  {
    id: "urban-planning-city-governance",
    title: "Urban Planning and City Governance",
    source: "Rich Life · YouTube",
    href: "https://www.youtube.com/watch?v=0SoKj5Gxnnk",
    youtubeId: "0SoKj5Gxnnk",
    summary:
      "This video argues that densely populated cities can be more environmentally friendly when planned well. It highlights principles of sustainable urban planning rooted in the ancient Indian concepts of Satyam, Shivam, and Sundaram — meaning sustainable, efficient, and aesthetic — and concludes that cities should prioritize people over cars to reflect the civic sense of their inhabitants.",
    insights: [
      "Ecological sustainability: matching natural resources like water and green cover to population needs.",
      "Economic sustainability: evaluating the long-term costs of supporting a population.",
      "Political sustainability: using governance structures to maintain urban settlements.",
      "Efficiency requires logical zoning, comprehensive building bylaws, and reliable public services.",
      "Aesthetics matter — cities should reflect cultural heritage and architectural beauty, not just function.",
    ],
  },
  {
    id: "can-ai-fix-traffic",
    title: "Can AI Fix Traffic?",
    source: "Shortcut Documentaries",
    href: "https://www.youtube.com/watch?v=tgYOOPMQmc4",
    youtubeId: "tgYOOPMQmc4",
    summary:
      "This video explores Google's AI-powered traffic management system, Project Greenlight, designed to reduce congestion in US cities. The system analyzes Google Maps data to identify inefficiencies at intersections and recommends adjustments to traffic light timings — a cost-effective alternative to building new hardware.",
    insights: [
      "Project Greenlight is a software-only fix — inexpensive compared to traditional traffic engineering.",
      "Cutting stop-and-go traffic can reduce intersection emissions by up to 10%.",
      "Successfully tested in Seattle as a proof of concept.",
      "Suitable for cities of various sizes — minimal hardware requirements lower the bar to adoption.",
      "Risk: improving traffic can induce demand, drawing in more drivers and partially negating the gain.",
    ],
  },
  {
    id: "singapore-ai-traffic",
    title: "Singapore's AI Traffic Management System",
    source: "FutureGen Finance · YouTube",
    href: "https://www.youtube.com/watch?v=ni3teWmnOR0",
    youtubeId: "ni3teWmnOR0",
    summary:
      "Singapore has built a cutting-edge AI traffic management system that significantly reduces congestion, setting a global example in urban mobility. The system, anchored on a $2.4 billion Intelligent Transport investment, uses AI and machine learning to keep delays minimal even at high density.",
    insights: [
      "Average American drivers lose 54 hours/year in traffic; Londoners lose 148; Singaporeans only 25.",
      "Singapore's $2.4B Intelligent Transport investment is the backbone of the reduction.",
      "AI and machine learning continuously adapt signal timings and route guidance based on live demand.",
      "Demonstrates that congestion is a solvable problem with the right combination of governance and technology.",
    ],
  },
];
