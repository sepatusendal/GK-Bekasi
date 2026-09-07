// Bang Wira - github.com/sepatusendal
import type { Story } from "@/lib/types";

export const stories: Story[] = [
  {
    slug: "leadership-camp-batch-5-rampung",
    title: "Leadership Camp Batch 5 Resmi Rampung, 38 Anak Muda Lulus",
    category: "News",
    excerpt:
      "Angkatan ke-5 Leadership Camp GK Bekasi ditutup dengan presentasi 12 rencana aksi sosial yang siap dijalankan di kecamatan masing-masing.",
    content: [
      "Selama tiga hari, 38 peserta dari berbagai kecamatan di Kabupaten Bekasi mengikuti rangkaian Leadership Camp Batch 5.",
      "Di hari terakhir, peserta mempresentasikan 12 rencana aksi sosial yang dirancang bersama tim masing-masing, mulai dari program literasi anak sampai bank sampah.",
      "Beberapa rencana aksi bahkan langsung mendapat dukungan pendanaan awal dari komunitas GK untuk direalisasikan bulan depan.",
    ],
    author: "Tim Media GK",
    publishDate: "3 September 2026",
    readingTime: 3,
    coverColor: "var(--gk-red)",
    tags: ["Leadership Camp", "Program"],
    featured: true,
  },
  {
    slug: "dari-peserta-jadi-volunteer-cerita-nadia",
    title: "Dari Peserta Jadi Volunteer: Cerita Nadia",
    category: "People",
    excerpt:
      "Dua tahun lalu Nadia cuma ikut satu kegiatan GK sebagai peserta. Sekarang dia jadi salah satu koordinator volunteer termuda.",
    content: [
      "Nadia (19) pertama kali kenal GK Bekasi lewat Aksi Sosial di kecamatannya. Awalnya cuma iseng ikut karena diajak teman.",
      "Setelah beberapa kali terlibat, Nadia mulai dipercaya megang koordinasi kecil, sampai akhirnya jadi salah satu koordinator volunteer termuda di GK.",
      "\"Aku ngerasa didengar di sini. Ide aku beneran dieksekusi, bukan cuma didengerin doang,\" kata Nadia.",
    ],
    author: "Tim Media GK",
    publishDate: "28 Agustus 2026",
    readingTime: 4,
    coverColor: "var(--gk-mustard)",
    tags: ["People", "Volunteer"],
    featured: true,
  },
  {
    slug: "dari-20-jadi-85-cerita-kelas-literasi",
    title: "Dari 20 Jadi 85: Cerita Kelas Literasi Kecamatan Cibitung",
    category: "Impact",
    excerpt:
      "Kelas literasi yang dimulai dari 20 anak, sekarang rutin diikuti 85 anak setiap minggunya. Ini kisah di baliknya.",
    content: [
      "Program Kelas Literasi dimulai kecil-kecilan di satu RW Kecamatan Cibitung dengan 20 anak peserta.",
      "Berkat konsistensi dan promosi dari mulut ke mulut warga, jumlah peserta terus bertambah hingga kini mencapai 85 anak setiap sesi.",
      "Warga sekitar bahkan mulai ikut jadi relawan pengajar dadakan setiap akhir pekan.",
    ],
    author: "Divisi Program GK",
    publishDate: "15 Agustus 2026",
    readingTime: 5,
    coverColor: "var(--gk-black)",
    tags: ["Impact", "Pendidikan"],
    featured: true,
  },
  {
    slug: "kenapa-anak-muda-bekasi-harus-mulai-bergerak",
    title: "Kenapa Anak Muda Bekasi Harus Mulai Bergerak Sekarang",
    category: "Ideas",
    excerpt:
      "Opini dari salah satu pengurus GK Bekasi soal kenapa menunggu 'siap' cuma bikin kita gak pernah mulai apa-apa.",
    content: [
      "Banyak yang mikir harus 'siap' dulu baru boleh mulai gerak. Padahal siap itu proses, bukan syarat.",
      "Kabupaten Bekasi punya jutaan anak muda dengan energi besar, masalahnya cuma satu: ruang buat nyalurin energi itu masih terbatas.",
      "GK Bekasi hadir bukan buat jadi yang paling tahu, tapi buat jadi ruang belajar bareng sambil langsung praktik.",
    ],
    author: "Ketua GK Bekasi",
    publishDate: "5 Agustus 2026",
    readingTime: 4,
    coverColor: "var(--gk-blue)",
    tags: ["Opini", "Gerakan"],
    featured: false,
  },
  {
    slug: "aksi-bersih-sungai-tarik-100-volunteer",
    title: "Aksi Bersih Sungai Tarik Lebih dari 100 Volunteer",
    category: "News",
    excerpt:
      "Aksi bersih sungai edisi terbaru berhasil menggerakkan lebih dari 100 volunteer dari berbagai kecamatan.",
    content: [
      "Aksi bersih sungai yang digelar akhir pekan lalu berhasil mengumpulkan lebih dari 100 volunteer, jumlah terbanyak sepanjang program ini berjalan.",
      "Selain bersih-bersih, kegiatan ini juga diisi edukasi pengelolaan sampah rumah tangga untuk warga sekitar bantaran sungai.",
    ],
    author: "Tim Media GK",
    publishDate: "20 Juli 2026",
    readingTime: 3,
    coverColor: "var(--gk-red-dark)",
    tags: ["Lingkungan", "Volunteer"],
    featured: false,
  },
  {
    slug: "belajar-desain-gratis-kelas-kreatif",
    title: "Belajar Desain dan Konten Gratis Lewat Kelas Kreatif Muda",
    category: "Impact",
    excerpt:
      "Puluhan anak muda dapat kesempatan belajar desain, fotografi, dan bikin konten langsung dari praktisi lokal, gratis.",
    content: [
      "Kelas Kreatif Muda batch terbaru diikuti 45 peserta dari berbagai latar belakang, mulai dari pelajar SMA sampai fresh graduate.",
      "Materi dibawakan langsung oleh praktisi kreatif lokal yang juga alumni program GK sebelumnya.",
      "Beberapa peserta bahkan langsung dapat tawaran kerja sama proyek dari mentor mereka.",
    ],
    author: "Divisi Program GK",
    publishDate: "10 Juli 2026",
    readingTime: 4,
    coverColor: "var(--gk-mustard)",
    tags: ["Kreatif", "Skill"],
    featured: false,
  },
];

export function getStoryBySlug(slug: string) {
  return stories.find((s) => s.slug === slug);
}

export function getFeaturedStories() {
  return stories.filter((s) => s.featured);
}
