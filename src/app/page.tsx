import { Navbar } from "@/components/navigation/navbar";
import { HeroSection } from "@/components/hero/hero-section";
import { PlatformArchitecture } from "@/components/sections/platform-architecture";
import { MissionSection } from "@/components/sections/mission-section";
import { ProductsSection } from "@/components/sections/products-section";
import { WhoWeServe } from "@/components/sections/who-we-serve";
import { VisionSection } from "@/components/sections/vision-section";
import { WhyRedCell } from "@/components/sections/why-red-cell";
import { TrustSection } from "@/components/sections/trust-section";
import { PilotProgram } from "@/components/sections/pilot-program";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PlatformArchitecture />
        <MissionSection />
        <ProductsSection />
        <WhoWeServe />
        <VisionSection />
        <WhyRedCell />
        <TrustSection />
        <PilotProgram />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
