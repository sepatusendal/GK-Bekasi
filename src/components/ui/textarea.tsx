// Bang Wira - github.com/sepatusendal
import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-32 w-full resize-y bg-gk-white px-4 py-3 text-base text-gk-black brutal-border rounded-sm",
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

export { Textarea };
