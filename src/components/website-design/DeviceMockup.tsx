/**
 * Abstract, CSS-only representation of a desktop + mobile layout. This is a
 * deliberate placeholder — per the project's claim rules, we don't fabricate
 * screenshots of "example" client sites. Swap this for real before/after
 * screenshots or portfolio captures once they exist.
 */
export function DeviceMockup() {
  return (
    <div
      className="relative mx-auto w-full max-w-md"
      role="img"
      aria-label="Illustration of a desktop and mobile website layout, showing a hero section, service cards, and a visible call-to-action"
    >
      {/* Desktop frame */}
      <div className="rounded-2xl border border-[#E2DED7] bg-[#FCFBF9] p-4 shadow-[0_8px_30px_rgba(30,25,20,0.035)]">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E2DED7]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E2DED7]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E2DED7]" />
        </div>
        <div className="mt-4 space-y-3">
          <div className="h-3 w-2/3 rounded-full bg-[#E8E3DF]" />
          <div className="h-2 w-1/2 rounded-full bg-[#E8E3DF]" />
          <div className="mt-4 h-8 w-32 rounded-full bg-[#7048D8]/90" />
          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="h-16 rounded-xl border border-[#E2DED7]" />
            <div className="h-16 rounded-xl border border-[#E2DED7]" />
            <div className="h-16 rounded-xl border border-[#E2DED7]" />
          </div>
        </div>
      </div>

      {/* Mobile frame, overlapping */}
      <div className="absolute -bottom-8 -right-4 w-28 rounded-2xl border border-[#E2DED7] bg-[#FCFBF9] p-3 shadow-[0_12px_35px_rgba(30,25,20,0.08)] sm:-right-8 sm:w-32">
        <div className="h-2 w-10 rounded-full bg-[#E8E3DF]" />
        <div className="mt-3 h-1.5 w-full rounded-full bg-[#E8E3DF]" />
        <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-[#E8E3DF]" />
        <div className="mt-3 h-6 w-full rounded-full bg-[#6245D6]" />
      </div>
    </div>
  );
}
