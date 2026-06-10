import { LoopVideo } from "@/components/landing/loop-video";
import { OptionalImage } from "@/components/landing/optional-image";
import { SellerFeatureIconGlyph } from "@/components/landing/seller-feature-icon";
import { SectionHeading, SectionShell } from "@/components/landing/section-shell";
import { TrialCtaButton } from "@/components/trial-cta-button";
import {
  AFTER_SHOW_TOOLKIT,
  BEFORE_AFTER,
  BUILT_FOR_SELLERS,
  FAQ_ITEMS,
  GET_STARTED_ITEMS,
  HOW_IT_WORKS_STEPS,
  LIVE_DEMO,
  LABEL_SIZES,
  LOCKER_ROOM_HIGHLIGHTS,
  PLATFORM_STRIP,
  PRICING_SECTION,
  PRICING_TIERS,
  PRICING_TRIAL,
  PRINT_MODE_PILLS,
  PRINT_MODES_DETAILED,
  PRINTER_OPTIONS,
  SUPPORTED_PLATFORMS,
  type SellerFeatureAccent,
} from "@/lib/landing-content";
import { ASSETS, LANDING_IMAGES, RELAI_APP_URL, signupUrlForPlan } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export function LandingSections() {
  return (
    <>
      <PrintModesAndPlatforms />
      <GetStarted />
      <BeforeAfter />
      <HowItWorks />
      <LiveDemoSection />
      <AfterShowToolkit />
      <BuyerLockerRoom />
      <PrinterSection />
      <LabelSizes />
      <PrintModesDetailed />
      <BuiltForSellers />
      <FaqSection />
      <SupportedPlatforms />
      <PricingSection />
    </>
  );
}

