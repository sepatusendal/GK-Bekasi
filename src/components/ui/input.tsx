// Bang Wira — github.com/sepatusendal
import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 w-full bg-gk-white px-4 py-2 text-base text-gk-black brutal-border rounded-sm",
        "placeholder:text-gk-black/40",
        "transition-[box-shadow,transform] duration-150 outline-none",
        "focus-visible:shadow-[4px_4px_0_0_var(--gk-red)] focus-visible:border-gk-red focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-[invalid=true]:border-gk-red aria-[invalid=true]:focus-visible:shadow-[4px_4px_0_0_var(--gk-red)]",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
