"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export function FinalCTASection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.01 : 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="book"
      className="
        relative
        overflow-hidden
        bg-[#F5F3EF]
        px-6
        py-28
        sm:py-32
        lg:py-40
      "
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <motion.div
          className="absolute left-1/2 top-1/2 h-105 w-180 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <motion.div
            className="h-full w-full rounded-full bg-purple-300/10 blur-[140px]"
            animate={
              shouldReduceMotion ? undefined : { x: [0, 26, 0], y: [0, 14, 0] }
            }
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          className="absolute -top-16 left-[16%] h-[24rem] w-[24rem]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div
            className="h-full w-full rounded-full bg-[#7048D8]/[0.08] blur-[120px]"
            animate={
              shouldReduceMotion ? undefined : { x: [0, -22, 0], y: [0, 18, 0] }
            }
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
      >
        {/* Main CTA */}
        <div className="mx-auto max-w-5xl text-center">
          <motion.h2
            variants={itemVariants}
            className="
              text-balance
              font-display
              text-[3.25rem]
              font-medium
              leading-[0.98]
              tracking-[-0.045em]
              text-[#19171D]
              sm:text-[3.5rem]
              md:text-[4.25rem]
              lg:text-[4.75rem]
            "
          >
            Stop losing customers
            <br />
            <motion.span
              className="text-[#7048D8]"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.7,
                delay: shouldReduceMotion ? 0 : 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              before they contact you.
            </motion.span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-balance
              text-[1rem]
              leading-[1.7]
              text-[#716C67]
              sm:mt-9
              sm:text-[1.125rem]
            "
          >
            Let&apos;s look at how your business is showing up online, what
            might be getting in the way, and what would make the path to an
            enquiry clearer.
          </motion.p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center sm:mt-12">
            <motion.div variants={itemVariants} className="relative inline-flex">
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -inset-2
                  -z-10
                  rounded-full
                  bg-[#7048D8]/40
                  opacity-0
                  blur-xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-70
                "
              />
              <a
                id="final-primary-cta-button"
                href="#book-calendar"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  rounded-full
                  bg-[#7048D8]
                  px-8
                  py-4
                  text-base
                  font-medium
                  text-white
                  shadow-[0_10px_30px_rgba(112,72,216,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#6239C9]
                  hover:shadow-[0_14px_36px_rgba(112,72,216,0.28)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#7048D8]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#F5F3EF]
                  sm:px-10
                  sm:py-4.5
                  sm:text-[1.0625rem]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/25
                    to-transparent
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:translate-x-full
                  "
                />
                <span className="relative">Book Your Strategy Call</span>
                <ArrowRight
                  className="
                    relative
                    h-5
                    w-5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            </motion.div>

            <motion.p variants={itemVariants} className="mt-5 text-sm text-[#817A73]">
              Simple conversation. Clear next steps.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}