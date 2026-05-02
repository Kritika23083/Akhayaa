"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { moods } from "@/data/moods";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MoodDiscovery() {
  return (
    <section id="explore" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Mood-first discovery"
          title="Choose the feeling, then the place."
          description="Akhaya starts where real travel decisions begin: the occasion, the atmosphere, and the people you are going with."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {moods.map((mood, index) => (
            <motion.article
              key={mood.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -7 }}
              className="group relative min-h-72 overflow-hidden rounded-[2rem] border border-white/65 bg-[#fffaf1]/70 p-5 shadow-[0_24px_70px_rgba(86,65,42,0.12)] backdrop-blur-xl"
            >
              <div className={`absolute inset-x-0 top-0 h-36 bg-gradient-to-br ${mood.accent} opacity-85`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.7),transparent_18rem)]" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/55 bg-white/35 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[#715f4f] backdrop-blur-md">
                    {mood.tone}
                  </span>
                  <span className="grid size-10 place-items-center rounded-full bg-[#201a16]/90 text-[#f7dfab] opacity-0 transition duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>

                <div className="pt-24">
                  <h3 className="font-serif text-3xl leading-none tracking-[-0.04em] text-[#201a16]">
                    {mood.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#66574d]">{mood.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
