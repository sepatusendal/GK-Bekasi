// Bang Wira — github.com/sepatusendal
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ProgramCard } from "@/components/programs/program-card";
import { getFeaturedPrograms } from "@/lib/data/programs";

export function FeaturedPrograms() {
  const programs = getFeaturedPrograms();

  return (
    <section className="border-t-[2.5px] border-gk-black bg-gk-white py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Program"
          title="What's Moving in Bekasi?"
          description="Program-program aktif yang bisa langsung lo ikuti untuk mulai bergerak bareng GK Bekasi."
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <Reveal key={program.slug} delay={index * 0.06}>
              <ProgramCard program={program} index={index} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/programs">Explore All Programs</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
