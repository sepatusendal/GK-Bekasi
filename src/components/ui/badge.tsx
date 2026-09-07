// Bang Wira - github.com/sepatusendal
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-display font-bold uppercase tracking-wide text-xs px-3 py-1 brutal-border",
  {
    variants: {
      variant: {
        red: "bg-gk-red text-gk-white",
        black: "bg-gk-black text-gk-white",
        mustard: "bg-gk-mustard text-gk-black",
        white: "bg-gk-white text-gk-black",
        outline: "bg-transparent text-gk-black",
      },
    },
    defaultVariants: {
      variant: "black",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
