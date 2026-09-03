"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function ExampleWorkSection() {
  const liveDemoUrl = "https://oakstonerenovations.vercel.app/";
  const [videoError, setVideoError] = useState(false);

  return (
    <section
      id="work"
      className="
        relative
        overflow-hidden
        bg-[#F5F3EF]
        px-6
        py-6
        sm:py-8
        lg:py-12
      "
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-[36%_64%]
            lg:items-center
            lg:gap-0
          "
        >
          {/* Project information */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 lg:order-1 lg:pr-10"
          >
            <h2
              className="
                max-w-2xl
                text-balance
                font-display
                text-[2.5rem]
                font-medium
                leading-[1.08]
                tracking-[-0.035em]
                text-[#19171D]
                sm:text-[3.25rem]
              "
            >
              Designed to turn attention
              <br />
              into <span className="text-[#7048D8]">enquiries.</span>
            </h2>

            <p
              className="
                mt-6
                max-w-[380px]
                text-balance
                text-[1rem]
                leading-[1.7]
                text-[#716C67]
                sm:text-[1.0625rem]
              "
            >
              Oakstone Renovations is a concept website designed to turn local
              search traffic into trust, and trust into booked estimates.
            </p>

            <p className="mt-5 text-sm text-[#8A837C]">
              Website design · Lead conversion
            </p>

            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                mt-7
                inline-flex
                w-fit
                items-center
                gap-1.5
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
                  h-3.5
                  w-3.5
                  transition-transform
                  duration-200
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </motion.div>

          {/* Website video / fallback */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.12,
            }}
            className="
              order-2
              lg:order-2
              lg:border-l
              lg:border-[#DCD8D2]
              lg:pl-10
            "
          >
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                block
                overflow-hidden
                rounded-2xl
                border
                border-[#DED9D2]
                bg-[#FCFBF9]
                p-2
                shadow-[0_20px_55px_rgba(30,25,20,0.08)]
                transition-shadow
                duration-300
                hover:shadow-[0_24px_65px_rgba(30,25,20,0.11)]
                sm:p-2.5
              "
            >
              <div
                className="
                  relative
                  aspect-video
                  w-full
                  overflow-hidden
                  rounded-xl
                  bg-[#F0EEEA]
                "
              >
                {!videoError ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/images/example.png"
                    onError={() => setVideoError(true)}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-contain
                      object-center
                    "
                  >
                    <source
                      src="/videos/oakstone.mp4"
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <Image
                    src="/images/example.png"
                    alt="Oakstone Renovations website hero section"
                    fill
                    sizes="(max-width: 1024px) 100vw, 64vw"
                    className="object-contain object-center"
                    priority
                  />
                )}
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}