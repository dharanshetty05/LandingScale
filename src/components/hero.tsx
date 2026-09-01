"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * TODO: Point this at the project's existing centralized booking URL/config
 * (e.g. an env var or shared siteConfig.bookingUrl).
 */
const BOOKING_URL = "https://cal.com/scalewithlakshya/strategy-call";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 10,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

    const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 10,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

    // Precision draw animation for the "easier to find" emphasis line
  const underlineVariants: Variants = {
    hidden: {
      pathLength: shouldReduceMotion ? 1 : 0,
      opacity: shouldReduceMotion ? 1 : 0,
    },
    show: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: shouldReduceMotion ? 0 : 0.75,
          ease: [0.16, 1, 0.3, 1],
          delay: shouldReduceMotion ? 0 : 0.55,
        },
        opacity: {
          duration: shouldReduceMotion ? 0 : 0.2,
          delay: shouldReduceMotion ? 0 : 0.45,
        },
      },
    },
  };

  return (
    <section
      className="relative isolate flex min-h-[92svh] items-center justify-center overflow-hidden bg-[#FAF9F7] px-6 py-24 sm:py-28 lg:min-h-[94svh] lg:py-32"
      aria-label="Introduction"
    >
      {/* Subtle atmospheric background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Soft purple light from the upper-right */}
        <div
          className="
            absolute
            -right-[20%]
            -top-[25%]
            h-[70%]
            w-[70%]
            rounded-full
            bg-[radial-gradient(circle,rgba(105,76,218,0.12)_0%,rgba(105,76,218,0.05)_32%,rgba(105,76,218,0)_70%)]
            blur-3xl
          "
        />

        {/* Very subtle secondary violet atmosphere */}
        <div
          className="
            absolute
            -left-[25%]
            bottom-[5%]
            h-[45%]
            w-[50%]
            rounded-full
            bg-[radial-gradient(circle,rgba(139,112,235,0.055)_0%,rgba(139,112,235,0)_70%)]
            blur-3xl
          "
        />

        {/* Gentle center light to keep the composition open */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(ellipse_75%_65%_at_50%_42%,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0)_65%)]
          "
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-[820px] flex-col items-center text-center"
      >
        {/* Positioning eyebrow */}
        <motion.div
          variants={item}
          className="
            mb-7
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#E8E3DF]
            bg-white/70
            px-3.5
            py-1.5
            text-[0.6875rem]
            font-medium
            uppercase
            tracking-[0.16em]
            text-[#6852B8]
            shadow-[0_1px_2px_rgba(20,16,35,0.03)]
            backdrop-blur-sm
            sm:mb-8
          "
        >
          Local growth · Web · SEO
        </motion.div>

        {/* Main headline */}
                <motion.h1
          id="hero-headline"
          variants={itemVariants}
          className="
            font-display
            text-[2.5rem]
            font-medium
            leading-[1.1]
            tracking-[-0.03em]
            text-[#18161D]
            text-balance
            sm:text-[3.25rem]
            md:text-[3.875rem]
            lg:text-[4.25rem]
            lg:leading-[1.06]
          "
        >
          Your business should be{" "}
          <span className="relative inline-block whitespace-nowrap">
            <span className="relative z-10">easier to find</span>
            {/* Subtle discovery accent stroke drawing under "easier to find" */}
            <svg
              aria-hidden="true"
              viewBox="0 0 240 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="
                pointer-events-none
                absolute
                -bottom-1.5
                left-0
                w-full
                overflow-visible
                text-[#6245D6]
                sm:-bottom-2
              "
            >
              <motion.path
                d="M 2 8 C 65 3, 175 3, 238 7"
                stroke="currentColor"
                strokeWidth="2.75"
                strokeLinecap="round"
                variants={underlineVariants}
              />
            </svg>
          </span>{" "}
          online.
        </motion.h1>

        {/* Supporting statement */}
        <motion.p
          variants={itemVariants}
          className="
            mt-7
            max-w-[570px]
            text-balance
            text-[1rem]
            leading-[1.7]
            text-[#6F6A65]
            sm:mt-8
            sm:text-[1.125rem]
            sm:leading-[1.65]
          "
        >
          A stronger Google presence, a better website, and the technical
          foundation to bring them together.
        </motion.p>

        {/* Primary CTA */}
        <motion.a
          variants={itemVariants}
          href={BOOKING_URL}
          className="
            group
            mt-9
            inline-flex
            items-center
            justify-center
            gap-2.5
            rounded-[9px]
            bg-[#6245D6]
            px-6
            py-3.5
            text-[0.9375rem]
            font-medium
            text-white
            shadow-[0_8px_24px_-10px_rgba(98,69,214,0.55)]
            transition-all
            duration-300
            ease-out
            hover:-translate-y-0.5
            hover:bg-[#573AC9]
            hover:shadow-[0_12px_30px_-10px_rgba(98,69,214,0.65)]
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-[#8068E3]
            sm:mt-10
          "
        >
          Book a Strategy Call
          <ArrowRight
            aria-hidden="true"
            className="
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:translate-x-0.5
            "
          />
        </motion.a>

        {/* Low-pressure reassurance */}
        <motion.p
          variants={item}
          className="mt-3 text-[0.75rem] text-[#96908A]"
        >
          A focused conversation about where your online presence can improve.
        </motion.p>
      </motion.div>

      {/* Subtle transition into the next section */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-px
          w-[min(760px,70%)]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#E5E0F0]
          to-transparent
        "
      />
    </section>
  );
}
