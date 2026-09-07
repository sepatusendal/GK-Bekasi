// Bang Wira - github.com/sepatusendal
import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Users, ShieldCheck, Flame } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Timeline, type TimelineMilestone } from "@/components/about/timeline";
import { leadership } from "@/lib/data/leadership";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang GK Bekasi",
  description:
    "Kenalan sama Garuda Keadilan Kabupaten Bekasi, kenapa kami ada, nilai yang kami pegang, dan orang-orang di balik gerakan ini.",
  openGraph: {
    title: "Tentang GK Bekasi",
    description:
      "Kenalan sama Garuda Keadilan Kabupaten Bekasi, kenapa kami ada dan siapa yang gerakin.",
    url: `${siteConfig.url}/about`,
  },
};

const values = [
  {
    icon: Zap,
    title: "Aksi Nyata",
    description:
      "Kami nggak berhenti di wacana. Setiap ide diarahkan jadi program yang bisa dirasain langsung dampaknya.",
  },
  {
    icon: Users,
    title: "Kolaborasi",
    description:
      "Gerakan besar nggak dibangun sendirian. Kami rangkul siapa aja yang mau tumbuh dan berkontribusi bareng.",
  },
  {
    icon: Flame,
    title: "Keberanian",
    description:
      "Berani angkat isu, berani ambil peran, berani coba hal baru, meskipun belum ada yang pernah lakuin sebelumnya.",
  },
  {
    icon: ShieldCheck,
    title: "Konsistensi",
    description:
      "Semangat awal gampang, yang susah itu bertahan. Kami komit jalanin program secara berkelanjutan, bukan musiman.",
  },
];

const milestones: TimelineMilestone[] = [
  {
    year: "2021",
    title: "Foundation",
    description:
      "GK Bekasi resmi terbentuk dari kumpulan anak muda yang gelisah sama isu sosial di lingkungan sekitar dan pengen mulai gerak, bukan cuma ngomong.",
  },
  {
    year: "2022",
    title: "New Generation",
    description:
      "Regenerasi kepengurusan pertama berjalan. Program-program mulai ditata lebih rapi dan terstruktur, nggak jalan asal-asalan lagi.",
  },
  {
    year: "2023-2024",
    title: "Community Expansion",
    description:
      "Jangkauan program dan komunitas meluas ke lebih banyak kecamatan di Kabupaten Bekasi, dengan makin banyak anak muda yang ikut ambil peran.",
  },
  {
    year: "2026",
    title: "Digital Movement",
    description:
      "GK Bekasi masuk ke ranah digital lewat gkbekasi.id, biar cerita, program, dan ajakan gabung bisa dijangkau lebih banyak anak muda lagi.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-gk-bg">
      {/* Who We Are */}
      <section className="pt-16 sm:pt-20 lg:pt-28">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-6">
              <Badge variant="red" className="w-fit">
                Tentang Kami
              </Badge>
              <h1 className="max-w-4xl font-display text-[clamp(2.5rem,7vw,5rem)] font-bold uppercase leading-[0.92] tracking-tight text-gk-black">
                Kami Percaya Anak Muda Bukan Cuma Penonton.
              </h1>
              <div className="flex max-w-2xl flex-col gap-4 text-lg text-gk-black/70">
                <p>
                  Garuda Keadilan Kabupaten Bekasi adalah ruang buat anak muda
                  yang capek cuma jadi penonton perubahan. Di sini, lo bisa
                  belajar, berkontribusi, dan ambil peran nyata lewat program
                  sosial, edukasi, dan komunitas yang langsung nyentuh
                  lingkungan sekitar.
                </p>
                <p>
                  Kami bukan organisasi yang jalan setahun sekali pas ada
                  seremoni. GK Bekasi gerak terus, dari diskusi kecil di
                  kecamatan sampai aksi sosial yang melibatkan banyak orang.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Why We Exist */}
      <section className="py-16 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-6 bg-gk-black p-8 text-gk-white brutal-border brutal-shadow sm:p-14">
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gk-mustard">
                Kenapa Kami Ada
              </span>
              <p className="max-w-3xl font-display text-2xl font-bold uppercase leading-tight tracking-tight sm:text-4xl">
                Banyak potensi anak muda di Kabupaten Bekasi yang belum punya
                ruang buat tumbuh. GK Bekasi hadir buat jadi ruang itu, tempat
                belajar, bergerak, dan bikin dampak bareng-bareng.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Yang Kami Pegang"
              title="Our Values"
              description="Empat hal ini yang jadi pegangan kami tiap kali bikin program atau ambil keputusan."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.05}>
                <div className="flex h-full flex-col gap-4 bg-gk-white p-6 brutal-border brutal-shadow-sm sm:p-8">
                  <span className="flex size-12 items-center justify-center bg-gk-red text-gk-white brutal-border">
                    <value.icon className="size-6" />
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-gk-black">
                    {value.title}
                  </h3>
                  <p className="text-base text-gk-black/70">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Movement */}
      <section className="py-16 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-6">
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gk-red">
                Ke Depan
              </span>
              <p className="max-w-3xl font-display text-2xl font-bold uppercase leading-tight tracking-tight text-gk-black sm:text-4xl">
                Kami mau bangun gerakan anak muda paling hidup di Kabupaten
                Bekasi, yang programnya nyambung ke masalah nyata, jaringannya
                makin luas sampai ke tiap kecamatan, dan makin banyak anak
                muda yang berani ambil peran, bukan cuma jadi penonton.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Leadership */}
      <section className="py-16 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Meet The Team"
              title="Leadership"
              description="Orang-orang yang gerakin GK Bekasi dari balik layar. Bukan struktur formal, tapi tim yang beneran turun tangan."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.05}>
                <div className="flex h-full flex-col gap-5 bg-gk-white p-6 brutal-border brutal-shadow-sm">
                  <span
                    className="flex size-16 items-center justify-center font-display text-xl font-bold text-gk-white brutal-border"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.initials}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-gk-black">
                      {member.name}
                    </h3>
                    <span className="font-display text-xs font-bold uppercase tracking-wide text-gk-red">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-sm text-gk-black/70">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Perjalanan"
              title="Timeline"
              description="Sedikit cerita gimana GK Bekasi mulai dan terus berkembang sampai sekarang."
            />
          </Reveal>
          <div className="mt-12">
            <Timeline items={milestones} />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-20 sm:pb-28 lg:pb-32">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start gap-6 bg-gk-red p-8 text-gk-white brutal-border brutal-shadow sm:p-14">
              <h2 className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl">
                Siap Gerak Bareng Kami?
              </h2>
              <p className="max-w-xl text-lg text-gk-white/90">
                Nggak perlu pengalaman, cukup niat. Gabung jadi bagian dari
                gerakan anak muda GK Bekasi sekarang.
              </p>
              <Button asChild variant="black" size="lg">
                <Link href="/join">Gabung Sekarang</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
