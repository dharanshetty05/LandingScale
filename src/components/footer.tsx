const pages = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="group relative overflow-hidden bg-[#FAF9F7]">
      <div className="relative z-10 mx-auto w-full max-w-375 px-6 pb-10 pt-20 sm:px-8 md:px-10 lg:pb-12 lg:pt-20 xl:px-12">
        {/* Main footer content */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* Brand and Copyright */}
          <div className="shrink-0">
            <a
              href="#home"
              aria-label="ScaleWithLakshya home"
              className="inline-block text-[17px] font-semibold tracking-tight text-[#7C5CFC] transition-opacity duration-200 ease-out hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFC]/40 focus-visible:ring-offset-4 motion-reduce:transition-none"
            >
              ScaleWithLakshya
            </a>
            <p className="mt-6 text-[13px] leading-6 tracking-[-0.01em] text-[#77736D]">
              © 2026 ScaleWithLakshya. All rights reserved.
            </p>
          </div>
          {/* Single Horizontal Navigation Row */}
          <nav
            aria-label="Footer navigation"
            className="lg:pt-0.5"
          >
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-5 sm:gap-x-10 lg:flex-nowrap lg:gap-x-8 xl:gap-x-10">
              {pages.map((page) => (
                <li key={page.label} className="shrink-0">
                  <a
                    href={page.href}
                    className="group/link relative inline-block text-[15px] leading-5 tracking-[-0.01em] text-[#57534E] transition-colors duration-200 ease-out hover:text-[#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]/30 focus-visible:ring-offset-4 motion-reduce:transition-none"
                  >
                    {page.label}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#171717] transition-transform duration-200 ease-out group-hover/link:scale-x-100 group-focus-visible/link:scale-x-100 motion-reduce:transition-none"
                    />
                  </a>
                </li>
              ))}
              <li className="shrink-0">
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow me on Instagram"
                  className="group/ig inline-flex items-center gap-1.5 text-[15px] font-medium leading-5 tracking-[-0.01em] text-[#7C5CFC] transition-opacity duration-200 ease-out hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFC]/40 focus-visible:ring-offset-4 motion-reduce:transition-none"
                >
                  <span>Follow me on Instagram</span>
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 ease-out group-hover/ig:translate-x-[3px] group-hover/ig:-translate-y-[3px] group-focus-visible/ig:translate-x-[3px] group-focus-visible/ig:-translate-y-[3px] motion-reduce:transition-none motion-reduce:transform-none"
                  >
                    ↗
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Intentional breathing zone before oversized wordmark */}
        <div className="h-[clamp(7rem,12vw,11rem)]" />
      </div>
      {/* Subtle oversized brand wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-0.08em] select-none overflow-hidden whitespace-nowrap text-center"
      >
        <span className="inline-block text-[clamp(4rem,9vw,9rem)] font-semibold leading-[0.72] tracking-[-0.075em] text-[#7C5CFC]/4.5 transition-[transform,opacity] duration-500 ease-out group-hover:-translate-y-1 group-hover:text-[#7C5CFC]/6 motion-reduce:transition-none motion-reduce:transform-none">
          ScaleWithLakshya
        </span>
      </div>
    </footer>
  );
}