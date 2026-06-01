"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Clock,
  FileHeart,
  FileText,
  Share2,
  type LucideIcon,
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const products: {
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  layout: string;
}[] = [
  {
    icon: FileHeart,
    name: "Emergency Passport",
    tagline: "Crisis context",
    description: "Structured context for moments of crisis.",
    layout: "lg:col-start-1 lg:row-start-1",
  },
  {
    icon: Clock,
    name: "Crisis Timeline",
    tagline: "Across time",
    description:
      "Longitudinal history across encounters and outcomes.",
    layout: "lg:col-start-2 lg:row-start-1",
  },
  {
    icon: FileText,
    name: "Visit Summary",
    tagline: "Before care begins",
    description:
      "Shared context before appointments, advocacy meetings, and care coordination touchpoints.",
    layout: "lg:col-start-3 lg:row-start-1",
  },
  {
    icon: Share2,
    name: "Partner View",
    tagline: "Consented access",
    description:
      "Consented access for navigators, community organizations, and care teams.",
    layout: "sm:col-span-2 lg:col-span-2 lg:col-start-1 lg:row-start-2",
  },
  {
    icon: Brain,
    name: "Future Intelligence",
    tagline: "Built from years",
    description:
      "Longitudinal understanding built from years, not visits.",
    layout: "lg:col-start-3 lg:row-start-2",
  },
];

function ProductTile({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  const Icon = product.icon;

  return (
    <motion.div
      className={cn("min-h-0", product.layout)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <GlassCard className="group relative flex h-full min-h-52 flex-col overflow-hidden">
        <div
          className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blood/5 transition-transform duration-700 group-hover:scale-125"
          aria-hidden
        />
        <Icon
          className="absolute right-6 top-6 h-5 w-5 text-blood"
          strokeWidth={1.25}
          aria-hidden
        />

        <div className="relative pr-10">
          <h3
            className="font-serif text-2xl font-medium text-charcoal"
            id={index === 0 ? "products-heading" : undefined}
          >
            {product.name}
          </h3>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-blood/80">
            {product.tagline}
          </p>
        </div>

        <p className="relative mt-auto pt-6 text-base leading-relaxed text-charcoal/60">
          {product.description}
        </p>
      </GlassCard>
    </motion.div>
  );
}

export function ProductsSection() {
  return (
    <section
      id="platform"
      className="relative px-6 py-36 md:px-10 md:py-48 lg:px-12"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The platform"
          title="Infrastructure for longitudinal care."
          description="We are building systems that preserve, organize, and surface patient context across the care journey. Beginning with sickle cell disease. Expanding wherever continuity matters."
          className="mb-20 max-w-4xl md:mb-24"
        />

        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-5">
          {products.map((product, index) => (
            <ProductTile key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
