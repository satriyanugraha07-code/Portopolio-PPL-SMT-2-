import {
  BookOpenCheck,
  ClipboardCheck,
  Cog,
  FileText,
  Handshake,
  HeartHandshake,
  Image,
  Lightbulb,
  RefreshCcw,
  Rocket,
  Users,
  GraduationCap,
  Award,
  BookOpen,
  Briefcase,
  Target,
  Compass,
  Layers,
  Sparkles,
  Eye,
  Flag,
  UserCheck,
  Building2,
  Presentation,
  PenTool,
  MonitorPlay,
  NotebookPen,
} from 'lucide-react'

export const navigationItems = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Identitas', href: '#identifikasi-diri' },
  { label: 'Refleksi', href: '#refleksi-belajar' },
  { label: 'Artefak', href: '#artefak' },
  { label: 'Inovasi & Seminar', href: '#inovasi-seminar' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Video Praktik', href: '#video-praktik' },
  { label: 'Kontak', href: '#kontak' },
]

export const ppgAboutCards = [
  {
    icon: UserCheck,
    title: 'Data Diri',
    description:
      'Satriya Nugraha, mahasiswa PPG Prajabatan bidang studi Teknik Mesin di Universitas Sarjanawiyata Tamansiswa.',
  },
  {
    icon: GraduationCap,
    title: 'Latar Akademik',
    description:
      'Mengembangkan kompetensi pedagogik dan profesional untuk menghubungkan keilmuan teknik mesin dengan kebutuhan belajar peserta didik SMK.',
  },
  {
    icon: Compass,
    title: 'Arah Pengembangan',
    description:
      'Bertumbuh menjadi pendidik vokasi yang reflektif, adaptif, inovatif, dan berpihak pada keselamatan serta perkembangan peserta didik.',
  },
]

export const ppgStats = [
  {
    icon: UserCheck,
    value: 'Satriya',
    label: 'Satriya Nugraha',
  },
  {
    icon: GraduationCap,
    value: 'PPG',
    label: 'Prajabatan',
  },
  {
    icon: Cog,
    value: 'Teknik',
    label: 'Bidang Studi Teknik Mesin',
  },
  {
    icon: Building2,
    value: 'UST',
    label: 'Yogyakarta',
  },
]

export const coreValues = [
  {
    number: '01',
    icon: BookOpen,
    title: 'Mata Kuliah Inti',
    description:
      'Pembelajaran inti memperkuat pemahaman tentang peserta didik, prinsip pengajaran dan asesmen, pembelajaran sosial-emosional, serta filosofi pendidikan Indonesia.',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Mata Kuliah Selektif',
    description:
      'Mata kuliah selektif memberi ruang untuk mendalami strategi pembelajaran yang relevan dengan konteks vokasi, teknologi, dan kebutuhan belajar yang beragam.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Pengalaman Bermakna',
    description:
      'Diskusi, demonstrasi kontekstual, kerja kolaboratif, dan penyusunan perangkat ajar membantu menghubungkan teori pedagogik dengan praktik Teknik Mesin.',
  },
  {
    number: '04',
    icon: RefreshCcw,
    title: 'Refleksi & Tindak Lanjut',
    description:
      'Pengalaman belajar menjadi dasar untuk memperbaiki perencanaan, diferensiasi, asesmen, serta kualitas umpan balik dalam pembelajaran berikutnya.',
  },
]

