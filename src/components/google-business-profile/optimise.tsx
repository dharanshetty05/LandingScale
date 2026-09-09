"use client";

import { MapPin, ShieldCheck, Code2  } from "lucide-react";

interface OptimisePillar {
  number: string;
  category: string;
  title: string;
  description: string;
  context: string;
  icon: typeof MapPin;
}

const pillars: OptimisePillar[] = [
  {
    number: "01",
    category: "Categories & Services",
    title: " Categories & Services",
    description: "We review your business categories and services to make sure they accurately reflect what you actually offer.",
    context: "Local visibility",
    icon: MapPin,
  },
  {
    number: "02",
    category: "Business Information",
    title: "Business Information",
    description: "We complete and refine the essential information customers need when evaluating your business.",
    context: "Conversion & proof",
    icon: ShieldCheck,
  },
  {
    number: "03",
    category: "Website Linkage",
    title: "Website Linkage",
    description: "We connect your Google Business Profile to the appropriate website destination, giving customers a clear path to learn more.",
    context: "Search foundation",
    icon: Code2 ,
  },
  {
    number: "04",
    category: "Basic Optimisation",
    title: "Basic Optimisation",
    description: "We review the profile as a whole and address the foundational gaps that fall within the project scope.",
    context: "Search foundation",
    icon: Code2 ,
  },
];

export function OptimiseSection() {
  return (
    <section id="services" className="scroll-mt-24 relative overflow-hidden bg-[#F5F3EF] px-6 py-24 sm:py-28 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-15%] top-[-20%] h-155 w-155 rounded-full bg-[radial-gradient(circle,rgba(105,76,218,0.09)_0%,rgba(105,76,218,0)_68%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section introduction */}
        <div className="max-w-10xl">
          <h2 className="max-w-7xl text-balance font-display text-[2.5rem] font-medium leading-[1.08] tracking-[-0.035em] text-[#19171D] sm:text-[3.25rem] lg:text-[4rem]">
            A practical
            <span className="text-[#7048D8]"> Google Business Profile </span>
            foundation.
          </h2>

          <p className="mt-6 max-w-180 text-balance text-[1rem] leading-[1.7] text-[#716C67] sm:text-[1.125rem]">
            We focus on the foundational elements that help your Google presence accurately represent your business and connect with the rest of your online presence.
          </p>
        </div>

        {/* Solution pillars */}
        <div className="mt-10 lg:mt-12">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.number}
                  className="group relative rounded-2xl border border-[#E2DED7] bg-[#FCFBF9] p-7 shadow-[0_8px_30px_rgba(30,25,20,0.035)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D7D0E8] hover:shadow-[0_12px_35px_rgba(30,25,20,0.055)] sm:p-8"
                >
                  {/* Number + icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.6875rem] font-medium tracking-[0.18em] text-[#9A938B]">
                      {pillar.number}
                    </span>

                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5 text-[#7659CF] transition-transform duration-300 group-hover:translate-x-0.5
                      strokeWidth={1.7}"
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-8">
                    <p className="text-[0.8125rem] font-medium text-[#7659CF]">{pillar.category}</p>
                    <h3 className="mt-2 text-[1.75rem] font-medium leading-tight tracking-tight text-[#19171D]">{pillar.title}</h3>
                    <p className="mt-4 max-w-sm text-[0.9375rem] leading-[1.7] text-[#77716B]">{pillar.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-5 border-t border-[#DCD8D2] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-[#817A73]">
            <span className="font-medium text-[#252229]">
              Three connected pieces.
            </span>{" "}
            A stronger presence in search, a website that earns trust, and a
            technical foundation that supports both.
          </p>
        </div>
      </div>
    </section>
  );
}