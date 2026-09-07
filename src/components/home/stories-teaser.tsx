// Bang Wira — github.com/sepatusendal
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { StoryCard } from "@/components/stories/story-card";
import { getFeaturedStories } from "@/lib/data/stories";

export function StoriesTeaser() {
  const stories = getFeaturedStories().slice(0, 3);

  return (
    <section className="border-t-[2.5px] border-gk-black bg-gk-white py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Stories"
          title="Stories From the Movement"
          description="Cerita nyata dari program, event, dan orang-orang di balik gerakan GK Bekasi."
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <Reveal key={story.slug} delay={index * 0.06}>
              <StoryCard story={story} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/stories">Baca Semua Stories</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
