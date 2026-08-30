"use client";

import { useState } from "react";
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

interface SolutionPillar {
  id: string;
  stepNumber: string;
  category: string;
  actionTitle: string;
  description: string;
  icon: LucideIcon;
  contextTag: string;
  highlightSignal: string;
}

const pillars: SolutionPillar[] = [
  {
    id: "gbp",
    stepNumber: "01",
    category: "Google Business Profile",
    actionTitle: "Get found",
    description:
      "Be there when local customers search for your service.",
    icon: MapPin,
    contextTag: "Local Search & Maps",
    highlightSignal:
      "First impression in your local service radius",
  },
  {
    id: "website",
    stepNumber: "02",
    category: "Website",
    actionTitle: "Build trust",
    description:
      "Show people what you do, where you work, and why they should choose you.",
    icon: ShieldCheck,
    contextTag: "Conversion & Proof",
    highlightSignal:
      "Clear proof, recent jobs, direct enquiry path",
  },
  {
    id: "seo",
    stepNumber: "03",
    category: "Technical SEO",
    actionTitle: "Strengthen the foundation",
    description:
      "Give search engines the structure they need to understand your website.",
    icon: Cpu,
    contextTag: "Architecture & Indexing",
    highlightSignal:
      "Clean code & schema signals for search engines",
  },
];

export function SolutionSection() {
  const [activePillar, setActivePillar] = useState<string>("gbp");

  return (
    <section
      id="solution"
      className="relative mx-auto max-w-7xl overflow-hidden px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      {/* Subtle brand ambient lighting anchor */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[340px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/10 blur-[120px]"
        aria-hidden="true"
      />

      {/* Section Header */}
      <div className="mb-14 max-w-3xl md:mb-20">
        <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-purple-500/20 bg-[#161824] px-3 py-1 text-xs font-medium uppercase tracking-wide text-purple-300">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          The Solution
        </div>

        <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#f5f2eb] sm:text-4xl md:text-5xl">
          Get found. Build trust.{" "}
          <br className="hidden sm:inline" />
          <span className="text-purple-300">Get enquiries.</span>
        </h2>
      </div>

      {/* Connected Customer Journey System */}
      <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Subtle connector rule across items on desktop */}
        <div
          className="absolute left-8 right-8 top-1/2 -z-10 hidden h-px -translate-y-12 bg-gradient-to-r from-purple-500/0 via-purple-500/25 to-purple-500/0 lg:block"
          aria-hidden="true"
        />

        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          const isSelected = activePillar === pillar.id;

          return (
            <div
              key={pillar.id}
              id={`solution-card-${pillar.id}`}
              onMouseEnter={() => setActivePillar(pillar.id)}
              onClick={() => setActivePillar(pillar.id)}
              className={`group relative flex cursor-pointer flex-col justify-between rounded-xl border p-7 transition-all duration-300 sm:p-8 ${
                isSelected
                  ? "border-purple-500/40 bg-[#141622] shadow-[0_8px_30px_rgba(124,58,237,0.12)]"
                  : "border-[#222533] bg-[#10121a] hover:border-[#35394d] hover:bg-[#131520]"
              }`}
            >
              {/* Header */}
              <div>
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="font-mono text-xs tracking-widest text-[#797e93] transition-colors group-hover:text-purple-300">
                    STAGE {pillar.stepNumber}
                  </span>

                  <div
                    className={`rounded-lg border p-2.5 transition-colors ${
                      isSelected
                        ? "border-purple-500/30 bg-purple-950/50 text-purple-200"
                        : "border-[#272b3c] bg-[#181a26] text-[#9ba1b6] group-hover:text-[#f4f1ea]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Category Label */}
                <p className="mb-2 text-sm font-medium text-purple-400">
                  {pillar.category}
                </p>

                {/* Action Title */}
                <h3 className="mb-3 text-2xl font-semibold tracking-tight text-[#f5f2eb]">
                  {pillar.actionTitle}
                </h3>

                {/* Core Description */}
                <p className="mb-6 text-base leading-relaxed text-[#a5abbf]">
                  {pillar.description}
                </p>
              </div>

              {/* Contextual Verification Cue */}
              <div className="mt-auto flex items-center justify-between border-t border-[#202334] pt-5">
                <span className="flex items-center gap-1.5 text-xs text-[#797e93]">
                  <CheckCircle2
                    className={`h-3.5 w-3.5 ${
                      isSelected
                        ? "text-purple-400"
                        : "text-[#585e74]"
                    }`}
                  />
                  {pillar.contextTag}
                </span>

                <div
                  className={`flex items-center gap-1 text-xs font-medium transition-colors ${
                    isSelected
                      ? "text-purple-300"
                      : "text-[#636980] group-hover:text-[#9ea4bc]"
                  }`}
                >
                  Phase {index + 1}
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Connected Journey Summary Bar */}
      <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-lg border border-[#202334] bg-[#0e1017] p-5 sm:flex-row">
        <div className="flex items-center gap-3 text-sm text-[#9da3b8]">
          <span className="h-2 w-2 shrink-0 rounded-full bg-purple-500" />

          <span>
            <strong className="font-medium text-[#f5f2eb]">
              Three unified components
            </strong>{" "}
            working as one continuous system for local service
            businesses.
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-2 font-mono text-xs text-[#787f95]">
          <span>Search</span>
          <span className="text-purple-500">→</span>
          <span>Trust</span>
          <span className="text-purple-500">→</span>
          <span className="text-[#f5f2eb]">Enquiry</span>
        </div>
      </div>

      {/* Primary CTA Area */}
      <div className="mt-12 flex flex-col items-center justify-start gap-4 sm:flex-row">
        <a
          id="solution-primary-cta"
          href="#book"
          className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-purple-600 px-7 py-4 text-base font-medium tracking-wide text-white shadow-[0_4px_20px_rgba(124,58,237,0.3)] transition-all hover:bg-purple-500 hover:shadow-[0_6px_24px_rgba(124,58,237,0.45)] active:translate-y-0.5 sm:w-auto"
        >
          Book Your Strategy Call
          <ArrowRight className="h-4 w-4" />
        </a>

        <p className="text-xs text-[#7f859a]">
          30-minute direct review of your current online setup.
        </p>
      </div>
    </section>
  );
}