function PrintModesAndPlatforms() {
  return (
    <SectionShell>
      <div className="space-y-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {PRINT_MODE_PILLS.map((mode, i) => (
            <article
              key={mode.title}
              className={`glass-card space-y-2 p-5 ${
                i === 0
                  ? "accent-top-blue"
                  : i === 1
                    ? "accent-top-green"
                    : "accent-top-orange"
              }`}
            >
              <h3 className="text-sm font-semibold tracking-tight">{mode.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {mode.description}
              </p>
            </article>
          ))}
        </div>

        <div className="space-y-4">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {PLATFORM_STRIP.map((platform) => (
              <PlatformBadge key={platform.name} name={platform.name} status={platform.status} />
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function GetStarted() {
  return (
    <SectionShell tinted>
      <div className="space-y-8">
        <SectionHeading
          title="What you need to get started"
          description="Everything required to run your first show with Relai."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GET_STARTED_ITEMS.map((item) => (
            <article key={item.title} className="glass-card space-y-2 p-5">
              <h3 className="text-sm font-semibold tracking-tight">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function BeforeAfter() {
  return (
    <SectionShell>
      <div className="space-y-10">
        <SectionHeading
          title="Before and after Relai"
          description="What the end of a show looks like, with and without it."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <ComparisonCard
            label="Before"
            title={BEFORE_AFTER.before.title}
            items={BEFORE_AFTER.before.items}
            tone="muted"
          />
          <ComparisonCard
            label="After"
            title={BEFORE_AFTER.after.title}
            items={BEFORE_AFTER.after.items}
            tone="positive"
          />
        </div>
      </div>
    </SectionShell>
  );
}

function ComparisonCard({
  label,
  title,
  items,
  tone,
}: {
  label: string;
  title: string;
  items: readonly string[];
  tone: "muted" | "positive";
}) {
  const isAfter = tone === "positive";

  return (
    <article
      className={
        isAfter
          ? "space-y-4 rounded-2xl border-2 border-accent-success/45 bg-gradient-to-br from-accent-success/20 via-accent-success/10 to-accent-success/5 p-6 shadow-md shadow-accent-success/10 sm:p-7"
          : "glass-card space-y-4 p-6 sm:p-7"
      }
    >
      <p
        className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
          isAfter ? "text-bucket-green" : "text-muted-foreground"
        }`}
      >
        {label}
      </p>
      <h3
        className={`text-lg font-semibold tracking-tight ${
          isAfter ? "text-foreground" : ""
        }`}
      >
        {title}
      </h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li
            key={item}
            className={`flex gap-2.5 text-sm leading-relaxed ${
              isAfter ? "text-foreground/90" : "text-muted-foreground"
            }`}
          >
            {isAfter ? (
              <span
                className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-accent-success/25 text-[10px] font-bold text-bucket-green"
                aria-hidden
              >
                ✓
              </span>
            ) : (
              <span
                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-muted-foreground/50"
                aria-hidden
              />
            )}
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function HowItWorks() {
  const images = [
    LANDING_IMAGES.howItWorks1,
    LANDING_IMAGES.howItWorks2,
    LANDING_IMAGES.howItWorks3,
  ];

  return (
    <SectionShell id="how-it-works" tinted>
      <div className="space-y-12">
        <SectionHeading
          eyebrow="How it works"
          title="Relai works seamlessly in the background while you sell"
        />
        <ol className="space-y-12">
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <li
              key={step.step}
              className={`grid items-center gap-8 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="space-y-4">
                <div className="inline-flex size-9 items-center justify-center rounded-full bg-primary/12 text-sm font-bold text-primary">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {step.description}
                </p>
              </div>
              <OptionalImage
                src={images[i] ?? ""}
                alt={`${step.title} screenshot`}
                compact={i === 1}
              />
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}

function LiveDemoSection() {
  return (
    <SectionShell id="live-demo">
      <div className="space-y-8">
        <SectionHeading
          eyebrow={LIVE_DEMO.eyebrow}
          title={LIVE_DEMO.title}
          description={LIVE_DEMO.description}
        />
        <LoopVideo
          src={ASSETS.labelPrintDemo}
          label="Relai automatic label printing on auction win"
        />
      </div>
    </SectionShell>
  );
}

function AfterShowToolkit() {
  const images = [
    LANDING_IMAGES.dashboard,
    LANDING_IMAGES.afterShowPdf,
    LANDING_IMAGES.sorter,
  ];

  return (
    <SectionShell id="after-show">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="After the show"
          title="Dashboard, PDF, and Sorter — built in"
          description="Relai keeps working after the last item sells. Organize, print, and pack without starting over."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {AFTER_SHOW_TOOLKIT.map((item, i) => (
            <article key={item.title} className={`glass-card space-y-4 p-6 ${item.accent}`}>
              <OptionalImage src={images[i] ?? ""} alt={item.title} />
              <div className="space-y-2">
                <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function BuyerLockerRoom() {
  return (
    <SectionShell id="locker-room" tinted>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Buyer Locker Room"
            title="Give buyers proof of purchase — instantly"
            description="The feature live sellers ask for most. Buyers see their wins without waiting on DMs or tracking numbers."
            className="text-left mx-0 max-w-none"
          />
          <ul className="space-y-3">
            {LOCKER_ROOM_HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
              >
                <span
                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <OptionalImage
          src={LANDING_IMAGES.lockerRoom}
          alt="Buyer Locker Room"
          className="lg:max-w-lg lg:justify-self-end"
        />
      </div>
    </SectionShell>
  );
}

function PrinterSection() {
  return (
    <SectionShell>
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        <SectionHeading
          title="Works with your thermal printer"
          description="Relai sends labels through your computer's standard print system, so it works with any thermal printer your computer can see."
        />
        <div className="flex flex-wrap items-center justify-center gap-3">
          {PRINTER_OPTIONS.map((option) => (
            <span
              key={option}
              className="glass-card px-4 py-2.5 text-sm font-medium text-foreground"
            >
              {option}
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function LabelSizes() {
  return (
    <SectionShell tinted>
      <div className="space-y-10">
        <SectionHeading
          title="Compatible label sizes"
          description="Choose the size that fits your workflow."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LABEL_SIZES.map((label) => (
            <article
              key={label.size}
              className="space-y-2 rounded-2xl border-2 border-primary/45 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 p-5 text-center shadow-md shadow-primary/10"
            >
              <h3 className="text-xl font-bold tracking-tight text-primary">
                {label.size}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/85">
                {label.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function PrintModesDetailed() {
  return (
    <SectionShell id="print-modes">
      <div className="space-y-10">
        <SectionHeading
          title="Three print modes"
          description="Choose how labels print during your stream."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {PRINT_MODES_DETAILED.map((mode) => (
            <article key={mode.title} className="glass-card flex flex-col gap-5 p-6">
              <div className="space-y-2">
                <h3 className="text-base font-semibold tracking-tight">{mode.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {mode.description}
                </p>
              </div>
              <LabelPreview preview={mode.preview} />
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

const THERMAL_LABEL =
  "rounded-lg border border-neutral-300 bg-white p-4 text-black shadow-sm";

function LabelPreview({
  preview,
}: {
  preview: (typeof PRINT_MODES_DETAILED)[number]["preview"];
}) {
  if (preview.type === "buyer") {
    return (
      <div className={`mt-auto text-center ${THERMAL_LABEL}`}>
        <p className="text-3xl font-bold tabular-nums text-black">{preview.number}</p>
        <p className="mt-1 text-sm font-semibold text-black">{preview.buyer}</p>
      </div>
    );
  }

  if (preview.type === "item") {
    return (
      <div className={`mt-auto text-sm ${THERMAL_LABEL}`}>
        <div className="flex items-center justify-between gap-2">
          <span className="font-bold tabular-nums text-black">{preview.number}</span>
          <span className="text-[10px] font-bold uppercase tracking-wide text-black/70">
            Auction win
          </span>
        </div>
        <p className="mt-1 font-semibold text-black">{preview.buyer}</p>
        <p className="text-black/80">{preview.item}</p>
      </div>
    );
  }

  return (
    <div className="mt-auto space-y-2">
      <div className={`text-sm ${THERMAL_LABEL} !p-3`}>
        <div className="flex items-center justify-between gap-2">
          <span className="font-bold tabular-nums text-black">{preview.number}</span>
          <span className="text-[10px] font-bold uppercase tracking-wide text-black/70">
            Auction win
          </span>
        </div>
        <p className="mt-1 font-semibold text-black">{preview.buyer}</p>
        <p className="text-black/80">{preview.item}</p>
      </div>
      <div className={`text-center text-sm ${THERMAL_LABEL} !p-3`}>
        <p className="text-2xl font-bold tabular-nums text-black">{preview.number}</p>
        <p className="font-semibold text-black">{preview.buyer}</p>
      </div>
    </div>
  );
}

const SELLER_FEATURE_STYLES: Record<
  SellerFeatureAccent,
  { card: string; icon: string }
> = {
  blue: {
    card: "border-primary/45 from-primary/20 via-primary/10 to-primary/5 shadow-primary/10",
    icon: "bg-primary/15 text-primary",
  },
  green: {
    card: "border-accent-success/45 from-accent-success/20 via-accent-success/10 to-accent-success/5 shadow-accent-success/10",
    icon: "bg-accent-success/15 text-bucket-green",
  },
  orange: {
    card: "border-bucket-orange/45 from-bucket-orange/20 via-bucket-orange/10 to-bucket-orange/5 shadow-bucket-orange/10",
    icon: "bg-bucket-orange/15 text-bucket-orange",
  },
};

function SellerFeatureCard({
  feature,
}: {
  feature: (typeof BUILT_FOR_SELLERS)[number];
}) {
  const styles = SELLER_FEATURE_STYLES[feature.accent];

  return (
    <article
      className={`space-y-4 rounded-2xl border-2 bg-gradient-to-br p-5 shadow-md ${styles.card}`}
    >
      <div className={`inline-flex rounded-xl p-2.5 ${styles.icon}`}>
        <SellerFeatureIconGlyph icon={feature.icon} />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-semibold tracking-tight text-foreground">
          {feature.title}
        </h3>
        <p className="text-sm leading-relaxed text-foreground/80">
          {feature.description}
        </p>
      </div>
    </article>
  );
}

function BuiltForSellers() {
  return (
    <SectionShell tinted>
      <div className="space-y-10">
        <SectionHeading
          title="Built for live sellers"
          description="Everything you need to streamline your shipping process — and more that only Relai offers."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BUILT_FOR_SELLERS.map((feature) => (
            <SellerFeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function FaqSection() {
  return (
    <SectionShell id="faq">
      <div className="space-y-10">
        <SectionHeading title="Frequently asked questions" />
        <div className="mx-auto max-w-3xl divide-y divide-border/60 rounded-2xl border border-border/80 bg-card-glass backdrop-blur-md">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group px-5 py-4 sm:px-6">
              <summary className="cursor-pointer list-none text-sm font-semibold tracking-tight text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span
                    className="text-muted-foreground transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function SupportedPlatforms() {
  return (
    <SectionShell tinted>
      <div className="space-y-10">
        <SectionHeading
          title="Supported platforms"
          description="Live on Whatnot today. eBay Live in testing, with more on the way."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {SUPPORTED_PLATFORMS.map((platform) => (
            <article key={platform.name} className="glass-card space-y-3 p-6">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-semibold tracking-tight">{platform.name}</h3>
                <PlatformBadge name="" status={platform.status} compact />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {platform.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function PricingSection() {
  return (
    <SectionShell id="pricing">
      <div className="space-y-10">
        <SectionHeading
          title={PRICING_SECTION.headline}
          description={`${PRICING_SECTION.subheadline} ${PRICING_SECTION.intro}`}
        />

        <article className="mx-auto max-w-3xl space-y-4 rounded-2xl border-2 border-primary/45 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 p-6 shadow-md shadow-primary/10 sm:p-8">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {PRICING_TRIAL.title}
            </h3>
            <p className="text-sm leading-relaxed text-foreground/85">
              {PRICING_TRIAL.description}
            </p>
          </div>
          <div className="flex justify-center sm:justify-start">
            <TrialCtaButton className="w-full sm:w-auto" />
          </div>
        </article>

        <div className="grid gap-5 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <article
              key={tier.id}
              className={
                tier.accent === "highlight"
                  ? "space-y-5 rounded-2xl border-2 border-primary/50 bg-gradient-to-br from-primary/15 via-primary/8 to-primary/5 p-6 shadow-md shadow-primary/10"
                  : "glass-card space-y-5 p-6"
              }
            >
              <div className="space-y-2">
                <h3 className="text-lg font-semibold tracking-tight">{tier.title}</h3>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>
              <p className="text-3xl font-semibold tracking-tight tabular-nums">
                ${tier.price}
                <span className="text-base font-medium text-muted-foreground"> / month</span>
              </p>
              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href={signupUrlForPlan(tier.id)}
                variant={tier.accent === "highlight" ? "primary" : "secondary"}
                className="w-full"
              >
                {tier.cta}
              </Button>
            </article>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground">
          {PRICING_SECTION.footnote}{" "}
          <a
            href={`${RELAI_APP_URL}/pricing`}
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            View full pricing on Relai
          </a>
          {" · "}
          <a
            href={`${RELAI_APP_URL}/login`}
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </SectionShell>
  );
}

function PlatformBadge({
  name,
  status,
  compact = false,
}: {
  name: string;
  status: "live" | "testing" | "soon";
  compact?: boolean;
}) {
  const statusLabel =
    status === "live" ? "Live now" : status === "testing" ? "In testing" : "Coming soon";

  const statusClass =
    status === "live"
      ? "bg-accent-success/15 text-bucket-green"
      : status === "testing"
        ? "bg-bucket-orange/15 text-bucket-orange"
        : "bg-surface text-muted-foreground";

  if (compact) {
    return (
      <span
        className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${statusClass}`}
      >
        {statusLabel}
      </span>
    );
  }

  return (
    <span className="glass-card inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium">
      {name}
      <span
        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${statusClass}`}
      >
        {statusLabel}
      </span>
    </span>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0 text-accent-success"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
