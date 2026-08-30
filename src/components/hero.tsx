"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

/**
 * TODO: point this at the project's existing centralized booking URL/config
 * (e.g. an env var or a shared `siteConfig.bookingUrl`) instead of this
 * placeholder. No such source existed to inspect in this environment.
 */
const BOOKING_URL = "https://cal.com/scalewithlakshya/strategy-call";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#0A0A0C] px-6 py-20 sm:py-28 md:py-32"
      aria-label="Introduction"
    >
      {/* Atmosphere — layered gradients standing in for the reference photo's
          off-axis studio lighting, plus a whisper of grain and a vignette.
          No literal room, no centered halo. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,#161329_0%,#0A0A0C_55%)]" />
        <div className="absolute -right-[12%] -top-[22%] h-[62%] w-[68%] rounded-full bg-[radial-gradient(circle,rgba(90,63,209,0.34)_0%,rgba(90,63,209,0)_70%)] blur-3xl" />
        <div className="absolute -left-[18%] bottom-[-18%] h-[48%] w-[58%] rounded-full bg-[radial-gradient(circle,rgba(201,124,61,0.13)_0%,rgba(201,124,61,0)_70%)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center text-center"
      >
        <motion.h1
          variants={item}
          className="text-balance font-display text-[2rem] font-medium leading-[1.15] tracking-[-0.015em] text-[#F3EDE4] sm:text-[2.75rem] sm:leading-[1.12] md:text-[3.25rem] lg:text-[3.75rem] lg:leading-[1.1]"
        >
          Your business should be easier to find online.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-[480px] text-balance text-[1.0625rem] leading-relaxed text-[#9C9488] sm:mt-7 sm:text-[1.125rem]"
        >
          A stronger Google presence, a better website, and the technical
          foundation to bring them together.
        </motion.p>

        <motion.a
          variants={item}
          href={BOOKING_URL}
          className="mt-10 inline-flex items-center justify-center rounded-[10px] bg-[#5A3FD1] px-8 py-4 text-[0.9375rem] font-medium text-[#F3EDE4] shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_8px_24px_-8px_rgba(90,63,209,0.55)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#6B4FE0] hover:shadow-[0_1px_0_rgba(255,255,255,0.16)_inset,0_12px_32px_-8px_rgba(90,63,209,0.7)] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#8F72F0] sm:mt-12"
        >
          Book Your Strategy Call
        </motion.a>
      </motion.div>
    </section>
  );
}