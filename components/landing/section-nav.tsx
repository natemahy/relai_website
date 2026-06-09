import { SECTION_NAV } from "@/lib/landing-content";

export function SectionNav() {
  return (
    <nav
      aria-label="Page sections"
      className="sticky top-[4.5rem] z-40 border-b border-border/60 bg-app/90 backdrop-blur-md sm:top-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 xl:px-8">
        <ul className="flex gap-2 overflow-x-auto py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SECTION_NAV.map((item) => (
            <li key={item.href} className="shrink-0">
              <a
                href={item.href}
                className="inline-flex rounded-full border border-border/80 bg-card-solid/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/8 hover:text-foreground sm:text-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
