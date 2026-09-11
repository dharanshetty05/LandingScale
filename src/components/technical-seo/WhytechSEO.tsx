"use client";

import { motion, useReducedMotion } from "framer-motion";

const journey = ["Crawl", "Understand", "Find", "Convert"];

export default function WhytechSEO() {
    const shouldReduceMotion = useReducedMotion();

    const motionProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: {
            duration: 0.55,
            ease: "easeOut" as const,
        },
    };

  return (
    <section
      aria-labelledby="why-gbp-heading"
      className="relative overflow-hidden bg-[#F5F3EF] py-24 sm:py-28 lg:py-36"
    >
      {/* Subtle atmospheric lighting, consistent with the existing visual system */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-12rem] top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(105,76,218,0.08)_0%,rgba(105,76,218,0)_70%)] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.8fr)] lg:items-center lg:gap-24">
        <motion.div {...motionProps}>
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#6852B8]">
            Why It Matters
          </p>

          <h2
            id="why-gbp-heading"
            className="mt-5 max-w-2xl text-balance text-[2.5rem] font-medium leading-[1.08] tracking-[-0.035em] text-[#19171D] sm:text-[3.25rem] lg:text-[4rem]"
          >
            A great website needs <span className="text-[#7048D8]">a strong foundation.</span>
          </h2>
        </motion.div>

        <motion.div
          {...motionProps}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 0.55, delay: 0.08, ease: "easeOut" }
          }
          className="max-w-xl lg:justify-self-end"
        >
        <div className="border-t border-[#DCD8D2] pt-7 sm:pt-8">
            <p className="text-base font-normal leading-[1.7] text-[#716C67] sm:text-lg sm:leading-[1.7]">
                Your website may look great to a customer, but search engines see it differently.
            </p>

            <p className="mt-5 text-base font-normal leading-[1.7] text-[#716C67] sm:text-lg sm:leading-[1.7]">
                They need to crawl your pages, understand what each page is about, discover the important parts of your site, and access everything without unnecessary obstacles.
            </p>

            <p className="mt-5 text-base font-normal leading-[1.7] text-[#716C67] sm:text-lg sm:leading-[1.7]">
                Technical SEO makes sure those foundations are in place. 
            </p>
            
            <p className="mt-5 text-base font-normal leading-[1.7] text-[#716C67] sm:text-lg sm:leading-[1.7]">
                Because when your website is easier for search engines to understand, everything else you do with search has a stronger foundation.
            </p>
        </div>

        <div aria-label="The customer journey: Find, Trust, Contact" className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
            {journey.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <span className="text-sm font-medium tracking-[-0.01em] text-[#19171D]">
                  {step}
                </span>

                {index < journey.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="text-[#96908A]"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}