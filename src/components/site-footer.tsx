import { siteConfig } from "@/lib/site-config";
import { FooterExplore } from "@/components/footer-explore";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-gradient-to-b from-background to-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-lg font-semibold text-transparent">
              {siteConfig.fullName}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              Explore
            </h4>
            <FooterExplore />
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              Group Members
            </h4>
            <ul className="space-y-1.5">
              {siteConfig.groupMembers.map((member) => (
                <li
                  key={member}
                  className="text-sm text-muted-foreground"
                >
                  {member}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName}. Final project for our Economics class.
          </p>
          <p>
            Open source under the{" "}
            <a
              href="https://opensource.org/licenses/MIT"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              MIT License
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
