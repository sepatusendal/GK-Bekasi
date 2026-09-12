// Bang Wira - github.com/sepatusendal
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PHRASES = [
  "Lagi manasin semangat pagi...",
  "Otw ngecas energi anak muda...",
  "Bentar, Garuda-nya lagi pemanasan...",
  "Lagi packing ide-ide keren...",
  "Nyari kuota buat niat baik...",
  "Sabar, ini bukan buffering, ini gaya...",
  "Lagi ngumpulin anak muda satu Bekasi...",
  "Rapiin barisan dulu sebelum gerak...",
  "Loading niat gabung gerakan...",
  "Nunggu semangat penuh 100 persen...",
];

export function LoadingScreen() {
  const [phrase, setPhrase] = useState(PHRASES[0]);

  useEffect(() => {
    // Randomized only after mount so server and client render the same
    // initial phrase — picking it during render would mismatch on hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPhrase(PHRASES[Math.floor(Math.random() * PHRASES.length)]);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-gk-bg">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <span className="absolute inset-0 animate-spin rounded-full border-[3px] border-gk-black/10 border-t-gk-red" />
        <Image
          src="/logo-icon.jpg"
          alt="Memuat"
          width={44}
          height={44}
          className="rounded-full brutal-border"
          priority
        />
      </div>
      <p className="max-w-xs text-center font-display text-sm font-bold uppercase tracking-wide text-gk-black/60">
        {phrase}
      </p>
    </div>
  );
}
