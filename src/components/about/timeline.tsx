// Bang Wira - github.com/sepatusendal
import { cn } from "@/lib/utils";

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export function Timeline({
  items,
  className,
}: {
  items: TimelineMilestone[];
  className?: string;
}) {
  return (
    <ol className={cn("relative flex flex-col gap-10 sm:gap-12", className)}>
      <div
        aria-hidden
        className="absolute top-2 bottom-2 left-[7px] w-[3px] bg-gk-black sm:left-[9px]"
      />
      {items.map((item) => (
        <li key={item.year} className="relative flex gap-5 pl-8 sm:gap-8 sm:pl-10">
          <span
            aria-hidden
            className="absolute left-0 top-1.5 size-4 shrink-0 rounded-full bg-gk-red brutal-border sm:size-5"
          />
          <div className="flex flex-col gap-2">
            <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gk-red">
              {item.year}
            </span>
            <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-gk-black sm:text-2xl">
              {item.title}
            </h3>
            <p className="max-w-xl text-base text-gk-black/70">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
