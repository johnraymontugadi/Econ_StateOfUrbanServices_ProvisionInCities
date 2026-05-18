"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link
          href="/"
          className="group flex items-center gap-2 text-lg font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground transition-transform group-hover:scale-105 group-hover:rotate-3">
            <span className="text-sm font-black">SU</span>
          </span>
          <span className="hidden sm:inline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {siteConfig.navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            const isFeatured = "featured" in link && link.featured;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isFeatured && !isActive
                    ? "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80"
                    : isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden rounded-md border border-border/60 p-2 hover:bg-muted transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border/60 bg-background animate-in slide-in-from-top-2 fade-in duration-200">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {siteConfig.navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
