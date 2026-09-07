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
    <section className="relative overflow-hidden border-b-[2.5px] border-gk-black bg-gk-bg lg:min-h-[78vh]">
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 hidden h-14 w-[240px] opacity-80 md:block lg:h-20 lg:w-[320px]">
        <MonasSkyline className="h-full w-full" />
      </div>

      {/* Text block: normal flow, top-left, kept clear of the artwork zone at all times */}
      <Container className="relative z-20">
        <div className="max-w-[22rem] pt-8 pb-10 sm:pt-10 lg:max-w-[min(24rem,34vw)] lg:pt-12">
          <Reveal>
            <span className="mb-2 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.25em] text-gk-red">
              <span className="h-2 w-2 bg-gk-red" />
              Garuda Keadilan Kabupaten Bekasi
            </span>
            <p className="mb-4 text-sm italic text-gk-black/45">
              &ldquo;{siteConfig.slogan}&rdquo;
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-[clamp(2.75rem,5.6vw,4.25rem)] font-bold uppercase leading-[0.9] tracking-tight text-gk-black">
              Gerak
              <br />
              Bareng.
              <br />
              <span className="text-gk-red">
                Bikin
                <br />
                Dampak.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-base text-gk-black/70 sm:text-lg">
              Ruang bertumbuh, bergerak, dan berkontribusi untuk anak muda
              di Kabupaten Bekasi.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-7 flex flex-col items-start gap-4">
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
      </Container>

      {/* Decor cluster: sits as its own layer directly on the section (not inside the
          Reveal/motion wrapper below), so mix-blend-mode isn't isolated by the
          transform-driven stacking context that framer-motion adds to its element. */}
      <div className="pointer-events-none absolute right-[4%] top-[8%] z-10 hidden lg:block">
        <div className="relative h-28 w-64 xl:h-32 xl:w-72">
          <div className="absolute right-[30%] top-0 h-24 w-24 rounded-full bg-gk-mustard/85 blur-[2px] xl:h-28 xl:w-28" />
          <BurstLines className="absolute right-[46%] top-1 h-11 w-13 xl:h-12 xl:w-14" />
          <Image
            src="/logo-icon.jpg"
            alt=""
            width={900}
            height={900}
            className="absolute right-0 top-0 h-24 w-24 object-contain opacity-95 mix-blend-multiply xl:h-28 xl:w-28"
          />
          <p
            className="absolute right-[24%] top-0 max-w-[8rem] -rotate-3 text-right text-lg leading-tight text-gk-black xl:text-xl"
            style={{ fontFamily: "var(--font-marker)" }}
          >
            Anak Muda
            <br />
            Bekasi Bisa!
          </p>
        </div>
      </div>

      {/* Artwork: oversized, bled to the right/bottom edge of the section. */}
      <Reveal
        delay={0.3}
        y={40}
        className="relative z-10 mt-2 flex justify-center px-6 sm:px-10 lg:absolute lg:bottom-0 lg:right-0 lg:top-[14%] lg:mt-0 lg:block lg:justify-start lg:px-0"
      >
        <div className="relative w-full max-w-md sm:max-w-lg lg:h-full lg:w-[58vw] lg:max-w-[900px]">
          <DotGrid
            aria-hidden
            className="absolute -left-4 top-[24%] hidden h-14 w-14 text-gk-black/25 sm:block"
          />
          <DotGrid
            aria-hidden
            className="absolute bottom-[8%] right-[2%] hidden h-12 w-12 text-gk-black/20 lg:block"
          />
          <div
            aria-hidden
            className="absolute -bottom-3 -right-3 z-20 hidden h-14 w-14 bg-gk-mustard sm:block sm:h-16 sm:w-16"
          />

          <Image
            src="/hero-illustration.png"
            alt="Anak muda Garuda Keadilan Kabupaten Bekasi, kompak pakai batik merah, siap gerak bareng"
            width={1402}
            height={1122}
            priority
            className="relative z-10 h-auto w-full lg:absolute lg:bottom-0 lg:right-0 lg:h-auto lg:w-full"
          />
        </div>
      </Reveal>
    </section>
  );
}
