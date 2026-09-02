"use client";

import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
AnimatePresence,
motion,
useMotionValueEvent,
useScroll,
} from "motion/react";
import { useRef, useState, type ReactNode } from "react";

interface NavbarProps {
children: ReactNode;
className?: string;
}

interface NavBodyProps {
children: ReactNode;
className?: string;
visible?: boolean;
}

interface NavItemsProps {
items: {
name: string;
link: string;
}[];
className?: string;
onItemClick?: () => void;
}

interface MobileNavProps {
children: ReactNode;
className?: string;
visible?: boolean;
}

interface MobileNavHeaderProps {
children: ReactNode;
className?: string;
}

interface MobileNavMenuProps {
children: ReactNode;
className?: string;
isOpen: boolean;
onClose: () => void;
}

interface NavbarButtonProps {
children: ReactNode;
href?: string;
className?: string;
onClick?: () => void;
variant?: "primary" | "secondary" | "dark" | "gradient";
}

export const Navbar = ({
children,
className,
}: NavbarProps) => {
const ref = useRef<HTMLDivElement>(null);

const { scrollY } = useScroll({
target: ref,
offset: ["start start", "end start"],
});

const [visible, setVisible] = useState(false);

useMotionValueEvent(scrollY, "change", (latest) => {
setVisible(latest > 100);
});

return (
<motion.div
ref={ref}
className={cn(
"sticky inset-x-0 top-0 z-40 w-full",
className
)}
>
{children}
</motion.div>
);
};

export const NavBody = ({
children,
className,
visible = false,
}: NavBodyProps) => {
return (
<motion.div
animate={{
backdropFilter: visible
? "blur(12px)"
: "blur(0px)",
boxShadow: visible
? "0 8px 30px rgba(0, 0, 0, 0.06)"
: "none",
width: visible ? "72%" : "100%",
y: visible ? 12 : 0,
}}
transition={{
type: "spring",
stiffness: 200,
damping: 50,
}}
className={cn(
"relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between rounded-full bg-transparent px-6 py-3 lg:flex",
visible && "bg-[#F5F3EF]/85",
className
)}
>
{children}
</motion.div>
);
};

export const NavItems = ({
items,
className,
onItemClick,
}: NavItemsProps) => {
const [hovered, setHovered] = useState<number | null>(null);

return (
<motion.div
onMouseLeave={() => setHovered(null)}
className={cn(
"absolute inset-0 hidden items-center justify-center gap-1 lg:flex",
className
)}
>
{items.map((item, index) => (
<a
key={`nav-item-${index}`}
href={item.link}
onMouseEnter={() => setHovered(index)}
onClick={onItemClick}
className="relative rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950"
>
{hovered === index && (
<motion.div
layoutId="navbar-hover"
className="absolute inset-0 -z-0 rounded-full bg-black/[0.04]"
/>
)}

      <span className="relative z-10">
        {item.name}
      </span>
    </a>
  ))}
</motion.div>


);
};

export const MobileNav = ({
children,
className,
visible = false,
}: MobileNavProps) => {
return (
<motion.div
animate={{
backdropFilter: visible
? "blur(12px)"
: "blur(0px)",
boxShadow: visible
? "0 8px 30px rgba(0, 0, 0, 0.06)"
: "none",
width: visible ? "92%" : "100%",
paddingLeft: visible ? "12px" : "0px",
paddingRight: visible ? "12px" : "0px",
borderRadius: visible ? "1rem" : "2rem",
y: visible ? 12 : 0,
}}
transition={{
type: "spring",
stiffness: 200,
damping: 50,
}}
className={cn(
"relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
visible && "bg-[#F5F3EF]/90",
className
)}
>
{children}
</motion.div>
);
};

export const MobileNavHeader = ({
children,
className,
}: MobileNavHeaderProps) => {
return (
<div
className={cn(
"flex w-full flex-row items-center justify-between",
className
)}
>
{children} </div>
);
};

export const MobileNavMenu = ({
children,
className,
isOpen,
}: MobileNavMenuProps) => {
return ( <AnimatePresence>
{isOpen && (
<motion.div
initial={{
opacity: 0,
y: -8,
}}
animate={{
opacity: 1,
y: 0,
}}
exit={{
opacity: 0,
y: -8,
}}
transition={{
duration: 0.2,
}}
className={cn(
"absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-2 rounded-2xl bg-[#F5F3EF] px-5 py-6 shadow-xl",
className
)}
>
{children}
</motion.div>
)} </AnimatePresence>
);
};

export const MobileNavToggle = ({
isOpen,
onClick,
}: {
isOpen: boolean;
onClick: () => void;
}) => {
return (
<button
type="button"
onClick={onClick}
aria-label={isOpen ? "Close menu" : "Open menu"}
className="relative z-20 flex items-center justify-center text-neutral-950"
>
{isOpen ? ( <IconX size={24} strokeWidth={1.8} />
) : ( <IconMenu2 size={24} strokeWidth={1.8} />
)} </button>
);
};

export const NavbarLogo = () => {
return ( <a
   href="/"
   className="relative z-20 flex items-center"
 > <span className="text-lg font-semibold tracking-tight text-neutral-950">
ScaleWithLakshya </span> </a>
);
};

export const NavbarButton = ({
children,
href = "#",
className,
onClick,
variant = "primary",
}: NavbarButtonProps) => {
const baseStyles =
"relative z-20 inline-flex items-center justify-center rounded-full px-4 py-2 text-center text-sm font-semibold transition duration-200 hover:-translate-y-0.5";

const variantStyles = {
primary: "bg-white text-black shadow-sm",
secondary: "bg-transparent text-neutral-900",
dark: "bg-neutral-950 text-white shadow-sm hover:bg-neutral-800",
gradient:
"bg-gradient-to-b from-violet-500 to-violet-700 text-white shadow-sm",
};

return (
<a
href={href}
onClick={onClick}
className={cn(
baseStyles,
variantStyles[variant],
className
)}
>
{children} </a>
);
};