export const reflectionDocuments = [
  {
    number: '01',
    type: 'PDF · 10 halaman',
    category: 'Mata Kuliah Inti · Semester 1',
    title: 'Filosofi Pendidikan & Pendidikan Nilai',
    description:
      'Perubahan fokus dari hasil tugas menuju pemahaman manusia, konteks, nilai, etika, dan tindakan yang mendidik.',
    image: '/assets/reflections/filosofi-pendidikan.png',
    href:
      'https://drive.google.com/file/d/1YqAoSWknsiEvcs7f4_KlYZ-4FeZj-vbv/view?usp=drive_link',
  },
  {
    number: '02',
    type: 'PDF · 10 halaman',
    category: 'Mata Kuliah Inti · Semester 1',
    title: 'Pembelajaran Mendalam & Asesmen',
    description:
      'Pergeseran dari metode dan aktivitas menuju tujuan, bukti belajar, asesmen, serta tindak lanjut yang selaras.',
    image: '/assets/reflections/pembelajaran-mendalam.png',
    href:
      'https://drive.google.com/file/d/1mfvt65lGPLunXHGMJYk4AZD9xh3q4Gib/view?usp=drive_link',
  },
  {
    number: '03',
    type: 'PDF · 10 halaman',
    category: 'Mata Kuliah Inti · Semester 1',
    title: 'Pemahaman Peserta Didik & Pembelajarannya',
    description:
      'Memahami peserta didik secara holistik serta menyiapkan diferensiasi, scaffolding, dan dukungan yang sesuai.',
    image: '/assets/reflections/pemahaman-peserta-didik.png',
    href:
      'https://drive.google.com/file/d/1Q9Dx-_faHGk_i_WGcOo7ZsLWys1ZZytU/view?usp=drive_link',
  },
  {
    number: '04',
    type: 'PDF · 10 halaman',
    category: 'Mata Kuliah Selektif · Semester 1',
    title: 'Inovasi Pembelajaran Berbasis Ajaran Tamansiswa',
    description:
      'Penerapan tuntunan, keteladanan, dan kemandirian dalam pembelajaran Teknik Mesin.',
    image: '/assets/reflections/inovasi-tamansiswa.jpg',
    href:
      'https://drive.google.com/file/d/162aa32AqfCeR-kOhPPCfc_YiOuNgzmd_/view?usp=drive_link',
  },
  {
    number: '05',
    type: 'PDF · 10 halaman',
    category: 'Praktik Pengalaman Lapangan · Semester 1',
    title: 'PPL Terbimbing di SMK Negeri 2 Depok Sleman',
    description:
      'Perjalanan observasi, asistensi, praktik mengajar, umpan balik, dan refleksi perbaikan pembelajaran.',
    image: '/assets/reflections/ppl-smkn2-depok.jpg',
    href:
      'https://drive.google.com/file/d/1NRA11BcNHdURwaH74OkrcloRYfDKh5V4/view?usp=drive_link',
  },
  {
    number: '06',
    type: 'PDF · 10 halaman',
    category: 'Refleksi Akhir · Semester 2',
    title: 'Refleksi PPG',
    description:
      'Sintesis perjalanan belajar PPG: sebelum, selama, dan rencana pengembangan diri sebagai guru profesional.',
    image: '/assets/reflections/refleksi-ppg.png',
    href:
      'https://drive.google.com/file/d/1Q2HbhezPuty_GiG5ps_0kTuk14wCaNv0/view?usp=drive_link',
  },
  {
    number: '07',
    type: 'PDF · 10 halaman',
    category: 'Mata Kuliah Inti · Semester 2',
    title: 'Pembelajaran Sosial Emosional',
    description:
      'Penerapan CASEL, keteladanan guru, experiential learning, dan school well-being di kelas Gambar Teknik.',
    image: '/assets/reflections/pembelajaran-sosial-emosional.png',
    href:
      'https://drive.google.com/file/d/14TLNq28mheTNYeIu0VftPLg8yvjGwPDm/view?usp=drive_link',
  },
  {
    number: '08',
    type: 'PDF · 10 halaman',
    category: 'Mata Kuliah Inti · Semester 2',
    title: 'PMA Lanjut: Pembelajaran Mendalam & Asesmen',
    description:
      'Dari rancangan pembelajaran menuju keputusan yang berbasis bukti, asesmen, dan tindak lanjut di ruang kelas.',
    image: '/assets/reflections/pma-lanjut.png',
    href:
      'https://drive.google.com/file/d/1tN52-ftHOEWo4EWeaJHpx-FefK9iGF9J/view?usp=drive_link',
  },
  {
    number: '09',
    type: 'PDF · 10 halaman',
    category: 'Mata Kuliah Selektif · Semester 2',
    title: 'Inovasi Kejuruan',
    description:
      'Dari kebutuhan nyata di bengkel menuju rancangan media pembelajaran kejuruan yang siap diuji.',
    image: '/assets/reflections/inovasi-kejuruan.png',
    href:
      'https://drive.google.com/file/d/1k87fnFgCPbW6yItudxLL0Qipi3sXc14A/view?usp=drive_link',
  },
  {
    number: '10',
    type: 'PDF · 10 halaman',
    category: 'Praktik Pengalaman Lapangan · Semester 2',
    title: 'PPL Mandiri',
    description:
      'Pengelolaan kelas secara mandiri pada Gambar Teknik dan CNC menuju guru yang lebih percaya diri.',
    image: '/assets/reflections/ppl-mandiri.png',
    href:
      'https://drive.google.com/file/d/1u1D6_slM7ZfDxBdkUiFCh9w_K9rVUmXl/view?usp=drive_link',
  },
  {
    number: '11',
    type: 'PDF · 10 halaman',
    category: 'Projek Kepemimpinan · Semester 2',
    title: 'Refleksi Projek Kepemimpinan',
    description:
      'Kolaborasi bersama Komunitas Elingo Jogja dalam projek Java Edu Culture serta analisis 4C atas dampaknya.',
    image: '/assets/reflections/refleksi-projek-kepemimpinan.png',
    href:
      'https://drive.google.com/file/d/1mQhlPnIn_cDYrYqzEyxlbUykr1CzwIyl/view?usp=drive_link',
  },
]

