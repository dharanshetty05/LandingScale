"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Work", link: "#work" },
] as const;

const SCROLL_THRESHOLD = 72;

/* -------------------------------------------------------------------------- */
/*                                  Navbar                                    */
/* -------------------------------------------------------------------------- */

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > SCROLL_THRESHOLD);
  });

  // Close the mobile menu automatically if the viewport grows into the
  // desktop breakpoint while it's open.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMobileMenuOpen(false);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 220, damping: 32, mass: 0.6 };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <DesktopNavbar scrolled={scrolled} transition={transition} />
      <MobileNavbar
        scrolled={scrolled}
        transition={transition}
        isOpen={isMobileMenuOpen}
        onToggle={() => setIsMobileMenuOpen((prev) => !prev)}
        onClose={closeMobileMenu}
        reducedMotion={Boolean(prefersReducedMotion)}
      />
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Desktop Navbar                               */
/* -------------------------------------------------------------------------- */

function DesktopNavbar({
  scrolled,
  transition,
}: {
  scrolled: boolean;
  transition: Record<string, unknown>;
}) {
  return (
    <motion.div
      animate={{
        width: scrolled ? "90%" : "100%",
        marginTop: scrolled ? 12 : 0,
        paddingLeft: scrolled ? 20 : 32,
        paddingRight: scrolled ? 20 : 32,
        paddingTop: scrolled ? 10 : 18,
        paddingBottom: scrolled ? 10 : 18,
        backgroundColor: scrolled ? "rgba(250, 249, 247, 0.8)" : "rgba(250, 249, 247, 0)",
        borderColor: scrolled ? "rgba(24, 22, 29, 0.08)" : "rgba(24, 22, 29, 0)",
        boxShadow: scrolled ? "0 8px 30px rgba(24, 22, 29, 0.06)" : "0 0 0 rgba(0, 0, 0, 0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      }}
      transition={transition}
      className="relative mx-auto hidden max-w-6xl flex-row items-center justify-between rounded-full border lg:flex"
      style={{ WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(0px)" }}
    >
      <Logo />
      <DesktopNavLinks />
      <NavbarCta href="#book" className="px-5 py-2.5">
        Book a Call
      </NavbarCta>
    </motion.div>
  );
}

function DesktopNavLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav aria-label="Primary" className="absolute inset-0 hidden items-center justify-center gap-1 lg:flex">
      <ul onMouseLeave={() => setHoveredIndex(null)} className="flex items-center gap-1">
        {NAV_ITEMS.map((item, index) => (
          <li key={item.name} className="relative">
            <a
              href={item.link}
              onMouseEnter={() => setHoveredIndex(index)}
              className="relative z-10 block rounded-full px-4 py-2 text-sm font-medium text-[#6F6A65] transition-colors duration-200 hover:text-[#18161D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6245D6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF9F7]"
            >
              {hoveredIndex === index && (
                <motion.span
                  layoutId="desktop-nav-hover"
                  className="absolute inset-0 -z-10 rounded-full bg-black/[0.045]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Mobile Navbar                               */
/* -------------------------------------------------------------------------- */

function MobileNavbar({
  scrolled,
  transition,
  isOpen,
  onToggle,
  onClose,
  reducedMotion,
}: {
  scrolled: boolean;
  transition: Record<string, unknown>;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  reducedMotion: boolean;
}) {
  return (
    <motion.div
      animate={{
        width: scrolled ? "94%" : "100%",
        marginTop: scrolled ? 10 : 0,
        paddingLeft: scrolled ? 16 : 20,
        paddingRight: scrolled ? 16 : 20,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: scrolled || isOpen ? 24 : 28,
        backgroundColor: scrolled ? "rgba(250, 249, 247, 0.9)" : "rgba(250, 249, 247, 0)",
        borderColor: scrolled ? "rgba(24, 22, 29, 0.08)" : "rgba(24, 22, 29, 0)",
        boxShadow: scrolled ? "0 8px 30px rgba(24, 22, 29, 0.06)" : "0 0 0 rgba(0, 0, 0, 0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      }}
      transition={transition}
      className="relative mx-auto flex w-full max-w-[calc(100vw-1.5rem)] flex-col border lg:hidden"
      style={{ WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(0px)" }}
    >
      <div className="flex w-full flex-row items-center justify-between">
        <Logo />
        <button
          type="button"
          onClick={onToggle}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#18161D] transition-colors hover:bg-black/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6245D6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF9F7]"
        >
          {isOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-nav-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 12 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.2, ease: "easeOut" }}
            className="flex w-full flex-col items-stretch gap-1 overflow-hidden rounded-2xl bg-[#FAF9F7] px-2 py-3 shadow-lg"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={onClose}
                className="w-full rounded-xl px-4 py-3 text-base font-medium text-[#18161D] transition-colors hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6245D6]"
              >
                {item.name}
              </a>
            ))}
            <NavbarCta href="#book" onClick={onClose} className="mt-2 w-full py-3">
              Book a Call
            </NavbarCta>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Shared subparts                               */
/* -------------------------------------------------------------------------- */

function Logo() {
  return (
    <a
      href="/"
      className="relative z-10 flex items-center rounded-full px-1 py-1 text-lg font-semibold tracking-tight text-[#18161D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6245D6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF9F7]"
    >
      ScaleWithLakshya
    </a>
  );
}

function NavbarCta({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative z-10 inline-flex items-center justify-center rounded-full bg-[#0A0A0D] px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#18161D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6245D6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF9F7] ${className ?? ""}`}
    >
      {children}
    </a>
  );
}