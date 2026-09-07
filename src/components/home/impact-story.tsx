// Bang Wira — github.com/sepatusendal
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";

export function ImpactStory() {
  return (
    <section className="border-y-[2.5px] border-gk-black bg-gk-mustard py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Badge variant="black" className="mb-5 w-fit">
                Impact Story
              </Badge>
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-gk-black">
                One Action.
                <br />
                One Change.
              </h2>
              <p className="mt-6 max-w-md text-sm text-gk-black/70 sm:text-base">
                Kelas Literasi di Kecamatan Cibitung mulai dari satu RW,
                dua puluh anak. Konsisten jalan tiap minggu, dari mulut ke
                mulut warga ikut nyebar — sekarang warga sekitar bahkan ikut
                jadi relawan pengajar dadakan tiap akhir pekan.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.12} y={32}>
              <div className="grid grid-cols-2 gap-5 sm:gap-6">
                <div className="brutal-border brutal-shadow flex flex-col items-center justify-center gap-2 bg-gk-white p-8 text-center sm:p-10">
                  <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gk-black/50">
                    Before
                  </span>
                  <span className="font-display text-6xl font-bold leading-none text-gk-black sm:text-7xl">
                    20
                  </span>
                  <span className="text-sm text-gk-black/60">
                    anak muda ikut kelas
                  </span>
                </div>
                <div className="brutal-border brutal-shadow flex flex-col items-center justify-center gap-2 bg-gk-red p-8 text-center text-gk-white sm:p-10">
                  <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gk-white/70">
                    After
                  </span>
                  <span className="font-display text-6xl font-bold leading-none sm:text-7xl">
                    85
                  </span>
                  <span className="text-sm text-gk-white/80">
                    anak muda berpartisipasi
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
