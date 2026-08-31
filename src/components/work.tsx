"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function ExampleWorkSection() {
  const liveDemoUrl = "https://oakstonerenovations.vercel.app/";

  return (
    <section
      id="work"
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
      <div className="mx-auto max-w-6xl">
        {/* Section introduction */}
        <div className="max-w-3xl">
          <h2
            className="
              text-balance
              font-display
              text-[2.5rem]
              font-medium
              leading-[1.08]
              tracking-[-0.035em]
              text-[#19171D]
              sm:text-[3.25rem]
              lg:text-[4rem]
            "
          >
            Built to turn attention
            <br />
            <span className="text-[#7048D8]">into enquiries.</span>
          </h2>

          <p
            className="
              mt-6
              max-w-[720px]
              text-balance
              text-[1rem]
              leading-[1.7]
              text-[#716C67]
              sm:text-[1.125rem]
            "
          >
            A demonstration website showing how a local service business can
            turn search traffic into trust, clarity, and action.
          </p>
        </div>

        {/* Project */}
        <article className="mt-14 sm:mt-16 lg:mt-20">
          {/* Project heading */}
          <div
            className="
              flex
              flex-col
              gap-3
              border-t
              border-[#DCD8D2]
              pt-7
              sm:flex-row
              sm:items-baseline
              sm:justify-between
            "
          >
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3
                className="
                  font-display
                  text-[1.5rem]
                  font-medium
                  tracking-[-0.025em]
                  text-[#19171D]
                  sm:text-[1.75rem]
                "
              >
                Oakstone Renovations
              </h3>

              <span
                className="
                  text-[0.6875rem]
                  font-medium
                  uppercase
                  tracking-[0.14em]
                  text-[#8A837C]
                "
              >
                Demonstration project
              </span>
            </div>

            <p className="text-sm text-[#817A73]">
              Home renovation · Conversion-focused website
            </p>
          </div>

          {/* Main project layout */}
          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-8
              lg:grid-cols-[minmax(0,1fr)_260px]
              lg:gap-12
            "
          >
            {/* Website preview */}
            <div>
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  block
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#DED9D2]
                  bg-[#FCFBF9]
                  shadow-[0_14px_45px_rgba(30,25,20,0.055)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#D4CCE5]
                  hover:shadow-[0_20px_55px_rgba(30,25,20,0.08)]
                "
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/images/example.png"
                    alt="Oakstone Renovations demonstration website"
                    fill
                    sizes="(max-width: 1024px) 100vw, 75vw"
                    className="
                      object-cover
                      object-top
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-[1.01]
                    "
                  />

                  {/* Very subtle hover treatment */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[#19171D]/0
                      transition-colors
                      duration-300
                      group-hover:bg-[#19171D]/5
                    "
                  />
                </div>
              </a>

              <p
                className="
                  mt-3
                  text-xs
                  text-[#9A938B]
                "
              >
                Demonstration project, not a client site.
              </p>
            </div>

            {/* Project details */}
            <div
              className="
                flex
                flex-col
                lg:pt-1
              "
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
                The approach
              </p>

              <p
                className="
                  mt-4
                  text-[0.9375rem]
                  leading-[1.7]
                  text-[#716C67]
                "
              >
                Designed to make the service clear, establish trust quickly,
                and give visitors an obvious next step.
              </p>

              <div className="mt-7 border-t border-[#DCD8D2] pt-6">
                <p
                  className="
                    text-[0.6875rem]
                    font-medium
                    uppercase
                    tracking-[0.14em]
                    text-[#8A837C]
                  "
                >
                  Built around
                </p>

                <ul className="mt-4 space-y-3">
                  <li
                    className="
                      flex
                      items-start
                      gap-3
                      text-sm
                      leading-relaxed
                      text-[#5F5A55]
                    "
                  >
                    <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-[#8B6BE0]" />
                    Clear service positioning
                  </li>

                  <li
                    className="
                      flex
                      items-start
                      gap-3
                      text-sm
                      leading-relaxed
                      text-[#5F5A55]
                    "
                  >
                    <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-[#8B6BE0]" />
                    Local trust and proof
                  </li>

                  <li
                    className="
                      flex
                      items-start
                      gap-3
                      text-sm
                      leading-relaxed
                      text-[#5F5A55]
                    "
                  >
                    <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-[#8B6BE0]" />
                    Direct enquiry paths
                  </li>
                </ul>
              </div>

              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  mt-8
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-[#7048D8]
                  transition-colors
                  duration-200
                  hover:text-[#5E38C7]
                "
              >
                View live site

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}