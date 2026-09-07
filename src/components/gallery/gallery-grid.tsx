// Bang Wira - github.com/sepatusendal
import { galleryItems } from "@/lib/data/gallery";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";

export function GalleryGrid() {
  return <GalleryLightbox items={galleryItems} />;
}
