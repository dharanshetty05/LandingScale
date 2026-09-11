import { TechSEOFAQSection } from "@/components/technical-seo/techseo-FAQ";
import { TechSEOFinalCTASection } from "@/components/technical-seo/techseo-FinalCTA";
import TechSEOHero from "@/components/technical-seo/techseo-hero";
import TechSEOICP from "@/components/technical-seo/techseo-ICP";
import { TechSEOOptimise } from "@/components/technical-seo/techseo-optimise";
import WhytechSEO from "@/components/technical-seo/WhytechSEO";

export default function techSEOHome() {
    return (
        <>
            <main>
                <TechSEOHero />
                <WhytechSEO />
                <TechSEOOptimise />
                <TechSEOICP />
                <TechSEOFAQSection />
                <TechSEOFinalCTASection />
            </main>
        </>
    );
}