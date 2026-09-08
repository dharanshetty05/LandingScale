"use client";

import { useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Globe2, MapPin, Search } from "lucide-react";

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
    href: "#google-business-profile",
    visual: "profile",
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
    visual: "website",
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
    visual: "seo",
  },
] as const;

function ServiceVisual({
  type,
}: {
  type: (typeof services)[number]["visual"];
}) {
  if (type === "profile") {
    return (
      <div
        aria-hidden="true"
        className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-[#E2DED7] bg-[#FCFBF9] p-5 shadow-[0_8px_30px_rgba(30,25,20,0.035)] sm:p-7"
      >
        <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(112,72,216,0.10)_0%,rgba(112,72,216,0)_70%)] blur-2xl" />

        <div className="relative h-full rounded-xl border border-[#E8E3DF] bg-[#FAF9F7] p-4 sm:p-5">
          <div className="flex items-center gap-3 border-b border-[#E8E3DF] pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7048D8]/10">
              <MapPin className="h-5 w-5 text-[#7659CF]" strokeWidth={1.8} />
            </div>

            <div className="min-w-0">
              <div className="h-2.5 w-28 rounded-full bg-[#19171D]/10" />
              <div className="mt-2 h-2 w-20 rounded-full bg-[#19171D]/5" />
            </div>

            <div className="ml-auto flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className="text-[10px] text-[#7048D8]"
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <div className="h-2.5 w-4/5 rounded-full bg-[#19171D]/10" />
            <div className="h-2 w-3/5 rounded-full bg-[#19171D]/5" />
            <div className="h-2 w-2/5 rounded-full bg-[#19171D]/5" />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-[#E8E3DF] bg-white/60 p-3">
              <div className="h-2 w-12 rounded-full bg-[#19171D]/10" />
              <div className="mt-2 h-2 w-20 rounded-full bg-[#19171D]/5" />
            </div>

            <div className="rounded-lg border border-[#E8E3DF] bg-white/60 p-3">
              <div className="h-2 w-14 rounded-full bg-[#19171D]/10" />
              <div className="mt-2 h-2 w-16 rounded-full bg-[#19171D]/5" />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-lg border border-[#D7D0E8] bg-[#7048D8]/[0.035] px-3 py-2.5">
            <div className="h-2 w-24 rounded-full bg-[#7048D8]/20" />
            <div className="h-2 w-8 rounded-full bg-[#7048D8]/30" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "website") {
    return (
      <div
        aria-hidden="true"
        className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-[#E2DED7] bg-[#FCFBF9] p-4 shadow-[0_8px_30px_rgba(30,25,20,0.035)] sm:p-6"
      >
        <div className="absolute -bottom-24 -left-20 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(112,72,216,0.08)_0%,rgba(112,72,216,0)_70%)] blur-2xl" />

        <div className="relative h-full overflow-hidden rounded-xl border border-[#E8E3DF] bg-[#FAF9F7]">
          <div className="flex h-9 items-center gap-1.5 border-b border-[#E8E3DF] px-3">
            <span className="h-2 w-2 rounded-full bg-[#19171D]/10" />
            <span className="h-2 w-2 rounded-full bg-[#19171D]/10" />
            <span className="h-2 w-2 rounded-full bg-[#19171D]/10" />

            <div className="mx-auto h-5 w-2/5 rounded-full border border-[#E8E3DF] bg-white/60" />
          </div>

          <div className="p-5 sm:p-7">
            <div className="flex items-center justify-between">
              <div className="h-3 w-24 rounded-full bg-[#19171D]/15" />

              <div className="hidden gap-4 sm:flex">
                <span className="h-2 w-8 rounded-full bg-[#19171D]/5" />
                <span className="h-2 w-8 rounded-full bg-[#19171D]/5" />
                <span className="h-2 w-8 rounded-full bg-[#19171D]/5" />
              </div>
            </div>

            <div className="mt-10 max-w-xs">
              <div className="h-4 w-full rounded-full bg-[#19171D]/15" />
              <div className="mt-2 h-4 w-4/5 rounded-full bg-[#19171D]/10" />

              <div className="mt-5 h-2.5 w-full rounded-full bg-[#19171D]/5" />
              <div className="mt-2 h-2.5 w-4/5 rounded-full bg-[#19171D]/5" />

              <div className="mt-6 h-9 w-28 rounded-full bg-[#7048D8]" />
            </div>

            <div className="mt-10 grid grid-cols-3 gap-2">
              <div className="h-14 rounded-lg border border-[#E8E3DF] bg-white/60" />
              <div className="h-14 rounded-lg border border-[#E8E3DF] bg-white/60" />
              <div className="h-14 rounded-lg border border-[#E8E3DF] bg-white/60" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-[#E2DED7] bg-[#FCFBF9] p-5 shadow-[0_8px_30px_rgba(30,25,20,0.035)] sm:p-7"
    >
      <div className="absolute -right-16 -bottom-20 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(112,72,216,0.09)_0%,rgba(112,72,216,0)_70%)] blur-2xl" />

      <div className="relative flex h-full items-center justify-center">
        <div className="relative flex h-[78%] w-[78%] items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-[#E2DED7]" />
          <div className="absolute inset-[15%] rounded-full border border-[#E8E3DF]" />
          <div className="absolute inset-[30%] rounded-full border border-[#D7D0E8]" />

          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D7D0E8] bg-[#7048D8]/[0.06]">
            <Search className="h-6 w-6 text-[#7659CF]" strokeWidth={1.7} />
          </div>

          <div className="absolute left-[7%] top-[18%] flex h-9 w-9 items-center justify-center rounded-full border border-[#E2DED7] bg-[#FAF9F7]">
            <Globe2 className="h-4 w-4 text-[#7659CF]" strokeWidth={1.7} />
          </div>

          <div className="absolute right-[3%] top-[32%] h-8 w-8 rounded-full border border-[#E2DED7] bg-[#FAF9F7]" />

          <div className="absolute bottom-[10%] left-[18%] h-7 w-7 rounded-full border border-[#E2DED7] bg-[#FAF9F7]" />

          <div className="absolute bottom-[20%] right-[15%] h-10 w-10 rounded-full border border-[#E2DED7] bg-[#FAF9F7]" />
        </div>
      </div>
    </div>
  );
}

export default function ServiceAreas() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="service-areas-heading"
      className="relative overflow-hidden bg-[#FAF9F7] py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6852B8]">
            WHAT YOU GET
          </p>

          <h2
            id="service-areas-heading"
            className="mt-5 text-balance font-display text-[2.5rem] font-medium leading-[1.08] tracking-[-0.035em] text-[#19171D] sm:text-[3.25rem] lg:text-[4rem]"
          >
            Everything your online presence needs to turn local searches into
            enquiries.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.7] text-[#716C67] sm:text-lg">
            Three core areas designed to help customers find you, trust you,
            and contact you.
          </p>
        </header>

        <div className="mt-20 sm:mt-24 lg:mt-32">
          {services.map((service, index) => {
            const textFirst = index % 2 === 0;

            return (
              <article
                key={service.number}
                id={service.href.slice(1)}
                className={[
                  "border-t border-[#E2DED7] py-16 sm:py-20 lg:py-24",
                  index === services.length - 1
                    ? "border-b"
                    : "",
                ].join(" ")}
              >
                <div
                  className={[
                    "grid items-center gap-12 lg:grid-cols-2 lg:gap-20",
                    !textFirst ? "lg:[&>*:first-child]:order-2" : "",
                  ].join(" ")}
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs tracking-[0.12em] text-[#96908A]">
                        {service.number}
                      </span>

                      <span className="h-px w-8 bg-[#DCD8D2]" />

                      <span className="text-[11px] font-medium tracking-[0.16em] text-[#6852B8]">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="mt-7 max-w-xl font-display text-[1.75rem] font-medium leading-[1.12] tracking-[-0.025em] text-[#19171D] sm:text-3xl">
                      {service.headline}
                    </h3>

                    <p className="mt-5 max-w-xl text-base leading-[1.7] text-[#716C67]">
                      {service.description}
                    </p>

                    <div className="mt-8">
                      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#96908A]">
                        FOUNDATION INCLUDES
                      </p>

                      <ul className="mt-4 grid max-w-xl gap-x-8 gap-y-3 sm:grid-cols-2">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="flex min-w-0 items-start gap-2.5 text-sm leading-6 text-[#716C67]"
                          >
                            <Check
                              aria-hidden="true"
                              className="mt-1 h-3.5 w-3.5 shrink-0 text-[#7659CF]"
                              strokeWidth={2}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={service.href}
                      aria-label={service.cta}
                      className="group mt-9 inline-flex items-center gap-2 text-sm font-medium text-[#6245D6] transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <span>{service.cta}</span>

                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  </div>

                  <div
                    className={
                      shouldReduceMotion
                        ? undefined
                        : "transition-transform duration-700 ease-out hover:scale-[1.01]"
                    }
                  >
                    <ServiceVisual type={service.visual} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}