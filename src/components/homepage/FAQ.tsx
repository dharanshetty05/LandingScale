"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "I already have a website. Do I need a new one?",
    answer:
      "Not necessarily. We start by looking at what you already have. If the site is doing its job, we'll work around it. If it's making it harder for people to trust you or take the next step, we'll show you what should change and why.",
  },
  {
    id: "faq-2",
    question: "I already have a Google Business Profile. What changes?",
    answer:
      "Having a profile is only the starting point. We look at how your Google presence, website, service information, reviews, and local relevance work together. The goal is to make it easier for the right local customers to find you and feel confident contacting you.",
  },
  {
    id: "faq-3",
    question: "Is this just SEO?",
    answer:
      "No. SEO helps people find you, but getting found is only one part of the journey. We also focus on what happens after someone lands on your website: whether they understand what you do, trust the business, and can quickly take the next step.",
  },
  {
    id: "faq-4",
    question: "Can you guarantee leads?",
    answer:
      "No. Nobody can honestly guarantee a specific number of leads. What we can do is improve the parts of the customer journey you can control: visibility, clarity, trust, and the path from interest to enquiry.",
  },
  {
    id: "faq-5",
    question: "What happens after I get in touch?",
    answer:
      "We'll first look at your current online presence and identify the biggest opportunities. You'll get a straightforward view of what's working, what's getting in the way, and what we'd recommend doing next. There is no pressure to commit on the call.",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>("faq-1");
  const prefersReducedMotion = useReducedMotion();

  const toggleItem = (id: string) => {
    setOpenItem((current) => (current === id ? null : id));
  };

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.55,
        ease: EASE,
      },
    },
  };

  const headerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const listContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.06,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  return (
    <section
      id="faq"
      className="
        scroll-mt-24
        bg-[#F5F3EF]
        px-6
        py-24
        sm:py-28
        lg:py-36
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div
          className="
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-24
          "
        >
          <motion.div
            variants={headerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.div
              variants={fadeUp}
              className="
                mb-5
                flex
                items-center
                gap-2
                text-[0.6875rem]
                font-medium
                uppercase
                tracking-[0.16em]
                text-[#7048D8]
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#7048D8]" />
              FAQ
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="
                max-w-md
                font-display
                text-[2.5rem]
                font-medium
                leading-[1.06]
                tracking-[-0.035em]
                text-[#19171D]
                sm:text-[3.25rem]
                lg:text-[3.75rem]
              "
            >
              The questions
              <br />
              worth answering.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="
                mt-6
                max-w-sm
                text-[1rem]
                leading-[1.7]
                text-[#716C67]
                sm:text-[1.0625rem]
              "
            >
              Straight answers to the things most business owners want to
              understand before taking the next step.
            </motion.p>
          </motion.div>

          {/* FAQ list */}
          <motion.div
            variants={listContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="border-t border-[#DCD8D2]"
          >
            {faqs.map((faq, index) => {
              const isOpen = openItem === faq.id;
              const questionId = `${faq.id}-question`;
              const answerId = `${faq.id}-answer`;

              return (
                <motion.div
                  key={faq.id}
                  variants={fadeUp}
                  className="border-b border-[#DCD8D2]"
                >
                  <button
                    type="button"
                    id={questionId}
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="
                      group
                      flex
                      w-full
                      items-start
                      justify-between
                      gap-8
                      rounded-sm
                      py-6
                      text-left
                      transition-colors
                      duration-200
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#7048D8]/40
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-[#F5F3EF]
                      sm:py-7
                    "
                  >
                    <div className="flex min-w-0 items-start gap-5">
                      <span
                        className={`
                          mt-1
                          shrink-0
                          font-mono
                          text-[0.6875rem]
                          tracking-[0.12em]
                          transition-colors
                          duration-200
                          ${
                            isOpen
                              ? "text-[#7048D8]"
                              : "text-[#A29B94] group-hover:text-[#7048D8]"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`
                          max-w-xl
                          text-[1.125rem]
                          font-medium
                          leading-snug
                          tracking-[-0.015em]
                          transition-colors
                          duration-200
                          sm:text-[1.25rem]
                          ${
                            isOpen
                              ? "text-[#19171D]"
                              : "text-[#403C39] group-hover:text-[#19171D]"
                          }
                        `}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <span
                      className={`
                        relative
                        mt-0.5
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-full
                        border
                        transition-colors
                        duration-200
                        ${
                          isOpen
                            ? "border-[#7048D8]/30 bg-[#7048D8]/10 text-[#7048D8]"
                            : "border-[#D3CEC7] text-[#8A837C] group-hover:border-[#BFB8B0] group-hover:text-[#7048D8]"
                        }
                      `}
                      aria-hidden="true"
                    >
                      <AnimatePresence initial={false} mode="wait">
                        {isOpen ? (
                          <motion.span
                            key="minus"
                            initial={{
                              rotate: prefersReducedMotion ? 0 : -90,
                              opacity: 0,
                            }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{
                              rotate: prefersReducedMotion ? 0 : 90,
                              opacity: 0,
                            }}
                            transition={{
                              duration: prefersReducedMotion ? 0 : 0.2,
                              ease: EASE,
                            }}
                            className="flex items-center justify-center"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </motion.span>
                        ) : (
                          <motion.span
                            key="plus"
                            initial={{
                              rotate: prefersReducedMotion ? 0 : 90,
                              opacity: 0,
                            }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{
                              rotate: prefersReducedMotion ? 0 : -90,
                              opacity: 0,
                            }}
                            transition={{
                              duration: prefersReducedMotion ? 0 : 0.2,
                              ease: EASE,
                            }}
                            className="flex items-center justify-center"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        id={answerId}
                        role="region"
                        aria-labelledby={questionId}
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { height: "auto", opacity: 1 },
                          collapsed: { height: 0, opacity: 0 },
                        }}
                        transition={{
                          duration: prefersReducedMotion ? 0 : 0.32,
                          ease: EASE,
                        }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="pb-7 pl-[2.25rem] pr-10 sm:pl-[3rem] sm:pr-16">
                          <p
                            className="
                              max-w-2xl
                              text-[0.9375rem]
                              leading-[1.75]
                              text-[#716C67]
                              sm:text-base
                            "
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Closing note */}
        <div
          className="
            mt-14
            flex
            flex-col
            gap-3
            border-t
            border-[#DCD8D2]
            pt-6
            text-sm
            text-[#817A73]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7048D8]" />
            <span>
              Still unsure? That&apos;s exactly what the first conversation is
              for.
            </span>
          </div>
          <span className="text-[#9A938B]">
            No pressure. Just a clearer next step.
          </span>
        </div>
      </div>
    </section>
  );
}