import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Calendar } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { programs, getProgramBySlug } from "@/lib/data/programs";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata(
  props: PageProps<"/programs/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const program = getProgramBySlug(slug);

  if (!program) {
    return { title: "Program Tidak Ditemukan" };
  }

  return {
    title: program.title,
    description: program.description,
    openGraph: {
      title: program.title,
      description: program.description,
    },
  };
}

export default async function ProgramDetailPage(
  props: PageProps<"/programs/[slug]">,
) {
  const { slug } = await props.params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return (
    <>
      <section
        className="flex min-h-[40vh] items-end border-b-4 border-gk-black py-16 sm:min-h-[50vh]"
        style={{ backgroundColor: program.coverColor }}
      >
        <Container>
          <Badge variant="white" className="mb-5 w-fit">
            {program.category}
          </Badge>
          <h1 className="max-w-4xl font-display text-[clamp(2.5rem,7vw,5rem)] font-bold uppercase leading-[0.92] tracking-tight text-gk-white">
            {program.title}
          </h1>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
            <div className="flex flex-col gap-6">
              <p className="text-lg font-bold leading-relaxed text-gk-black sm:text-xl">
                {program.description}
              </p>
              <div className="flex flex-col gap-4 text-base leading-relaxed text-gk-black/80">
                {program.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="flex h-fit flex-col gap-4 brutal-border brutal-shadow bg-gk-white p-6">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 flex-shrink-0 text-gk-red" />
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-wide text-gk-black/60">
                    Lokasi
                  </p>
                  <p className="text-sm font-bold text-gk-black">
                    {program.location}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar
                  size={20}
                  className="mt-0.5 flex-shrink-0 text-gk-red"
                />
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-wide text-gk-black/60">
                    Jadwal
                  </p>
                  <p className="text-sm font-bold text-gk-black">
                    {program.date}
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-16 flex flex-col items-start gap-5 border-t-4 border-gk-black pt-12 sm:items-center sm:text-center">
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-gk-black sm:text-3xl">
              Tertarik Ikut Program Ini?
            </h2>
            <p className="max-w-md text-sm text-gk-black/70 sm:text-base">
              Gabung sekarang dan jadi bagian dari gerakan anak muda Bekasi
              yang bikin dampak nyata.
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/join">Gabung Program Ini</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
