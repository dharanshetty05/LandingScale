import { Container } from "@/components/ui/Container";

const reasons = [
  {
    title: "Built around one journey, not a generic template",
    description:
      "Every page, CTA, and structural choice is designed around how a homeowner actually decides to call a plumber, electrician, or contractor — not a small-business template with a new logo.",
  },
  {
    title: "You own what we build",
    description:
      "Full CMS and editor access at handover. There's no dependency on us to make basic updates after launch.",
  },
  {
    title: "Fixed scope, stated upfront",
    description:
      "Page count, revision rounds, and support window are agreed before work starts, so there are no surprises partway through the project.",
  },
  {
    title: "Honest about what a website can and can't do",
    description:
      "We won't promise guaranteed rankings, traffic, or lead volume. We will commit to a fast, credible, conversion-focused site with the technical foundation to support it.",
  },
];

export function WhyUsSection() {
  return (
    <section className="bg-[#F5F3EF] py-24 sm:py-28 lg:py-36">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-balance text-[2.5rem] font-medium leading-[1.08] tracking-[-0.035em] text-[#19171D] sm:text-[3.25rem] lg:text-[4rem]">
            Why home-service businesses work with ScaleWithLakshya
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-10 lg:mt-16 lg:grid-cols-2">
          {reasons.map(({ title, description }) => (
            <div key={title}>
              <h3 className="text-[1.75rem] font-medium leading-tight tracking-tight text-[#19171D]">
                {title}
              </h3>
              <p className="mt-3 text-[1rem] leading-[1.7] text-[#716C67]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
