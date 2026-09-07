// Bang Wira - github.com/sepatusendal
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-display font-bold uppercase tracking-tight transition-all duration-150 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-gk-red text-gk-white brutal-border brutal-shadow brutal-hover",
        black:
          "bg-gk-black text-gk-white brutal-border brutal-shadow brutal-hover",
        outline:
          "bg-transparent text-gk-black brutal-border brutal-shadow brutal-hover",
        ghost:
          "bg-transparent text-gk-black hover:text-gk-red underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
        sm: "px-4 py-2 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
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
