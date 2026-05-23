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
            eyebrow="Why Red Cell Systems"
            title="Understanding, not just data"
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
              Most healthcare systems generate data. Few generate understanding.
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
            Healthcare has never lacked information. It has lacked the
            connective tissue—the graphs, agents, and intelligence layers that
            turn isolated facts into coherent understanding.
          </p>
          <p>
            Red Cell Systems builds that layer. We design AI-native
            infrastructure with the scientific rigor of a research institution
            and the human-centered care of those who sit beside patients every
            day.
          </p>
          <p>
            Our platform does not replace clinical judgment. It extends it—
            giving teams the confidence to act on intelligence that is
            traceable, explainable, and built for the long arc of medicine.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
