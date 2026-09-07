// Bang Wira - github.com/sepatusendal
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";
import { DotGrid, BurstLines, MonasSkyline } from "@/components/home/hero-decor";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b-[2.5px] border-gk-black bg-gk-bg">
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 hidden h-12 w-[220px] opacity-80 md:block lg:h-16 lg:w-[300px]">
        <MonasSkyline className="h-full w-full" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:gap-4 lg:py-24">
          <div className="lg:col-span-5 lg:pt-2">
            <Reveal>
              <span className="mb-2 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.25em] text-gk-red">
                <span className="h-2 w-2 bg-gk-red" />
                Garuda Keadilan Kabupaten Bekasi
              </span>
              <p className="mb-5 text-sm italic text-gk-black/45">
                &ldquo;{siteConfig.slogan}&rdquo;
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display text-[clamp(2.75rem,5.6vw,4.75rem)] font-bold uppercase leading-[0.9] tracking-tight text-gk-black">
                Gerak
                <br />
                Bareng.{" "}
                <span className="block text-gk-red">
                  Bikin
                  <br />
                  Dampak.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-xs text-base text-gk-black/70 sm:text-lg">
                Ruang bertumbuh, bergerak, dan berkontribusi untuk anak muda
                di Kabupaten Bekasi.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button asChild variant="primary" size="lg">
                  <Link href="/join">
                    Join the Movement
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/programs">Explore Programs</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-7">
            <Reveal delay={0.3} y={40}>
              <div className="relative mx-auto mt-8 w-full max-w-2xl lg:mx-0 lg:mt-0 lg:max-w-none lg:overflow-visible">
                {/* yellow glow behind head */}
                <div
                  aria-hidden
                  className="absolute left-[30%] top-[2%] hidden h-32 w-32 rounded-full bg-gk-mustard/85 blur-[1px] sm:block sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                />
                {/* burst lines left of the glow */}
                <BurstLines
                  aria-hidden
                  className="absolute left-[19%] top-[6%] hidden h-12 w-14 sm:block lg:h-14 lg:w-16"
                />
                {/* dotted grid, left of the group */}
                <DotGrid
                  aria-hidden
                  className="absolute left-0 top-[30%] hidden h-14 w-14 text-gk-black/25 sm:block"
                />
                {/* rotated red flag panel behind the group, right-of-center */}
                <div
                  aria-hidden
                  className="absolute right-[16%] top-[4%] hidden h-[62%] w-[34%] -rotate-6 bg-gk-red/90 lg:block"
                />
                {/* large Garuda mark to the right of the group */}
                <Image
                  src="/logo-icon.jpg"
                  alt=""
                  width={900}
                  height={900}
                  className="absolute right-[2%] top-[8%] hidden h-[34%] w-[22%] object-contain opacity-95 mix-blend-multiply lg:block"
                />
                {/* handwritten tag, top-right corner */}
                <p
                  aria-hidden
                  className="absolute right-0 top-[-2%] hidden max-w-[9rem] -rotate-3 text-right text-lg leading-tight text-gk-black lg:block lg:text-xl"
                  style={{
                    fontFamily: "var(--font-marker)",
                    textShadow:
                      "0 2px 0 var(--gk-bg), 2px 0 0 var(--gk-bg), -2px 0 0 var(--gk-bg), 0 -2px 0 var(--gk-bg)",
                  }}
                >
                  Anak Muda
                  <br />
                  Bekasi Bisa!
                </p>
                {/* dotted grid + mustard square, bottom-right */}
                <DotGrid
                  aria-hidden
                  className="absolute bottom-[4%] right-[3%] hidden h-12 w-12 text-gk-black/20 lg:block"
                />
                <div
                  aria-hidden
                  className="absolute -bottom-3 -right-3 z-20 hidden h-14 w-14 bg-gk-mustard sm:block sm:h-16 sm:w-16"
                />

                <Image
                  src="/hero-illustration.png"
                  alt="Anak muda Garuda Keadilan Kabupaten Bekasi, kompak pakai batik merah, siap gerak bareng"
                  width={1930}
                  height={815}
                  priority
                  className="relative z-10 h-auto w-full"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
