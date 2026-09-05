import { Container } from "@/components/ui/Container";
import { Search, ShieldCheck, ListChecks, PhoneCall } from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: Search,
    title: "Get found",
    description:
      "A site structured for local search from the start — clear service pages, service-area pages, and the technical foundation that helps nearby customers find you.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Build trust",
    description:
      "Real reviews, real work, and clear credentials placed where visitors actually look — so a homeowner believes you can do the job before they call.",
  },
  {
    number: "03",
    icon: ListChecks,
    title: "Make the decision easy",
    description:
      "Clear service descriptions, service areas, and answers to common questions, laid out so a visitor understands the offer in seconds, not minutes.",
  },
  {
    number: "04",
    icon: PhoneCall,
    title: "Make contact effortless",
    description:
      "Tap-to-call, a short quote form, and one obvious next step on every page — so trust turns into an actual enquiry instead of a closed tab.",
  },
];

export function FrameworkSection() {
  return (
    <section className="bg-[#FAF9F7] py-24 sm:py-28 lg:py-36">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-balance text-[2.5rem] font-medium leading-[1.08] tracking-[-0.035em] text-[#19171D] sm:text-[3.25rem] lg:text-[4rem]">
            What an effective home-service website actually needs to do
          </h2>
          <p className="mt-6 text-[1.125rem] leading-[1.7] text-[#6F6A65] sm:mt-8">
            Every page, section, and CTA we design maps back to one of four
            stages in a customer&apos;s journey from search result to phone
            call.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {pillars.map(({ number, icon: Icon, title, description }) => (
            <div
              key={number}
              className="group rounded-2xl border border-[#E2DED7] bg-[#FCFBF9] p-7 shadow-[0_8px_30px_rgba(30,25,20,0.035)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D7D0E8] hover:shadow-[0_12px_35px_rgba(30,25,20,0.055)] sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm text-[#9A938B]">
                  {number}
                </span>
                <Icon
                  className="h-5 w-5 text-[#7659CF] transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 text-[1.75rem] font-medium leading-tight tracking-tight text-[#19171D]">
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
