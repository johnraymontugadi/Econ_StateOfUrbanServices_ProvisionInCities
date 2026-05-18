import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { essays, findEssay } from "@/lib/blog-data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return essays.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const essay = findEssay(slug);
  if (!essay) return { title: "Essay not found" };
  return {
    title: essay.title,
    description: essay.excerpt,
  };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const essay = findEssay(slug);
  if (!essay) notFound();

  const index = essays.findIndex((e) => e.slug === essay.slug);
  const prev = index > 0 ? essays[index - 1] : null;
  const next = index < essays.length - 1 ? essays[index + 1] : null;

  return (
    <>
      <PageHeader
        eyebrow={`Essay ${String(index + 1).padStart(2, "0")} · ${essay.category}`}
        title={essay.title}
        description={essay.excerpt}
      />

      <article className="mx-auto max-w-3xl px-4 py-16 md:px-6">
        <div className="mb-8 text-sm text-muted-foreground">
          {essay.readTime}
        </div>

        <div className="flex flex-col gap-6 text-lg leading-relaxed text-foreground">
          {essay.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Original source — link out to the blog post the team summarized */}
        <aside className="mt-14 rounded-2xl border border-border/60 bg-muted/30 p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Original source
          </p>
          <h2 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
            {essay.source.title}
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {essay.source.publisher}
          </p>
          <a
            href={essay.source.href}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Read the original on {essay.source.publisher}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </aside>

        <hr className="my-14 border-border/60" />

        <nav
          aria-label="Essay navigation"
          className="grid gap-4 sm:grid-cols-2"
        >
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="group rounded-xl border border-border/60 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <span className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground">
                <ArrowLeft className="h-3 w-3" />
                Previous essay
              </span>
              <p className="mt-2 font-semibold transition-colors group-hover:text-primary">
                {prev.title}
              </p>
            </Link>
          ) : (
            <Link
              href="/blog"
              className="group rounded-xl border border-border/60 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <span className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground">
                <ArrowLeft className="h-3 w-3" />
                Back to index
              </span>
              <p className="mt-2 font-semibold transition-colors group-hover:text-primary">
                All five essays
              </p>
            </Link>
          )}

          {next ? (
            <Link
              href={`/blog/${next.slug}`}
              className="group rounded-xl border border-border/60 p-5 text-right transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <span className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground">
                Next essay
                <ArrowRight className="h-3 w-3" />
              </span>
              <p className="mt-2 font-semibold transition-colors group-hover:text-primary">
                {next.title}
              </p>
            </Link>
          ) : (
            <Link
              href="/the-divide"
              className="group rounded-xl border border-border/60 p-5 text-right transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <span className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground">
                Up next
                <ArrowRight className="h-3 w-3" />
              </span>
              <p className="mt-2 font-semibold transition-colors group-hover:text-primary">
                The Manila case study
              </p>
            </Link>
          )}
        </nav>
      </article>
    </>
  );
}
