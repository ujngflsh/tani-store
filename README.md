@'
# 🌾 tani-store

Toko pertanian online yang simpel dan enak dipakai — cari benih, pupuk, alat tani, sampai kebutuhan irigasi, semua ada dalam satu tempat.

🔗 **Live Demo:** [tani-store-ujngflsh.vercel.app](https://tani-store-ujngflsh.vercel.app)

![Home](screenshots/01-home.png)

---

## Kenapa tani-store?

Pertanian itu tulang punggung negeri ini, tapi belanja kebutuhan taninya masih sering ribet — harus ke toko fisik, stok gak jelas, harga beda-beda. **tani-store** hadir sebagai solusi: katalog lengkap, harga transparan, varian jelas, dan checkout langsung dari rumah.

Project ini juga jadi portofolio saya untuk menunjukkan cara membangun e-commerce modern pakai React — dari nol, tanpa framework UI berat, fokus ke pengalaman pengguna.

---

## ✨ Fitur

- 🏠 **Landing page** dengan hero, kategori, dan produk unggulan
- 🔍 **Search live** — ketik langsung muncul, ada highlight kata kunci
- 📂 **Filter kategori** — Benih, Pupuk, Alat Tani, Pestisida, Irigasi
- 🛍️ **Detail produk** dengan varian (kemasan, ukuran, dll)
- 🛒 **Keranjang** — ubah qty, hapus item, total harga real-time
- 📱 **Responsive** — nyaman di HP maupun desktop

---

## 📸 Preview

### 🏠 Home
![Home](screenshots/01-home.png)

### 🛍️ Semua Produk
![Products](screenshots/02-products.png)

### 📦 Detail Produk
![Detail](screenshots/03-detail.png)

### 🛒 Keranjang
![Cart](screenshots/04-cart.png)

### 📱 Mobile
![Mobile](screenshots/05-mobile.png)

---

## 🛠️ Dibangun Dengan

React 19 · Vite 7 · React Router 7 · Lucide React · Plain CSS (CSS Variables) · Context API

---

## 🚀 Jalankan di Lokal

```bash
git clone https://github.com/ujngflsh/tani-store.git
cd tani-store
npm install
npm run dev

Buka http://localhost:5173

📁 Struktur
text
src/
├── components/    # Navbar, Hero, Footer, dll
├── pages/         # Home, Products, ProductDetail, Cart
├── data/          # products.js
├── App.jsx
├── main.jsx
└── index.css
