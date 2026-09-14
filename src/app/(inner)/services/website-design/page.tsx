import type { Metadata } from "next";
import WebHero from "@/components/website-design/web-hero";
import WhyWeb from "@/components/website-design/WhyWeb";
import { WebOptimise } from "@/components/website-design/web-optimise";
import { WebFinalCTASection } from "@/components/website-design/web-FinalCTA";
import { WebFAQSection } from "@/components/website-design/web-FAQ";
import WebICP from "@/components/website-design/web-ICP";
import WebLook from "@/components/website-design/web-look";
import { WebWorkSection } from "@/components/website-design/web-work";

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
      <WebWorkSection />
      <WebICP />
      <WebFAQSection />
      <WebFinalCTASection />
    </main>
  );
}
