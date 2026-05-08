import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";

const linkGroups = [
  {
    heading: "Data & dashboards",
    items: [
      {
        label: "Placeholder dataset name",
        href: "#",
        note: "Short note on what this dataset shows and why we used it.",
      },
      {
        label: "Placeholder dashboard",
        href: "#",
        note: "What this resource tracks at the city level.",
      },
    ],
  },
  {
    heading: "Reports & explainers",
    items: [
      {
        label: "Placeholder report",
        href: "#",
        note: "An NGO or think-tank report we found useful.",
      },
      {
        label: "Placeholder explainer",
        href: "#",
        note: "A long-read or visual explainer worth bookmarking.",
      },
    ],
  },
  {
    heading: "Further reading",
    items: [
      {
        label: "Placeholder long-form article",
        href: "#",
        note: "An article that complements one of the academic papers.",
      },
      {
        label: "Placeholder podcast / interview",
        href: "#",
        note: "Audio source — interview with a planner or economist.",
      },
    ],
  },
];

export const metadata = {
  title: "Links",
  description: "Trusted dashboards, datasets, and further reading.",
};

export default function LinksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Links"
        title="A short reading list."
        description="Trusted starting points for your own research — datasets, reports, dashboards, and a few long-form pieces we'd recommend."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <div className="flex flex-col gap-12">
          {linkGroups.map((group) => (
            <div key={group.heading}>
              <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
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
