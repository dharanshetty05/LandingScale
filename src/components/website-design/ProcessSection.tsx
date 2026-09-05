import { Container } from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Discover & strategize",
    description:
      "A discovery session to understand your services, service area, and current online presence, and to map the site and Google foundation around it.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "The website, Google Business Profile foundation, and technical SEO foundation are built together as one connected project.",
  },
  {
    number: "03",
    title: "Review & QA",
    description:
      "Two structured revision rounds, then a full quality check covering speed, mobile behavior, tracking, and indexability before anything goes live.",
  },
  {
    number: "04",
    title: "Launch & handover",
    description:
      "A recorded handover walkthrough, full CMS access, and 30 days of post-launch defect support once the site is live.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-[#FAF9F7] py-24 sm:py-28 lg:py-36">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl text-balance text-[2.5rem] font-medium leading-[1.08] tracking-[-0.035em] text-[#19171D] sm:text-[3.25rem] lg:text-[4rem]">
            What happens after you decide to work together
          </h2>
          <p className="max-w-xs text-[1rem] leading-[1.7] text-[#716C67]">
            Most projects launch in 3–5 weeks from deposit, once intake
            content and approvals are in.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {steps.map(({ number, title, description }) => (
            <div
              key={number}
              className="rounded-2xl border border-[#E2DED7] bg-[#FCFBF9] p-7 sm:p-8"
            >
              <span className="font-mono text-sm text-[#9A938B]">
                {number}
              </span>
              <h3 className="mt-5 text-[1.75rem] font-medium leading-tight tracking-tight text-[#19171D]">
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
