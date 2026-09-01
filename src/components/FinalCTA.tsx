import { ArrowRight, Calendar } from "lucide-react";

export function FinalCTASection() {
  return (
    <section
      id="book"
      className="
        relative
        overflow-hidden
        bg-[#F5F3EF]
        px-6
        py-28
        sm:py-32
        lg:py-40
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-0
          h-105
          w-180
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-300/10
          blur-[140px]
        "
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Main CTA */}
        <div className="mx-auto max-w-5xl text-center">
          <h2
            className="
              text-balance
              font-display
              text-[3.25rem]
              font-medium
              leading-[0.98]
              tracking-[-0.045em]
              text-[#19171D]              
            sm:text-[3.5rem]
            md:text-[4.25rem]
            lg:text-[4.75rem]
            "
          >
            Stop losing customers
            <br />
            <span className="text-[#7048D8]">before they contact you.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-balance
              text-[1rem]
              leading-[1.7]
              text-[#716C67]
              sm:mt-9
              sm:text-[1.125rem]
            "
          >
            Let&apos;s look at how your business is showing up online, what
            might be getting in the way, and what would make the path to an
            enquiry clearer.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center sm:mt-12">
            <a
              id="final-primary-cta-button"
              href="#book-calendar"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#7048D8]
                px-8
                py-4
                text-base
                font-medium
                text-white
                shadow-[0_10px_30px_rgba(112,72,216,0.20)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#6239C9]
                hover:shadow-[0_14px_36px_rgba(112,72,216,0.28)]
                sm:px-10
                sm:py-4.5
                sm:text-[1.0625rem]
              "
            >
              Book Your Strategy Call

              <ArrowRight
                className="
                  h-5
                  w-5
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

            <p className="mt-5 text-sm text-[#817A73]">
              Simple conversation. Clear next steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}