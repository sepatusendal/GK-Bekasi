import { Hero } from "@/components/home/hero";
import { ImpactNumbers } from "@/components/home/impact-numbers";
import { WhatMovesUs } from "@/components/home/what-moves-us";
import { FeaturedPrograms } from "@/components/home/featured-programs";
import { UpcomingEvents } from "@/components/home/upcoming-events";
import { ImpactStory } from "@/components/home/impact-story";
import { StoriesTeaser } from "@/components/home/stories-teaser";
import { CommunityCTA } from "@/components/home/community-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactNumbers />
      <WhatMovesUs />
      <FeaturedPrograms />
      <UpcomingEvents />
      <ImpactStory />
      <StoriesTeaser />
      <CommunityCTA />
    </>
  );
}
