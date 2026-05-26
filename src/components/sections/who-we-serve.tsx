"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Building2,
  HandCoins,
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const audiences = [
  {
    icon: Heart,
    title: "Patients",
    description:
      "Repeating complex histories during crisis. Facing treatment delays because no one has the full picture. Carrying the cognitive burden that systems should hold.",
  },
  {
    icon: Users,
    title: "Navigators & CBOs",
    description:
      "Rebuilding patient history at every interaction. No continuity between touchpoints. Supporting patients without seeing what happened since last contact.",
  },
  {
    icon: Building2,
    title: "Clinics & SCD Centers",
    description:
      "Seeing isolated visits instead of full patient journeys. Limited visibility into crises, ER encounters, and community support that happen between appointments.",
  },
  {
    icon: HandCoins,
    title: "Payers & Partners",
    description:
      "Unable to measure continuity or outcomes because context is fragmented across providers, organizations, and time.",
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
      className="relative px-6 py-28 md:px-10 md:py-36 lg:px-12"
      aria-labelledby="who-we-serve-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Where context breaks"
          titleId="who-we-serve-heading"
          title="Everyone loses when patient memory is fragmented"
          description="Sickle cell care involves dozens of touchpoints — ER, hematology, primary care, community organizations, navigators, payers. Context disappears at every handoff."
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
