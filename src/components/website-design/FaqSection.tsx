import { Container } from "@/components/ui/Container";

const faqs = [
  {
    question: "How much does a home-service website cost?",
    answer:
      "Every project is a fixed-scope proposal, not a vague estimate. Current pricing starts at €1,750 for a limited number of founding-client projects, moving to €3,250 as scope expands — you'll always see the price before any work begins.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most projects launch in 3–5 weeks from deposit, assuming intake content and approvals come in on schedule. Delays on content or sign-off shift the timeline directly.",
  },
  {
    question: "Who owns the website afterward?",
    answer:
      "You do. You get full CMS/editor access at handover, so you're not dependent on us for basic updates.",
  },
  {
    question: "Is SEO included?",
    answer:
      "A technical SEO foundation is included — indexability, sitemap, metadata, local schema, image optimization, and mobile speed. Ongoing SEO, content production, and backlinks are separate services, offered only once there's a demonstrated need.",
  },
  {
    question: "Will the site work well on mobile?",
    answer:
      "Yes — every build is mobile-first, not adapted afterward, since most local searches for home services happen on a phone.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. Most projects start from a business that already has a website and Google Business Profile that isn't performing the way it should, rather than starting from zero.",
  },
  {
    question: "What happens after the site launches?",
    answer:
      "You get 30 days of post-launch defect support and a recorded handover walkthrough. An optional Website Care plan is available afterward for ongoing maintenance.",
  },
  {
    question: "Do you work with specific home-service industries?",
    answer:
      "The core focus is plumbing, HVAC, electrical, and garage-door companies, plus similar trades — roofing, landscaping, pest control, and handyman services — that share the same local, reputation-driven business model.",
  },
];

export function FaqSection() {
  return (
    <section className="bg-[#FAF9F7] py-24 sm:py-28 lg:py-36">
      <Container className="max-w-3xl">
        <h2 className="text-balance text-[2.5rem] font-medium leading-[1.08] tracking-[-0.035em] text-[#19171D] sm:text-[3.25rem] lg:text-[4rem]">
          Questions before you book a call
        </h2>

        <div className="mt-14 divide-y divide-[#E2DED7] border-t border-[#E2DED7] lg:mt-16">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[1.125rem] font-medium text-[#19171D] marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7048D8]">
                {question}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl leading-none text-[#9A938B] transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-[1rem] leading-[1.7] text-[#716C67]">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
