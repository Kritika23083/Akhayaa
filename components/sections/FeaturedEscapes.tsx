"use client";

import { stays } from "@/data/stays";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StayCard } from "@/components/ui/StayCard";

export function FeaturedEscapes() {
  return (
    <section id="explore" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured escapes"
          title="Six stays that set the Akhaya standard."
          description="A curated preview of properties that feel personal, photogenic, clean and genuinely travel-worthy."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {stays.map((stay, index) => (
            <StayCard key={stay.name} stay={stay} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
