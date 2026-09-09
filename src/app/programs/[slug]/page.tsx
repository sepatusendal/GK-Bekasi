// Bang Wira - github.com/sepatusendal
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Calendar } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { BatikOverlay } from "@/components/ui/batik-pattern";
import { RichText } from "@/components/ui/rich-text";
import { getProgramBySlug, getProgramSlugs } from "@/sanity/lib/fetchers";
import { urlFor } from "@/sanity/lib/image";
import { siteConfig } from "@/lib/site";
import Image from "next/image";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getProgramSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/programs/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const program = await getProgramBySlug(slug);

  if (!program) {
    return { title: "Program Tidak Ditemukan" };
  }

  return {
    title: program.title,
    description: program.description,
    alternates: {
      canonical: `/programs/${slug}`,
    },
    openGraph: {
      title: program.title,
      description: program.description,
      url: `${siteConfig.url}/programs/${slug}`,
      images: program.coverImage
        ? [{ url: urlFor(program.coverImage).width(1200).height(630).url() }]
        : undefined,
    },
  };
}

export default async function ProgramDetailPage(
  props: PageProps<"/programs/[slug]">,
) {
  const { slug } = await props.params;
  const program = await getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return (
    <>
      <section
        className="relative flex min-h-[40vh] items-end overflow-hidden border-b-4 border-gk-black py-16 sm:min-h-[50vh]"
        style={{ backgroundColor: program.coverColor }}
      >
        {program.coverImage ? (
          <Image
            src={urlFor(program.coverImage).width(1600).height(800).url()}
            alt={program.title}
            fill
            className="object-cover"
            priority
          />
        ) : null}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-gk-black/95 via-gk-black/70 to-gk-black/10"
        />
        <BatikOverlay className="text-gk-white/15" />
        <Container className="relative">
          <Badge variant="white" className="mb-5 w-fit">
            {program.category}
          </Badge>
          <h1 className="max-w-4xl font-display text-[clamp(2.5rem,7vw,5rem)] font-bold uppercase leading-[0.92] tracking-tight text-gk-white [text-shadow:0_2px_16px_rgba(0,0,0,0.7)]">
            {program.title}
          </h1>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
            <Reveal className="flex flex-col gap-6">
              <p className="text-lg font-bold leading-relaxed text-gk-black sm:text-xl">
                {program.description}
              </p>
              <RichText
                value={program.content}
                className="text-base leading-relaxed text-gk-black/80"
              />
            </Reveal>

            <Reveal delay={0.1}>
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
            </Reveal>
          </div>

          <Reveal className="mt-16 flex flex-col items-start gap-5 border-t-4 border-gk-black pt-12 sm:items-center sm:text-center">
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
          </Reveal>
        </Container>
      </section>
    </>
  );
}
