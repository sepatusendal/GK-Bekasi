import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { EventCard } from "@/components/events/event-card";
import { events, getUpcomingEvents } from "@/lib/data/events";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Event",
  description:
    "Cek semua event GK Bekasi — gathering komunitas, aksi sosial, sampai leadership camp. Daftar sekarang sebelum kuota penuh.",
  keywords: siteConfig.keywords,
};

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = events.filter((event) => event.status === "completed");

  return (
    <>
      <section className="border-b border-gk-black/10 bg-gk-white py-16 sm:py-24">
        <Container>
          <Reveal>
            <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gk-red">
              Datang & Ikutan
            </span>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,8vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-gk-black">
              Event GK
              <br />
              Bekasi
            </h1>
            <p className="mt-6 max-w-xl text-base text-gk-black/70 sm:text-lg">
              Ketemu langsung, ngobrol bareng, dan turun aksi bareng komunitas.
              Ini semua agenda GK Bekasi yang bisa kamu ikuti.
            </p>
          </Reveal>
        </Container>
      </section>

      {events.length === 0 ? (
        <section className="py-24">
          <Container>
            <p className="text-center font-display text-xl font-bold uppercase text-gk-black/60">
              Belum ada agenda di kalender. Tunggu tanggal mainnya. Ada yang
              lagi disiapin.
            </p>
          </Container>
        </section>
      ) : (
        <>
          <section className="py-16 sm:py-24">
            <Container>
              <SectionHeader
                eyebrow={`${upcomingEvents.length} Event Mendatang`}
                title="Upcoming"
                description="Amankan slot kamu sebelum kehabisan."
                className="mb-12"
              />
              {upcomingEvents.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {upcomingEvents.map((event, index) => (
                    <Reveal key={event.slug} delay={index * 0.05}>
                      <EventCard event={event} />
                    </Reveal>
                  ))}
                </div>
              ) : (
                <p className="text-gk-black/60">
                  Belum ada event baru buat sekarang. Stay tuned, ada yang
                  lagi disiapin.
                </p>
              )}
            </Container>
          </section>

          {pastEvents.length > 0 ? (
            <section className="border-t border-gk-black/10 py-16 sm:py-24">
              <Container>
                <SectionHeader
                  eyebrow="Sudah Berlangsung"
                  title="Past Events"
                  description="Jejak kegiatan yang udah kami jalani bareng komunitas."
                  className="mb-12"
                />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {pastEvents.map((event, index) => (
                    <Reveal key={event.slug} delay={index * 0.05}>
                      <EventCard event={event} />
                    </Reveal>
                  ))}
                </div>
              </Container>
            </section>
          ) : null}
        </>
      )}
    </>
  );
}
