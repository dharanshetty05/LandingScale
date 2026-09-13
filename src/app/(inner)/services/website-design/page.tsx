import type { Metadata } from "next";
import { BuildSection } from "@/components/website-design/BuildSection";
import { IndustryFitSection } from "@/components/website-design/IndustryFitSection";
import { WhyUsSection } from "@/components/website-design/WhyUsSection";
import { ProcessSection } from "@/components/website-design/ProcessSection";
import { FaqSection } from "@/components/website-design/FaqSection";
import { FinalCta } from "@/components/website-design/FinalCta";
import WebHero from "@/components/website-design/web-hero";
import WhyWeb from "@/components/website-design/WhyWeb";
import { WebOptimise } from "@/components/website-design/web-optimise";

const SITE_URL = "https://scalewithlakshya.vercel.app";
const PAGE_PATH = "/services/website-design";

export const metadata: Metadata = {
  title: "Website Design for Home-Service Businesses | ScaleWithLakshya",
  description:
    "Custom, mobile-first website design for plumbing, HVAC, electrical, and garage-door companies — built around how local customers find, trust, and contact a home-service business.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Website Design for Home-Service Businesses | ScaleWithLakshya",
    description:
      "Custom, mobile-first website design built around how local customers find, trust, and contact a home-service business.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Website Design for Home-Service Businesses",
      serviceType: "Website design",
      provider: {
        "@type": "Organization",
        name: "ScaleWithLakshya",
      },
      areaServed: "Local",
      audience: {
        "@type": "Audience",
        audienceType:
          "Home-service businesses (plumbing, HVAC, electrical, garage doors, and similar trades)",
      },
      url: `${SITE_URL}${PAGE_PATH}`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE_URL}/services/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Website Design",
          item: `${SITE_URL}${PAGE_PATH}`,
        },
      ],
    },
  ],
};

export default function WebsiteDesignPage() {
  return (
    <main>
      {/* eslint-disable-next-line @next/next/no-script-in-page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WebHero />
      <WhyWeb />
      <WebOptimise />
      <BuildSection />
      <IndustryFitSection />
      <WhyUsSection />
      <ProcessSection />
      <FaqSection />
      <FinalCta />
    </main>
  );
}
