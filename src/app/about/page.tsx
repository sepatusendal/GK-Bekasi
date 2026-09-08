// Bang Wira - github.com/sepatusendal
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Zap, Users, ShieldCheck, Flame } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Timeline, type TimelineMilestone } from "@/components/about/timeline";
import { getLeadership } from "@/sanity/lib/fetchers";
import { urlFor } from "@/sanity/lib/image";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export const revalidate = 60;

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
    year: "3 Januari 2025",
    title: "Ketua Umum Baru Dilantik",
    description:
      "Pelantikan Ketua Umum Garuda Keadilan Kabupaten Bekasi periode baru jadi titik awal babak ini. Dari sini, kepengurusan mulai ngebut bangun ulang gerakan dari nol.",
  },
  {
    year: "2025",
    title: "Gerak Cepat, Bangun Jejaring",
    description:
      "Di tahun pertama, GK Kabupaten Bekasi hadir di Musyawarah Wilayah GK Jawa Barat, ikut Rakerda PKS Kabupaten Bekasi lewat refleksi kemanusiaan untuk korban bencana Sumatera, sampai luncurin podcast perdana sebagai ruang aman buat anak muda.",
  },
  {
    year: "2026",
    title: "Digital Movement",
    description:
      "GK Kabupaten Bekasi masuk ke ranah digital lewat gkbekasi.id, biar cerita, program, dan ajakan gabung bisa dijangkau lebih banyak anak muda lagi.",
  },
  {
    year: "2027-2029",
    title: "Ekspansi ke Seluruh Kecamatan",
    description:
      "Target perluasan jejaring dan program ke lebih banyak kecamatan di Kabupaten Bekasi, dengan makin banyak anak muda ambil peran sebagai kader dan volunteer.",
  },
  {
    year: "2030",
    title: "Visi 2030",
    description:
      "GK Kabupaten Bekasi jadi rumah pertumbuhan anak muda terbesar di Kabupaten Bekasi, ruang belajar, gerak, dan berkontribusi yang bisa diakses semua kalangan.",
  },
];

export default async function AboutPage() {
  const leadership = await getLeadership();
  const [leader, ...rest] = leadership;

  return (
    <main className="bg-gk-bg">
      {/* Who We Are */}
      <section className="pt-16 sm:pt-20 lg:pt-28">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="red" className="w-fit">
                  Tentang Kami
                </Badge>
                <span className="font-display text-sm italic text-gk-black/50">
                  &ldquo;{siteConfig.slogan}&rdquo;
                </span>
              </div>
              <h1 className="max-w-4xl font-display text-[clamp(2.5rem,7vw,5rem)] font-bold uppercase leading-[0.92] tracking-tight text-gk-black">
                Kami Percaya Anak Muda Bukan Cuma Penonton.
              </h1>
              <div className="flex max-w-2xl flex-col gap-4 text-lg text-gk-black/70">
                <p>
                  Garuda Keadilan Kabupaten Bekasi adalah ruang buat anak muda
                  yang capek cuma jadi penonton perubahan. Di sini, kamu bisa
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
              <p className="max-w-2xl font-display text-2xl font-bold uppercase leading-tight tracking-tight text-gk-black sm:text-4xl">
                Kami mau bangun gerakan anak muda paling hidup di Kabupaten
                Bekasi.
              </p>
              <p className="max-w-xl text-lg text-gk-black/70">
                Program yang nyambung ke masalah nyata. Jaringan yang
                makin luas sampai ke tiap kecamatan. Dan makin banyak anak
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
              eyebrow="Struktur Pengurus"
              title="The Squad Behind The Movement"
              description="Bukan struktur formal yang cuma nempel di bagan. Ini barisan yang beneran turun tangan gerakin GK Kabupaten Bekasi."
            />
          </Reveal>

          {leader ? (
            <Reveal delay={0.05} className="mt-12">
              <div className="relative overflow-hidden bg-gk-black p-8 brutal-border brutal-shadow sm:p-10">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-4 -top-10 select-none font-display text-[10rem] font-bold leading-none text-gk-white/5 sm:text-[14rem]"
                >
                  01
                </span>
                <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                  {leader.photo ? (
                    <div className="relative size-24 shrink-0 overflow-hidden brutal-border border-gk-white sm:size-28">
                      <Image
                        src={urlFor(leader.photo).width(224).height(224).url()}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <span
                      className="flex size-24 shrink-0 items-center justify-center border-gk-white font-display text-3xl font-bold text-gk-white brutal-border sm:size-28"
                      style={{ backgroundColor: leader.color }}
                    >
                      {leader.initials}
                    </span>
                  )}
                  <div className="flex flex-col gap-3">
                    <Badge variant="red" className="w-fit -rotate-2">
                      Pucuk Pimpinan
                    </Badge>
                    <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-gk-white sm:text-3xl">
                      {leader.name}
                    </h3>
                    <span className="font-display text-sm font-bold uppercase tracking-wide text-gk-mustard">
                      {leader.role}
                    </span>
                    {leader.bio ? (
                      <p className="max-w-xl text-sm text-gk-white/70 sm:text-base">
                        {leader.bio}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </Reveal>
          ) : null}

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((member, index) => (
              <Reveal key={member._id} delay={0.1 + index * 0.05}>
                <div
                  className={cn(
                    "transition-transform duration-300 hover:rotate-0",
                    index % 2 === 0 ? "-rotate-1" : "rotate-1",
                  )}
                >
                  <div className="relative flex h-full flex-col gap-5 bg-gk-white p-6 brutal-border brutal-shadow-sm brutal-hover">
                    <span
                      aria-hidden
                      className="absolute -left-3 -top-3 flex size-9 rotate-[-8deg] items-center justify-center bg-gk-mustard font-display text-sm font-bold text-gk-black brutal-border"
                    >
                      {String(index + 2).padStart(2, "0")}
                    </span>
                    {member.photo ? (
                      <div className="relative size-16 overflow-hidden brutal-border">
                        <Image
                          src={urlFor(member.photo).width(128).height(128).url()}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <span
                        className="flex size-16 items-center justify-center font-display text-xl font-bold text-gk-white brutal-border"
                        style={{ backgroundColor: member.color }}
                      >
                        {member.initials}
                      </span>
                    )}
                    <div className="flex flex-col gap-2">
                      <h3 className="font-display text-lg font-bold uppercase tracking-tight text-gk-black">
                        {member.name}
                      </h3>
                      <Badge variant="outline" className="w-fit">
                        {member.role}
                      </Badge>
                    </div>
                    <p className="text-sm text-gk-black/70">{member.bio}</p>
                  </div>
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
