import type { ReactNode } from "react";

export default function CtaButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-[10px] bg-[#5A3FD1] px-8 py-4 text-[0.9375rem] font-medium text-[#F3EDE4] shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_8px_24px_-8px_rgba(90,63,209,0.55)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#6B4FE0] hover:shadow-[0_1px_0_rgba(255,255,255,0.16)_inset,0_12px_32px_-8px_rgba(90,63,209,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8F72F0]"
    >
      {children}
    </a>
  );
}