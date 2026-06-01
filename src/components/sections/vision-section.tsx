"use client";

import { motion } from "framer-motion";
import { CellMotif } from "@/components/ui/cell-motif";
import { SectionHeading } from "@/components/ui/section-heading";

export function VisionSection() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-charcoal px-6 py-36 text-bone md:px-10 md:py-52 lg:px-12"
      aria-labelledby="vision-heading"
    >
      <div className="pointer-events-none absolute inset-0 engraving-pattern opacity-25" />
      <div className="pointer-events-none absolute right-0 top-0 h-168 w-2xl rounded-full bg-blood/10 blur-[140px]" />
      <CellMotif className="pointer-events-none absolute -right-24 bottom-0 h-136 w-136 text-blood/20" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <SectionHeading
            eyebrow="Our vision"
            titleId="vision-heading"
            title="A healthcare system that remembers."
            dark
            className="max-w-5xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl font-light italic leading-snug text-bone md:text-4xl"
          >
            Better context creates better care.
          </motion.p>
        </div>

        <div className="mt-20 max-w-3xl space-y-6 text-xl leading-relaxed text-bone/65 md:text-2xl">
          <p>Healthcare stores records. Patients carry stories.</p>
          <p>We believe those should become the same thing.</p>
          <p>
            Our long-term goal is to make longitudinal patient context available
            wherever care decisions are made.
          </p>
          <p className="pt-4 font-serif text-4xl font-light leading-tight text-bone md:text-5xl">
            Across providers. Across organizations. Across time.
          </p>
        </div>
      </div>
    </section>
  );
}
