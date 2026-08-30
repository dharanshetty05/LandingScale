"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "I already have a website.",
    answer: "That's fine. We start with what you already have.",
  },
  {
    id: "faq-2",
    question: "I already have a Google Business Profile.",
    answer:
      "That's fine too. The question is whether it's working as well as it could.",
  },
  {
    id: "faq-3",
    question: "Is this just SEO?",
    answer:
      "No. Google presence, website, and technical SEO work together.",
  },
  {
    id: "faq-4",
    question: "Can you guarantee leads?",
    answer: "No. Nobody can honestly guarantee that.",
  },
  {
    id: "faq-5",
    question: "What happens on the call?",
    answer:
      "We'll look at your current online presence and discuss where the biggest opportunities are.",
  },
];

export function FAQSection() {
  // Multiple questions can be open at the same time.
  // FAQ 1 and FAQ 4 are open by default for immediate scanning.
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "faq-1": true,
    "faq-4": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="faq"
      className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      {/* Subtle brand ambient lighting */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/2 -z-10 h-[300px] w-[500px] -translate-y-1/2 rounded-full bg-purple-950/10 blur-[130px]"
        aria-hidden="true"
      />

      {/* Section Header */}
      <div className="mb-12 max-w-3xl md:mb-16">
        <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-purple-500/20 bg-[#161824] px-3 py-1 text-xs font-medium uppercase tracking-wide text-purple-300">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          FAQ
        </div>

        <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#f5f2eb] sm:text-4xl md:text-5xl">
          Have questions?
        </h2>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = !!openItems[faq.id];

          return (
            <div
              key={faq.id}
              id={`faq-item-${faq.id}`}
              className={`overflow-hidden rounded-xl border transition-all duration-200 ${
                isOpen
                  ? "border-purple-500/30 bg-[#12141f] shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
                  : "border-[#222533] bg-[#10121a] hover:border-[#35394d] hover:bg-[#131520]"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`${faq.id}-answer`}
                className="flex w-full cursor-pointer select-none items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-[#6c7287]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-lg font-medium tracking-tight text-[#f5f2eb] sm:text-xl">
                    {faq.question}
                  </span>
                </div>

                <div
                  className={`shrink-0 rounded-md border p-2 transition-colors ${
                    isOpen
                      ? "border-purple-500/30 bg-purple-950/60 text-purple-300"
                      : "border-[#292e40] bg-[#181a26] text-[#8e94a8]"
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div
                  id={`${faq.id}-answer`}
                  className="border-t border-[#1d202e]/60 px-6 pb-6 pt-1 sm:px-8"
                >
                  <p className="pl-8 text-base leading-relaxed text-[#b8bed2] sm:text-lg">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}