/* ==========================================================================
   ANALISIS ARTEFAK PEMBELAJARAN
   Sumber: folder Google Drive "RPP SME 2" — berisi 11 dokumen PDF per
   pertemuan (Gambar Teknik 6 pertemuan + CNC 5 pertemuan).
   Untuk menambahkan dokumen baru cukup duplikasi satu objek di bawah.
   ========================================================================== */

export const artifactCategories = [
  'Semua',
  'Gambar Teknik',
  'CNC',
]

export const artifactStats = [
  { value: '06', label: 'Gambar Teknik' },
  { value: '05', label: 'CNC' },
  { value: '11', label: 'Pertemuan' },
]

export const artifactDriveFolder =
  'https://drive.google.com/drive/folders/1R_oci2MTsA6JmNhyHOt2KzbWWn9psivT?usp=sharing'

export const artifactDocuments = [
  {
    id: 'gt-01',
    number: '01',
    category: 'Gambar Teknik',
    type: 'Pertemuan 1',
    icon: PenTool,
    title: 'Kegunaan Gambar Teknik, Pengenalan Alat Gambar & Macam-Macam Garis',
    meta: 'Gambar Teknik · Pertemuan 1',
    description:
      'Materi dasar Gambar Teknik: kegunaan gambar sebagai bahasa teknik, pengenalan dan penggunaan alat gambar manual, serta pengenalan macam-macam garis.',
    focus: 'Fondasi literasi gambar teknik',
    evidence: 'Peserta didik mengenali alat gambar dan jenis garis yang akan dipakai sepanjang pembelajaran.',
    link: { label: 'Buka PDF', href: 'https://drive.google.com/file/d/1g83A4KG2XCdRqBD71D0Ik-cOrWB3aOtn/view' },
  },
  {
    id: 'gt-02',
    number: '02',
    category: 'Gambar Teknik',
    type: 'Pertemuan 2',
    icon: PenTool,
    title: 'Macam-Macam Garis & Fungsinya dalam Gambar Teknik',
    meta: 'Gambar Teknik · Pertemuan 2',
    description:
      'Pembelajaran garis secara mendalam: jenis garis (tebal kontinu, tipis, putus-putus, strip-titik, bebas), fungsi masing-masing, ketebalan sesuai standar, dan contoh penerapannya.',
    focus: 'Standardisasi garis',
    evidence: 'Peserta didik menggambar objek sederhana menggunakan jenis garis yang tepat dan sesuai fungsi.',
    link: { label: 'Buka PDF', href: 'https://drive.google.com/file/d/1fes3nBBtMf3Cvz-JYc7QWRcLaUr7XTvR/view' },
  },
  {
    id: 'gt-03',
    number: '03',
    category: 'Gambar Teknik',
    type: 'Pertemuan 3',
    icon: PenTool,
    title: 'Konstruksi Geometri Dasar — Segi Enam, Segi Lima & Membagi Sudut',
    meta: 'Gambar Teknik · Pertemuan 3',
    description:
      'Konstruksi geometri dasar menggunakan jangka dan penggaris: menggambar segi enam dan segi lima beraturan serta membagi sudut menjadi bagian yang sama.',
    focus: 'Keterampilan konstruksi geometri',
    evidence: 'Peserta didik membuat konstruksi segi enam, segi lima, dan pembagian sudut secara teliti.',
    link: { label: 'Buka PDF', href: 'https://drive.google.com/file/d/1UoSEm4wO04AVNq390HkOQQIMM1eJx-sm/view' },
  },
  {
    id: 'gt-04',
    number: '04',
    category: 'Gambar Teknik',
    type: 'Pertemuan 4',
    icon: PenTool,
    title: 'Geometri Lanjutan — Konstruksi Segi-n Beraturan & Pembagian Sudut',
    meta: 'Gambar Teknik · Pertemuan 4',
    description:
      'Pengembangan konstruksi geometri: membangun segi-n beraturan serta pembagian sudut tingkat lanjut sebagai bekal menggambar bentuk yang lebih kompleks.',
    focus: 'Penguatan geometri gambar',
    evidence: 'Peserta didik menyelesaikan konstruksi segi-n beraturan dengan langkah yang sistematis.',
    link: { label: 'Buka PDF', href: 'https://drive.google.com/file/d/1F6BAJXGob7_2-xVFct9TlH5_kn1b2rEJ/view' },
  },
  {
    id: 'gt-05',
    number: '05',
    category: 'Gambar Teknik',
    type: 'Pertemuan 5',
    icon: PenTool,
    title: 'Bentangan-Bukaan — Gambar Bentangan Benda Silinder',
    meta: 'Gambar Teknik · Pertemuan 5',
    description:
      'Konsep bukaan (bentangan) benda kerja: prinsip panjang sebenarnya dan langkah menggambar bentangan benda silinder secara manual.',
    focus: 'Bukaan & panjang sebenarnya',
    evidence: 'Peserta didik menggambar bentangan silinder sesuai ukuran sebenarnya.',
    link: { label: 'Buka PDF', href: 'https://drive.google.com/file/d/1aGBY7CeIlokUlTmnZG1rOmLb8np_1zDd/view' },
  },
  {
    id: 'gt-06',
    number: '06',
    category: 'Gambar Teknik',
    type: 'Pertemuan 6',
    icon: PenTool,
    title: 'Bukaan-Bentangan Lanjutan — Bentangan Pipa Bulat dengan Potongan Miring',
    meta: 'Gambar Teknik · Pertemuan 6',
    description:
      'Bukaan tingkat lanjut: membuat bentangan pipa bulat yang dipotong miring, termasuk pembagian busur dan pemindahan titik untuk menghasilkan bentangan yang akurat.',
    focus: 'Bukaan tingkat lanjut',
    evidence: 'Peserta didik menghasilkan bentangan pipa potong miring yang siap dipakai di bengkel.',
    link: { label: 'Buka PDF', href: 'https://drive.google.com/file/d/1C1l8mrbefgsOd_1esqXREji_uXHzFBzm/view' },
  },

  {
    id: 'cnc-01',
    number: '07',
    category: 'CNC',
    type: 'Pertemuan 1',
    icon: Cog,
    title: 'Pengenalan CNC Bubut, G00, G01, Absolut & Inkremental',
    meta: 'Teknik Pemesinan CNC · Pertemuan 1',
    description:
      'Pengenalan mesin CNC bubut beserta struktur programnya: perintah G00 dan G01 serta sistem koordinat absolut dan inkremental.',
    focus: 'Dasar pemrograman CNC',
    evidence: 'Peserta didik memahami struktur program dan membedakan koordinat absolut serta inkremental.',
    link: { label: 'Buka PDF', href: 'https://drive.google.com/file/d/1lhCviG2Q5bKWO8LmmNAnlCKrUj3qW4O6/view' },
  },
  {
    id: 'cnc-02',
    number: '08',
    category: 'CNC',
    type: 'Pertemuan 2',
    icon: Cog,
    title: 'Pemrograman G02 & G03 dengan Koordinat Absolut dan Inkremental',
    meta: 'Teknik Pemesinan CNC · Pertemuan 2',
    description:
      'Pemrograman gerak melengkung CNC dengan G02 (searah jarum jam) dan G03 (berlawanan arah jarum jam), baik dengan koordinat absolut maupun inkremental.',
    focus: 'Pemrograman gerak melengkung',
    evidence: 'Peserta didik menuliskan blok G02/G03 dengan arah dan koordinat yang benar.',
    link: { label: 'Buka PDF', href: 'https://drive.google.com/file/d/1mTrPp8RydzabeIX4Ib48lhqJRb9F211T/view' },
  },
  {
    id: 'cnc-03',
    number: '09',
    category: 'CNC',
    type: 'Pertemuan 3',
    icon: Cog,
    title: 'Praktik Pemrograman CNC Bubut Menggunakan CNC Simulator',
    meta: 'Teknik Pemesinan CNC · Pertemuan 3',
    description:
      'Praktik menyusun dan menjalankan program CNC bubut pada simulator sebelum diterapkan ke mesin, sebagai langkah aman memverifikasi program.',
    focus: 'Simulasi sebelum eksekusi',
    evidence: 'Peserta didik memverifikasi program pada simulator dan memperbaiki kesalahan tanpa risiko pada mesin.',
    link: { label: 'Buka PDF', href: 'https://drive.google.com/file/d/1KuXt4hwnIOGghJzi9HXv5KMg_caf5URh/view' },
  },
  {
    id: 'cnc-04',
    number: '10',
    category: 'CNC',
    type: 'Pertemuan 4',
    icon: Cog,
    title: 'Pemrograman Siklus CNC Bubut G71 & G70',
    meta: 'Teknik Pemesinan CNC · Pertemuan 4',
    description:
      'Pemrograman siklus pembubutan: G71 untuk pembubutan kasar (roughing) berulang dan G70 untuk pembubutan akhir (finishing).',
    focus: 'Siklus pembubutan',
    evidence: 'Peserta didik menyusun program siklus bubut yang efisien untuk benda kerja bertingkat.',
    link: { label: 'Buka PDF', href: 'https://drive.google.com/file/d/1d2cqFrcGXN8Qb1cI3F8MOiAE9Wld2BWL/view' },
  },
  {
    id: 'cnc-05',
    number: '11',
    category: 'CNC',
    type: 'Pertemuan 5',
    icon: Cog,
    title: 'Pemrograman Pembubutan Alur dan Ulir',
    meta: 'Teknik Pemesinan CNC · Pertemuan 5',
    description:
      'Pemrograman pembuatan alur (grooving) dan ulir pada CNC bubut, mencakup parameter pemotongan dan urutan pengerjaan.',
    focus: 'Pengerjaan alur & ulir',
    evidence: 'Peserta didik memprogram pembuatan alur dan ulir dengan parameter yang tepat.',
    link: { label: 'Buka PDF', href: 'https://drive.google.com/file/d/1cYVh3iz20z5C8cL0CRrTBdQi--0K-DnS/view' },
  },
]

