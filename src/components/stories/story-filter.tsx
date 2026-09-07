"use client";

import { useMemo, useState } from "react";
import type { Story, StoryCategory } from "@/lib/types";
import { StoryCard } from "@/components/stories/story-card";
import { cn } from "@/lib/utils";

const CATEGORIES: StoryCategory[] = ["News", "People", "Impact", "Ideas"];

export function StoryFilter({ stories }: { stories: Story[] }) {
  const [active, setActive] = useState<StoryCategory | "Semua">("Semua");

  const filtered = useMemo(() => {
    if (active === "Semua") return stories;
    return stories.filter((story) => story.category === active);
  }, [stories, active]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-3">
        {(["Semua", ...CATEGORIES] as const).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "brutal-border font-display text-xs font-bold uppercase tracking-wide px-4 py-2 transition-colors duration-150 cursor-pointer",
              active === category
                ? "bg-gk-red text-gk-white"
                : "bg-gk-white text-gk-black hover:bg-gk-bg",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-gk-black/60">
          Belum ada cerita untuk kategori ini.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      )}
    </div>
  );
}
