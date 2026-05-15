"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Modal } from "@/components/ui/modal";
import { ASSETS } from "@/lib/site-config";
import { RELAI_KNOW_MORE_PARAGRAPHS } from "@/lib/relai-know-more-content";
import { useTheme } from "@/lib/use-theme";

export function SiteHeader() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [knowMoreOpen, setKnowMoreOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 overflow-visible border-b border-border/60 bg-app/80 backdrop-blur-md">
        <div className="mx-auto flex min-h-[4.5rem] max-w-6xl items-center justify-between overflow-visible px-4 py-2 sm:min-h-20 sm:px-6 xl:px-8">
          <Link
            href="/"
            className="relative flex h-9 w-[min(32rem,90vw)] max-w-[calc(100vw-8rem)] shrink-0 items-center overflow-visible sm:h-9 sm:max-w-none sm:w-[min(32rem,38vw)]"
            aria-label="Relai home"
          >
            <div className="relative h-8 w-[11.5rem] origin-left scale-[2.05] sm:h-9 sm:w-[12.5rem] sm:scale-[2.25] md:scale-[2.45] lg:w-[13rem] lg:scale-[2.65]">
              <Image
                src={ASSETS.logoWordmark}
                alt="Relai"
                fill
                className="object-contain object-left"
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 512px"
                unoptimized
                priority
              />
            </div>
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={() => setKnowMoreOpen(true)}
              className="text-sm font-medium text-foreground underline decoration-border underline-offset-[6px] transition-colors hover:text-primary hover:decoration-primary/60"
            >
              Click to Know More
            </button>
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

      <Modal
        open={knowMoreOpen}
        onClose={() => setKnowMoreOpen(false)}
        title="About Relai"
        wide
      >
        <div className="space-y-4">
          {RELAI_KNOW_MORE_PARAGRAPHS.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </Modal>
    </>
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
