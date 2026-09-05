import { Container } from "@/components/ui/Container";
import { Check } from "lucide-react";
import { DeviceMockup } from "./DeviceMockup";

const included = [
  "Custom, mobile-first website — homepage, priority service pages, about/trust, service-area page, and a contact/quote page",
  "Review and proof integration, tap-to-call, and a quote/contact form",
  "Google Business Profile foundation — access, categories, services, and basic optimization",
  "Technical SEO foundation — indexability, sitemap, metadata, local schema, image optimization, mobile speed",
  "Analytics and tracking — GA4, Search Console, and call/form-submission tracking set up before launch",
  "Full CMS/editor access, so you own and can update the site after handover",
  "Two structured revision rounds and a recorded launch handover",
  "30 days of post-launch defect support",
];

export function BuildSection() {
  return (
    <section className="bg-[#F5F3EF] py-24 sm:py-28 lg:py-36">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="max-w-xl text-balance text-[2.5rem] font-medium leading-[1.08] tracking-[-0.035em] text-[#19171D] sm:text-[3.25rem] lg:text-[4rem]">
            What&apos;s included in the build
          </h2>
          <p className="mt-6 max-w-xl text-[1.125rem] leading-[1.7] text-[#6F6A65] sm:mt-8">
            This is the Search-to-Call Foundation — one connected project
            covering the website, your Google Business Profile foundation,
            and the technical SEO groundwork underneath it.
          </p>

          <ul className="mt-10 space-y-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-[#7659CF]"
                  aria-hidden="true"
                />
                <span className="text-[1rem] leading-[1.7] text-[#716C67]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-first lg:order-last">
          <DeviceMockup />
        </div>
      </Container>
    </section>
  );
}
