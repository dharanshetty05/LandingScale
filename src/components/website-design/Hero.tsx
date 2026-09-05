import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CtaButton } from "@/components/ui/CtaButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F7] pb-20 pt-36 sm:pb-28 sm:pt-44">
      {/* Atmospheric lighting, consistent with the site's home hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(105,76,218,0.12)_0%,rgba(105,76,218,0)_70%)] blur-3xl"
      />

      <Container className="relative flex flex-col items-center text-center">
        <Eyebrow>Website Design for Home-Service Businesses</Eyebrow>

        <h1 className="mt-6 max-w-3xl text-balance text-[2.5rem] font-medium leading-[1.08] tracking-[-0.03em] text-[#18161D] sm:text-[3.25rem] lg:text-[4.25rem] lg:leading-[1.06]">
          A website built around how customers find, trust, and call a
          home-service business
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-[1.65] text-[#6F6A65] sm:mt-8 sm:text-[1.125rem] sm:leading-[1.7]">
          Custom, mobile-first website design for plumbing, HVAC, electrical,
          garage-door, and other home-service companies — built around the
          way a homeowner actually decides who to call, not a template with
          your logo dropped in.
        </p>

        <div className="mt-10 sm:mt-12">
          <CtaButton href="https://cal.com/scalewithlakshya" variant="hero">
            Book a call
          </CtaButton>
        </div>
      </Container>
    </section>
  );
}
