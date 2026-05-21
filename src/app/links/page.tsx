import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";

type LinkItem = { label: string; href: string; note: string };
type LinkGroup = { heading: string; items: LinkItem[] };

const linkGroups: LinkGroup[] = [
  {
    heading: "Blog sources",
    items: [
      {
        label: "Systems Change Lab — Improve Urban Infrastructure Services",
        href: "https://systemschangelab.org/cities/improve-urban-infrastructure-services",
        note: "Dashboards of the urban services divide with progress indicators across cities.",
      },
      {
        label: "World Bank — The Utilities of Cities",
        href: "https://blogs.worldbank.org/en/sustainablecities/the-utilities-of-cities",
        note: "Why urban service delivery is becoming more complex and data-driven.",
      },
      {
        label: "World Resources Institute — Transformations to Solve Urban Inequality",
        href: "https://www.wri.org/insights/transformations-to-solve-urban-inequality",
        note: "Seven transformations cities can make to close the service gap.",
      },
      {
        label: "World Bank — Reliable and Inclusive Urban Sanitation",
        href: "https://blogs.worldbank.org/en/water/reliable-and-inclusive-urban-sanitation--a-driver-of-growth",
        note: "Sanitation as a driver of growth, health, and productivity.",
      },
      {
        label: "UNDP — Urban Governance Is Vital for Cities to Prosper",
        href: "https://www.undp.org/blog/urban-governance-vital-cities-prosper",
        note: "How governance decides whether infrastructure investments actually reach residents.",
      },
    ],
  },
  {
    heading: "Reports & policy briefs",
    items: [
      {
        label: "ODI — Services in the City: Governance and Political Economy",
        href: "https://odi.org/en/publications/services-in-the-city-governance-and-political-economy-in-urban-service-delivery/",
        note: "Discussion paper on how political incentives skew urban service delivery.",
      },
      {
        label: "Local2030 — Access to Urban Services for Inclusive Development in Asia",
        href: "https://www.local2030.org/library/567/Access-to-Urban-Services-for-Inclusive-Development-in-Asia.pdf",
        note: "Policy brief drawing on nine Asian cities (PDF).",
      },
      {
        label: "Smart Growth America — More Homes in the Right Places",
        href: "https://www.smartgrowthamerica.org/knowledge-hub/news/the-smart-growth-approach-more-homes-in-the-right-places-at-the-right-price/",
        note: "Why housing and transit have to be planned together.",
      },
    ],
  },
  {
    heading: "Long-form & journalism",
    items: [
      {
        label: "TheCityFix — 7 Major Transformations to Solve Urban Inequality",
        href: "https://www.thecityfix.com/blog/7-major-transformations-solve-urban-inequality-mark-weston-rachael-king/",
        note: "Weston & King's overview of how cities can close the inequality gap.",
      },
      {
        label: "Ground Control — Data's Journey in Shaping Digital Transformation",
        href: "https://www.groundcontrol.com/blog/datas-journey-in-shaping-digital-transformation-in-utilities/",
        note: "How IoT and smart meters are changing utility operations.",
      },
      {
        label: "Mongabay — Waste-to-Energy Incinerators in Southeast Asia",
        href: "https://news.mongabay.com/2022/12/as-waste-to-energy-incinerators-spread-in-southeast-asia-so-do-concerns/",
        note: "The trade-offs of converting waste into energy at scale in our region.",
      },
      {
        label: "Philippine Information Agency — SMART METRO launch",
        href: "https://pia.gov.ph/press-release/dost-up-launch-smart-metro-to-advance-government-services-nationwide/",
        note: "DOST and UP launching a smart-city platform piloted in Iloilo (April 2026).",
      },
    ],
  },
];

export const metadata = {
  title: "Further Reading",
  description:
    "Trusted dashboards, reports, and long-form pieces about the urban services divide.",
};

export default function LinksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Further Reading"
        title="A short, useful reading list."
        description="Curated starting points for going deeper than this site — dashboards, reports, and articles we relied on while researching."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <div className="flex flex-col gap-12">
          {linkGroups.map((group) => (
            <div key={group.heading}>
              <h2 className="mb-5 pl-1 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {group.heading}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {group.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                  >
                    <Card className="h-full border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                      <CardContent className="flex items-start justify-between gap-4 p-5">
                        <div>
                          <h3 className="text-base font-semibold tracking-tight transition-colors group-hover:text-primary">
                            {item.label}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                            {item.note}
                          </p>
                        </div>
                        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
