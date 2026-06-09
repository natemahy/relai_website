import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { LandingSections } from "@/components/landing/landing-sections";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <LandingSections />
      </main>
      <SiteFooter />
    </>
  );
}
