"use client";

import { Headphones, ShieldCheck, Sparkles, Video } from "lucide-react";
import { TrustBadge } from "@/components/ui/TrustBadge";

const trustPoints = [
  { title: "Verified Photos", description: "Every hero angle is checked before a stay goes live.", icon: ShieldCheck },
  { title: "Real Room Videos", description: "See the room, light, approach and vibe before booking.", icon: Video },
  { title: "Cleanliness Checked", description: "Comfort basics are inspected with real-life standards.", icon: Sparkles },
  { title: "Local Support", description: "Akhaya support helps before and during the trip.", icon: Headphones },
];

export function TrustStrip() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-[2.2rem] border border-white/70 bg-[#fffaf1]/62 p-4 shadow-[0_24px_70px_rgba(74,55,38,0.1)] backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((point) => (
          <TrustBadge key={point.title} {...point} />
        ))}
      </div>
    </section>
  );
}
