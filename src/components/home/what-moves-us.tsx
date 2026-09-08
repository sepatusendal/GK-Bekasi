// Bang Wira - github.com/sepatusendal
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const pillars = [
  {
    number: "01",
    title: "Kepemimpinan",
    description:
      "Nempa jiwa pemimpin yang berani mimpi besar, tapi tetap pegang teguh yang benar. Bukan soal jabatan, tapi soal keberanian ambil tanggung jawab.",
    color: "bg-gk-red text-gk-white",
    big: true,
  },
  {
    number: "02",
    title: "Keadilan",
    description:
      "Berdiri di sisi yang sering dilupakan, nggak diam liat yang timpang di depan mata. Kami percaya, perubahan dimulai dari keberpihakan yang jujur.",
    color: "bg-gk-white text-gk-black",
    big: false,
  },
  {
    number: "03",
    title: "Kolaborasi",
    description:
      "Rangkul tangan dari segala arah, satu langkah bareng lintas komunitas, daerah, dan generasi. Karena gerakan besar nggak pernah lahir dari jalan sendirian.",
    color: "bg-gk-white text-gk-black",
    big: false,
  },
  {
    number: "04",
    title: "Keberanian",
    description:
      "Berani buka suara, berani ambil sikap, berani gerak duluan pas momennya datang. Diam itu gampang, yang susah adalah tetap melangkah.",
    color: "bg-gk-mustard text-gk-black",
    big: true,
  },
];

export function WhatMovesUs() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Kenapa Kami Ada"
          title="What Moves Us"
          description="Empat pilar yang jadi arah gerak GK Bekasi, dari cara kami bertumbuh sampai cara kami bikin dampak."
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.number} delay={index * 0.08}>
              <div
                className={cn(
                  "brutal-border brutal-shadow brutal-hover flex h-full flex-col justify-between gap-8 p-6 sm:p-8",
                  pillar.color,
                  pillar.big ? "sm:min-h-[260px]" : "sm:min-h-[200px]",
                )}
              >
                <span className="font-display text-4xl font-bold opacity-30 sm:text-5xl">
                  {pillar.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm opacity-80 sm:text-base">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
