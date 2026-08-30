import Image from "next/image";
import {
  ExternalLink,
  Lock,
  ArrowUpRight,
} from "lucide-react";

export function ExampleWorkSection() {
  const liveDemoUrl = "https://oakstonerenovations.vercel.app/";

  return (
    <section
      id="work"
      className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[350px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-950/15 blur-[140px]"
        aria-hidden="true"
      />

      {/* Section Header */}
      <div className="mb-12 max-w-3xl md:mb-16">
        <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-purple-500/20 bg-[#161824] px-3 py-1 text-xs font-medium uppercase tracking-wide text-purple-300">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          Example Work
        </div>

        <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#f5f2eb] sm:text-4xl md:text-5xl">
          See the work.
        </h2>
      </div>

      {/* Main Showcase Container */}
      <div className="overflow-hidden rounded-2xl border border-[#222535] bg-[#10121a] shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-purple-500/30">
        {/* Top Info Bar / Metadata Panel */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#1e212f] bg-[#121520] p-6 sm:p-8 md:flex-row md:items-center lg:p-10">
          <div className="max-w-xl space-y-2">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-semibold tracking-tight text-[#f5f2eb] sm:text-3xl">
                Oakstone Renovations
              </h3>

              <span className="inline-flex items-center rounded border border-purple-800/40 bg-purple-950/60 px-2.5 py-0.5 text-xs font-medium text-purple-300">
                Live Prototype
              </span>
            </div>

            <p className="text-base leading-relaxed text-[#a5abbf]">
              A demonstration website built for a home service business.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-4 sm:flex-row sm:items-center">
            <a
              id="view-live-demo-button"
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-6 py-3.5 text-sm font-medium tracking-wide text-white shadow-[0_4px_16px_rgba(124,58,237,0.35)] transition-all hover:bg-purple-500 hover:shadow-[0_6px_22px_rgba(124,58,237,0.5)]"
            >
              View Live Demo

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <span className="flex items-center gap-1.5 text-xs text-[#797f94] sm:self-center">
              <span className="h-1.5 w-1.5 rounded-full bg-[#52576b]" />
              Demo project. Not a client project.
            </span>
          </div>
        </div>

        {/* Browser Interface Frame */}
        <div className="bg-[#0b0c11] p-4 sm:p-6 lg:p-8">
          <div className="overflow-hidden rounded-xl border border-[#232738] bg-[#141724] shadow-2xl">
            {/* Browser Top Navigation Bar */}
            <div className="flex select-none items-center justify-between gap-4 border-b border-[#24283b] bg-[#171a29] px-4 py-3">
              {/* Window Controls */}
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border border-[#3b415c]/40 bg-[#2c3044]" />
                <span className="h-3 w-3 rounded-full border border-[#3b415c]/40 bg-[#2c3044]" />
                <span className="h-3 w-3 rounded-full border border-[#3b415c]/40 bg-[#2c3044]" />
              </div>

              {/* URL Address Bar */}
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full max-w-md items-center justify-center gap-2 rounded-md border border-[#262b3f] bg-[#0e1017] px-4 py-1.5 text-xs text-[#9aa0b6] transition-all hover:border-purple-500/40 hover:text-[#f4f1ea]"
              >
                <Lock className="h-3 w-3 shrink-0 text-purple-400" />

                <span className="truncate font-mono">
                  oakstonerenovations.vercel.app
                </span>

                <ExternalLink className="ml-1 h-3 w-3 shrink-0 text-[#646b84] transition-colors group-hover:text-purple-300" />
              </a>

              {/* Status Indicator */}
              <div className="hidden items-center gap-2 font-mono text-[11px] text-[#72788e] sm:flex">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500/80" />
                <span>ONLINE</span>
              </div>
            </div>

            {/* Browser Viewport */}
            <div className="group/preview relative overflow-hidden bg-[#11131c]">
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block overflow-hidden"
              >
                <Image
                  src="/images/example.png"
                  alt="Oakstone Renovations - Demonstration website for home service business"
                  width={1920}
                  height={1080}
                  className="h-auto w-full object-cover object-top transition-transform duration-700 ease-out group-hover/preview:scale-[1.01]"
                  priority={false}
                />

                {/* Subtle Interactive Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#0c0d12]/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/preview:opacity-100">
                  <div className="flex items-center gap-2 rounded-lg border border-purple-500/40 bg-[#181b28]/95 px-5 py-3 text-sm font-medium text-[#f5f2eb] shadow-2xl">
                    <span>Open Live Interactive Site</span>

                    <ArrowUpRight className="h-4 w-4 text-purple-400" />
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Features Highlight Strip */}
          <div className="mt-6 grid grid-cols-1 gap-4 border-t border-[#1d202e] pt-5 text-xs text-[#8e94a8] sm:grid-cols-3">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span>Fast-loading mobile-first structure</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span>Direct call & estimate enquiry paths</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span>Local service area proof architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
