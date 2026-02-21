# 🎬 Movie Explorer

Aplikasi web modern untuk menjelajahi koleksi film dengan berbagai teknik rendering.

## 📋 Deskripsi

Movie Explorer adalah aplikasi web yang mendemonstrasikan implementasi berbagai teknik rendering modern dalam pengembangan web, termasuk SSG, SSR, dan CSR. Aplikasi ini menampilkan katalog film dengan fitur pencarian dan filter yang interaktif.

## ✨ Fitur Utama

- 🔍 **Pencarian Real-time** - Cari film berdasarkan judul, deskripsi, atau sutradara
- 🎭 **Filter Genre** - Filter film berdasarkan kategori genre
- 📊 **Rating & Info** - Tampilan rating, durasi, dan informasi lengkap film
- 🎨 **UI/UX Modern** - Desain responsive dengan animasi smooth
- ⚡ **Fast Performance** - Optimasi rendering untuk performa maksimal

## 🛠️ Teknologi yang Digunakan

- **React 18** - Library JavaScript untuk membangun UI
- **TypeScript** - Superset JavaScript dengan type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vite** - Build tool dan development server yang cepat
- **Lucide React** - Icon library modern

## 🎯 Teknik Rendering

### 1. SSG (Static Site Generation)
Data film awal dimuat saat aplikasi pertama kali dibuka menggunakan `getStaticMovies()`. Data ini sudah tersedia secara statis untuk performa optimal.

### 2. SSR (Server Side Rendering)
Detail film dimuat secara dinamis dengan simulasi network delay saat user mengklik film menggunakan `fetchMovieById()`. Mensimulasikan pemanggilan API server.

### 3. CSR (Client Side Rendering)
Fitur search dan filter menggunakan React `useState` untuk state management. Data difilter dan dirender secara real-time di client side menggunakan `searchMovies()`.

## 📦 Instalasi

1. Clone repository:
```bash
git clone https://github.com/username/movie-explorer.git
cd movie-explorer
```

2. Install dependencies:
```bash
npm install
# atau
pnpm install
# atau
yarn install
```

3. Jalankan development server:
```bash
npm run dev
# atau
pnpm dev
# atau
yarn dev
```

4. Buka browser dan akses:
```
https://a-movie-explorer.vercel.app
```

## 🏗️ Build untuk Production

```bash
npm run build
npm run preview
```

## 📁 Struktur Project

```
movie-explorer/
├── src/
│   ├── app/
│   │   ├── App.tsx                    # Main component
│   │   └── components/
│   │       ├── MovieCard.tsx          # Komponen card film
│   │       ├── MovieDetail.tsx        # Modal detail film
│   │       ├── SearchBar.tsx          # Komponen search
│   │       ├── FilterSection.tsx      # Komponen filter genre
│   │       └── LoadingSpinner.tsx     # Loading indicator
│   ├── utils/
│   │   └── api.ts                     # API functions dan mock data
│   └── styles/
│       ├── index.css
│       ├── tailwind.css
│       ├── theme.css
│       └── fonts.css
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Komponen Utama

### MovieCard
Komponen card untuk menampilkan preview film dengan poster, rating, genre, dan durasi.

### MovieDetail
Modal popup yang menampilkan informasi lengkap film termasuk sinopsis, director, dan cast.

### SearchBar
Input field untuk pencarian film dengan fitur clear button.

### FilterSection
Tombol-tombol filter untuk memilih genre film.

## 🔄 State Management

Aplikasi menggunakan React Hooks untuk state management:
- `useState` - Mengelola state search query, filter, dan selected movie
- `useEffect` - Handle side effects untuk fetching dan filtering data

## 📝 API Structure

```typescript
interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  genre: string;
  poster: string;
  description: string;
  director: string;
  cast: string[];
  duration: number;
}
```

## 🚀 Deployment

Aplikasi ini dapat di-deploy ke berbagai platform:
- **Vercel** - Recommended untuk Next.js/React apps
- **Netlify** - Simple deployment dengan CI/CD
- **GitHub Pages** - Gratis untuk static sites

## 👨‍💻 Developer

**Nama Anda**
- GitHub: [@fennx6](https://github.com/fennx6)

## 📄 License

MIT License - bebas digunakan untuk pembelajaran dan pengembangan.

## 🙏 Acknowledgments

- Data film menggunakan mock data untuk tujuan demonstrasi
- Icons dari [Lucide React](https://lucide.dev/)
- Images dari [Unsplash](https://unsplash.com/)
