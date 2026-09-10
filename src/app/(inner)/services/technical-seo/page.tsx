import TechSEOHero from "@/components/technical-seo/techseo-hero";
import { TechSEOOptimise } from "@/components/technical-seo/techseo-optimise";
import WhytechSEO from "@/components/technical-seo/WhytechSEO";

export default function techSEOHome() {
    return (
        <>
            <main>
                <TechSEOHero />
                <WhytechSEO /> 
                <TechSEOOptimise />
            </main>
        </>
    );
}