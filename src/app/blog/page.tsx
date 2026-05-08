import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    title: "Placeholder blog title #1",
    excerpt:
      "A short hook for the post will go here once the team finishes drafting. Expect 1–2 lines that tease the angle.",
    category: "Transit",
    readTime: "4 min read",
    date: "TBD",
  },
  {
    title: "Placeholder blog title #2",
    excerpt:
      "Each post sits on the same card so the index reads like a tidy newsroom feed. We'll swap in real copy soon.",
    category: "Water & Sanitation",
    readTime: "5 min read",
    date: "TBD",
  },
  {
    title: "Placeholder blog title #3",
    excerpt:
      "Five posts total — covering different urban services so the topic feels broad without losing focus.",
    category: "Housing",
    readTime: "3 min read",
    date: "TBD",
  },
  {
    title: "Placeholder blog title #4",
    excerpt:
      "We'll caption each card with category + read time so visitors can pick what to open first.",
    category: "Energy",
    readTime: "6 min read",
    date: "TBD",
  },
  {
    title: "Placeholder blog title #5",
    excerpt:
      "Final placeholder — once content lands, this list becomes a real index sorted by publish date.",
    category: "Public Safety",
    readTime: "4 min read",
    date: "TBD",
  },
];

export const metadata = {
  title: "Blog",
  description: "Five short reads on urban services and how cities work.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Five reads from the team."
        description="Short takes on what we found while researching urban services. Real titles, dates, and authors will replace these placeholders as the team finishes drafting."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post, i) => (
            <Card
              key={i}
              className="group relative h-full overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              />
              <CardContent className="relative flex h-full flex-col gap-4 p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                    {post.category}
                  </Badge>
                  <span>{post.readTime}</span>
                  <span aria-hidden>·</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read placeholder
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
