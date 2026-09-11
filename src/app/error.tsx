"use client";
// Bang Wira - github.com/sepatusendal

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <span className="font-display text-[clamp(4rem,15vw,10rem)] font-bold leading-none text-gk-red">
        OOPS
      </span>
      <h1 className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
        Waduh, halaman ini lagi drama dikit bang
      </h1>
      <p className="max-w-md text-gk-black/70">
        Bukan salah ente kok, sumpah. Ada sesuatu yang nyangkut pas nyoba
        muat halaman ini. Pencet coba lagi, kalau masih gabisa juga ya
        udah, cabut dulu ke beranda, ntar balik lagi kalau udah baikan.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button size="lg" onClick={() => reset()}>
          Coba Lagi
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/">Balik ke Beranda</Link>
        </Button>
      </div>
    </Container>
  );
}
