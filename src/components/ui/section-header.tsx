// Bang Wira - github.com/sepatusendal
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gk-red">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold uppercase leading-[0.95] tracking-tight text-gk-black">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base text-gk-black/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
