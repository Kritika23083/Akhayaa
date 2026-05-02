"use client";

import { motion } from "framer-motion";
import { ConciergeBell, HeartHandshake, ListChecks, Map, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Not every property gets listed",
    copy: "Akhaya is curated before it is scaled. We look for atmosphere, comfort, host quality, and the kind of details travellers remember.",
    icon: ListChecks,
  },
  {
    title: "Every stay is manually verified",
    copy: "Photos, room videos, cleanliness signals, location expectations, and arrival reality are checked before a stay becomes an escape.",
    icon: ShieldCheck,
  },
  {
    title: "Mood-first discovery",
    copy: "Choose the reason for the trip first: romance, darshan, celebration, reset, content, family time, or a quiet weekend.",
    icon: HeartHandshake,
  },
  {
    title: "Real support around the trip",
    copy: "From questions before booking to local coordination during arrival, Akhaya is designed to feel like a calm concierge layer.",
    icon: ConciergeBell,
  },
  {
    title: "Experiences beyond the room",
    copy: "Cabs, meals, decorations, local guides, temple assistance, photoshoots, and wellness add-ons make the stay feel complete.",
    icon: Map,
  },
];

export function WhyAkhaya() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Why Akhaya is different"
            title="The trust layer luxury travel in India has been missing."
            description="Beautiful places are easy to find online. Akhaya focuses on whether they feel clean, calm, supportive, and special when you actually arrive."
            align="left"
          />

          <div className="space-y-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.article
                  key={reason.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-90px" }}
                  transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="group grid gap-5 rounded-[2rem] border border-white/60 bg-[#fffaf1]/70 p-5 shadow-[0_18px_55px_rgba(85,64,43,0.1)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-[#fffaf1]/88 sm:grid-cols-[auto_1fr] sm:p-6"
                >
                  <div className="grid size-13 place-items-center rounded-2xl bg-[#201a16] text-[#f2cf87] shadow-[0_15px_34px_rgba(32,26,22,0.18)] transition group-hover:rotate-[-3deg]">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl tracking-[-0.04em] text-[#201a16]">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#66574b] sm:text-base">{reason.copy}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
