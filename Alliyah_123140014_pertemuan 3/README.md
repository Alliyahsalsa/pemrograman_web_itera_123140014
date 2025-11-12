# 📖 Catatan Buku Saya - Aplikasi Manajemen Inventaris Buku
Aplikasi web berbasis React untuk mengelola koleksi buku pribadi dengan antarmuka yang menarik. Fitur lengkap dengan CRUD operations, filtering, pencarian, dan statistik.

## 📋 Deskripsi Aplikasi
**Catatan Buku Saya** adalah Single Page Application (SPA) yang memungkinkan pengguna untuk:
- ✨ Menambahkan buku baru ke inventaris
- ✏️ Mengedit informasi buku yang sudah ada
- 🗑️ Menghapus buku dari daftar
- 🔍 Mencari buku berdasarkan judul atau penulis
- 🏷️ Memfilter buku berdasarkan status (Dimiliki, Sedang Dibaca, Akan Dibeli)
- 📊 Melihat statistik koleksi buku secara real-time
Data disimpan secara otomatis di **Local Storage** sehingga tetap tersedia meskipun browser ditutup.

## 🚀 Instruksi Instalasi dan Menjalankan
### Prerequisites
Pastikan sudah terinstall:
- **Node.js** versi 14 atau lebih baru ([Download](https://nodejs.org/))
- **npm** (terinstall otomatis dengan Node.js)

### Langkah Instalasi
1. **Clone repository:**
```bash
git clone https://github.com/7refi/my-react-app.git 
````
2. **Install dependencies:**
```bash
npm install
```
3. **Jalankan aplikasi dalam mode development:**
```bash
npm start
````

### Code Splitting
Aplikasi akan terbuka otomatis di browser pada alamat: `http://localhost:3000`

### Perintah Lainnya
- **Menjalankan test:**
````bash
npm test
````

### Halaman Daftar Buku
*[hasil ss]*

### Tambah/Edit Buku
*[hasil ss]*

### Halaman Statistik
*[hasil ss]*

### Fitur Filter dan Pencarian
*[hasil ss]*

## ⚛️ Penjelasan Fitur React yang Digunakan
### 1. **React Hooks**
- **useState** - Mengelola state lokal (form data, filter, modal)
- **useEffect** - Sinkronisasi dengan localStorage dan load data saat edit
- **useMemo** - Optimasi filtering dan perhitungan statistik
- **useContext** - Akses global state via custom hook `useReadingList()

### 2. **Context API**
### Code Splitting
Global state management dengan `BookProvider` yang menyimpan inventory dan fungsi CRUD (addItem, modifyItem, removeItem) tanpa prop drilling.
Aplikasi akan terbuka otomatis di browser pada alamat: `http://localhost:3000`

### 3. **React Router DOM v7**
Client-side routing dengan `BrowserRouter`, `Routes`, dan `Route` untuk navigasi Home dan Stats.

### 4. **Custom Hooks**
- **useLocalStorage** - Generic hook untuk persistent state- **Menjalankan test:**
- **useBookStats** - Derived state untuk statistik dari inventory

### 5. **Controlled Components**
Form inputs dikontrol penuh oleh React state dengan two-way data binding.

### 6. **Event Handling**
Handler functions untuk submit form, filter data, dan user interactions.

### 7. **Conditional Rendering**
Render berbeda berdasarkan kondisi (empty state, modal visibility, filter results). 

---

## 🧪 Laporan Testing
### Test Suite Overview
Aplikasi dilengkapi dengan automated testing menggunakan **Jest** dan **React Testing Library**.
**Total Test Cases: 5**

- ✅ Render Halaman Home dan tampilkan daftar buku
- ✅ Filter pencarian berfungsi di Halaman Home
- ✅ Filter status berfungsi di Halaman Home
- ✅ Render Halaman Statistik dan tampilkan data metrik
- ✅ Navigasi antar halaman berfungsi

### Hasil Test
<img width="874" height="371" alt="image" src="https://github.com/user-attachments/assets/08055c5b-1131-4025-aa39-2e7d2181f31d" />

