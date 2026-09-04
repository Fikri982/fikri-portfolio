# Fikri's Personal Portfolio 🚀 (Next.js & TypeScript)

Selamat datang di repositori portofolio pribadi saya. Ini adalah platform showcase interaktif modern yang dirancang untuk menampilkan profil profesional, riwayat kepanitiaan/organisasi, serta arsip proyek _web development_ yang saya bangun.

Sebagai mahasiswa **Matematika Institut Teknologi Sepuluh Nopember (ITS)** dengan ketertarikan tinggi pada pemrograman, portofolio ini menggabungkan logika matematika dan keahlian rekayasa perangkat lunak dalam visual yang premium dan interaktif.

---

## 🌟 Fitur Utama & Optimasi Performa

- **⚡ Next.js App Router (React 19) & SSG**: Seluruh halaman dinamis arsip proyek (`/projects/[id]`) dikompilasi secara statis pada saat build time menggunakan `generateStaticParams()`. Menghasilkan waktu muat instan (0ms server latency) saat bernavigasi.
- **🌀 Holographic Math-Code Blueprint**: Visual utama interaktif di Hero Section berupa piringan koordinat 3D yang meliuk mengikuti pergerakan kursor (_3D Tilt tracking_), dikelilingi oleh node teknologi (Next.js, TS, React, Git) dan simbol matematika ($\sum$, $\int$, $f(x)$) serta visualisasi gelombang sinus dinamis.
- **🧮 Math Playground**: Halaman `/playground` berisi demo visual interaktif Discrete Fourier Transform dan operasi matriks, menggabungkan latar belakang Matematika dengan kemampuan web development.
- **🐢 Lazy-Loading Komponen Klien**: Komponen grafis berat seperti partikel background (`ParticleCanvas`) dan hologram (`IsometricArt`) dimuat secara _lazy-load_ di sisi klien menggunakan `next/dynamic` dengan opsi `{ ssr: false }` guna mengoptimalkan skor _First Contentful Paint_ (FCP) Lighthouse.
- **📅 Integrasi Kalender GitHub**: Menampilkan kontribusi GitHub secara langsung di halaman About menggunakan `react-github-calendar`, didukung API route (`/api/github`) dengan data fallback jika GitHub API gagal/limit.
- **📂 Clean & Modular Architecture**: Struktur folder komponen dikelompokkan rapi berdasarkan domain halaman (`home`, `about`, `projects`, `layout`, `ui`, `playground`), dengan konten (`data/`) dan tipe data (`types/`) dipisah dari komponen untuk kemudahan pemeliharaan kode.

---

## 🛠️ Tech Stack

- **Framework Utama**: [Next.js 16](https://nextjs.org/) (App Router)
- **Bahasa Pemrograman**: [TypeScript](https://www.typescriptlang.org/)
- **Gaya & Desain (CSS)**: [Tailwind CSS](https://tailwindcss.com/) (dengan Glassmorphism & Custom Glow Effects)
- **Pustaka Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Utilitas Tambahan**: `react-github-calendar`, `sonner` (notifikasi toast).

---

## 📁 Struktur Folder Proyek

```text
app/
  about/                  # Halaman riwayat profil & pendidikan
  api/                    # Endpoint API serverless (GitHub integration)
  components/             # Komponen React modular dikelompokkan per halaman
    home/                 # Komponen khusus landing page (Hero, Project list, dll)
    about/                # Komponen khusus halaman About (Education, Experience, GitHub)
    projects/             # Komponen khusus detail studi kasus proyek
    layout/               # Tata letak global (Navbar & Footer)
    ui/                   # Atom UI terkontrol (PageLoader, Canvas)
    playground/           # Komponen demo math playground (Fourier, Matrix)
  data/                   # Database lokal statis (proyek, studi kasus, riwayat)
  types/                  # Definisi interface/tipe TypeScript untuk data di atas
  hooks/                  # Custom React hooks (mis. scroll reveal)
  projects/               # Folder rute pendaftaran halaman dynamic projects
  playground/             # Rute halaman math playground
  globals.css             # Konfigurasi CSS variables & custom utilities
  layout.tsx              # Tata letak HTML dasar
  page.tsx                # Halaman utama (Landing Page)
public/                   # File gambar, ikon, dan dokumen PDF (CV)
```

---

## 🚀 Memulai Pengerjaan Lokal

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek ini di mesin lokal Anda:

### 1. Klon Repositori

```bash
git clone https://github.com/Fikri982/fikri-portfolio.git
cd fikri-portfolio
```

### 2. Instalasi Dependensi

```bash
npm install
```

### 3. Menjalankan Server Pengembangan (Development Server)

```bash
npm run dev
```

Buka browser Anda dan kunjungi [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

### 4. Build untuk Produksi

Untuk mengompilasi halaman statis portofolio dengan performa penuh:

```bash
npm run build
npm run start
```
