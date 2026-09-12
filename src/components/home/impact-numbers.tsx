// Bang Wira - github.com/sepatusendal
import { Container } from "@/components/ui/container";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import { DenyutBekasi } from "@/components/home/denyut-bekasi";
import type { SanityImpactMetric } from "@/sanity/lib/types";

export function ImpactNumbers({ metrics }: { metrics: SanityImpactMetric[] }) {
  return (
    <section className="relative overflow-hidden border-b-[2.5px] border-gk-black bg-gk-black py-16 text-gk-white sm:py-20">
      <DenyutBekasi className="opacity-80" />
      <Container className="relative">
        <span className="mb-6 block font-display text-[10px] font-bold uppercase tracking-[0.3em] text-gk-white/40">
          Denyut Gerakan
        </span>
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <Reveal key={metric._id} delay={index * 0.08}>
              <div className="flex flex-col gap-2 border-l-[2.5px] border-gk-white/20 pl-4 sm:pl-6">
                <CountUp
                  value={metric.value}
                  suffix={metric.suffix}
                  className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-none text-gk-white"
                />
                <span className="font-display text-xs font-bold uppercase tracking-[0.15em] text-gk-white/60 sm:text-sm">
                  {metric.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
