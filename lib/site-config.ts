/** 7-day free trial signup — set NEXT_PUBLIC_TRIAL_SIGNUP_URL when checkout is live */
export const TRIAL_SIGNUP_HREF =
  process.env.NEXT_PUBLIC_TRIAL_SIGNUP_URL ?? "#pricing";

export const ASSETS = {
  logo: "/logo.png",
  logoWordmark: "/logo-wordmark.png",
  demoVideo: "/demo.mp4",
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
