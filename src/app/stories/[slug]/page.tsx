// Bang Wira - github.com/sepatusendal
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, User } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";
import { BatikOverlay } from "@/components/ui/batik-pattern";
import { RichText } from "@/components/ui/rich-text";
import { getStoryBySlug, getStorySlugs } from "@/sanity/lib/fetchers";
import { urlFor } from "@/sanity/lib/image";
import { siteConfig } from "@/lib/site";
import { formatDate } from "@/lib/utils";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getStorySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/stories/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const story = await getStoryBySlug(slug);

  if (!story) {
    return { title: "Cerita Tidak Ditemukan" };
  }

  return {
    title: story.title,
    description: story.excerpt,
    alternates: {
      canonical: `/stories/${slug}`,
    },
    openGraph: {
      title: story.title,
      description: story.excerpt,
      url: `${siteConfig.url}/stories/${slug}`,
      images: story.coverImage
        ? [{ url: urlFor(story.coverImage).width(1200).height(630).url() }]
        : undefined,
    },
  };
}

export default async function StoryDetailPage(
  props: PageProps<"/stories/[slug]">,
) {
  const { slug } = await props.params;
  const story = await getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  return (
    <>
      <section
        className="relative flex min-h-[40vh] items-end overflow-hidden border-b-4 border-gk-black py-16 sm:min-h-[50vh]"
        style={{ backgroundColor: story.coverColor }}
      >
        {story.coverImage ? (
          <Image
            src={urlFor(story.coverImage).width(1600).height(800).url()}
            alt={story.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        ) : null}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-gk-black/95 via-gk-black/70 to-gk-black/10"
        />
        <BatikOverlay className="text-gk-white/15" />
        <Container className="relative">
          <Badge variant="white" className="mb-5 w-fit">
            {story.category}
          </Badge>
          <h1 className="max-w-4xl font-display text-[clamp(2.5rem,7vw,5rem)] font-bold uppercase leading-[0.92] tracking-tight text-gk-white [text-shadow:0_2px_16px_rgba(0,0,0,0.7)]">
            {story.title}
          </h1>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px]">
            <Reveal className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-gk-black/10 pb-6 text-xs font-bold uppercase tracking-wide text-gk-black/60">
                <span className="flex items-center gap-2">
                  <User size={16} className="text-gk-red" />
                  {story.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-gk-red" />
                  {formatDate(story.publishDate)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-gk-red" />
                  {story.readingTime} min baca
                </span>
              </div>

              <p className="text-lg font-bold leading-relaxed text-gk-black sm:text-xl">
                {story.excerpt}
              </p>

              <RichText
                value={story.content}
                className="gap-5 text-base leading-relaxed text-gk-black/80 sm:text-lg"
              />

              {story.tags && story.tags.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2 border-t border-gk-black/10 pt-6">
                  {[...new Set(story.tags)].map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </Reveal>

            <Reveal delay={0.1}>
              <aside className="flex h-fit flex-col gap-4 brutal-border brutal-shadow bg-gk-white p-6">
                <p className="font-display text-xs font-bold uppercase tracking-wide text-gk-black/60">
                  Mau cerita kayak gini juga?
                </p>
                <p className="text-sm text-gk-black/70">
                  Gabung jadi bagian gerakan dan bikin cerita dampakmu sendiri
                  bareng GK Bekasi.
                </p>
                <Button variant="primary" size="default" asChild>
                  <Link href="/join">Gabung Sekarang</Link>
                </Button>
                <Button variant="outline" size="default" asChild>
                  <Link href="/stories">Lihat Cerita Lain</Link>
                </Button>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
