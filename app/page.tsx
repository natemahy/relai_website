import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { FeatureCards } from "@/components/feature-cards";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FeatureCards />
        {/* TODO: About section — "Click to Know More" links here; full content not built yet */}
        <section
          id="about"
          className="sr-only"
          aria-label="About Relai placeholder"
        />
      </main>
      <SiteFooter />
    </>
  );
}