/* ==========================================================================
   VIDEO PRAKTIK PEMBELAJARAN
   Ganti `src` dengan tautan video praktik asli (mp4/youtube). Jika memakai
   tautan YouTube, isi `youtubeId` agar pratinjau tampil otomatis.
   ========================================================================== */

export const practiceVideos = [
  {
    id: 'praktik-01',
    number: '01',
    topic: 'Macam-Macam Garis',
    eyebrow: 'VIDEO PRAKTIK 01',
    title: 'Macam-Macam Garis',
    meta: 'Gambar Teknik · Kelas X · SMK Negeri 2 Depok Sleman',
    description:
      'Praktik pembelajaran pengenalan macam-macam garis gambar teknik: garis tebal kontinu, garis tipis, garis putus-putus, garis strip-titik, hingga garis bebas — lengkap dengan fungsi, ketebalan sesuai standar ISO, contoh penerapan, dan latihan menggambar bersama peserta didik.',
    highlights: ['Jenis & fungsi garis', 'Ketebalan standar ISO', 'Latihan menggambar'],
    duration: 'Siap ditayangkan',
    poster: '/assets/video/praktik-01-poster.webp',
    src: '/assets/video/praktik-pembelajaran-01.mp4',
    youtubeId: '',
  },
  {
    id: 'praktik-02',
    number: '02',
    topic: 'Bukaan',
    eyebrow: 'VIDEO PRAKTIK 02',
    title: 'Bukaan',
    meta: 'Gambar Teknik · Kelas X · SMK Negeri 2 Depok Sleman',
    description:
      'Praktik pembelajaran bukaan (bentangan) benda kerja: prinsip panjang sebenarnya, langkah menggambar bukaan secara manual, hingga penerapannya pada pekerjaan pelat dan pengembangan benda bersudut maupun bersilinder di bidang kejuruan Teknik Mesin.',
    highlights: ['Prinsip panjang sebenarnya', 'Langkah menggambar bukaan', 'Penerapan di bengkel'],
    duration: 'Siap ditayangkan',
    poster: '/assets/video/praktik-02-poster.webp',
    src: '/assets/video/praktik-pembelajaran-02.mp4',
    youtubeId: '',
  },
]

