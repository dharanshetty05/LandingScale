import { ApproachSection } from "@/components/homepage/approach";
import { FAQSection } from "@/components/homepage/FAQ";
import { FinalCTASection } from "@/components/homepage/FinalCTA";
import { Footer } from "@/components/homepage/footer";
import Hero from "@/components/homepage/hero";
import Marquee from "@/components/homepage/marquee";
import { Navbar } from "@/components/homepage/Navbar";
import { StructuredData } from "@/components/seo/structured-data";
import { SolutionSection } from "@/components/homepage/solution";
import { ExampleWorkSection } from "@/components/homepage/work";

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