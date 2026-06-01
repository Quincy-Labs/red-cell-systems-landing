"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Heart,
  Handshake,
  Users,
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const audiences = [
  {
    icon: Heart,
    title: "Patients",
    description:
      "Carry the full picture in memory.",
  },
  {
    icon: Users,
    title: "Navigators & Community Organizations",
    description:
      "Rebuild history at every interaction.",
  },
  {
    icon: Building2,
    title: "Clinics & SCD Centers",
    description:
      "See encounters rather than journeys.",
  },
  {
    icon: Handshake,
    title: "Programs & Partners",
    description:
      "Lack visibility into continuity and outcomes.",
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
      id="context"
      className="relative px-6 py-36 md:px-10 md:py-48 lg:px-12"
      aria-labelledby="who-we-serve-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The cost of fragmentation"
          titleId="who-we-serve-heading"
          title="Every handoff loses context."
          description="Sickle cell care spans emergency departments, specialists, primary care, navigators, caregivers, and community organizations. Each transition creates another opportunity for information to disappear. The burden of continuity falls on the patient."
          className="mb-20 max-w-4xl md:mb-24"
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
