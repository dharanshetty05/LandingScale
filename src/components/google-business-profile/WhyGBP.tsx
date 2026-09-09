"use client";

import { motion, useReducedMotion } from "framer-motion";

const journey = ["Find", "Trust", "Contact"];

export default function WhyGBP() {
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
            Showing up is only the <span className="text-[#7048D8]">beginning.</span>
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
                When someone searches for a local plumber, electrician, HVAC company, or other home-service business, your Google Business Profile can be one of the first places they see you.
            </p>

            <p className="mt-5 text-base font-normal leading-[1.7] text-[#716C67] sm:text-lg sm:leading-[1.7]">
                Customers need to quickly understand what you do, where you serve, and how to take the next step.
            </p>

            <p className="mt-5 text-base font-normal leading-[1.7] text-[#716C67] sm:text-lg sm:leading-[1.7]">
                A complete, well-connected profile gives customers clearer information and creates a smoother path from local search to your website and, ultimately, to an enquiry.
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