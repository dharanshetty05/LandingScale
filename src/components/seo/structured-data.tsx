const siteUrl = "https://scalewithlakshya.vercel.app";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "ScaleWithLakshya",
      url: siteUrl,
      description:
        "ScaleWithLakshya helps home service businesses improve their Google presence, websites, and technical SEO to turn online attention into enquiries.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "ScaleWithLakshya",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#google-business-profile`,
      name: "Google Business Profile",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Improve your Google presence so your business is easier for local customers to find when they are searching for the services you provide.",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Home service businesses",
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#websites`,
      name: "Conversion-Focused Websites",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Build or improve a website that makes it easier for potential customers to understand your business, trust your work, and take the next step.",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Home service businesses",
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#technical-seo`,
      name: "Technical SEO",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Strengthen the technical foundation that helps search engines understand and discover your website.",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Home service businesses",
      },
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}