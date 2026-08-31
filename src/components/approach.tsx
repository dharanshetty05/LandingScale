"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";

interface ApproachStep {
  number: string;
  title: string;
  headline: string;
  description: string;
  outcome: string;
}

const steps: ApproachStep[] = [
  {
    number: "01",
    title: "Find",
    headline: "Show up when they're looking.",
    description:
      "Your business should be visible when local customers are already searching for the service you provide.",
    outcome: "Local visibility",
  },
  {
    number: "02",
    title: "Trust",
    headline: "Give them a reason to choose you.",
    description:
      "Once they find you, make it easy to understand what you do, see proof of your work, and feel confident getting in touch.",
    outcome: "Credibility & proof",
  },
  {
    number: "03",
    title: "Enquire",
    headline: "Make the next step obvious.",
    description:
      "When someone is ready, remove the friction between interest and action with clear, direct ways to contact you.",
    outcome: "More opportunities to convert",
  },
];

export function ApproachSection() {
  return (
    <section
      id="approach"
      className="
        relative
        overflow-hidden
        bg-[#F5F3EF]
        px-6
        py-24
        sm:py-28
        lg:py-36
      "
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Section introduction */}
        <div className="max-w-3xl">

          <h2
            className="
              max-w-3xl
              text-balance
              font-display
              text-[2.5rem]
              font-medium
              leading-[1.06]
              tracking-[-0.04em]
              text-[#19171D]
              sm:text-[3.5rem]
              lg:text-[4.25rem]
            "
          >
            Everything should lead
            <br />
            <span className="text-[#7048D8]">somewhere.</span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-balance
              text-[1rem]
              leading-[1.7]
              text-[#716C67]
              sm:text-[1.125rem]
            "
          >
            Getting found is only useful if it leads somewhere. We build the
            path from the first search to the moment a potential customer gets
            in touch.
          </p>
        </div>

        {/* Continuous journey */}
        <div className="relative mt-20 sm:mt-24 lg:mt-28">
          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[13px]
              top-4
              bottom-4
              w-px
              bg-[#D8D2C9]
              md:left-1/2
              md:top-[32px]
              md:bottom-[32px]
              md:-translate-x-1/2
            "
          />

          <div className="relative space-y-16 sm:space-y-20 lg:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={step.number}
                  className="
                    relative
                    grid
                    grid-cols-[28px_1fr]
                    gap-6
                    md:grid-cols-[1fr_64px_1fr]
                    md:gap-0
                  "
                >
                  {/* Left content */}
                  <div
                    className={`
                      hidden
                      md:block
                      ${
                        isEven
                          ? "md:col-start-3 md:pl-10"
                          : "md:col-start-1 md:pr-10 md:text-right"
                      }
                    `}
                  >
                    <div
                      className={
                        isEven
                          ? "flex flex-col items-start"
                          : "flex flex-col items-end"
                      }
                    >
                      <p
                        className="
                          text-[0.6875rem]
                          font-medium
                          uppercase
                          tracking-[0.14em]
                          text-[#8A837C]
                        "
                      >
                        {step.outcome}
                      </p>

                      <p
                        className="
                          mt-3
                          max-w-sm
                          text-sm
                          leading-[1.7]
                          text-[#716C67]
                        "
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile / desktop number */}
                  <div
                    className="
                      relative
                      z-10
                      col-start-1
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D8D2C9]
                      bg-[#F5F3EF]
                      md:col-start-2
                      md:row-start-1
                      md:mx-auto
                      md:h-16
                      md:w-16
                    "
                  >
                    <span
                      className="
                        font-mono
                        text-[0.625rem]
                        font-medium
                        tracking-[0.12em]
                        text-[#7659CF]
                        md:text-xs
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Main content */}
                  <div
                    className={`
                      col-start-2
                      md:row-start-1
                      ${
                        isEven
                          ? "md:col-start-1 md:row-start-1 md:pr-10 md:text-right"
                          : "md:col-start-3 md:pl-10"
                      }
                    `}
                  >
                    <div
                      className={`
                        ${
                          isEven
                            ? "md:flex md:flex-col md:items-end"
                            : ""
                        }
                      `}
                    >
                      <p
                        className="
                          text-[0.6875rem]
                          font-medium
                          uppercase
                          tracking-[0.14em]
                          text-[#8A837C]
                          md:hidden
                        "
                      >
                        {step.outcome}
                      </p>

                      <h3
                        className="
                          mt-3
                          font-display
                          text-[2rem]
                          font-medium
                          leading-none
                          tracking-[-0.03em]
                          text-[#19171D]
                          sm:text-[2.5rem]
                          md:mt-0
                        "
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                          mt-4
                          max-w-md
                          text-[1.05rem]
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
                          mt-4
                          max-w-md
                          text-sm
                          leading-[1.7]
                          text-[#716C67]
                          md:hidden
                        "
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div
          className="
            mt-20
            border-t
            border-[#DCD8D2]
            pt-7
            sm:mt-24
            lg:mt-28
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p
              className="
                max-w-2xl
                text-sm
                leading-[1.7]
                text-[#817A73]
                sm:text-[0.9375rem]
              "
            >
              <span className="font-medium text-[#252229]">
                The goal isn't more marketing activity.
              </span>{" "}
              It's a clearer path from being discovered to being contacted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}