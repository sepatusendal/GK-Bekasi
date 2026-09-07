import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Program } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export function ProgramCard({
  program,
  index,
}: {
  program: Program;
  index?: number;
}) {
  return (
    <Link
      href={`/programs/${program.slug}`}
      className="brutal-border brutal-shadow brutal-hover group flex flex-col bg-gk-white"
    >
      <div
        className="flex h-40 items-end justify-between p-5"
        style={{ backgroundColor: program.coverColor }}
      >
        {typeof index === "number" ? (
          <span className="font-display text-4xl font-bold text-gk-white/90">
            {String(index + 1).padStart(2, "0")}
          </span>
        ) : (
          <span />
        )}
        <ArrowUpRight
          className="text-gk-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          size={28}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <Badge variant="outline" className="w-fit">
          {program.category}
        </Badge>
        <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight">
          {program.title}
        </h3>
        <p className="line-clamp-3 flex-1 text-sm text-gk-black/70">
          {program.description}
        </p>
        <div className="flex items-center justify-between border-t border-gk-black/10 pt-3 text-xs font-bold uppercase tracking-wide text-gk-black/60">
          <span>{program.location}</span>
          <span>{program.date}</span>
        </div>
      </div>
    </Link>
  );
}
