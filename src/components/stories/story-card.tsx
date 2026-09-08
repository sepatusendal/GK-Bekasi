// Bang Wira - github.com/sepatusendal
import Link from "next/link";
import Image from "next/image";
import type { SanityStory } from "@/sanity/lib/types";
import { Badge } from "@/components/ui/badge";
import { BatikOverlay } from "@/components/ui/batik-pattern";
import { urlFor } from "@/sanity/lib/image";

export function StoryCard({ story }: { story: SanityStory }) {
  return (
    <Link
      href={`/stories/${story.slug}`}
      className="brutal-border brutal-shadow brutal-hover group flex flex-col bg-gk-white"
    >
      <div
        className="relative h-44 w-full overflow-hidden"
        style={{ backgroundColor: story.coverColor }}
      >
        {story.coverImage ? (
          <Image
            src={urlFor(story.coverImage).width(640).height(360).url()}
            alt=""
            fill
            className="object-cover"
          />
        ) : null}
        <BatikOverlay className="text-gk-white/25 mix-blend-soft-light" />
      </div>
      <div className="relative flex flex-1 flex-col gap-3 overflow-hidden p-5">
        <BatikOverlay className="text-gk-black/[0.04]" />
        <Badge variant="outline" className="relative w-fit">
          {story.category}
        </Badge>
        <h3 className="relative font-display text-lg font-bold uppercase leading-tight tracking-tight group-hover:text-gk-red">
          {story.title}
        </h3>
        <p className="relative line-clamp-2 flex-1 text-sm text-gk-black/70">
          {story.excerpt}
        </p>
        <div className="relative flex items-center justify-between border-t border-gk-black/10 pt-3 text-xs font-bold uppercase tracking-wide text-gk-black/60">
          <span>{story.publishDate}</span>
          <span>{story.readingTime} min baca</span>
        </div>
      </div>
    </Link>
  );
}
