import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-primary/10 via-background to-accent/10",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary animate-in fade-in slide-in-from-bottom-2 duration-500">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl animate-in fade-in slide-in-from-bottom-3 duration-700">
          <span className="bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
