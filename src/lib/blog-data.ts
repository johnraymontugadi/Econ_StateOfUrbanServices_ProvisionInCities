// Blog essays for the Urban Services Divide site.
// Source: Pia Ballesteros' "Pia-Full Synthesized Content" tab in the team research doc.

export type Essay = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  body: string[]; // each entry is one paragraph
};

export const essays: Essay[] = [
  {
    slug: "bridging-the-gap",
    title: "Bridging the Gap: Resilient Infrastructure for All",
    category: "Infrastructure",
    readTime: "4 min read",
    excerpt:
      "About 1 in 3 urban residents lack access to essential services. That isn't a logistical failure — it's a systemic economic barrier with compounding poverty effects.",
    body: [
      "Infrastructure is often described as the silent engine of the city, noticed only when it fails. At its core, infrastructure consists of the networks that allow cities to function, including roads, transport systems, water pipelines, drainage systems, and electrical grids. These systems create the foundation upon which economic activity and social life depend. However, within the context of the Urban Services Divide, infrastructure is not simply a collection of physical structures. It is a system that determines who gains access to opportunity and who remains excluded from it.",
      "For residents living in underserved or informal communities, the absence of reliable infrastructure creates a constant struggle for survival. Without formal access to water, electricity, sanitation, or transportation, households spend significant amounts of time and money securing basic needs. This reduces opportunities for education, employment, and economic mobility. In many cities, the lack of infrastructure effectively creates invisible borders that separate economically connected populations from marginalized communities.",
      "This inequality produces what economists describe as the \"poverty premium,\" where low-income residents pay more for lower-quality services. In cities such as Nairobi and Manila, informal settlers may pay several times more per liter of water purchased from private vendors than wealthier households connected to municipal systems. Climate change further intensifies these inequalities. Flooding, extreme heat, and infrastructure failures disproportionately affect vulnerable communities that lack resilient drainage systems, flood barriers, or disaster-resistant housing. In this context, resilient infrastructure becomes more than a development goal; it becomes a form of economic protection that prevents temporary crises from evolving into long-term poverty traps.",
    ],
  },
  {
    slug: "digital-and-data-evolution",
    title: "The Digital and Data Evolution of City Utilities",
    category: "Smart Cities",
    readTime: "5 min read",
    excerpt:
      "Bits are becoming as essential as bricks. AI, IoT and real-time monitoring let cities shift from reactive to predictive — but only if every neighborhood is on the map.",
    body: [
      "Modern cities are increasingly shaped by the relationship between infrastructure and data. Today, \"bits\" are becoming just as essential as \"bricks\" in the management of urban systems. Traditionally, utility management relied on reactive approaches where repairs occurred only after infrastructure failures became visible. However, advances in Artificial Intelligence (AI), the Internet of Things (IoT), and digital monitoring systems now allow cities to shift toward predictive management models.",
      "Through sensors and real-time monitoring, utility providers can detect leaks, energy fluctuations, and infrastructure stress before major disruptions occur. This allows governments to reduce maintenance costs, improve efficiency, and strengthen long-term urban resilience. Digital transformation is especially important for rapidly growing cities with limited financial resources, where efficient management of existing infrastructure can be as valuable as constructing new systems.",
      "Despite these advantages, digital transformation also introduces new forms of inequality. When smart technologies are concentrated only in wealthier districts, informal communities become invisible within urban data systems. Areas lacking digital monitoring are often excluded from future investment, planning, and service upgrades. In effect, the digital divide reinforces the existing urban services divide.",
      "Inclusive digital governance therefore becomes essential. Data-driven systems must represent the realities of the entire city rather than only its formal sectors. When implemented equitably, digital infrastructure can reduce non-revenue water losses, improve energy reliability, strengthen disaster preparedness, and support modern service economies. Ultimately, technology should function as a tool for inclusion rather than another layer of urban exclusion.",
    ],
  },
  {
    slug: "structural-transformations",
    title: "Structural Transformations to Solve Urban Inequality",
    category: "Planning",
    readTime: "4 min read",
    excerpt:
      "Inequality is baked into the spatial layout of many cities. Fixing it means treating housing, transit, and sanitation as one system, not three separate sectors.",
    body: [
      "Urban inequality is often physically embedded within the structure of the city itself. Housing, transportation, employment opportunities, and public services are frequently distributed unevenly across urban space, forcing low-income populations to live far from economic centers. This spatial separation creates what scholars describe as a \"spatial trap,\" where workers spend excessive amounts of time and income commuting to jobs, reducing productivity and limiting upward mobility.",
      "Traditional urban planning approaches frequently treat transportation, housing, sanitation, and infrastructure as isolated sectors. However, cities function as interconnected systems where failures in one area inevitably affect others. Integrated urban planning recognizes that improving public transportation, for example, also improves labor access, housing opportunities, and economic participation.",
      "One example of this approach is the expansion of Bus Rapid Transit (BRT) systems into underserved areas. Reliable and affordable transportation does more than move people efficiently; it connects marginalized communities to formal labor markets and educational opportunities. Similarly, multi-purpose infrastructure projects such as parks that double as flood-control systems generate both environmental and social benefits. These integrated investments create higher long-term social returns by improving resilience, mobility, and public wellbeing simultaneously.",
      "Ultimately, physical connectivity is closely tied to social mobility. A city that remains physically divided through unequal infrastructure and disconnected services will also remain economically divided.",
    ],
  },
  {
    slug: "circular-urban-metabolism",
    title: "Circular Urban Metabolism: Turning Waste into Wealth",
    category: "Sustainability",
    readTime: "3 min read",
    excerpt:
      "Treat the city as a living system. What today's linear urban economy throws out, a circular one turns back into energy, employment, and public health gains.",
    body: [
      "Traditional urban economies often follow a linear model in which resources are extracted, consumed, and discarded. As cities continue to grow, this approach becomes increasingly unsustainable. The concept of urban metabolism offers an alternative perspective by treating cities as interconnected systems where resources circulate continuously rather than ending as waste.",
      "Through circular systems, wastewater can be converted into energy, organic waste can support urban agriculture, and recycled materials can be reintegrated into local economies. This shift toward circular urban metabolism is not only an environmental strategy but also an economic one. By reducing dependence on imported resources and generating localized industries, cities can create new forms of employment and improve long-term sustainability.",
      "For underserved communities, decentralized waste-to-energy systems and localized recycling initiatives can also improve access to essential services. In this sense, circular infrastructure transforms public health risks into opportunities for resilience and economic inclusion.",
    ],
  },
  {
    slug: "inclusive-governance",
    title: "Inclusive Governance: Managing the Informal City",
    category: "Governance",
    readTime: "4 min read",
    excerpt:
      "Informal settlements aren't temporary problems to be erased. They're centers of self-organization that effective governance learns to enable rather than override.",
    body: [
      "Informal settlements are often treated as temporary problems or spaces outside formal urban planning. However, these communities frequently function as centers of economic activity, adaptation, and self-organization. Inclusive governance recognizes that governments alone cannot fully provide urban services in rapidly expanding cities. Instead, effective urban management requires collaboration between state institutions and local communities.",
      "Through participatory planning and co-production models, governments can support community-led initiatives involving water access, drainage systems, transportation, and public safety. This approach shifts the role of government from being the sole provider of services to becoming an enabler of locally driven solutions.",
      "Inclusive governance also depends on inclusive data systems. Informal communities are frequently excluded from official urban maps and datasets, making them invisible within planning processes. Participatory mapping and digital inclusion initiatives allow underserved populations to become visible within urban decision-making systems.",
      "Ultimately, cities function most effectively when governance structures reflect the diversity and realities of the populations they serve.",
    ],
  },
];

export function findEssay(slug: string): Essay | undefined {
  return essays.find((e) => e.slug === slug);
}
