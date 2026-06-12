import Image from "next/image";
import Link from "next/link";

import { RELAI_APP_NAME, RELAI_LOGO_ASPECT, RELAI_LOGO_HEADER_SRC } from "@/lib/relai-brand";

type RelaiLogoProps = {
  className?: string;
  heightClass?: string;
  /** Omit or pass `false` for a non-link mark (e.g. hero). */
  href?: string | false;
  priority?: boolean;
};

/** Primary Relai wordmark with correct aspect ratio. */
export function RelaiLogo({
  className = "",
  heightClass = "h-8 sm:h-9",
  href = "/",
  priority = false,
}: RelaiLogoProps) {
  const image = (
    <span
      className={`relative block shrink-0 ${heightClass} ${className}`.trim()}
      style={{ aspectRatio: RELAI_LOGO_ASPECT }}
    >
      <Image
        src={RELAI_LOGO_HEADER_SRC}
        alt={RELAI_APP_NAME}
        fill
        className="object-contain object-left"
        sizes="(max-width: 640px) 180px, 240px"
        priority={priority}
      />
    </span>
  );

  if (!href) return image;

  return (
    <Link
      href={href}
      className="inline-flex outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      aria-label={`${RELAI_APP_NAME} home`}
    >
      {image}
    </Link>
  );
}
