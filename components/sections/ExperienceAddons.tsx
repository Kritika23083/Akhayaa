"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experiences";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperienceAddons() {
  return (
    <section id="experiences" className="section-shell">
      <SectionHeading
        eyebrow="Beyond the stay"
        title="Layer the trip with thoughtful services."
        description="Akhaya is designed as a boutique concierge layer: stays, moments, and practical support together."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-90px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.055 } },
        }}
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {experiences.map((experience) => (
          <motion.div
            key={experience.title}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <ExperienceCard experience={experience} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
