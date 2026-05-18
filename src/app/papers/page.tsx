import { ArrowUpRight, FileText } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { papers } from "@/lib/papers-data";

export const metadata = {
  title: "Academic Compendium",
  description:
    "Five peer-reviewed papers on the urban services divide — digital governance, water provision, coproduction, groundwater, and smart eco-cities.",
};

export default function PapersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academic Compendium"
        title="Five papers behind the argument."
        description="Peer-reviewed research that anchors this site, summarized in plain English. Click through to read the original on the publisher's site."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <ul className="flex flex-col gap-5">
          {papers.map((p, i) => (
            <li key={p.id}>
              <Card className="group relative overflow-hidden border-border/60 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="relative flex flex-col gap-5 p-6 md:flex-row md:gap-6 md:p-8">
                  <div className="flex shrink-0 items-start gap-3 md:flex-col md:items-center">
                    <div className="grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground transition-transform duration-300 group-hover:scale-105">
                      <FileText className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground md:mt-1">
                      Paper {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">{p.venue}</span>
                      <span aria-hidden>·</span>
                      <span>{p.year}</span>
                    </div>
                    <h2 className="mt-2 text-lg font-semibold tracking-tight transition-colors group-hover:text-primary md:text-xl">
                      {p.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">{p.authors}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {p.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {p.tags.map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="border-0 bg-accent/10 text-accent-foreground/80"
                        >
                          {t}
                        </Badge>
                      ))}
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        Read on publisher
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
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
