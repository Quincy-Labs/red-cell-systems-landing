import { CellMotif } from "@/components/ui/cell-motif";
import { SectionHeading } from "@/components/ui/section-heading";

export function MissionSection() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden border-y border-warm-gray/80 bg-warm-gray/25 px-6 py-36 md:px-10 md:py-48 lg:px-12"
      aria-labelledby="mission-heading"
    >
      <CellMotif className="pointer-events-none absolute left-0 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 text-blood/10" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our mission"
          titleId="mission-heading"
          title="Continuity should not depend on memory."
          className="max-w-5xl"
        />

        <div className="mt-16 max-w-3xl space-y-6 text-xl leading-relaxed text-charcoal/65 md:text-2xl">
          <p>
            Patients should not have to reconstruct years of medical history
            during moments of crisis.
          </p>
          <p>Care teams should not operate without context.</p>
          <p>Organizations should not lose visibility at every handoff.</p>
          <p className="pt-4 font-serif text-3xl font-light leading-snug text-charcoal md:text-4xl">
            We believe continuity is infrastructure. And infrastructure matters.
          </p>
        </div>
      </div>
    </section>
  );
}
