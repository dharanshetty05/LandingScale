import { ApproachSection } from "@/components/approach";
import { FAQSection } from "@/components/FAQ";
import { FinalCTASection } from "@/components/FinalCTA";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import { Navbar } from "@/components/Navbar";
import { StructuredData } from "@/components/seo/structured-data";
import { SolutionSection } from "@/components/solution";
import { ExampleWorkSection } from "@/components/work";

export default function Home() {
  return (
    <>
    <StructuredData />
    
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <SolutionSection />
      <ExampleWorkSection />
      <ApproachSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
    </>
  );
}