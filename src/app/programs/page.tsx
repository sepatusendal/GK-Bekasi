// Bang Wira - github.com/sepatusendal
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ProgramCard } from "@/components/programs/program-card";
import { getPrograms } from "@/sanity/lib/fetchers";
import { siteConfig } from "@/lib/site";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Program",
  description:
    "Lihat semua program GK Bekasi, mulai Leadership Camp, Aksi Sosial Bekasi, sampai kelas kreatif. Pilih yang cocok, langsung gabung.",
  keywords: siteConfig.keywords,
};

export default async function ProgramsPage() {
  const programs = await getPrograms();

  return (
    <>
      <section className="border-b border-gk-black/10 bg-gk-white py-16 sm:py-24">
        <Container>
          <Reveal>
            <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gk-red">
              Apa yang bisa kamu ikuti
            </span>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,8vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-gk-black">
              Program GK
              <br />
              Bekasi
            </h1>
            <p className="mt-6 max-w-xl text-base text-gk-black/70 sm:text-lg">
              Dari asah kepemimpinan, turun aksi sosial, sampai ngumpul komunitas,
              semua program kami dirancang buat bikin dampak nyata, bukan
              sekadar seremonial.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow={`${programs.length} Program Aktif`}
            title="Pilih & Gabung"
            description="Semua program terbuka buat anak muda Kabupaten Bekasi. Klik buat lihat detail lengkapnya."
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <Reveal key={program.slug} delay={index * 0.05}>
                <ProgramCard program={program} index={index} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
