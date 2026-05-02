"use client";

import { destinations } from "@/data/destinations";
import { DestinationCard } from "@/components/ui/DestinationCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DestinationGrid() {
  return (
    <section id="destinations" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Editorial destination edit"
          title="Where the next Akhaya escape begins."
          description="A growing set of culturally rich, visually warm, and experience-ready destinations across India."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <DestinationCard key={destination.name} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
