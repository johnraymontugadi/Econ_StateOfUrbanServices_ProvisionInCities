import { ArrowUpRight, FileText } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const papers = [
  {
    title: "Placeholder paper title #1",
    authors: "Author A, Author B",
    venue: "Journal of Urban Economics",
    year: "TBD",
    abstract:
      "A 2–3 sentence excerpt from the abstract will live here. We'll point readers to the actual source via a clear link once we lock in the citation.",
    tags: ["Transit", "Equity"],
  },
  {
    title: "Placeholder paper title #2",
    authors: "Author C, Author D, Author E",
    venue: "Urban Studies",
    year: "TBD",
    abstract:
      "Replace this with the paper's framing question and headline finding. Keep it short — one breath.",
    tags: ["Sanitation", "Public Health"],
  },
  {
    title: "Placeholder paper title #3",
    authors: "Author F",
    venue: "Regional Science and Urban Economics",
    year: "TBD",
    abstract:
      "Why we picked this one — what it adds to the team's argument about urban service provision. One or two sentences.",
    tags: ["Housing"],
  },
  {
    title: "Placeholder paper title #4",
    authors: "Author G, Author H",
    venue: "World Development",
    year: "TBD",
    abstract:
      "Short context line about the methodology and the case study city, if relevant.",
    tags: ["Energy", "Infrastructure"],
  },
  {
    title: "Placeholder paper title #5",
    authors: "Author I",
    venue: "Cities",
    year: "TBD",
    abstract:
      "Final placeholder summary. Real abstracts will be edited down to fit this card layout cleanly.",
    tags: ["Governance"],
  },
];

export const metadata = {
  title: "Papers",
  description: "Five academic and journal references shaping our argument.",
};

export default function PapersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Papers"
        title="The academic backbone."
        description="Five journal articles and working papers we leaned on while researching this topic. Click through to read the full source."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <ul className="flex flex-col gap-5">
          {papers.map((p, i) => (
            <li key={i}>
              <Card className="group relative overflow-hidden border-border/60 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="relative flex flex-col gap-4 p-6 md:flex-row md:gap-6">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground transition-transform duration-300 group-hover:scale-105">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">{p.venue}</span>
                      <span aria-hidden>·</span>
                      <span>{p.year}</span>
                    </div>
                    <h2 className="mt-2 text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                      {p.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">{p.authors}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {p.abstract}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {p.tags.map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="border-0 bg-accent/10 text-accent-foreground/80"
                        >
                          {t}
                        </Badge>
                      ))}
                      <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-primary">
                        View source
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
