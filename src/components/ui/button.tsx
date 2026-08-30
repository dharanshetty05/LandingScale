import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Button variants
 * - primary   → brand purple gradient. Reserved for the one primary action
 *               on a section (e.g. "Book Your Strategy Call").
 * - secondary → dark outlined treatment for supporting actions.
 * - ghost     → minimal, text-only. Use sparingly (tertiary links, nav).
 *
 * States (hover / active / focus / disabled) are all defined here so every
 * button in the app behaves identically without repeated utility classes.
 */
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-150 ease-standard disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple-bright focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "gradient-brand text-white shadow-sm hover:shadow-md hover:brightness-[1.08] active:scale-[0.98] active:brightness-95",
        secondary:
          "border border-border-strong bg-surface text-foreground hover:border-brand-purple/50 hover:bg-surface-elevated active:scale-[0.98]",
        ghost:
          "text-muted-foreground hover:bg-surface hover:text-foreground active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-6 [&_svg]:size-4",
        lg: "h-14 px-8 text-base [&_svg]:size-5",
        sm: "h-9 px-4 text-[13px] [&_svg]:size-3.5",
        icon: "h-10 w-10 [&_svg]:size-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    /** Render as the passed child (e.g. a Next.js Link) instead of a <button>. */
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
export type { ButtonProps };
