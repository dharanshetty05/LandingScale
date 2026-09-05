import { Container } from "@/components/ui/Container";

const trades = [
  "Plumbing",
  "HVAC",
  "Electrical",
  "Garage doors",
  "Roofing",
  "Landscaping",
  "Pest control",
  "Handyman services",
];

const traits = [
  "Most customers search locally, right before they need help",
  "A majority of that search happens on a phone, not a desktop",
  "Some enquiries are urgent — a slow site loses the job to the next result",
  "Trust matters more than usual, since work happens inside someone's home",
  "Service areas matter — customers want to know you cover their town",
  "The path from search result to phone call needs to stay short",
];

export function IndustryFitSection() {
  return (
    <section className="bg-[#FAF9F7] py-24 sm:py-28 lg:py-36">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-balance text-[2.5rem] font-medium leading-[1.08] tracking-[-0.035em] text-[#19171D] sm:text-[3.25rem] lg:text-[4rem]">
            Built for how home-service businesses actually get hired
          </h2>
          <p className="mt-6 text-[1.125rem] leading-[1.7] text-[#6F6A65] sm:mt-8">
            A home-service business doesn&apos;t need a generic small-business
            template. It needs a site built around the specific way its
            customers search, decide, and get in touch.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <ul className="space-y-4 border-t border-[#DCD8D2] pt-8">
            {traits.map((trait) => (
              <li
                key={trait}
                className="text-[1rem] leading-[1.7] text-[#716C67]"
              >
                {trait}
              </li>
            ))}
          </ul>

          <div className="border-t border-[#DCD8D2] pt-8">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-[#9A938B]">
              Trades we build for
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {trades.map((trade) => (
                <span
                  key={trade}
                  className="rounded-full border border-[#E8E3DF] bg-white/70 px-4 py-1.5 text-sm text-[#6F6A65]"
                >
                  {trade}
                </span>
              ))}
            </div>
            <p className="mt-6 text-[1rem] leading-[1.7] text-[#716C67]">
              Working in a similar trade with the same underlying pattern —
              established, local, and underperforming online? It&apos;s worth
              a conversation either way.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
