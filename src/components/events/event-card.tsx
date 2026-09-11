// Bang Wira - github.com/sepatusendal
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { SanityEvent } from "@/sanity/lib/types";
import { Badge } from "@/components/ui/badge";
import { BatikOverlay } from "@/components/ui/batik-pattern";
import { cn } from "@/lib/utils";

const statusLabel: Record<SanityEvent["status"], string> = {
  "registration-open": "Register",
  "registration-closed": "Registrasi Ditutup",
  completed: "Selesai",
};

export function EventCard({ event }: { event: SanityEvent }) {
  const slotsLeft =
    event.capacity > 0
      ? Math.max(event.capacity - event.registered, 0)
      : null;
  const isAlmostFull = slotsLeft !== null && slotsLeft <= event.capacity * 0.2;

  return (
    <Link
      href={`/events/${event.slug}`}
      className="brutal-border brutal-shadow brutal-hover grid grid-cols-[auto_1fr] gap-5 bg-gk-white p-5 sm:p-6"
    >
      <div
        className="relative flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center overflow-hidden brutal-border text-gk-white sm:h-24 sm:w-24"
        style={{ backgroundColor: event.coverColor }}
      >
        <BatikOverlay className="text-gk-white/25" />
        <span className="relative font-display text-2xl font-bold leading-none sm:text-3xl">
          {event.day}
        </span>
        <span className="relative font-display text-xs font-bold uppercase tracking-widest">
          {event.month}
        </span>
      </div>

      <div className="flex flex-col justify-between gap-3">
        <div>
          <Badge variant="outline" className="mb-2 w-fit">
            {event.category}
          </Badge>
          <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-tight sm:text-xl">
            {event.title}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-gk-black/60">
            <MapPin size={13} /> {event.location} · {event.time}
          </p>
          {event.status === "registration-open" && slotsLeft !== null ? (
            <p
              className={cn(
                "mt-1 text-xs font-bold uppercase tracking-wide",
                isAlmostFull ? "text-gk-red" : "text-gk-black/60",
              )}
            >
              {slotsLeft > 0 ? `Sisa ${slotsLeft} slot` : "Slot penuh"}
            </p>
          ) : null}
        </div>
        <div className="relative flex items-center gap-1.5 font-display text-sm font-bold uppercase tracking-wide text-gk-red">
          {statusLabel[event.status]}
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}
