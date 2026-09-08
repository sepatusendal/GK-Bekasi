// Bang Wira - github.com/sepatusendal
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";
import { BatikOverlay } from "@/components/ui/batik-pattern";
import { RichText } from "@/components/ui/rich-text";
import { getEventBySlug, getEventSlugs } from "@/sanity/lib/fetchers";
import { urlFor } from "@/sanity/lib/image";
import { siteConfig } from "@/lib/site";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getEventSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/events/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const event = await getEventBySlug(slug);

  if (!event) {
    return { title: "Event Tidak Ditemukan" };
  }

  return {
    title: event.title,
    description: event.description,
    alternates: {
      canonical: `/events/${slug}`,
    },
    openGraph: {
      title: event.title,
      description: event.description,
      url: `${siteConfig.url}/events/${slug}`,
      images: event.coverImage
        ? [{ url: urlFor(event.coverImage).width(1200).height(630).url() }]
        : undefined,
    },
  };
}

export default async function EventDetailPage(
  props: PageProps<"/events/[slug]">,
) {
  const { slug } = await props.params;
  const event = await getEventBySlug(slug);

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
        className="relative flex min-h-[40vh] items-end overflow-hidden border-b-4 border-gk-black py-16 sm:min-h-[50vh]"
        style={{ backgroundColor: event.coverColor }}
      >
        {event.coverImage ? (
          <Image
            src={urlFor(event.coverImage).width(1600).height(800).url()}
            alt=""
            fill
            className="object-cover"
            priority
          />
        ) : null}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-gk-black/60 via-transparent to-transparent"
        />
        <BatikOverlay className="text-gk-white/15" />
        <Container className="relative">
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
            <Reveal className="flex flex-col gap-16">
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-gk-black">
                  Tentang Event Ini
                </h2>
                <RichText
                  value={event.about}
                  className="text-base leading-relaxed text-gk-black/80"
                />
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-gk-black">
                  Agenda
                </h2>
                <ol className="flex flex-col">
                  {(event.agenda ?? []).map((slot, index) => (
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
            </Reveal>

            <Reveal delay={0.1}>
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
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
