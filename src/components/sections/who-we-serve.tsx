"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Dna,
  FlaskConical,
  HeartHandshake,
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const audiences = [
  {
    icon: Building2,
    title: "Health Systems",
    description:
      "Enterprise-grade intelligence that connects EHR data, operational workflows, and clinical decision support into a unified understanding layer.",
  },
  {
    icon: Dna,
    title: "Biotech Teams",
    description:
      "Accelerate target discovery and trial design with research intelligence that spans publications, omics, and real-world evidence.",
  },
  {
    icon: FlaskConical,
    title: "Research Organizations",
    description:
      "Transform siloed studies into living knowledge graphs that agents can query, synthesize, and extend across disciplines.",
  },
  {
    icon: HeartHandshake,
    title: "Patient Communities",
    description:
      "Patient-centered intelligence that respects autonomy, improves navigation, and turns lived experience into actionable insight.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function WhoWeServe() {
  return (
    <section
      id="solutions"
      className="relative px-6 py-28 md:px-10 md:py-36 lg:px-12"
      aria-labelledby="who-we-serve-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Who we serve"
          titleId="who-we-serve-heading"
          title="Built for those who move medicine forward"
          description="Red Cell Systems partners with organizations at the intersection of care, science, and human experience."
          className="mb-16 md:mb-20"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {audiences.map((audience) => (
            <motion.div key={audience.title} variants={item}>
              <GlassCard className="group h-full">
                <div
                  className={cn(
                    "mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl",
                    "bg-blood/8 text-blood transition-colors group-hover:bg-blood/12",
                  )}
                >
                  <audience.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-medium text-charcoal">
                  {audience.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-charcoal/60">
                  {audience.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
