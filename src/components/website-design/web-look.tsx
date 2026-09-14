"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Search,
  FileSearch,
  GitBranch,
  Smartphone,
} from "lucide-react";

const fixes = [
  {
    number: "01",
    category: "CLEAR FIRST IMPRESSION",
    icon: Search,
    title: "Visitors don't immediately understand your business",
    description:
      "We make sure visitors quickly understand what your business does, who you serve and why you're worth considering.",
  },
  {
    number: "02",
    category: "STRONG TRUST SIGNALS",
    icon: FileSearch,
    title: "Your website isn't giving customers enough confidence",
    description:
      "We use reviews, work, credentials and other proof to give potential customers more confidence in choosing your business.",
  },
  {
    number: "03",
    category: "USEFUL INFORMATION",
    icon: GitBranch,
    title: "Customers can't easily find what they need",
    description:
      "We organise your services and important information so visitors can find the answers they need without digging through your website.",
  },
  {
    number: "04",
    category: "CLEAR NEXT STEPS",
    icon: Smartphone,
    title: "Customers aren't sure what to do next",
    description:
      "We make it obvious how customers can call, request a quote or get in touch when they're ready to take action.",
  },
];

export default function WebLook() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#F5F3EF] py-12">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.55,
          }}
          className="max-w-4xl"
        >
          <h2 className="max-w-4xl text-[2.5rem] font-medium leading-[1.08] tracking-[-0.035em] text-[#19171D] sm:text-[3.25rem] lg:text-[4rem]">
            A website should make{" "}
            <span className="text-[#7048D8]">the decision easier.</span>
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-[1.65] text-[#716C67] sm:text-lg">
            When someone lands on your website, they shouldn't have to work to understand what you do, decide whether they can trust you, or figure out what to do next.
          </p>
        </motion.div>

        {/* Fix cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {fixes.map((fix, index) => {
            const Icon = fix.icon;

            return (
              <motion.article
                key={fix.number}
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.06,
                }}
                className="group rounded-2xl border border-[#E2DED7] bg-[#FCFBF9] p-6 shadow-[0_8px_30px_rgba(24,22,29,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D7D0E8] hover:shadow-[0_12px_30px_rgba(24,22,29,0.06)]"
              >
                {/* Card top row */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] font-medium tracking-[0.12em] text-[#96908A]">
                    {fix.number}
                  </span>

                  <Icon
                    aria-hidden="true"
                    className="h-4 w-4 text-[#7659CF] transition-transform duration-300 group-hover:translate-x-0.5"
                    strokeWidth={1.7}
                  />
                </div>

                {/* Card content */}
                <div className="mt-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#6852B8]">
                    {fix.category}
                  </p>

                  <h3 className="mt-2 max-w-lg text-[1.5rem] font-medium leading-[1.2] tracking-[-0.02em] text-[#19171D] sm:text-[1.75rem]">
                    {fix.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-base leading-[1.6] text-[#716C67]">
                    {fix.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
          }}
          className="mt-8 border-t border-[#E2DED7] pt-5"
        >
          <p className="max-w-2xl text-base leading-[1.6] text-[#716C67] sm:text-lg">
            <span className="font-medium text-[#19171D]">
              The goal isn't to make your website look impressive. 
            </span>{" "}
            It's to make choosing your business feel easier.
          </p>
        </motion.div>
      </div>
    </section>
  );
}