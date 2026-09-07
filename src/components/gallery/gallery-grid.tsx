// Bang Wira - github.com/sepatusendal
import { getGalleryItems } from "@/sanity/lib/fetchers";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";

export async function GalleryGrid() {
  const galleryItems = await getGalleryItems();
  return <GalleryLightbox items={galleryItems} />;
}
