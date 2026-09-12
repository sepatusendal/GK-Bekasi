// Bang Wira - github.com/sepatusendal
import { forwardRef } from "react";
import Image from "next/image";
import { BatikOverlay } from "@/components/ui/batik-pattern";
import { Sparkle, PlusMark } from "@/components/home/hero-decor";
import { siteConfig } from "@/lib/site";

export interface MemberCardData {
  name: string;
  kecamatan: string;
  interests: string[];
  memberCode: string;
  joinDate: string;
}

export const MemberCard = forwardRef<HTMLDivElement, { data: MemberCardData }>(
  function MemberCard({ data }, ref) {
    return (
      <div
        ref={ref}
        className="relative mx-auto flex aspect-[3/4] w-full max-w-sm flex-col overflow-hidden bg-gk-black p-6 text-gk-white brutal-border brutal-shadow sm:p-7"
      >
        <BatikOverlay className="text-gk-white/[0.06]" />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-3 bg-[repeating-linear-gradient(45deg,var(--gk-red)_0,var(--gk-red)_10px,var(--gk-white)_10px,var(--gk-white)_20px)]"
        />

        <div className="relative flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gk-white brutal-border">
              <Image
                src="/logo-icon.jpg"
                alt=""
                width={44}
                height={44}
                className="object-cover"
              />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-sm font-bold uppercase tracking-tight">
                Garuda Keadilan
              </span>
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.15em] text-gk-mustard">
                Kabupaten Bekasi
              </span>
            </div>
          </div>
          <Sparkle className="size-5 text-gk-mustard" />
        </div>

        <div className="relative mt-5 flex flex-1 flex-col justify-end gap-4">
          <div>
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-gk-white/50">
              Kartu Anggota
            </span>
            <p className="mt-1 break-words font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight sm:text-4xl">
              {data.name}
            </p>
          </div>

          {data.interests.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {data.interests.slice(0, 4).map((interest) => (
                <span
                  key={interest}
                  className="border-[1.5px] border-gk-white/40 px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-wide text-gk-white/80"
                >
                  {interest}
                </span>
              ))}
            </div>
          ) : null}

          <div className="flex items-end justify-between border-t-[1.5px] border-gk-white/20 pt-3">
            <div className="flex flex-col gap-1">
              <span className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-gk-white/50">
                Kecamatan
              </span>
              <span className="font-display text-xs font-bold uppercase">
                {data.kecamatan}
              </span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-gk-white/50">
                Kode Anggota
              </span>
              <span className="font-display text-xs font-bold uppercase text-gk-mustard">
                {data.memberCode}
              </span>
            </div>
          </div>
        </div>

        <div className="relative mt-5 flex items-center justify-between border-t-[1.5px] border-gk-white/20 pt-3">
          <span className="font-display text-[10px] font-bold uppercase tracking-widest text-gk-white/60">
            {siteConfig.tagline}
          </span>
          <PlusMark className="size-3.5 text-gk-red" />
        </div>
      </div>
    );
  },
);
