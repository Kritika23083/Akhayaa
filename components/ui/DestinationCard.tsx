"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { Destination } from "@/data/destinations";
import { cn } from "@/lib/utils";

export function DestinationCard({
  destination,
  className,
}: {
  destination: Destination;
  className?: string;
}) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={cn(
        "group relative min-h-[19rem] overflow-hidden rounded-[2rem] border border-white/55 bg-[#f8ecdc] shadow-[0_22px_70px_rgba(72,58,38,0.16)]",
        className,
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", destination.palette)} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,16,12,0.02),rgba(20,16,12,0.68))]" />
      <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-20 bg-[radial-gradient(circle_at_50%_25%,white,transparent_38%)]" />
      <div className="relative flex h-full flex-col justify-between p-6 text-white">
        <div className="flex justify-end">
          <span className="rounded-full border border-white/35 bg-white/15 p-2 backdrop-blur-md transition group-hover:bg-white/25">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-white/70">{destination.region}</p>
          <h3 className="font-serif text-3xl leading-tight">{destination.name}</h3>
        </div>
      </div>
    </motion.article>
  );
}
