// Bang Wira - github.com/sepatusendal
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { EventCard } from "@/components/events/event-card";
import { getUpcomingEvents } from "@/lib/data/events";

export function UpcomingEvents() {
  const events = getUpcomingEvents().slice(0, 3);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Event"
          title="Upcoming Events"
          description="Ikutan event terdekat dan ketemu langsung sama komunitas GK Bekasi."
          className="mb-12"
        />
        {events.length > 0 ? (
          <div className="flex flex-col gap-5">
            {events.map((event, index) => (
              <Reveal key={event.slug} delay={index * 0.06}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="brutal-border flex flex-col items-center gap-3 bg-gk-white p-12 text-center">
            <CalendarDays className="text-gk-black/40" size={32} />
            <p className="font-display text-lg font-bold uppercase tracking-tight text-gk-black">
              Nothing on the calendar yet
            </p>
            <p className="max-w-sm text-sm text-gk-black/60">
              Stay tuned. Something&apos;s cooking.
            </p>
          </div>
        )}
        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/events">Lihat Semua Event</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
