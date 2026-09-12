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
    category: "CRAWLABILITY",
    icon: Search,
    title: "Important pages can't be found",
    description:
      "We look at how your pages are connected and whether search engines can easily discover the content that matters.",
  },
  {
    number: "02",
    category: "INDEXING",
    icon: FileSearch,
    title: "Search engines aren't indexing the right pages",
    description:
      "We identify indexing issues that can prevent important pages from appearing in search.",
  },
  {
    number: "03",
    category: "PAGE SIGNALS",
    icon: GitBranch,
    title: "Your website sends mixed signals",
    description:
      "We review page structure, titles, headings and other signals so each page has a clear purpose.",
  },
  {
    number: "04",
    category: "PERFORMANCE & MOBILE",
    icon: Smartphone,
    title: "The experience gets in the way",
    description:
      "We look for issues affecting mobile usability, performance and the overall experience of visiting your site.",
  },
];

export default function Fixes() {
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
            Small technical issues can create{" "}
            <span className="text-[#7048D8]">bigger problems.</span>
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-[1.65] text-[#716C67] sm:text-lg">
            Technical SEO isn't about changing your website just for the sake
            of search engines. It's about removing the things that can make
            your website harder to crawl, understand or use.
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
              The goal isn't to make your website more complicated.
            </span>{" "}
            It's to make it easier to understand.
          </p>
        </motion.div>
      </div>
    </section>
  );
}