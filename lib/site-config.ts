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
  howItWorks1: "",
  howItWorks2: "/images/live-stream.png",
  howItWorks3: "/images/sorter.png",
  dashboard: "",
  afterShowPdf: "",
  sorter: "/images/sorter.png",
  lockerRoom: "/images/locker-room.png",
} as const;
