// Bang Wira - github.com/sepatusendal
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";
import {
  DotGrid,
  BurstLines,
  MonasSkyline,
  RingOutline,
  Sparkle,
  PlusMark,
  ColorSwatch,
} from "@/components/home/hero-decor";
import { ArtworkTilt } from "@/components/home/hero-artwork-frame";

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
            <div className="mt-7 flex w-max max-w-[calc(100vw-3rem)] flex-row flex-wrap items-center gap-2.5">
              <Button asChild variant="primary" size="sm">
                <Link href="/join">
                  Join the Movement
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/programs">Explore Programs</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Decor cluster: sits as its own layer directly on the section (not inside the
          Reveal/motion wrapper below), so mix-blend-mode isn't isolated by the
          transform-driven stacking context that framer-motion adds to its element. */}
      <div className="pointer-events-none absolute right-[4%] top-[6%] z-10 hidden lg:block">
        <div className="relative h-32 w-72 xl:h-36 xl:w-80">
          <div className="animate-gk-pulse-soft absolute right-[38%] top-0 h-24 w-24 rounded-full bg-gk-mustard/85 blur-[2px] xl:h-28 xl:w-28" />
          <BurstLines className="animate-gk-wiggle absolute right-[58%] top-1 h-11 w-13 xl:h-12 xl:w-14" />
          <RingOutline className="animate-gk-pulse-soft absolute right-[8%] top-[2%] h-10 w-10 text-gk-red xl:h-12 xl:w-12" />
          <Sparkle className="animate-gk-spin-slow absolute right-0 top-[46%] h-7 w-7 text-gk-blue xl:h-8 xl:w-8" />
          <PlusMark className="animate-gk-float absolute right-[36%] bottom-0 h-5 w-5 text-gk-black/50" />
          <div className="absolute right-[2%] bottom-1 h-4 w-4 rounded-full bg-gk-red" />
          <ColorSwatch className="absolute -right-2 top-[64%] h-10 w-10 xl:h-11 xl:w-11" />
          <p
            className="absolute right-[16%] top-[8%] max-w-[8rem] -rotate-3 text-right text-lg leading-tight text-gk-black xl:text-xl"
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
          <DotGrid
            aria-hidden
            className="absolute left-[16%] top-[4%] hidden h-10 w-10 text-gk-black/15 lg:block"
          />
          <DotGrid
            aria-hidden
            className="absolute -right-3 top-[38%] hidden h-12 w-12 text-gk-black/20 xl:block"
          />

          <RingOutline
            aria-hidden
            className="animate-gk-pulse-soft absolute -left-3 bottom-[18%] hidden h-9 w-9 text-gk-red/70 sm:block"
            style={{ animationDelay: "0.4s" }}
          />
          <RingOutline
            aria-hidden
            className="animate-gk-pulse-soft absolute right-[10%] -top-3 hidden h-7 w-7 text-gk-mustard sm:block"
            style={{ animationDelay: "1s" }}
          />
          <Sparkle
            aria-hidden
            className="animate-gk-spin-slow absolute left-[6%] bottom-[4%] hidden h-6 w-6 text-gk-mustard sm:block"
          />
          <Sparkle
            aria-hidden
            className="animate-gk-spin-slow absolute -left-2 top-[6%] hidden h-5 w-5 text-gk-red/80 lg:block"
            style={{ animationDirection: "reverse" }}
          />
          <PlusMark
            aria-hidden
            className="animate-gk-float absolute left-[30%] -top-2 hidden h-5 w-5 text-gk-black/40 lg:block"
          />
          <PlusMark
            aria-hidden
            className="animate-gk-float absolute -left-4 top-[46%] hidden h-4 w-4 text-gk-black/30 sm:block"
            style={{ animationDelay: "0.8s" }}
          />

          <div
            aria-hidden
            className="absolute -bottom-3 -right-3 z-20 hidden h-14 w-14 bg-gk-mustard sm:block sm:h-16 sm:w-16"
          />
          <div
            aria-hidden
            className="absolute bottom-[6%] right-[7%] z-0 hidden h-16 w-16 -rotate-6 bg-gk-red/90 sm:block lg:h-20 lg:w-20"
          />
          <div
            aria-hidden
            className="absolute -left-3 -top-3 hidden h-8 w-8 rounded-full bg-gk-blue sm:block"
          />
          <div
            aria-hidden
            className="absolute -right-2 bottom-[14%] hidden h-6 w-6 -rotate-12 bg-gk-red sm:block"
          />
          <ColorSwatch
            aria-hidden
            className="absolute -left-5 top-[64%] hidden h-11 w-11 lg:block"
          />

          <ArtworkTilt className="relative z-10 h-auto w-full origin-bottom lg:absolute lg:bottom-0 lg:right-0 lg:h-auto lg:w-full">
            <Image
              src="/hero-illustration.png"
              alt="Anak muda Garuda Keadilan Kabupaten Bekasi, kompak pakai batik merah, siap gerak bareng"
              width={1402}
              height={1122}
              priority
              className="h-auto w-full drop-shadow-[6px_10px_0_rgba(17,17,17,0.12)]"
            />
          </ArtworkTilt>
        </div>
      </Reveal>
    </section>
  );
}
