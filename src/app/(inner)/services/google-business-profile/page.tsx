import { GBPFAQSection } from "@/components/google-business-profile/gbp-FAQ";
import { GBPFinalCTASection } from "@/components/google-business-profile/gbp-FinalCTA";
import GBPHero from "@/components/google-business-profile/gbp-hero";
import GBPICP from "@/components/google-business-profile/gbp-ICP";
import { OptimiseSection } from "@/components/google-business-profile/optimise";
import WhyGBP from "@/components/google-business-profile/WhyGBP";

export default function GBP() {
    return (
        <>
            <main>
                <GBPHero />
                <WhyGBP />
                <OptimiseSection />
                <GBPICP />
                <GBPFAQSection />
                <GBPFinalCTASection />
            </main>
        </>
    )
}