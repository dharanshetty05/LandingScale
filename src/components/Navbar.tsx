"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Services", link: "#services" },
  { name: "Work", link: "#work" },
  { name: "Approach", link: "#approach" },
  { name: "FAQ", link: "#faq" },
] as const;

const SCROLL_THRESHOLD = 72;

/* -------------------------------------------------------------------------- */
/*                                  Navbar                                    */
/* -------------------------------------------------------------------------- */

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navRevealed, setNavRevealed] = useState(false);
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  const desktopLogoRef = useRef<HTMLAnchorElement>(null);
  const mobileLogoRef = useRef<HTMLAnchorElement>(null);

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
  const revealNav = useCallback(() => {
    setNavRevealed(true);
    window.dispatchEvent(new Event("sw:intro-complete"));
  }, []);

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 220, damping: 32, mass: 0.6 };

  return (
    <>
      <IntroLogo
        desktopTargetRef={desktopLogoRef}
        mobileTargetRef={mobileLogoRef}
        onSettle={revealNav}
      />
      <header className="fixed inset-x-0 top-0 z-50">
        <DesktopNavbar
          scrolled={scrolled}
          transition={transition}
          navRevealed={navRevealed}
          logoRef={desktopLogoRef}
        />
        <MobileNavbar
          scrolled={scrolled}
          transition={transition}
          isOpen={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen((prev) => !prev)}
          onClose={closeMobileMenu}
          reducedMotion={Boolean(prefersReducedMotion)}
          navRevealed={navRevealed}
          logoRef={mobileLogoRef}
        />
      </header>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Desktop Navbar                               */
/* -------------------------------------------------------------------------- */

function DesktopNavbar({
  scrolled,
  transition,
  navRevealed,
  logoRef,
}: {
  scrolled: boolean;
  transition: Record<string, unknown>;
  navRevealed: boolean;
  logoRef: RefObject<HTMLAnchorElement | null>;
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
      <Logo logoRef={logoRef} />
      <DesktopNavLinks />
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={navRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="contents"
      >
        <NavbarCta href="#book" className="px-5 py-2.5">
          Book Your Call
        </NavbarCta>
      </motion.div>
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
  navRevealed,
  logoRef,
}: {
  scrolled: boolean;
  transition: Record<string, unknown>;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  reducedMotion: boolean;
  navRevealed: boolean;
  logoRef: RefObject<HTMLAnchorElement | null>;
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
        <Logo logoRef={logoRef} />
        <motion.button
          type="button"
          onClick={onToggle}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: navRevealed ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#18161D] transition-colors hover:bg-black/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6245D6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF9F7]"
        >
          {isOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
        </motion.button>
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

function Logo({ logoRef }: { logoRef: RefObject<HTMLAnchorElement | null> }) {
  return (
    <a
      ref={logoRef}
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
      className={`relative z-10 inline-flex items-center justify-center rounded-full bg-[#6245D6] px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#5438C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6245D6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF9F7] ${className ?? ""}`}
    >
      {children}
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Intro animation                               */
/* -------------------------------------------------------------------------- */

const INTRO_SESSION_KEY = "sw-intro-played";

// Tunable timeline (ms). Total runtime ≈ HOLD + MOVE + SETTLE + FADE.
const INTRO_HOLD_MS = 600; // fade/scale-in, then a brief static hold
const INTRO_MOVE_MS = 650; // scale-down + move into the navbar position
const INTRO_SETTLE_MS = 120; // pause once the logo has landed
const INTRO_FADE_MS = 320; // backdrop dissolve, revealing navbar + hero

const INTRO_EASE_MOVE: [number, number, number, number] = [0.65, 0, 0.35, 1];
const INTRO_EASE_IN: [number, number, number, number] = [0.16, 1, 0.3, 1];
const INTRO_EASE_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1];

type IntroPhase = "pending" | "intro" | "moving" | "done" | "skip";

function getVisibleLogoTarget(
  desktop: HTMLElement | null,
  mobile: HTMLElement | null,
): HTMLElement | null {
  if (desktop && desktop.offsetWidth > 0) return desktop;
  if (mobile && mobile.offsetWidth > 0) return mobile;
  return null;
}

function IntroLogo({
  desktopTargetRef,
  mobileTargetRef,
  onSettle,
}: {
  desktopTargetRef: RefObject<HTMLAnchorElement | null>;
  mobileTargetRef: RefObject<HTMLAnchorElement | null>;
  onSettle: () => void;
}) {
  const [phase, setPhase] = useState<IntroPhase>("pending");
  const [offset, setOffset] = useState({ x: 0, y: 0, scale: 1 });
  const sourceRef = useRef<HTMLDivElement>(null);

  // Decide, before the browser paints, whether the intro should play at all.
  useLayoutEffect(() => {
    let alreadyPlayed = false;
    try {
      alreadyPlayed = sessionStorage.getItem(INTRO_SESSION_KEY) === "true";
    } catch {
      alreadyPlayed = false;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (alreadyPlayed || reduced) {
      onSettle();
      setPhase("skip");
      return;
    }
    setPhase("intro");
    // Runs once on mount only — intentionally not re-evaluated on re-renders.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Hold, then measure the real navbar logo and kick off the move.
  useEffect(() => {
    if (phase !== "intro") return;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      const target = getVisibleLogoTarget(desktopTargetRef.current, mobileTargetRef.current);
      const source = sourceRef.current;

      if (target && source) {
        const targetRect = target.getBoundingClientRect();
        const sourceRect = source.getBoundingClientRect();
        setOffset({
          x: targetRect.left + targetRect.width / 2 - (sourceRect.left + sourceRect.width / 2),
          y: targetRect.top + targetRect.height / 2 - (sourceRect.top + sourceRect.height / 2),
          scale: sourceRect.width > 0 ? targetRect.width / sourceRect.width : 1,
        });
      }
      setPhase("moving");
    }, INTRO_HOLD_MS);

    return () => clearTimeout(timer);
  }, [phase, desktopTargetRef, mobileTargetRef]);

  // Once landed, reveal the navbar content, then dissolve the backdrop.
  useEffect(() => {
    if (phase !== "moving") return;

    const settleTimer = setTimeout(onSettle, INTRO_MOVE_MS);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem(INTRO_SESSION_KEY, "true");
      } catch {
        // Storage unavailable (e.g. private browsing) — intro will simply replay.
      }
    }, INTRO_MOVE_MS + INTRO_SETTLE_MS);

    return () => {
      clearTimeout(settleTimer);
      clearTimeout(doneTimer);
    };
  }, [phase, onSettle]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "pending" || phase === "skip") return null;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#FAF9F7]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: INTRO_FADE_MS / 1000, ease: INTRO_EASE_OUT } }}
        >
          <motion.div
            ref={sourceRef}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={
              phase === "moving"
                ? { opacity: 1, x: offset.x, y: offset.y, scale: offset.scale }
                : { opacity: 1, scale: 1 }
            }
            transition={
              phase === "moving"
                ? { duration: INTRO_MOVE_MS / 1000, ease: INTRO_EASE_MOVE }
                : { duration: 0.4, ease: INTRO_EASE_IN }
            }
            className="px-6 text-center text-[clamp(1.75rem,7vw,3.25rem)] font-semibold tracking-tight text-[#18161D]"
          >
            ScaleWithLakshya
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}