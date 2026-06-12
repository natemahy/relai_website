import generated from "@/lib/relai-brand-colors.generated.json";

export const RELAI_BRAND_BLACK = generated.black as "#000000";
export const RELAI_BRAND_WHITE = generated.white as "#FFFFFF";
export const RELAI_BRAND_MAGENTA = generated.gradientStart;
export const RELAI_BRAND_PURPLE = generated.gradientMid;
export const RELAI_BRAND_CYAN = generated.gradientEnd;

export const RELAI_BRAND_GRADIENT_CSS = `linear-gradient(90deg, ${RELAI_BRAND_MAGENTA} 0%, ${RELAI_BRAND_PURPLE} 50%, ${RELAI_BRAND_CYAN} 100%)`;

export const RELAI_LOGO_ASPECT = generated.logoAspect;
