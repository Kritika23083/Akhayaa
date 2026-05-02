"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type TrustBadgeProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function TrustBadge({ icon: Icon, title, description }: TrustBadgeProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group rounded-[1.65rem] border border-white/55 bg-white/50 p-5 shadow-[0_18px_45px_rgba(93,76,52,0.10)] backdrop-blur-xl"
    >
      <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-[#fff8ec] text-[#9b6b31] shadow-inner shadow-white/80 ring-1 ring-[#e5d3ad]">
        <Icon className="size-5" strokeWidth={1.7} />
      </div>
      <h3 className="font-serif text-xl text-[#211a16]">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-[#6f6254]">{description}</p>
    </motion.div>
  );
}
