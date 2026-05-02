"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, Search, Sparkles, UsersRound } from "lucide-react";
import { heroMoods } from "@/data/moods";
import { MoodChip } from "@/components/ui/MoodChip";
import { PremiumButton } from "@/components/ui/PremiumButton";

const searchFields = [
  { label: "Destination", value: "Where to?", icon: MapPin },
  { label: "Check-in", value: "Add date", icon: CalendarDays },
  { label: "Check-out", value: "Add date", icon: CalendarDays },
  { label: "Guests", value: "2 travellers", icon: UsersRound },
  { label: "Trip Mood", value: "Choose vibe", icon: Sparkles },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/60 bg-white/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a644f] shadow-[0_18px_60px_rgba(98,72,43,0.12)] backdrop-blur-xl"
          >
            <span className="size-2 rounded-full bg-[#b76345]" />
            Beautiful stays. Verified for real life.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl font-serif text-[clamp(3.45rem,8.2vw,8.7rem)] leading-[0.88] tracking-[-0.075em] text-[#201a16]"
          >
            Find stays that feel as good as they look.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-2xl text-lg leading-8 text-[#5e5046] sm:text-xl"
          >
            Handpicked, verified escapes for weekends, celebrations, spiritual getaways, and slow
            travel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <PremiumButton icon={<Search className="size-4" />}>Explore Stays</PremiumButton>
            <PremiumButton variant="secondary">List Your Property</PremiumButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle,rgba(200,168,106,0.22),transparent_62%)] blur-2xl" />
          <div className="relative rounded-[2.2rem] border border-white/70 bg-[#fffaf1]/68 p-4 shadow-[0_34px_90px_rgba(73,55,37,0.18)] backdrop-blur-2xl sm:p-5">
            <div className="rounded-[1.8rem] border border-[#efe1cc] bg-white/42 p-4 sm:p-5">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#9a7f58]">Plan softly</p>
                  <h2 className="mt-2 font-serif text-3xl tracking-[-0.04em] text-[#201a16]">
                    Begin with a feeling.
                  </h2>
                </div>
                <span className="hidden rounded-full bg-[#201a16] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f7dfab] sm:inline-flex">
                  Verified
                </span>
              </div>

              <div className="grid gap-3">
                {searchFields.map((field) => {
                  const Icon = field.icon;
                  return (
                    <button
                      key={field.label}
                      className="group flex items-center gap-4 rounded-2xl border border-[#eadcc7] bg-[#fffaf1]/72 p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:border-[#d8bd8b] hover:bg-white/85 hover:shadow-[0_16px_34px_rgba(99,72,44,0.1)]"
                    >
                      <span className="grid size-11 place-items-center rounded-full bg-[#f2e4ce] text-[#9b6b45] transition group-hover:bg-[#201a16] group-hover:text-[#f7dfab]">
                        <Icon className="size-4" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7f58]">
                          {field.label}
                        </span>
                        <span className="mt-1 block text-base font-semibold text-[#2d251f]">
                          {field.value}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              <PremiumButton className="mt-5 w-full justify-center" icon={<Search className="size-4" />}>
                Search curated escapes
              </PremiumButton>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.52 }}
        className="absolute bottom-6 left-1/2 hidden w-full max-w-7xl -translate-x-1/2 px-8 lg:block"
      >
        <div className="flex flex-wrap gap-3">
          {heroMoods.map((mood) => (
            <MoodChip key={mood}>{mood}</MoodChip>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
