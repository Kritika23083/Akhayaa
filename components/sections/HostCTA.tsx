"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Camera, ShieldCheck, Sparkles } from "lucide-react";
import { PremiumButton } from "@/components/ui/PremiumButton";

export function HostCTA() {
  return (
    <section id="hosts" className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2.6rem] border border-white/65 bg-[#201a16] p-6 text-[#fffaf1] shadow-[0_34px_90px_rgba(49,36,25,0.25)] sm:p-8 lg:p-12"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#e7c987]">
              <Sparkles className="size-4" />
              For thoughtful hosts
            </div>
            <h2 className="max-w-3xl font-serif text-4xl leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Have a beautiful stay? Let Akhaya turn it into a high-demand escape.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#e9dccb]/82 sm:text-lg">
              Get listed, verified, photographed, and discovered by travellers looking for
              something special.
            </p>
            <PremiumButton
              className="mt-8 bg-[#fffaf1] text-[#201a16] hover:bg-[#f3dfb3]"
              icon={<ArrowUpRight className="size-4" />}
            >
              List Your Property
            </PremiumButton>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { icon: ShieldCheck, title: "Verification that builds trust" },
              { icon: Camera, title: "Photography direction that sells the feeling" },
              { icon: Sparkles, title: "Mood-led placement for the right travellers" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[1.6rem] border border-white/12 bg-white/[0.07] p-5 backdrop-blur-xl"
                >
                  <Icon className="mb-5 size-6 text-[#e7c987]" />
                  <p className="text-sm font-medium leading-6 text-[#fffaf1]/86">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
