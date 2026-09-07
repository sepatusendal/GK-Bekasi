// Bang Wira - github.com/sepatusendal
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b-[2.5px] border-gk-black bg-gk-bg pt-16 pb-20 sm:pt-20 sm:pb-28">
      <Container>
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <span className="mb-5 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.25em] text-gk-red">
                <span className="h-2 w-2 bg-gk-red" />
                Garuda Keadilan Kabupaten Bekasi
              </span>
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

          <div className="relative lg:col-span-4">
            <Reveal delay={0.2} y={32}>
              <div className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[340px]">
                <div className="absolute inset-0 translate-x-4 translate-y-4 bg-gk-black" />
                <div className="brutal-border absolute inset-0 flex items-center justify-center bg-gk-red">
                  <svg
                    viewBox="0 0 200 200"
                    className="h-3/5 w-3/5"
                    fill="none"
                  >
                    <path
                      d="M30 150 L100 40 L170 150 Z"
                      stroke="var(--gk-white)"
                      strokeWidth="8"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <circle
                      cx="100"
                      cy="110"
                      r="14"
                      fill="var(--gk-white)"
                    />
                  </svg>
                </div>
                <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full border-[2.5px] border-gk-black bg-gk-mustard sm:h-20 sm:w-20" />
                <div className="absolute -bottom-5 -left-5 h-10 w-10 border-[2.5px] border-gk-black bg-gk-blue sm:h-12 sm:w-12" />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
