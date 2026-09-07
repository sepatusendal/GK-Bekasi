import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { events, getEventBySlug } from "@/lib/data/events";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata(
  props: PageProps<"/events/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const event = getEventBySlug(slug);

  if (!event) {
    return { title: "Event Tidak Ditemukan" };
  }

  return {
    title: event.title,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
    },
  };
}

export default async function EventDetailPage(
  props: PageProps<"/events/[slug]">,
) {
  const { slug } = await props.params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const slotsLeft = Math.max(event.capacity - event.registered, 0);
  const percentFull = Math.min(
    Math.round((event.registered / event.capacity) * 100),
    100,
  );

  return (
    <>
      <section
        className="flex min-h-[40vh] items-end border-b-4 border-gk-black py-16 sm:min-h-[50vh]"
        style={{ backgroundColor: event.coverColor }}
      >
        <Container>
          <Badge variant="white" className="mb-5 w-fit">
            {event.category}
          </Badge>
          <h1 className="max-w-4xl font-display text-[clamp(2.5rem,7vw,5rem)] font-bold uppercase leading-[0.92] tracking-tight text-gk-white">
            {event.title}
          </h1>
        </Container>
      </section>

      <section className="border-b border-gk-black/10 bg-gk-white py-8">
        <Container>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <div className="flex items-center gap-2.5">
              <Calendar size={20} className="text-gk-red" />
              <span className="text-sm font-bold text-gk-black">
                {event.date}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock size={20} className="text-gk-red" />
              <span className="text-sm font-bold text-gk-black">
                {event.time}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin size={20} className="text-gk-red" />
              <span className="text-sm font-bold text-gk-black">
                {event.location}
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-gk-black">
                  Tentang Event Ini
                </h2>
                <div className="flex flex-col gap-4 text-base leading-relaxed text-gk-black/80">
                  {event.about.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-gk-black">
                  Agenda
                </h2>
                <ol className="flex flex-col">
                  {event.agenda.map((slot, index) => (
                    <li
                      key={index}
                      className="flex gap-5 border-l-2 border-gk-black/15 py-3 pl-5 first:pt-0 last:pb-0"
                    >
                      <span className="w-20 flex-shrink-0 font-display text-sm font-bold uppercase text-gk-red">
                        {slot.time}
                      </span>
                      <span className="text-sm text-gk-black/80 sm:text-base">
                        {slot.item}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <aside className="flex h-fit flex-col gap-6 brutal-border brutal-shadow bg-gk-white p-6">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-wide text-gk-black/60">
                  Penyelenggara
                </p>
                <p className="mt-1 text-sm font-bold text-gk-black">
                  {event.organizer}
                </p>
              </div>

              <div>
                <p className="font-display text-xs font-bold uppercase tracking-wide text-gk-black/60">
                  Kapasitas
                </p>
                <p className="mt-1 text-sm font-bold text-gk-black">
                  {event.registered} dari {event.capacity} slot terisi
                </p>
                <div className="mt-2 h-3 w-full brutal-border bg-gk-bg">
                  <div
                    className="h-full bg-gk-red"
                    style={{ width: `${percentFull}%` }}
                  />
                </div>
                {event.status === "registration-open" ? (
                  <p className="mt-1.5 text-xs font-bold uppercase tracking-wide text-gk-black/60">
                    Sisa {slotsLeft} slot
                  </p>
                ) : null}
              </div>

              <div>
                {event.status === "registration-open" ? (
                  <Button variant="primary" size="lg" className="w-full" asChild>
                    <a href={event.registrationUrl}>Register Now</a>
                  </Button>
                ) : event.status === "registration-closed" ? (
                  <Badge
                    variant="outline"
                    className="w-full justify-center py-3 text-gk-black/50"
                  >
                    Registration Closed
                  </Badge>
                ) : (
                  <Badge variant="black" className="w-full justify-center py-3">
                    Event Selesai
                  </Badge>
                )}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