export const featuredPrograms = [
  {
    number: '01',
    icon: Compass,
    category: 'Web Interaktif Gambar Teknik',
    title: 'ARCUS — Ruang Belajar Gambar Teknik',
    description:
      'Media pembelajaran gambar teknik manual berbasis web yang memadukan pengenalan alat dan pensil, standardisasi garis ISO, etiket, proyeksi orthogonal, model 3D, lembar kerja interaktif, hingga tes diagnostik, UTS, UAS, dan sertifikat kelulusan.',
    badge: 'ARCUS',
    image: '/assets/innovations/arcus-preview.png',
    href: 'https://satriyanugraha07-code.github.io/Lomba-Media-Pembelajaran/',
    linkLabel: 'Buka ARCUS',
  },
]

export const galleryCategories = [
  'Semua',
  'Dokumentasi',
]

export const galleryItems = [
  {
    id: 1,
    title: 'Dokumentasi Pembelajaran Gambar Teknik 01',
    category: 'Dokumentasi',
    date: 'PPG 2025/2026',
    image: '/assets/dokumentasi/dokumentasi-01.webp',
    featured: true,
    description:
      'Dokumentasi kegiatan pembelajaran gambar teknik saat proses belajar berlangsung.',
  },
  {
    id: 2,
    title: 'Dokumentasi Pembelajaran Gambar Teknik 02',
    category: 'Dokumentasi',
    date: 'PPG 2025/2026',
    image: '/assets/dokumentasi/dokumentasi-02.webp',
    featured: false,
    description:
      'Dokumentasi kegiatan pembelajaran gambar teknik saat proses belajar berlangsung.',
  },
  {
    id: 3,
    title: 'Dokumentasi Pembelajaran Gambar Teknik 03',
    category: 'Dokumentasi',
    date: 'PPG 2025/2026',
    image: '/assets/dokumentasi/dokumentasi-03.webp',
    featured: false,
    description:
      'Dokumentasi kegiatan pembelajaran gambar teknik saat proses belajar berlangsung.',
  },
  {
    id: 4,
    title: 'Dokumentasi Pembelajaran Gambar Teknik 04',
    category: 'Dokumentasi',
    date: 'PPG 2025/2026',
    image: '/assets/dokumentasi/dokumentasi-04.webp',
    featured: false,
    description:
      'Dokumentasi kegiatan pembelajaran gambar teknik saat proses belajar berlangsung.',
  },
  {
    id: 5,
    title: 'Dokumentasi Pembelajaran Gambar Teknik 05',
    category: 'Dokumentasi',
    date: 'PPG 2025/2026',
    image: '/assets/dokumentasi/dokumentasi-05.webp',
    featured: false,
    description:
      'Dokumentasi kegiatan pembelajaran gambar teknik saat proses belajar berlangsung.',
  },
  {
    id: 6,
    title: 'Dokumentasi Pembelajaran Gambar Teknik 06',
    category: 'Dokumentasi',
    date: 'PPG 2025/2026',
    image: '/assets/dokumentasi/dokumentasi-06.webp',
    featured: false,
    description:
      'Dokumentasi kegiatan pembelajaran gambar teknik saat proses belajar berlangsung.',
  },
  {
    id: 7,
    title: 'Dokumentasi Pembelajaran Gambar Teknik 07',
    category: 'Dokumentasi',
    date: 'PPG 2025/2026',
    image: '/assets/dokumentasi/dokumentasi-07.webp',
    featured: false,
    description:
      'Dokumentasi kegiatan pembelajaran gambar teknik saat proses belajar berlangsung.',
  },
  {
    id: 8,
    title: 'Dokumentasi Pembelajaran Gambar Teknik 08',
    category: 'Dokumentasi',
    date: 'PPG 2025/2026',
    image: '/assets/dokumentasi/dokumentasi-08.webp',
    featured: false,
    description:
      'Peserta didik mencatat materi dan berlatih menggambar di ruang kelas Gambar Teknik.',
  },
  {
    id: 9,
    title: 'Dokumentasi Pembelajaran Gambar Teknik 09',
    category: 'Dokumentasi',
    date: 'PPG 2025/2026',
    image: '/assets/dokumentasi/dokumentasi-09.webp',
    featured: false,
    description:
      'Guru menjelaskan alur pembelajaran dan tujuan yang akan dicapai pada awal pertemuan.',
  },
  {
    id: 10,
    title: 'Dokumentasi Pembelajaran Gambar Teknik 10',
    category: 'Dokumentasi',
    date: 'PPG 2025/2026',
    image: '/assets/dokumentasi/dokumentasi-10.webp',
    featured: false,
    description:
      'Guru menyampaikan materi gambar teknik di papan tulis dengan ilustrasi sketsa.',
  },
  {
    id: 11,
    title: 'Dokumentasi Pembelajaran Gambar Teknik 11',
    category: 'Dokumentasi',
    date: 'PPG 2025/2026',
    image: '/assets/dokumentasi/dokumentasi-11.webp',
    featured: false,
    description:
      'Pendampingan guru kepada kelompok peserta didik saat mengerjakan lembar kerja.',
  },
  {
    id: 12,
    title: 'Dokumentasi Pembelajaran Gambar Teknik 12',
    category: 'Dokumentasi',
    date: 'PPG 2025/2026',
    image: '/assets/dokumentasi/dokumentasi-12.webp',
    featured: true,
    description:
      'Guru mendampingi peserta didik secara individual saat latihan menggambar.',
  },
  {
    id: 13,
    title: 'Dokumentasi Pembelajaran Gambar Teknik 13',
    category: 'Dokumentasi',
    date: 'PPG 2025/2026',
    image: '/assets/dokumentasi/dokumentasi-13.webp',
    featured: false,
    description:
      'Peserta didik fokus menyelesaikan gambar kerja tepat waktu menggunakan jangka.',
  },
  {
    id: 14,
    title: 'Dokumentasi Pembelajaran Gambar Teknik 14',
    category: 'Dokumentasi',
    date: 'PPG 2025/2026',
    image: '/assets/dokumentasi/dokumentasi-14.webp',
    featured: false,
    description:
      'Penggunaan jangka untuk membuat lingkaran dan busur pada gambar teknik manual.',
  },
]

