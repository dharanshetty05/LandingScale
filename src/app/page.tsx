import { ApproachSection } from "@/components/approach";
import { FAQSection } from "@/components/FAQ";
import { FinalCTASection } from "@/components/FinalCTA";
import Hero from "@/components/hero";
import { SolutionSection } from "@/components/solution";
import { ExampleWorkSection } from "@/components/work";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Hero />
      <SolutionSection />
      <ExampleWorkSection />
      <ApproachSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}