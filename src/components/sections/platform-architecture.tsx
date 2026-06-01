import { SectionHeading } from "@/components/ui/section-heading";
import { CellMotif } from "@/components/ui/cell-motif";

export function PlatformArchitecture() {
  return (
    <section
      id="thesis"
      className="relative overflow-hidden px-6 py-36 md:px-10 md:py-48 lg:px-12"
      aria-labelledby="thesis-heading"
    >
      <CellMotif className="pointer-events-none absolute -right-20 top-20 h-80 w-80 text-blood/10" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our thesis"
          titleId="thesis-heading"
          title="Health is longitudinal. Healthcare is episodic."
          className="max-w-5xl"
        />

        <div className="mt-16 max-w-3xl space-y-6 text-xl leading-relaxed text-charcoal/65 md:text-2xl">
          <p>Chronic disease unfolds continuously.</p>
          <p>
            Healthcare is organized around encounters. Visits. Admissions.
            Appointments. Discharges.
          </p>
          <p>
            The information that matters most often lives between them. Red Cell
            Systems exists to preserve that missing continuity.
          </p>
        </div>
      </div>
    </section>
  );
}
