"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

export function FooterExplore() {
  const pathname = usePathname();

  return (
    <ul className="space-y-2">
      {siteConfig.navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={(e) => {
              if (pathname === link.href) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
