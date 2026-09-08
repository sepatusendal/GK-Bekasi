// Bang Wira - github.com/sepatusendal
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { JoinForm } from "@/components/forms/join-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join GK Bekasi",
  description:
    "Gabung Garuda Keadilan Kabupaten Bekasi. Isi formulir singkat dan jadi bagian dari gerakan anak muda yang beraksi nyata di Kabupaten Bekasi.",
  alternates: {
    canonical: "/join",
  },
  openGraph: {
    title: "Join GK Bekasi",
    description:
      "Gabung Garuda Keadilan Kabupaten Bekasi dan jadi bagian dari gerakan anak muda yang beraksi nyata.",
    url: `${siteConfig.url}/join`,
  },
};

export default function JoinPage() {
  return (
    <main className="bg-gk-bg">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <Reveal>
          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            <Badge variant="red" className="w-fit">
              Gabung Sekarang
            </Badge>
            <h1 className="font-display text-[clamp(2.5rem,7vw,4.5rem)] font-bold uppercase leading-[0.92] tracking-tight text-gk-black">
              Ready to
              <br />
              Move?
            </h1>
            <p className="max-w-md text-lg text-gk-black/70">
              Temukan ruang untuk belajar, berkontribusi, dan tumbuh bersama.
            </p>
            <p className="max-w-md text-base text-gk-black/60">
              Nggak perlu pengalaman organisasi buat mulai. Yang kamu butuh cuma
              niat buat gerak dan mau belajar bareng anak muda lain di
              Kabupaten Bekasi. Isi form di samping, tim kami yang bakal
              hubungin kamu balik.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-gk-white p-6 brutal-border brutal-shadow sm:p-10">
            <JoinForm />
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
