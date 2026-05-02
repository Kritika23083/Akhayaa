"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/data/experiences";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const Icon = experience.icon;

  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-[1.6rem] border border-white/55 bg-white/45 p-5 shadow-[0_20px_60px_rgba(75,72,45,0.09)] backdrop-blur-xl"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#fff7e7] text-[#a46d42] shadow-inner shadow-white/70 transition-transform duration-500 group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-serif text-xl text-[#241b16]">{experience.title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#6c5d50]">{experience.description}</p>
    </motion.article>
  );
}
