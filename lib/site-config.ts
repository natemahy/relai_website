import {
  RELAI_ICON_SRC,
  RELAI_LOGO_HEADER_SRC,
  RELAI_LOGO_SRC,
  RELAI_LOGO_SPLIT_SRC,
  RELAI_LOGO_WHITE_SRC,
} from "@/lib/relai-brand";

/** Relai app (checkout, signup, pricing) — override with NEXT_PUBLIC_RELAI_APP_URL if needed */
export const RELAI_APP_URL =
  process.env.NEXT_PUBLIC_RELAI_APP_URL?.trim() || "https://www.therelaiapp.com";

/** 7-day free trial — defaults to app pricing page */
export const TRIAL_SIGNUP_HREF =
  process.env.NEXT_PUBLIC_TRIAL_SIGNUP_URL?.trim() || `${RELAI_APP_URL}/pricing`;

export function signupUrlForPlan(plan: "trial" | "bronze" | "silver" | "gold") {
  return `${RELAI_APP_URL}/signup?plan=${plan}`;
}

export const ASSETS = {
  /** @deprecated Use RELAI_ICON_SRC — compact mark */
  logo: RELAI_ICON_SRC,
  /** Primary gradient wordmark (transparent header) */
  logoWordmark: RELAI_LOGO_HEADER_SRC,
  logoWhite: RELAI_LOGO_WHITE_SRC,
  logoSplit: RELAI_LOGO_SPLIT_SRC,
  icon: RELAI_ICON_SRC,
  demoVideo: "/demo.mp4",
  labelPrintDemo: "/label-print-demo.mp4",
  layoutReference: "/layout-reference.jpg",
} as const;

/** Optional landing images — drop files in public/ and set paths here */
export const LANDING_IMAGES = {
  howItWorks1: "/images/extension.png",
  howItWorks2: "/images/live-show.png",
  howItWorks3: "/images/sorter.png",
  dashboard: "/images/extension.png",
  afterShowPdf: "/images/after-show-pdf.png",
  sorter: "/images/sorter.png",
  lockerRoom: "/images/locker-room.png",
} as const;
