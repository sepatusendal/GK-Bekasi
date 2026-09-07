"use client";
// Bang Wira - github.com/sepatusendal

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer size-5 shrink-0 bg-gk-white brutal-border rounded-sm",
        "transition-[box-shadow,transform,background-color] duration-150 outline-none",
        "focus-visible:shadow-[3px_3px_0_0_var(--gk-red)] focus-visible:border-gk-red focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5",
        "data-[state=checked]:bg-gk-red data-[state=checked]:text-gk-white data-[state=checked]:border-gk-red",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current"
      >
        <Check className="size-3.5 stroke-[3]" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
