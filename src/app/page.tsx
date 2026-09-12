// Bang Wira - github.com/sepatusendal
import { Hero } from "@/components/home/hero";
import { ImpactNumbers } from "@/components/home/impact-numbers";
import { WhatMovesUs } from "@/components/home/what-moves-us";
import { FeaturedPrograms } from "@/components/home/featured-programs";
import { UpcomingEvents } from "@/components/home/upcoming-events";
import { ImpactStory } from "@/components/home/impact-story";
import { StoriesTeaser } from "@/components/home/stories-teaser";
import { CommunityCTA } from "@/components/home/community-cta";
import { CommunityPoll } from "@/components/home/community-poll";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import {
  getActivePoll,
  getFeaturedPrograms,
  getFeaturedStories,
  getImpactMetrics,
  getUpcomingEvents,
} from "@/sanity/lib/fetchers";

export const revalidate = 60;

export default async function Home() {
  // Sequential, not Promise.all: concurrent client.fetch() calls hang under
  // Next 16 + Turbopack dev (see note in sanity/lib/fetchers.ts). Fetching
  // once here and passing data down also avoids sibling Server Components
  // each firing their own concurrent fetch during render.
  const impactMetrics = await getImpactMetrics();
  const poll = await getActivePoll();
  const programs = await getFeaturedPrograms();
  const events = (await getUpcomingEvents()).slice(0, 3);
  const stories = (await getFeaturedStories()).slice(0, 3);

  return (
    <>
      <Hero />
      <ImpactNumbers metrics={impactMetrics} />
      <WhatMovesUs />
      {poll ? (
        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <Reveal>
              <CommunityPoll initialPoll={poll} />
            </Reveal>
          </Container>
        </section>
      ) : null}
      <StoriesTeaser stories={stories} />
      <FeaturedPrograms programs={programs} />
      <UpcomingEvents events={events} />
      <ImpactStory />
      <CommunityCTA />
    </>
  );
}
