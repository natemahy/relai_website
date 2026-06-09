import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { LandingSections } from "@/components/landing/landing-sections";
import { SectionNav } from "@/components/landing/section-nav";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <SectionNav />
      <main>
        <Hero />
        <LandingSections />
      </main>
      <SiteFooter />
    </>
  );
}
