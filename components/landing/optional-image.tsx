import Image from "next/image";

export function OptionalImage({
  src,
  alt,
  className = "",
  compact = false,
}: {
  src: string;
  alt: string;
  className?: string;
  /** Smaller display — e.g. portrait live-stream capture in How It Works */
  compact?: boolean;
}) {
  if (!src) return null;

  return (
    <div
      className={[
        "glass-card overflow-hidden p-1.5 sm:p-2",
        compact ? "mx-auto max-w-[200px] sm:max-w-[240px] lg:mx-0" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="relative w-full overflow-hidden rounded-xl bg-surface">
        <Image
          src={src}
          alt={alt}
          width={compact ? 480 : 1200}
          height={compact ? 900 : 800}
          className="h-auto w-full object-contain"
          sizes={
            compact
              ? "(max-width: 768px) 200px, 240px"
              : "(max-width: 768px) 100vw, 50vw"
          }
        />
      </div>
    </div>
  );
}
