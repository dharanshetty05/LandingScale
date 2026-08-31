"use client";

import { MapPin, ShieldCheck, Code2  } from "lucide-react";

interface SolutionPillar {
  number: string;
  category: string;
  title: string;
  description: string;
  context: string;
  icon: typeof MapPin;
}

const pillars: SolutionPillar[] = [
  {
    number: "01",
    category: "Google Business Profile",
    title: "Get found",
    description: "Be visible when local customers search for the service you provide.",
    context: "Local visibility",
    icon: MapPin,
  },
  {
    number: "02",
    category: "Website",
    title: "Build trust",
    description: "Turn that attention into confidence with a website that clearly shows what you do and why customers should choose you.",
    context: "Conversion & proof",
    icon: ShieldCheck,
  },
  {
    number: "03",
    category: "Technical SEO",
    title: "Strengthen the foundation",
    description: "Give search engines the structure they need to understand, crawl, and index your website properly.",
    context: "Search foundation",
    icon: Code2 ,
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="relative overflow-hidden bg-[#F5F3EF] px-6 py-24 sm:py-28 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-15%] top-[-20%] h-155 w-155 rounded-full bg-[radial-gradient(circle,rgba(105,76,218,0.09)_0%,rgba(105,76,218,0)_68%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section introduction */}
        <div className="max-w-3xl">
          <h2 className="max-w-2xl text-balance font-display text-[2.5rem] font-medium leading-[1.08] tracking-[-0.035em] text-[#19171D] sm:text-[3.25rem] lg:text-[4rem]">
            Get found. Build trust.
            <br />
            <span className="text-[#7048D8]">Get enquiries.</span>
          </h2>

          <p className="mt-6 max-w-180 text-balance text-[1rem] leading-[1.7] text-[#716C67] sm:text-[1.125rem]">
            Your online presence works best when the important pieces work together. We focus on the three things that help local customers find you, trust you, and get in touch.
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