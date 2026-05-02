"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Traveller notes"
          title="Small details people remember after the trip."
          description="Akhaya is designed for trust before booking and comfort after arrival."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.quote}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[1.75rem] border border-white/65 bg-[#fffaf1]/74 p-6 shadow-[0_22px_60px_rgba(88,65,43,0.1)] backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <Quote className="size-6 text-[#c8a86a]" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="size-3.5 fill-[#c8a86a] text-[#c8a86a]"
                    />
                  ))}
                </div>
              </div>
              <p className="mt-7 min-h-28 font-serif text-2xl leading-tight tracking-[-0.04em] text-[#2b241f]">
                “{testimonial.quote}”
              </p>
              <div className="mt-8 border-t border-[#eadcc8] pt-4">
                <p className="font-semibold text-[#201a16]">{testimonial.name}</p>
                <p className="mt-1 text-sm text-[#7a6b5d]">{testimonial.context}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
