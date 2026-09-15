import type { JSX } from "react";

/**
 * Static label, rendered once, outside the animated track.
 */
const LEAD_TEXT = "FOR HOME SERVICE BUSINESSES";

/**
 * Trades served — kept as a flat, easily editable list.
 * Only this list scrolls.
 */
const TRADES: readonly string[] = [
  "PLUMBERS",
  "ROOFERS",
  "ELECTRICIANS",
  "HVAC",
  "LANDSCAPERS",
  "PAINTERS",
  "CLEANING COMPANIES",
  "PEST CONTROL",
  "HANDYMEN",
  "GARAGE DOOR COMPANIES",
];

const SEPARATOR = "·";

/**
 * Renders one full pass of the trade list, separated by a middot.
 * Rendered twice in the track so the loop can repeat via a -50%
 * transform with zero visible seam.
 */
function TradeList(): JSX.Element {
  return (
    <div className="flex shrink-0 items-center">
      {TRADES.map((trade) => (
        <span key={trade} className="flex shrink-0 items-center">
          <span className="whitespace-nowrap px-3 text-[11px] font-medium tracking-[0.15em] text-black/55 sm:px-4 sm:text-xs md:text-sm">
            {trade}
          </span>
          <span
            className="select-none whitespace-nowrap text-[11px] text-black/20 sm:text-xs"
            aria-hidden="true"
          >
            {SEPARATOR}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee(): JSX.Element {
  const fullMessage = `${LEAD_TEXT}: ${TRADES.join(", ")}`;

  return (
    <section
      aria-label="Who ScaleWithLakshya works with"
      className="relative w-full overflow-hidden border-y border-black/[0.06] bg-[#FAF9F7] py-5 sm:py-7 md:py-8"
    >
      {/* Full message for assistive tech; the animated trade list below is decorative. */}
      <p className="sr-only">{fullMessage}</p>

      <div aria-hidden="true">
        {/* Static label — never animated, never duplicated. */}
        <p className="mb-2.5 text-center text-[11px] font-semibold tracking-[0.2em] text-violet-700/90 sm:mb-3 sm:text-xs md:text-sm">
          {LEAD_TEXT}
        </p>

        {/* Scrolling trades only. */}
        <div
          className="group relative"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="flex w-max animate-[swl-marquee_42s_linear_infinite] items-center group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-2">
            <TradeList />
            <div className="motion-reduce:hidden">
              <TradeList />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes swl-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}