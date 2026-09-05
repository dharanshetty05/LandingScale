import { Container } from "@/components/ui/Container";

const symptoms = [
  "Visitors can't quickly tell what you actually do or who it's for",
  "The phone number and quote form are buried below the fold",
  "The site looks fine on a laptop but is slow and cramped on a phone",
  "Reviews, licenses, and past work aren't shown anywhere near the CTA",
  "There's no clear service-area information for nearby homeowners",
  "It doesn't show up when someone nearby searches for the service",
];

export function ProblemSection() {
  return (
    <section className="bg-[#F5F3EF] py-24 sm:py-28 lg:py-36">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-balance text-[2.5rem] font-medium leading-[1.08] tracking-[-0.035em] text-[#19171D] sm:text-[3.25rem] lg:text-[4rem]">
            A website can look professional and still not do its job
          </h2>
          <p className="mt-6 text-[1.125rem] leading-[1.7] text-[#6F6A65] sm:mt-8">
            Most contractor and home-service websites aren't badly designed —
            they just aren't built around how a real customer decides to
            call. A clean layout doesn't help if the visitor can't find the
            phone number, doesn't trust the company yet, or gives up on a
            slow mobile page before reaching the contact section.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16">
          {symptoms.map((symptom) => (
            <li
              key={symptom}
              className="rounded-2xl border border-[#E2DED7] bg-[#FCFBF9] p-6 text-[1rem] leading-[1.7] text-[#716C67]"
            >
              {symptom}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
