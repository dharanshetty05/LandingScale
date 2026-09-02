"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

interface ApproachStep {
  number: string;
  title: string;
  headline: string;
  description: string;
}

const steps: ApproachStep[] = [
  {
    number: "01",
    title: "Find",
    headline: "Show up when they're looking.",
    description:
      "Your business should be visible when local customers are already searching for the service you provide.",
  },
  {
    number: "02",
    title: "Trust",
    headline: "Give them a reason to choose you.",
    description:
      "Once they find you, make it easy to understand what you do, see proof of your work, and feel confident getting in touch.",
  },
  {
    number: "03",
    title: "Enquire",
    headline: "Make the next step obvious.",
    description:
      "When someone is ready, remove the friction between interest and action with clear, direct ways to contact you.",
  },
];

const stepVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function ApproachSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="approach"
      className="bg-[#F5F3EF] px-6 py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-y-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-x-20">
          {/* Intro */}
          <div className="lg:sticky lg:top-32 lg:self-start">

            <h2
              className="
                max-w-md
    text-balance
    font-display
    text-[2.5rem]
    font-medium
    leading-[1.06]
    tracking-[-0.04em]
    text-[#19171D]
    sm:text-[3rem]
    lg:text-[3.5rem]
              "
            >
              Everything should lead
              <span className="text-[#7048D8]"> somewhere.</span>
            </h2>

            <p
              className="
                mt-7
    max-w-md
    text-balance
    text-[1rem]
    leading-[1.7]
    text-[#716C67]
    sm:text-[1.0625rem]

              "
            >
              Getting found is only useful if it leads somewhere. We build
              the path from the first search to the moment a potential
              customer gets in touch.
            </p>
          </div>

          {/* Steps */}
          <ol className="flex flex-col">
            {steps.map((step, index) => (
              <motion.li
                key={step.number}
                custom={index}
                initial={prefersReducedMotion ? undefined : "hidden"}
                whileInView={prefersReducedMotion ? undefined : "visible"}
                viewport={{ once: true, amount: 0.25 }}
                variants={stepVariants}
                className={`
                  py-8
                  sm:py-9
                  ${
                    index > 0
                      ? "border-t border-[#DCD8D2]"
                      : ""
                  }
                `}
              >
                <div className="grid grid-cols-[40px_minmax(0,1fr)] gap-5 sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-6">
                  {/* Step number */}
                  <span
                    aria-hidden="true"
                    className="
                      pt-1
                      font-mono
                      text-xs
                      font-medium
                      tracking-[0.12em]
                      text-[#7659CF]
                    "
                  >
                    {step.number}
                  </span>

                  {/* Step content */}
                  <div>
                    <h3
                      className="
                        font-display
                        text-[1.875rem]
                        font-medium
                        leading-none
                        tracking-[-0.035em]
                        text-[#19171D]
                        sm:text-[2.25rem]
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-lg
                        text-[1.0625rem]
                        font-medium
                        leading-[1.5]
                        text-[#302C32]
                        sm:text-[1.125rem]
                      "
                    >
                      {step.headline}
                    </p>

                    <p
                      className="
                        mt-3
                        max-w-md
                        text-sm
                        leading-[1.75]
                        text-[#716C67]
                        sm:text-[0.9375rem]
                      "
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}