import { HeroVideo } from "@/components/hero-video";
import { RelaiLogo } from "@/components/relai-logo";
import { Button } from "@/components/ui/button";
import { TrialCtaButton } from "@/components/trial-cta-button";
import { HERO_HEADLINE, HERO_TRUST_BADGES } from "@/lib/landing-content";

export function Hero() {
  return (
    <section className="relative overflow-visible">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgb(231_74_249/0.14),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgb(51_178_255/0.16),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:pb-12 lg:pt-16 xl:px-8">
        <div className="mb-6 lg:mb-8 lg:hidden">
          <RelaiLogo href={false} heightClass="h-10 sm:h-11" priority />
        </div>

        <div className="space-y-8 sm:space-y-10">
          <HeroVideo />

          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12] xl:text-5xl xl:leading-[1.1]">
              {HERO_HEADLINE}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <TrialCtaButton />
              <Button href="#how-it-works" variant="secondary">
                See How It Works
              </Button>
            </div>

            <ul className="flex flex-wrap justify-center gap-2 pt-1">
              {HERO_TRUST_BADGES.map((badge) => (
                <li key={badge}>
                  <span className="inline-flex rounded-full border border-border/80 bg-card-solid/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                    {badge}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
