import type { JSX } from "react";
import Marquee from "../marquee";

export default function ICP(): JSX.Element {
  return (
    <section
      aria-labelledby="icp-heading"
      className="relative w-full overflow-hidden border-y border-black/[0.06] bg-[#F5F3EF] py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
        <h2 id="icp-heading" className="mx-auto max-w-2xl text-balance font-display text-[2.5rem] font-medium leading-[1.08] tracking-[-0.035em] text-[#19171D] sm:text-[3.25rem] lg:text-[4rem]">
          Built for local
          <br />
          <span className="text-[#7048D8]">service businesses.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-black/55 sm:text-base sm:leading-7">
          If your customers find you through Google, Maps, referrals, or local
          search, your online presence should make it easy for them to choose
          you.
        </p>
      </div>

      <div className="mt-10 sm:mt-12 bg-[#F5F3EF]">
        <Marquee />
      </div>

      <p className="mx-auto mt-8 max-w-lg px-6 text-center text-xs leading-5 text-black/40 sm:text-sm sm:leading-6">
        Especially businesses that rely on local customers, phone calls, and
        quote requests to grow.
      </p>
    </section>
  );
}