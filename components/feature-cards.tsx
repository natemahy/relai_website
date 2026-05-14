const features = [
  {
    title: "Buyer Locker Room",
    description:
      "Give buyers a dedicated space to track wins, shipping, and order status in real time.",
    accent: "accent-top-blue",
    icon: LockerIcon,
    iconClass: "bg-primary/12 text-primary",
  },
  {
    title: "Relai Auction sorting",
    description:
      "Sort live auction pulls into the right buyer stacks automatically as the show runs.",
    accent: "accent-top-green",
    icon: SortIcon,
    iconClass: "bg-accent-success/12 text-bucket-green",
  },
  {
    title: "AI vision & singles",
    description:
      "Computer vision identifies singles and flags shipping mistakes before they leave your desk.",
    accent: "accent-top-orange",
    icon: VisionIcon,
    iconClass: "bg-bucket-orange/12 text-bucket-orange",
  },
] as const;

export function FeatureCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className={`glass-card space-y-4 p-6 ${feature.accent}`}
          >
            <div
              className={`inline-flex rounded-xl p-2.5 ${feature.iconClass}`}
            >
              <feature.icon />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function LockerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </svg>
  );
}

function SortIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m3 16 4 4 4-4M7 20V4" />
      <path d="m14 4 4 4-4 4M18 8V4" />
    </svg>
  );
}

function VisionIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
