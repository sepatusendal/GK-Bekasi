// Bang Wira - github.com/sepatusendal
import Link from "next/link";
import type { Story } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { BatikOverlay } from "@/components/ui/batik-pattern";

export function StoryCard({ story }: { story: Story }) {
  return (
    <Link
      href={`/stories/${story.slug}`}
      className="brutal-border brutal-shadow brutal-hover group flex flex-col bg-gk-white"
    >
      <div
        className="relative h-44 w-full overflow-hidden"
        style={{ backgroundColor: story.coverColor }}
      >
        <BatikOverlay className="text-gk-white/25" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <Badge variant="outline" className="w-fit">
          {story.category}
        </Badge>
        <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-tight group-hover:text-gk-red">
          {story.title}
        </h3>
        <p className="line-clamp-2 flex-1 text-sm text-gk-black/70">
          {story.excerpt}
        </p>
        <div className="flex items-center justify-between border-t border-gk-black/10 pt-3 text-xs font-bold uppercase tracking-wide text-gk-black/60">
          <span>{story.publishDate}</span>
          <span>{story.readingTime} min baca</span>
        </div>
      </div>
    </Link>
  );
}
