// Academic papers featured on /papers.
// Citations + plain-English summaries (the "V2 paragraph" versions) come from
// Jonathan Verceles' "Paper Summaries" tab in the team research doc. Jonathan
// verified that each link below resolves to the cited paper.

export type Paper = {
  id: string;
  authors: string;
  year: string;
  title: string;
  venue: string;
  doi: string;
  href: string;
  tags: string[];
  summary: string; // plain-English summary
  detail?: string; // optional longer / more academic paragraph
};

export const papers: Paper[] = [
  {
    id: "das-2024",
    authors: "Das, D. K.",
    year: "2024",
    title:
      "Exploring the symbiotic relationship between digital transformation, infrastructure, service delivery, and governance for smart sustainable cities",
    venue: "Smart Cities, 7(2), 806–835",
    doi: "10.3390/smartcities7020034",
    href: "https://doi.org/10.3390/smartcities7020034",
    tags: ["Digital Transformation", "Governance", "Smart Cities"],
    summary:
      "This paper discusses how digital transformation, infrastructure, service delivery, and governance work together to improve urban services and help develop smart and sustainable cities. The author explains that digital transformation, through technologies like AI, IoT, and big data, acts as a driving force that makes both physical and digital infrastructure more efficient, reliable, and adaptable. Governance plays an important role by making sure these services meet the changing needs of citizens through transparency, accountability, and data-driven decision-making. Examples from Singapore's Smart Nation Initiative, Estonia's X-Road platform, India's Aadhaar and UPI systems, the UK's Gov.uk portal, and Rwanda's digital land registry show how these four areas strengthen one another to improve accessibility, reduce corruption, and increase transparency. The study concludes that cities can only become truly smart, sustainable, and inclusive if they recognize and maximize the connection between these factors.",
  },
  {
    id: "trimmer-2023",
    authors: "Trimmer, J. T., Qureshi, H., Otoo, M., & Delaire, C.",
    year: "2023",
    title:
      "The enabling environment for citywide water service provision: Insights from six successful cities",
    venue: "PLOS Water, 2(6), e0000071",
    doi: "10.1371/journal.pwat.0000071",
    href: "https://doi.org/10.1371/journal.pwat.0000071",
    tags: ["Water", "Governance", "Equity"],
    summary:
      "This study examines how some cities in low- and middle-income countries successfully provided inclusive piped water services, even in low-income communities. Analyzing Abidjan, Ahmedabad, Bangkok, Cairo, Phnom Penh, and Porto Alegre, the authors identified three main approaches: utility-driven, regulator-supported, and municipality-driven. Despite their differences, these cities shared common factors like strong accountability, anti-corruption measures, community participation, financial sustainability, and policies that supported low-income residents — such as subsidies and removing land-ownership requirements for water access. Overall, success depends on combining governance, financing, and community involvement based on the city's specific context.",
  },
  {
    id: "moretto-2023",
    authors: "Moretto, L., Faldi, G., Ranzato, M., & Rosati, F. N.",
    year: "2023",
    title:
      "Coproduced urban water services: When technical and governance hybridisation go hand in hand",
    venue: "Frontiers in Sustainable Cities, 4, Article 969755",
    doi: "10.3389/frsc.2022.969755",
    href: "https://doi.org/10.3389/frsc.2022.969755",
    tags: ["Water", "Coproduction", "Informal Settlements"],
    summary:
      "This study explores how water and sanitation services developed in four Global South cities — Hanoi, Dar es Salaam, Cochabamba, and Addis Ababa — by looking at how infrastructure and governance continuously adapt over time. The authors explain that coproduced services evolve through both shared and individual solutions, such as household storage tanks, private water connections, community-managed systems, and water resale. New groups like water committees, resident councils, and private resellers also emerged, creating cooperation between governments and local communities. While hybrid systems helped improve access to water and sanitation, the study points out that they did not fully solve issues of inequality and sustainability. Successful service delivery depends on flexible cooperation between different actors and technologies rather than relying on one fixed system.",
  },
  {
    id: "la-vigna-2022",
    authors: "La Vigna, F.",
    year: "2022",
    title:
      "Urban groundwater issues and resource management, and their roles in the resilience of cities",
    venue: "Hydrogeology Journal, 30(6), 1657–1683",
    doi: "10.1007/s10040-022-02517-1",
    href: "https://doi.org/10.1007/s10040-022-02517-1",
    tags: ["Groundwater", "Climate Resilience"],
    summary:
      "This review discusses the important role of urban groundwater in supporting city services and helping cities become more resilient, using examples from over 70 cities around the world. Even though groundwater is mostly hidden underground, it is still very important because it supplies drinking water, supports irrigation and industries, and helps maintain rivers and wetlands. The study also explains how groundwater can protect cities from problems like droughts, floods, and pollution. However, different cities face issues such as saltwater contamination, land sinking, rising water tables, and pollution caused by sewage and industrial waste. To deal with these problems, the paper suggests better groundwater management practices like monitoring systems, groundwater recharge, sustainable drainage, geothermal energy use, and emergency wells during disasters. Cities need to include groundwater management in urban planning through proper monitoring, data sharing, and effective governance.",
  },
  {
    id: "bibri-2024",
    authors: "Bibri, S. E., Krogstie, J., Kaboli, A., & Alahi, A.",
    year: "2024",
    title:
      "Smarter eco-cities and their leading-edge artificial intelligence of things solutions for environmental sustainability: A comprehensive systematic review",
    venue: "Environmental Science and Ecotechnology, 19, Article 100330",
    doi: "10.1016/j.ese.2023.100330",
    href: "https://doi.org/10.1016/j.ese.2023.100330",
    tags: ["AI", "IoT", "Sustainability"],
    summary:
      "This study reviews how Artificial Intelligence (AI) and the Internet of Things (IoT) are helping create smarter and more sustainable eco-cities. By analyzing 235 studies, the paper explains how AI and AIoT technologies improve urban environmental services such as energy conservation, water management, waste disposal, transportation, air quality monitoring, and climate adaptation. These technologies help cities become more efficient through real-time monitoring, predictive maintenance, reduced emissions, and faster decision-making. However, the study also points out several challenges, including high energy use from computing systems, privacy and cybersecurity concerns, and possible bias in AI systems. The paper emphasizes that while AIoT has great potential to improve sustainability and urban services, its success depends on proper regulations, cooperation between different fields, and strong government support.",
  },
];
