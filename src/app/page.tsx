import { Navbar } from "@/components/navigation/navbar";
import { HeroSection } from "@/components/hero/hero-section";
import { WhoWeServe } from "@/components/sections/who-we-serve";
import { PlatformArchitecture } from "@/components/sections/platform-architecture";
import { ProductsSection } from "@/components/sections/products-section";
import { WhyRedCell } from "@/components/sections/why-red-cell";
import { PilotProgram } from "@/components/sections/pilot-program";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhoWeServe />
        <PlatformArchitecture />
        <ProductsSection />
        <WhyRedCell />
        <PilotProgram />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