export const articleItems = [
  {
    id: 1,
    category: 'Inovasi Pembelajaran',
    title: 'Strategi Project-Based Learning pada Mata Pelajaran Pemesinan SMK',
    excerpt:
      'Bagaimana menghubungkan teori dasar teknik mesin dengan pembuatan produk riil yang menumbuhkan kreativitas dan kedisiplinan peserta didik.',
    date: '15 Januari 2025',
    readTime: '4 menit baca',
    image: '/assets/backgrounds/bg-pastel-03.png',
    featured: true,
  },
  {
    id: 2,
    category: 'Refleksi Pedagogik',
    title: 'Membangun Ekosistem Pembelajaran Vokasi yang Aman dan Empathic',
    excerpt:
      'Pentingnya integrasi kesadaran sosial-emosional dalam mengelola ruang praktik bengkel agar setiap murid merasa dihargai.',
    date: '28 Desember 2024',
    readTime: '3 menit baca',
    image: '/assets/backgrounds/bg-pastel-02.png',
    featured: false,
  },
  {
    id: 3,
    category: 'Teknologi Vokasi',
    title: 'Tantangan Transformasi Digital & CAD/CAM di Sekolah Kejuruan',
    excerpt:
      'Langkah taktis pendidik dalam menjembatani teknologi mesin konvensional menuju otomatisasi Industri 4.0.',
    date: '10 November 2024',
    readTime: '5 menit baca',
    image: '/assets/backgrounds/bg-pastel-01.png',
    featured: false,
  },
]

export const contactInfo = {
  institution: 'Universitas Sarjanawiyata Tamansiswa (UST)',
  program: 'PPG Prajabatan Teknik Mesin',
  address: 'Jl. Kusumanegara No.157, Muja Muju, Umbulharjo, Kota Yogyakarta',
  email: 'ppg.teknikmesin@ustjogja.ac.id',
  phone: '+62 274 551539',
}