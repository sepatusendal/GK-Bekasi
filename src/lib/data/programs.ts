// Bang Wira — github.com/sepatusendal
import type { Program } from "@/lib/types";

export const programs: Program[] = [
  {
    slug: "leadership-camp",
    title: "Leadership Camp",
    category: "Youth Development",
    description:
      "Pelatihan kepemimpinan intensif 3 hari buat anak muda Bekasi yang mau belajar mimpin proyek nyata, bukan cuma teori di kelas.",
    content: [
      "Leadership Camp adalah program andalan GK Bekasi untuk membentuk generasi muda yang berani ambil peran dan tanggung jawab di komunitasnya.",
      "Selama 3 hari, peserta belajar public speaking, manajemen tim, problem solving, dan langsung praktik lewat simulasi proyek sosial.",
      "Setiap angkatan Leadership Camp menghasilkan minimal 5 rencana aksi yang benar-benar dijalankan di kecamatan masing-masing peserta.",
    ],
    coverColor: "var(--gk-red)",
    location: "Cikarang, Kabupaten Bekasi",
    date: "Setiap Kuartal",
    featured: true,
  },
  {
    slug: "aksi-sosial-bekasi",
    title: "Aksi Sosial Bekasi",
    category: "Social Impact",
    description:
      "Gerakan aksi sosial rutin: dari bantuan pendidikan, kesehatan, sampai bersih-bersih lingkungan bareng warga.",
    content: [
      "Aksi Sosial Bekasi adalah program turun langsung ke lapangan — bukan cuma seremonial, tapi kerja bareng warga menyelesaikan masalah nyata.",
      "Fokus program berganti tiap bulan: kadang bantuan alat sekolah, kadang aksi bersih sungai, kadang donor darah.",
      "Semua kegiatan dikoordinasi bareng karang taruna dan RT/RW setempat supaya dampaknya berkelanjutan.",
    ],
    coverColor: "var(--gk-black)",
    location: "Berbagai Kecamatan, Kabupaten Bekasi",
    date: "Bulanan",
    featured: true,
  },
  {
    slug: "gk-connect",
    title: "GK Connect",
    category: "Community",
    description:
      "Ruang ngumpul rutin buat anak muda saling kenal, tukar ide, dan cari partner buat proyek bareng.",
    content: [
      "GK Connect adalah gathering komunitas bulanan yang santai tapi produktif — networking tanpa embel-embel formal.",
      "Setiap sesi ada sharing dari volunteer atau mitra komunitas, dilanjut open discussion dan matchmaking proyek.",
      "Banyak proyek kolaborasi GK lahir dari obrolan santai di GK Connect.",
    ],
    coverColor: "var(--gk-mustard)",
    location: "Cikarang & sekitarnya",
    date: "Setiap bulan",
    featured: true,
  },
  {
    slug: "kelas-kreatif",
    title: "Kelas Kreatif Muda",
    category: "Creative",
    description:
      "Workshop skill kreatif — desain, konten, fotografi — biar anak muda Bekasi makin siap kerja dan berkarya.",
    content: [
      "Kelas Kreatif Muda dirancang buat yang mau upgrade skill tapi gak punya akses kursus mahal.",
      "Materi dibawakan volunteer praktisi: desainer, content creator, dan fotografer lokal.",
      "Peserta lulus dengan portofolio nyata, bukan cuma sertifikat.",
    ],
    coverColor: "var(--gk-blue)",
    location: "Cikarang, Kabupaten Bekasi",
    date: "Setiap 2 bulan",
    featured: false,
  },
  {
    slug: "beasiswa-mikro",
    title: "Beasiswa Mikro GK",
    category: "Education",
    description:
      "Bantuan pendidikan skala kecil tapi tepat sasaran buat pelajar yang butuh dorongan buat lanjut sekolah.",
    content: [
      "Beasiswa Mikro GK menyasar kebutuhan spesifik: biaya SPP, alat sekolah, sampai biaya pendaftaran ujian.",
      "Proses seleksi dibantu jaringan volunteer di tiap kecamatan supaya bantuan tepat sasaran.",
      "Program ini didanai dari donasi komunitas dan hasil kegiatan sosial GK lainnya.",
    ],
    coverColor: "var(--gk-red-dark)",
    location: "Kabupaten Bekasi",
    date: "Sepanjang tahun",
    featured: false,
  },
];

export function getProgramBySlug(slug: string) {
  return programs.find((p) => p.slug === slug);
}

export function getFeaturedPrograms() {
  return programs.filter((p) => p.featured);
}
