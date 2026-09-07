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
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 hidden h-10 w-[180px] opacity-75 sm:block lg:h-12 lg:w-[220px]">
        <MonasSkyline className="h-full w-full" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:items-center lg:gap-6 lg:py-20">
          <div className="lg:col-span-5">
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
              <h1 className="font-display text-[clamp(2.75rem,6.5vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-gk-black">
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
              <p className="mt-8 max-w-md text-base text-gk-black/70 sm:text-lg">
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

          <div className="lg:col-span-7">
            <Reveal delay={0.3} y={40}>
              <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl sm:aspect-[16/10] lg:aspect-auto lg:h-[540px] lg:max-w-none">
                <div
                  aria-hidden
                  className="absolute -top-2 left-[28%] hidden h-36 w-36 rounded-full bg-gk-mustard/85 blur-[1px] sm:block sm:h-48 sm:w-48"
                />
                <BurstLines
                  aria-hidden
                  className="absolute left-[18%] top-2 hidden h-14 w-16 sm:block lg:h-16 lg:w-20"
                />
                <div
                  aria-hidden
                  className="absolute right-[4%] top-[6%] hidden h-[72%] w-[52%] -rotate-6 bg-gk-red/90 lg:block"
                />
                <Image
                  src="/logo-icon.jpg"
                  alt=""
                  width={900}
                  height={900}
                  className="absolute right-0 top-[4%] hidden h-[52%] w-[42%] object-contain opacity-95 mix-blend-multiply lg:block"
                />
                <DotGrid
                  aria-hidden
                  className="absolute left-0 top-[36%] hidden h-16 w-16 text-gk-black/25 sm:block"
                />
                <DotGrid
                  aria-hidden
                  className="absolute bottom-[8%] right-[1%] hidden h-14 w-14 text-gk-black/20 lg:block"
                />
                <div
                  aria-hidden
                  className="absolute bottom-0 right-0 hidden h-14 w-14 bg-gk-mustard sm:block sm:h-16 sm:w-16"
                />
                <p
                  aria-hidden
                  className="absolute right-[2%] top-0 hidden max-w-[10rem] -rotate-3 text-right text-xl leading-tight text-gk-red lg:block lg:text-2xl"
                  style={{ fontFamily: "var(--font-marker)" }}
                >
                  Anak Muda
                  <br />
                  Bekasi Bisa!
                </p>

                <Image
                  src="/hero-illustration.png"
                  alt="Anak muda Garuda Keadilan Kabupaten Bekasi, kompak pakai batik merah, siap gerak bareng"
                  width={1672}
                  height={941}
                  priority
                  className="absolute inset-x-0 bottom-0 z-10 h-auto w-full"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
