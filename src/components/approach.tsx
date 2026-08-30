import {
  Search,
  ShieldCheck,
  PhoneCall,
  CornerDownRight,
  type LucideIcon,
} from "lucide-react";

interface PrincipleItem {
  id: string;
  stepNumber: string;
  title: string;
  copy: string;
  icon: LucideIcon;
  practicalApplication: string;
}

const principles: PrincipleItem[] = [
  {
    id: "find",
    stepNumber: "01",
    title: "Find",
    copy: "Show up where people are searching.",
    icon: Search,
    practicalApplication:
      "Google search rankings & map visibility when local emergencies or planned jobs happen.",
  },
  {
    id: "trust",
    stepNumber: "02",
    title: "Trust",
    copy: "Make it obvious why they should choose you.",
    icon: ShieldCheck,
    practicalApplication:
      "Immediate verification of your licenses, past work photos, and local reputation.",
  },
  {
    id: "enquire",
    stepNumber: "03",
    title: "Enquire",
    copy: "Make contacting you effortless.",
    icon: PhoneCall,
    practicalApplication:
      "Zero friction click-to-call and clean estimate requests that land directly in your inbox.",
  },
];

export function ApproachSection() {
  return (
    <section
      id="approach"
      className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute right-1/4 top-1/2 -z-10 h-[300px] w-[500px] -translate-y-1/2 rounded-full bg-purple-950/15 blur-[130px]"
        aria-hidden="true"
      />

      {/* Section Header */}
      <div className="mb-14 max-w-3xl md:mb-20">
        <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-purple-500/20 bg-[#161824] px-3 py-1 text-xs font-medium uppercase tracking-wide text-purple-300">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          Approach
        </div>

        <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#f5f2eb] sm:text-4xl md:text-5xl">
          Everything should lead{" "}
          <span className="text-purple-300">somewhere.</span>
        </h2>
      </div>

      {/* Editorial Continuous Flow Layout */}
      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {principles.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              id={`approach-card-${item.id}`}
              className="group relative flex flex-col justify-between rounded-xl border border-[#222533] bg-[#10121a] p-8 transition-all duration-300 hover:border-purple-500/30 hover:bg-[#131520]"
            >
              {/* Top Row: Index Number and Icon */}
              <div>
                <div className="mb-8 flex items-center justify-between gap-4">
                  <span className="font-mono text-xs tracking-widest text-[#797e93] transition-colors group-hover:text-purple-300">
                    PRINCIPLE // {item.stepNumber}
                  </span>

                  <div className="rounded-lg border border-[#272b3c] bg-[#171926] p-3 text-[#a5abbf] transition-colors group-hover:border-purple-500/30 group-hover:text-purple-300">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Core Title */}
                <h3 className="mb-3 text-3xl font-semibold tracking-tight text-[#f5f2eb]">
                  {item.title}
                </h3>

                {/* Core Copy */}
                <p className="mb-6 text-lg font-normal leading-relaxed text-[#d3d8e8]">
                  {item.copy}
                </p>
              </div>

              {/* Bottom Clarifying Annotation */}
              <div className="mt-auto border-t border-[#1e212f] pt-6">
                <div className="flex items-start gap-2 text-xs leading-relaxed text-[#7d8398]">
                  <CornerDownRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-purple-400" />

                  <span>{item.practicalApplication}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Principle Note */}
      <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-lg border border-[#202334] bg-[#0e1017] p-5 text-xs text-[#8f96ac] sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 shrink-0 rounded-full bg-purple-500" />

          <span>
            A clear path beats complex marketing gimmicks every time.
          </span>
        </div>

        <div className="font-mono text-[#787f95]">
          Find → Trust → Enquire
        </div>
      </div>
    </section>
  );
}