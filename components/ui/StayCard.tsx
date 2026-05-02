"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, ShieldCheck, Star } from "lucide-react";
import { Stay } from "@/data/stays";
import { PremiumButton } from "@/components/ui/PremiumButton";

type StayCardProps = {
  stay: Stay;
  index?: number;
};

export function StayCard({ stay, index = 0 }: StayCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[2rem] border border-white/60 bg-[#fffaf1]/78 shadow-[0_24px_70px_rgba(92,68,45,0.13)] backdrop-blur-xl"
    >
      <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${stay.imageTone}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.46),transparent_22rem),linear-gradient(180deg,transparent_40%,rgba(32,26,22,0.45))]" />
        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/45 bg-white/24 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-xl">
          <ShieldCheck className="size-4" />
          Verified
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
          <div>
            <p className="flex items-center gap-1 text-sm text-white/80">
              <MapPin className="size-4" />
              {stay.location}
            </p>
            <h3 className="mt-2 font-serif text-3xl leading-none">{stay.name}</h3>
          </div>
          <div className="flex shrink-0 items-center gap-1 rounded-full bg-white/20 px-3 py-2 text-sm font-semibold backdrop-blur-md">
            <Star className="size-4 fill-[#f1d28a] text-[#f1d28a]" />
            {stay.rating}
          </div>
        </div>
        <div className="absolute inset-0 scale-100 bg-white/0 transition duration-700 group-hover:scale-105 group-hover:bg-white/5" />
      </div>

      <div className="space-y-5 p-6">
        <p className="min-h-12 text-sm leading-6 text-[#5f5147]">{stay.vibe}</p>
        <div className="flex flex-wrap gap-2">
          {stay.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#e8d7bd] bg-[#f8efe1] px-3 py-1 text-xs font-medium text-[#6b5a45]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-[#eadcc8] pt-5">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#9b7e55]">From</p>
            <p className="mt-1 text-xl font-semibold text-[#201a16]">
              {stay.price}
              <span className="text-sm font-normal text-[#7a6b5d]"> / night</span>
            </p>
          </div>
          <PremiumButton size="sm" variant="ghost" showArrow={false}>
            View Stay <ArrowUpRight className="size-4" />
          </PremiumButton>
        </div>
      </div>
    </motion.article>
  );
}
