import { DestinationGrid } from "@/components/sections/DestinationGrid";
import { ExperienceAddons } from "@/components/sections/ExperienceAddons";
import { FeaturedEscapes } from "@/components/sections/FeaturedEscapes";
import { HeroSection } from "@/components/sections/HeroSection";
import { HostCTA } from "@/components/sections/HostCTA";
import { MoodDiscovery } from "@/components/sections/MoodDiscovery";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhyAkhaya } from "@/components/sections/WhyAkhaya";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <MoodDiscovery />
      <FeaturedEscapes />
      <WhyAkhaya />
      <ExperienceAddons />
      <DestinationGrid />
      <Testimonials />
      <HostCTA />
    </>
  );
}
