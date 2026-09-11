"use client";
// Bang Wira - github.com/sepatusendal

import { useEffect, useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { SanityGalleryItem } from "@/sanity/lib/types";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";

export function GalleryLightbox({ items }: { items: SanityGalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const open = activeIndex !== null;
  const active = activeIndex !== null ? items[activeIndex] : null;

  const goTo = (delta: number) => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + delta + items.length) % items.length;
    });
  };

  useEffect(() => {
    if (!open || items.length <= 1) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") goTo(-1);
      if (event.key === "ArrowRight") goTo(1);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, items.length]);

  return (
    <>
      <div className="grid auto-rows-[110px] grid-cols-2 gap-4 sm:auto-rows-[140px] sm:grid-cols-3 lg:auto-rows-[160px] lg:grid-cols-4 [grid-auto-flow:dense]">
        {items.map((item, index) => (
          <button
            key={item._id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={cn(
              "group relative overflow-hidden brutal-border brutal-hover text-left cursor-pointer",
              item.size === "large" && "col-span-2 row-span-2",
              item.size === "wide" && "col-span-2 row-span-1",
              item.size === "tall" && "col-span-1 row-span-2",
              item.size === "small" && "col-span-1 row-span-1",
            )}
            style={{ backgroundColor: item.color }}
          >
            {item.image ? (
              <Image
                src={urlFor(item.image).width(600).height(600).url()}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : null}
            <div
              aria-hidden
              className="absolute inset-0 opacity-20 mix-blend-overlay"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 14px)",
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-3 -right-2 select-none font-display text-[3.5rem] font-bold uppercase leading-none tracking-tight text-gk-white/15 sm:text-[4.5rem]"
            >
              {item.event.slice(0, 2)}
            </span>
            <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 sm:p-4">
              <p className="font-display text-xs font-bold uppercase tracking-wide text-gk-white sm:text-sm">
                {item.title}
              </p>
              <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wide text-gk-white/70">
                {item.category}
              </p>
            </div>
          </button>
        ))}
      </div>

      <Dialog.Root
        open={open}
        onOpenChange={(next) => {
          if (!next) setActiveIndex(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-gk-black/85 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out" />
          <Dialog.Content
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            aria-describedby={undefined}
          >
            {active ? (
              <div className="relative flex w-full max-w-3xl flex-col brutal-border brutal-shadow bg-gk-white">
                <div
                  className="relative flex h-64 w-full items-end overflow-hidden p-6 sm:h-96"
                  style={{ backgroundColor: active.color }}
                >
                  {active.image ? (
                    <Image
                      src={urlFor(active.image).width(1200).height(800).url()}
                      alt={active.title}
                      fill
                      className="object-cover"
                    />
                  ) : null}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-gk-black/80 via-gk-black/10 to-transparent"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-6 -right-4 select-none font-display text-[6rem] font-bold uppercase leading-none tracking-tight text-gk-white/15 sm:text-[9rem]"
                  >
                    {active.event.slice(0, 2)}
                  </span>
                  <Dialog.Title className="relative font-display text-2xl font-bold uppercase leading-[0.95] tracking-tight text-gk-white sm:text-4xl">
                    {active.title}
                  </Dialog.Title>
                </div>

                <div className="flex flex-col gap-3 p-6 sm:p-8">
                  <p className="text-sm text-gk-black/80 sm:text-base">
                    {active.caption}
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-gk-black/10 pt-4 text-xs font-bold uppercase tracking-wide text-gk-black/60">
                    <span>{active.event}</span>
                    <span>{active.date}</span>
                    <span>{active.category}</span>
                  </div>
                </div>

                <Dialog.Close asChild>
                  <button
                    type="button"
                    aria-label="Tutup"
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center brutal-border bg-gk-white text-gk-black brutal-hover cursor-pointer sm:right-4 sm:top-4"
                  >
                    <X size={18} />
                  </button>
                </Dialog.Close>

                {items.length > 1 ? (
                  <>
                    <button
                      type="button"
                      aria-label="Foto sebelumnya"
                      onClick={() => goTo(-1)}
                      className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center brutal-border bg-gk-white text-gk-black brutal-hover cursor-pointer sm:-left-4"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      aria-label="Foto berikutnya"
                      onClick={() => goTo(1)}
                      className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center brutal-border bg-gk-white text-gk-black brutal-hover cursor-pointer sm:-right-4"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                ) : null}
              </div>
            ) : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
