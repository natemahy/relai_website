import { DemoVideo } from "@/components/demo-video";
import { BetaCta } from "@/components/beta-cta";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
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

          <div className="lg:col-span-6 lg:col-start-1 lg:pt-8 xl:pt-10">
            <BetaCta />
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 lg:pt-10 xl:pt-14">
            <DemoVideo />
          </div>
        </div>
      </div>
    </section>
  );
}
