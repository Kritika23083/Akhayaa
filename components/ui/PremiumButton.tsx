"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PremiumButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  showArrow?: boolean;
  icon?: ReactNode;
  className?: string;
};

export function PremiumButton({
  children,
  variant = "primary",
  size = "md",
  showArrow = true,
  icon,
  className,
  type = "button",
  ...props
}: PremiumButtonProps) {
  return (
    <motion.button
      type={type}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-[#c8a86a]/50 focus:ring-offset-2 focus:ring-offset-[#f8f1e6]",
        size === "md" && "px-6 py-3",
        size === "sm" && "px-4 py-2.5",
        variant === "primary" &&
          "bg-[#201a16] text-[#fffaf1] shadow-[0_18px_45px_rgba(32,26,22,0.24)] hover:bg-[#3a2d24]",
        variant === "secondary" &&
          "border border-[#201a16]/12 bg-[#fffaf1]/70 text-[#201a16] shadow-[0_14px_36px_rgba(92,71,45,0.12)] backdrop-blur-xl hover:border-[#b76345]/30 hover:bg-white/85",
        variant === "ghost" && "text-[#201a16] hover:bg-[#fffaf1]/55",
        className,
      )}
      {...props}
    >
      {children}
      {icon ?? (showArrow ? (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      ) : null)}
    </motion.button>
  );
}
