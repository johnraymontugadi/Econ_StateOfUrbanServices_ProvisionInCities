import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { essays } from "@/lib/blog-data";

export const metadata = {
  title: "Critical Perspectives",
  description:
    "Five essays on the urban services divide — infrastructure, smart cities, planning, circular metabolism, and inclusive governance.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Critical Perspectives"
        title="Five essays on the divide."
        description="Short, argument-shaped readings on the systems that decide who a city works for. Drawn from the team's research synthesis."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <ul className="flex flex-col gap-5">
          {essays.map((essay, i) => (
            <li key={essay.slug}>
              <Link
                href={`/blog/${essay.slug}`}
                className="group block"
              >
                <Card className="relative overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <CardContent className="relative flex flex-col gap-4 p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <Badge
                        variant="secondary"
                        className="border-0 bg-primary/10 text-primary"
                      >
                        {String(i + 1).padStart(2, "0")} · {essay.category}
                      </Badge>
                      <span>{essay.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                      {essay.title}
                    </h2>
                    <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
                      {essay.excerpt}
                    </p>
                    <div className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read the essay
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
