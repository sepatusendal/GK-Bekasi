import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CommunityCTA() {
  return (
    <section className="relative overflow-hidden bg-gk-red py-20 text-gk-white sm:py-28">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[2.5px] border-gk-white/20 sm:h-80 sm:w-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 border-[2.5px] border-gk-white/20 sm:h-56 sm:w-56"
        aria-hidden
      />
      <Container>
        <div className="relative flex flex-col items-start gap-6">
          <Reveal>
            <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-tight">
              Punya Ide?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-lg text-base text-gk-white/85 sm:text-lg">
              Jangan cuma jadi penonton. Bawa ide lo. Cari teman. Kita
              gerakkan bareng.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-2 flex flex-wrap items-center gap-4">
              <Button asChild variant="outline" size="lg" className="bg-gk-white text-gk-black">
                <Link href="/join">Start a Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-gk-white"
                style={{ borderColor: "var(--gk-white)" }}
              >
                <Link href="/join">Join GK</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
