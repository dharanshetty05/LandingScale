import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * NOTE FOR INTEGRATION:
 * The design system (SCALEWITHLAKSHYA_DESIGN_SYSTEM.md, Section I) documents an
 * existing "Primary Pill CTA" button style used across the site (Final CTA,
 * section CTAs). If the codebase already exports a shared <Button> component
 * with this variant, use that instead of this file and delete it. This
 * component only reproduces the documented pill-CTA classes so the page can
 * ship on its own.
 */

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "pill" | "hero";
  className?: string;
};

export function CtaButton({
  href,
  children,
  variant = "pill",
  className = "",
}: CtaButtonProps) {
  const base =
    "group inline-flex items-center gap-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5";

  const variants = {
    pill:
      "rounded-full bg-[#7048D8] px-7 py-3.5 text-base shadow-[0_10px_30px_rgba(112,72,216,0.20)] hover:bg-[#6239C9] hover:shadow-[0_14px_32px_-10px_rgba(98,69,214,0.70)]",
    hero:
      "rounded-[9px] bg-[#6245D6] px-6 py-3 text-[0.9375rem] shadow-[0_8px_24px_-10px_rgba(98,69,214,0.55)] hover:bg-[#573AC9] hover:shadow-[0_14px_32px_-10px_rgba(98,69,214,0.70)]",
  };

  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
