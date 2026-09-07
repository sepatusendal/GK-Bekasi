// Bang Wira — github.com/sepatusendal
import type { EventItem } from "@/lib/types";

export const events: EventItem[] = [
  {
    slug: "gk-youth-gathering",
    title: "GK Youth Gathering",
    category: "Community",
    coverColor: "var(--gk-red)",
    description:
      "Malam ngumpul buat semua anak muda Bekasi yang mau kenal GK lebih dekat, sambil nonton showcase program setahun terakhir.",
    about: [
      "GK Youth Gathering adalah acara tahunan paling ditunggu — tempat komunitas, volunteer, dan mitra ngumpul bareng.",
      "Ada showcase dampak program, penampilan musik dari musisi lokal, dan sesi cerita dari member yang udah ngerasain langsung gerakan GK.",
    ],
    agenda: [
      { time: "19.00", item: "Registrasi & welcome drink" },
      { time: "19.30", item: "Opening & sambutan Ketua GK Bekasi" },
      { time: "20.00", item: "Showcase dampak program" },
      { time: "20.45", item: "Sharing session & musik" },
      { time: "21.30", item: "Networking bebas" },
    ],
    date: "24 September 2026",
    day: "24",
    month: "SEP",
    time: "19.00 WIB",
    location: "Aula Kecamatan Cikarang Utara, Kabupaten Bekasi",
    capacity: 200,
    registered: 134,
    status: "registration-open",
    registrationUrl: "#",
    organizer: "GK Bekasi",
    featured: true,
  },
  {
    slug: "leadership-camp-batch-6",
    title: "Leadership Camp Batch 6",
    category: "Youth Development",
    coverColor: "var(--gk-black)",
    description:
      "Angkatan ke-6 Leadership Camp. 3 hari intensif belajar mimpin proyek nyata bareng mentor dan alumni GK.",
    about: [
      "Batch 6 fokus ke tema 'Local Action, Real Impact' — peserta akan merancang rencana aksi sosial untuk desa/kelurahan asal masing-masing.",
      "Kuota terbatas supaya proses mentoring lebih personal.",
    ],
    agenda: [
      { time: "Hari 1", item: "Fondasi kepemimpinan & tim" },
      { time: "Hari 2", item: "Problem solving & perancangan proyek" },
      { time: "Hari 3", item: "Presentasi rencana aksi & graduation" },
    ],
    date: "10-12 Oktober 2026",
    day: "10",
    month: "OKT",
    time: "08.00 WIB",
    location: "Villa Cikarang Hijau, Kabupaten Bekasi",
    capacity: 40,
    registered: 27,
    status: "registration-open",
    registrationUrl: "#",
    organizer: "GK Bekasi × Divisi Program",
    featured: true,
  },
  {
    slug: "aksi-bersih-sungai-cikarang",
    title: "Aksi Bersih Sungai Cikarang",
    category: "Social Impact",
    coverColor: "var(--gk-mustard)",
    description:
      "Aksi bersih-bersih sungai bareng warga dan volunteer, plus edukasi pengelolaan sampah rumah tangga.",
    about: [
      "Sungai Cikarang jadi salah satu titik prioritas program lingkungan GK Bekasi tahun ini.",
      "Selain aksi bersih-bersih, ada sesi edukasi singkat soal pemilahan sampah untuk warga sekitar.",
    ],
    agenda: [
      { time: "06.30", item: "Kumpul & pembagian alat" },
      { time: "07.00", item: "Aksi bersih-bersih" },
      { time: "09.00", item: "Edukasi pengelolaan sampah" },
      { time: "10.00", item: "Penutupan" },
    ],
    date: "2 November 2026",
    day: "02",
    month: "NOV",
    time: "06.30 WIB",
    location: "Bantaran Sungai Cikarang, Kabupaten Bekasi",
    capacity: 80,
    registered: 41,
    status: "registration-open",
    registrationUrl: "#",
    organizer: "GK Bekasi × Karang Taruna Setempat",
    featured: true,
  },
  {
    slug: "gk-connect-vol-12",
    title: "GK Connect Vol. 12",
    category: "Community",
    coverColor: "var(--gk-blue)",
    description:
      "Sesi ngumpul komunitas edisi ke-12, ngobrolin ide proyek kolaborasi buat kuartal berikutnya.",
    about: [
      "GK Connect edisi ini fokus ke matchmaking proyek — bawa ide kamu dan cari partner buat eksekusi.",
    ],
    agenda: [
      { time: "16.00", item: "Registrasi & santai" },
      { time: "16.30", item: "Sharing ide proyek" },
      { time: "17.30", item: "Matchmaking & diskusi kelompok" },
    ],
    date: "15 Agustus 2026",
    day: "15",
    month: "AGU",
    time: "16.00 WIB",
    location: "Co-working Space Cikarang",
    capacity: 60,
    registered: 60,
    status: "completed",
    registrationUrl: "#",
    organizer: "GK Bekasi",
    featured: false,
  },
];

export function getEventBySlug(slug: string) {
  return events.find((e) => e.slug === slug);
}

export function getUpcomingEvents() {
  return events.filter((e) => e.status !== "completed");
}
