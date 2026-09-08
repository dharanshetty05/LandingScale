import { FinalCTASection } from "@/components/FinalCTA";
import ICP from "@/components/services/ICP";
import ServiceAreas from "@/components/services/ServiceAreas";
import { ServicesFAQSection } from "@/components/services/services-FAQ";
import ServicesHero from "@/components/services/services-hero";
import { SolutionSection } from "@/components/solution";

export default function ServicesHome() {
    return (
        <>
            <main className="flex min-h-screen flex-col bg-background">
                <ServicesHero />
                <ServiceAreas />
                <SolutionSection />
                <ICP />
                <ServicesFAQSection />
                <FinalCTASection />
            </main>
        </>
    );
}