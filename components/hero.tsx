import { DemoVideo } from "@/components/demo-video";
import { Button } from "@/components/ui/button";
import { TrialCtaButton } from "@/components/trial-cta-button";
import { HERO_TRUST_BADGES } from "@/lib/landing-content";

export function Hero() {
  return (
    <section className="relative overflow-visible">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgb(37_99_235/0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgb(59_130_246/0.15),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16 xl:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
          <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:col-span-7 lg:col-start-1 lg:max-w-none lg:text-[2.75rem] lg:leading-[1.12] xl:text-5xl xl:leading-[1.1]">
            Stop losing money on shipping errors. The first AI-powered Buyer
            Locker Room &amp; Singles Sorter for Live Sellers.
          </h1>

          <div className="space-y-6 lg:col-span-6 lg:col-start-1 lg:pt-4 xl:pt-6">
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Print organizational labels the moment a buyer wins. Cloud app and
              Chrome extension built for Whatnot live sellers — when your show
              ends, every item is already sorted and ready to pack.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <TrialCtaButton />
              <Button href="#how-it-works" variant="secondary">
                See How It Works
              </Button>
            </div>

            <ul className="flex flex-wrap gap-2 pt-1">
              {HERO_TRUST_BADGES.map((badge) => (
                <li key={badge}>
                  <span className="inline-flex rounded-full border border-border/80 bg-card-solid/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                    {badge}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="z-10 mt-10 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 lg:mt-0 lg:pt-16 xl:pt-24">
            <div className="lg:origin-top lg:scale-[1.07] xl:scale-[1.09]">
              <DemoVideo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
