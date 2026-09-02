"use client";

import { useState } from "react";
import {
MobileNav,
MobileNavHeader,
MobileNavMenu,
MobileNavToggle,
Navbar,
NavbarButton,
NavbarLogo,
NavBody,
NavItems,
} from "@/components/ui/resizable-navbar";

const navItems = [
{
name: "About",
link: "#about",
},
{
name: "Services",
link: "#services",
},
{
name: "Work",
link: "#work",
},
];

export function SiteNavbar() {
const [isMobileMenuOpen, setIsMobileMenuOpen] =
useState(false);

const closeMobileMenu = () => {
setIsMobileMenuOpen(false);
};

return ( <Navbar>
{/* Desktop */} <NavBody> <NavbarLogo />

```
    <NavItems items={navItems} />

    <NavbarButton
      href="#book"
      variant="dark"
      className="px-5 py-2.5"
    >
      Book a Call
    </NavbarButton>
  </NavBody>

  {/* Mobile */}
  <MobileNav>
    <MobileNavHeader>
      <NavbarLogo />

      <MobileNavToggle
        isOpen={isMobileMenuOpen}
        onClick={() =>
          setIsMobileMenuOpen(
            (previous) => !previous
          )
        }
      />
    </MobileNavHeader>

    <MobileNavMenu
      isOpen={isMobileMenuOpen}
      onClose={closeMobileMenu}
    >
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.link}
          onClick={closeMobileMenu}
          className="w-full rounded-xl px-3 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-black/[0.04]"
        >
          {item.name}
        </a>
      ))}

      <NavbarButton
        href="#book"
        variant="dark"
        className="mt-2 w-full"
        onClick={closeMobileMenu}
      >
        Book a Call
      </NavbarButton>
    </MobileNavMenu>
  </MobileNav>
</Navbar>


);
}
