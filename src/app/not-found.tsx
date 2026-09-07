// Bang Wira - github.com/sepatusendal
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <span className="font-display text-[clamp(4rem,15vw,10rem)] font-bold leading-none text-gk-red">
        404
      </span>
      <h1 className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
        Halaman ini belum bergerak ke mana-mana
      </h1>
      <p className="max-w-md text-gk-black/70">
        Sepertinya lo nyasar. Halaman yang lo cari gak ketemu, balik dulu ke
        beranda, terus gerak dari sana.
      </p>
      <Button asChild size="lg">
        <Link href="/">Balik ke Beranda</Link>
      </Button>
    </Container>
  );
}
