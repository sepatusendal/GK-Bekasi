// Bang Wira - github.com/sepatusendal
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { StoryFilter } from "@/components/stories/story-filter";
import { getStories } from "@/sanity/lib/fetchers";
import { siteConfig } from "@/lib/site";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Cerita dari gerakan GK Bekasi, mulai berita program, kisah anak muda, dampak nyata, sampai gagasan segar dari komunitas.",
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/stories",
  },
  openGraph: {
    title: "Stories GK Bekasi",
    description:
      "Cerita dari gerakan GK Bekasi, mulai berita program, kisah anak muda, sampai dampak nyata.",
    url: `${siteConfig.url}/stories`,
  },
};

export default async function StoriesPage() {
  const stories = await getStories();

  return (
    <>
      <section className="border-b border-gk-black/10 bg-gk-white py-16 sm:py-24">
        <Container>
          <Reveal>
            <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gk-red">
              Stories
            </span>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,8vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-gk-black">
              Stories From
              <br />
              The Movement
            </h1>
            <p className="mt-6 max-w-xl text-base text-gk-black/70 sm:text-lg">
              Kumpulan cerita dari lapangan, mulai berita kegiatan, kisah anak muda
              yang bertumbuh, dampak yang kerasa, sampai gagasan yang bikin
              mikir. Semua langsung dari gerakan GK Bekasi.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <StoryFilter stories={stories} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
