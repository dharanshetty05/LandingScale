import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#F5F3EF] py-24 sm:py-28 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(105,76,218,0.10)_0%,rgba(105,76,218,0)_70%)] blur-3xl"
      />

      <Container className="relative flex flex-col items-center text-center">
        <h2 className="max-w-2xl text-balance text-[2.5rem] font-medium leading-[1.08] tracking-[-0.035em] text-[#19171D] sm:text-[3.25rem] lg:text-[4rem]">
          Let&apos;s see if your website is doing its job
        </h2>
        <p className="mt-6 max-w-xl text-[1.125rem] leading-[1.7] text-[#6F6A65] sm:mt-8">
          Book a short call. We'll look at your current site and Google
          presence together and tell you plainly whether a rebuild makes
          sense for your business.
        </p>
        <div className="mt-10 sm:mt-12">
          <CtaButton href="https://cal.com/scalewithlakshya" variant="pill">
            Book a call
          </CtaButton>
        </div>
      </Container>
    </section>
  );
}
