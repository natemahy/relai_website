/** Primary beta signup destination — change this one constant or set NEXT_PUBLIC_BETA_SIGNUP_URL */
export const BETA_SIGNUP_HREF =
  process.env.NEXT_PUBLIC_BETA_SIGNUP_URL ?? "https://example.com/beta";

export const ASSETS = {
  logo: "/logo.png",
  demoVideo: "/demo.mp4",
  layoutReference: "/layout-reference.jpg",
} as const;
