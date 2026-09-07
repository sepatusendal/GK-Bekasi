// Bang Wira - github.com/sepatusendal
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b-[2.5px] border-gk-black bg-gk-bg pt-16 sm:pt-20">
      <Container>
        <div className="max-w-3xl">
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
            <h1 className="font-display text-[clamp(2.75rem,9vw,7.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-gk-black">
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
            <p className="mt-8 max-w-xl text-base text-gk-black/70 sm:text-lg">
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
      </Container>

      <Reveal delay={0.3} y={40}>
        <div className="relative mt-10 sm:mt-14">
          <div className="mx-auto w-full max-w-6xl px-4">
            <Image
              src="/hero-illustration.png"
              alt="Anak muda Garuda Keadilan Kabupaten Bekasi, kompak pakai batik merah, siap gerak bareng"
              width={1672}
              height={941}
              priority
              className="mx-auto h-auto w-full max-w-4xl"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
