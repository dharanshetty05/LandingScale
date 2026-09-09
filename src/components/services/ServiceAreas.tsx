"use client";

import { ArrowRight, Check } from "lucide-react";

const services = [
  {
    number: "01",
    category: "GOOGLE BUSINESS PROFILE",
    headline: "Get found where customers are searching.",
    description:
      "A complete, accurate Google Business Profile gives potential customers the information they need when they discover your business through Google and Maps.",
    items: [
      "Categories & services reviewed",
      "Business information completed",
      "Website linkage",
      "Basic profile optimization",
    ],
    cta: "Explore Google Business Profile",
    href: "/services/google-business-profile",
  },
  {
    number: "02",
    category: "WEBSITE",
    headline: "A website built to turn attention into action.",
    description:
      "A custom, mobile-first website gives potential customers a clear understanding of your services, proof they can trust, and an easy path to get in touch.",
    items: [
      "Custom mobile-first website",
      "7–9 core pages",
      "3 priority service pages",
      "Reviews & proof integration",
      "Tap-to-call actions",
      "Clear enquiry paths",
      "Quote/contact form",
    ],
    cta: "Explore Website Design",
    href: "/services/website-design",
  },
  {
    number: "03",
    category: "TECHNICAL SEO",
    headline: "A stronger technical foundation for search.",
    description:
      "The technical essentials are put in place so your website can be properly crawled, understood, indexed, and used across devices.",
    items: [
      "Indexability check",
      "Sitemap",
      "Page titles & descriptions",
      "Redirects when needed",
      "Image optimization",
      "Local schema",
      "Mobile & speed checks",
    ],
    cta: "Explore Technical SEO",
    href: "#technical-seo",
  },
];

export default function ServiceAreas() {
  return (
    <section
      aria-labelledby="service-areas-heading"
      className="bg-[#F5F3EF] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section heading */}
        <header>
          <h2 id="service-areas-heading" className="max-w-2xl text-balance font-display text-[2.5rem] font-medium leading-[1.08] tracking-[-0.035em] text-[#19171D] sm:text-[3.25rem] lg:text-[4rem]">
            What You 
            <span className="text-[#7048D8]"> Get</span>
          </h2>
        </header>

        {/* Service cards */}
        <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              id={service.href.slice(1)}
              className="group flex h-full flex-col rounded-2xl border border-[#E2DED7] bg-[#FCFBF9] p-7 shadow-[0_8px_30px_rgba(30,25,20,0.035)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D7D0E8] hover:shadow-[0_12px_35px_rgba(30,25,20,0.055)] sm:p-8"
            >
              {/* Card header */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.12em] text-[#96908A]">
                  {service.number}
                </span>

                <span className="text-[10px] font-medium tracking-[0.16em] text-[#6852B8]">
                  {service.category}
                </span>
              </div>

              {/* Main content */}
              <div className="mt-10">
                <h3 className="font-display text-[1.7rem] font-medium leading-[1.12] tracking-[-0.025em] text-[#19171D]">
                  {service.headline}
                </h3>

                <p className="mt-5 text-[15px] leading-[1.7] text-[#716C67]">
                  {service.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="mt-8 border-t border-[#E8E3DF] pt-7">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#96908A]">
                  FOUNDATION INCLUDES
                </p>

                <ul className="mt-4 space-y-2.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[14px] leading-5 text-[#716C67]"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#7659CF]"
                        strokeWidth={2}
                      />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href={service.href}
                className="group/link mt-auto flex items-center gap-2 pt-8 text-sm font-medium text-[#6245D6] transition-all duration-300 hover:-translate-y-0.5"
                aria-label={service.cta}
              >
                <span>{service.cta}</span>

                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}