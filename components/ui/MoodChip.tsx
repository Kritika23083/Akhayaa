"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type MoodChipProps = {
  children: React.ReactNode;
  className?: string;
};

export function MoodChip({ children, className }: MoodChipProps) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "rounded-full border border-white/55 bg-white/50 px-4 py-2 text-sm font-medium text-[#3f352b] shadow-[0_12px_40px_rgba(99,79,47,0.08)] backdrop-blur-md transition-colors hover:border-[#c8a86a]/70 hover:bg-white/70",
        className,
      )}
    >
      {children}
    </motion.button>
  );
}
