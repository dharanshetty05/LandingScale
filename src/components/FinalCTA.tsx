import {
  ArrowRight,
  Calendar,
} from "lucide-react";

export function FinalCTASection() {
  return (
    <section
      id="book"
      className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      {/* Centered purple glow anchor */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[320px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-b from-[#141624] to-[#0f111a] p-8 text-center shadow-[0_16px_50px_rgba(0,0,0,0.5)] sm:p-12 md:p-16">
        {/* Subtle decorative top border accent */}
        <div className="absolute left-1/4 right-1/4 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

        <div className="mx-auto max-w-2xl space-y-8">
          {/* Next Step Badge */}
          <div className="inline-flex items-center gap-2 rounded-md border border-purple-500/30 bg-[#1d1f30] px-3 py-1 text-xs font-medium uppercase tracking-wide text-purple-300">
            <Calendar className="h-3.5 w-3.5" />
            Next Step
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#f5f2eb] sm:text-4xl md:text-5xl">
            Let&apos;s improve your{" "}
            <br className="hidden sm:inline" />
            <span className="text-purple-300">
              online presence.
            </span>
          </h2>

          {/* CTA */}
          <div className="flex flex-col items-center justify-center gap-4 pt-2">
            <a
              id="final-primary-cta-button"
              href="#book-calendar"
              className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-purple-600 px-9 py-4 text-base font-medium tracking-wide text-white shadow-[0_4px_24px_rgba(124,58,237,0.4)] transition-all hover:bg-purple-500 hover:shadow-[0_8px_30px_rgba(124,58,237,0.55)] active:translate-y-0.5 sm:w-auto sm:text-lg"
            >
              Book Your Strategy Call

              <ArrowRight className="h-5 w-5" />
            </a>

            <p className="text-sm font-normal text-[#9aa0b6]">
              Simple conversation. Clear next steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}