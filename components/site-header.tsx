"use client";

import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/site-config";
import { useTheme } from "@/lib/use-theme";

export function SiteHeader() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-app/80 backdrop-blur-md">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-4 py-3 sm:px-6 xl:px-8">
        <a href="#" className="flex items-center" aria-label="Relai home">
          <Image
            src={ASSETS.logoWordmark}
            alt="Relai"
            width={520}
            height={160}
            className="h-10 w-auto object-contain object-left sm:h-12 md:h-14"
            priority
          />
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/#about"
            className="text-sm font-medium text-foreground underline decoration-border underline-offset-[6px] transition-colors hover:text-primary hover:decoration-primary/60"
          >
            Click to Know More
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 bg-card-solid/60 text-muted-foreground transition-colors hover:text-foreground"
            aria-label={
              mounted
                ? `Switch to ${theme === "dark" ? "light" : "dark"} mode`
                : "Toggle theme"
            }
          >
            {mounted && theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}
