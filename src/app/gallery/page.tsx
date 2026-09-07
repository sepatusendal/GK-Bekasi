// Bang Wira — github.com/sepatusendal
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { galleryItems } from "@/lib/data/gallery";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Momen-momen dari kegiatan GK Bekasi — Leadership Camp, aksi sosial, kelas kreatif, sampai gathering tahunan. Klik buat lihat lebih detail.",
  keywords: siteConfig.keywords,
};

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-gk-black/10 bg-gk-white py-16 sm:py-24">
        <Container>
          <Reveal>
            <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gk-red">
              Gallery
            </span>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,8vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-gk-black">
              Momen-Momen
              <br />
              Gerakan Kami
            </h1>
            <p className="mt-6 max-w-xl text-base text-gk-black/70 sm:text-lg">
              Dari kelas literasi sampai gathering tahunan — ini potongan
              momen dari {galleryItems.length}+ kegiatan GK Bekasi. Klik tiap
              foto buat lihat ceritanya.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <GalleryGrid />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
