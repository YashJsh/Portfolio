"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./toggle-mode";
import clsx from "clsx";

export const Navbar = () => {
  const pathname = usePathname();

  const isPortfolio = pathname === "/";
  const isBlog = pathname?.startsWith("/blog");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-end ">
        <div className="flex items-center gap-6">
          {/* Portfolio */}
          <Link
            href="/"
            className={clsx(
              "text-sm font-medium transition-colors",
              isPortfolio
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Portfolio
          </Link>

          {/* Blog */}
          <Link
            href="/blog"
            className={clsx(
              "text-sm font-medium transition-colors",
              isBlog
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Blog
          </Link>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
