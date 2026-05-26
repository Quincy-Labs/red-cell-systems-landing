"use client";

import { motion } from "framer-motion";
import { CellMotif } from "@/components/ui/cell-motif";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyRedCell() {
  return (
    <section
      className="relative overflow-hidden border-y border-warm-gray/80 bg-warm-gray/30 px-6 py-28 md:px-10 md:py-36 lg:px-12"
      aria-labelledby="why-heading"
    >
      <CellMotif className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 translate-x-1/3 opacity-20" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          <SectionHeading
            eyebrow="Why now"
            title="Healthcare remembers records. Patients remember reality."
            className="lg:mb-0"
          />

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <span
              className="absolute -left-2 -top-6 font-serif text-8xl leading-none text-blood/15"
              aria-hidden
            >
              &ldquo;
            </span>
            <p
              id="why-heading"
              className="relative font-serif text-3xl font-light italic leading-snug text-charcoal md:text-4xl"
            >
              The most important clinical context often exists outside the medical record.
            </p>
          </motion.blockquote>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-16 max-w-3xl space-y-6 text-lg leading-relaxed text-charcoal/65"
        >
          <p>
            EHRs capture what happens inside visits. Patients carry everything
            between them — medication changes, crises managed at home,
            transportation barriers, caregiver observations, the lived
            experience that shapes what care should look like next.
          </p>
          <p>
            Red Cell Systems bridges the gap between system data and patient
            reality. We help patients preserve a trusted, longitudinal record
            that moves with them — across providers, organizations, and crises.
          </p>
          <p>
            We start with sickle cell because the distance between what patients
            know and what systems retain is at its widest. The cost of that gap
            is measured in delayed treatment, repeated trauma, and preventable
            suffering.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
