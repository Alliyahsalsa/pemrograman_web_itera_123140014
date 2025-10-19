# 📚 Aplikasi Manajemen Tugas – Praktikum Pemrograman Aplikasi Web

## 📝 Deskripsi Singkat  
Aplikasi Manajemen Tugas Mahasiswa adalah aplikasi web sederhana untuk membantu mahasiswa mengatur dan memantau tugas kuliah. Pengguna dapat menambahkan, mengedit, menghapus, menandai tugas selesai, serta mencari dan memfilter tugas dengan mudah. Aplikasi ini menyimpan data secara lokal melalui localStorage sehingga informasi tidak hilang saat halaman direfresh atau ditutup.

---

## 🖼️ Screenshot Aplikasi  

Berikut adalah beberapa screenshot dari aplikasi yang telah dibuat:

**1. Tampilan Form Tambah Tugas**  
<img width="878" height="485" alt="Image" src="https://github.com/user-attachments/assets/0b96a7d6-3c18-4483-815b-39c6a08e6105" />

**2. Tampilan Form Edit Tugas**  
<img width="577" height="563" alt="Image" src="https://github.com/user-attachments/assets/245601ad-56ac-48f5-9ee9-89c87043a438" />

**3. Tampilan Daftar Tugas**  
<img width="890" height="595" alt="Image" src="https://github.com/user-attachments/assets/691c85ac-0860-48c7-b2d4-5fb205643741" />

---

## 🚀 Cara Menjalankan Aplikasi  

1. **Clone atau download** repository ini ke komputer:
   ```bash
   git clone https://github.com/USERNAME/pemrograman_web_itera_123140014.git
2. Masuk ke folder project:
   ```bash
   cd aliyah_123140014_pertemuan1
3. Buka file index.html menggunakan browser (Chrome, Edge, Firefox, dll).
4. Aplikasi siap digunakan tanpa instalasi tambahan.

---

## 🧰 Fitur yang Telah Diimplementasikan

✅ Struktur halaman menggunakan HTML
✅ Styling menggunakan CSS eksternal
✅ Validasi form input (nama tugas, matkul, dan deadline wajib diisi)
✅ Penyimpanan data ke localStorage
✅ Menampilkan data tugas yang tersimpan
✅ Fitur edit tugas langsung
✅ Fitur hapus tugas
✅ Fitur tandai tugas sebagai selesai

---

## 🛠️ Penjelasan Teknis

### 🧠 Penggunaan localStorage

Aplikasi menyimpan data tugas menggunakan localStorage sehingga data tidak hilang ketika halaman direfresh.

Contoh kode menyimpan data:
      ```javascript
localStorage.setItem("tugas", JSON.stringify(tugasList));

Contoh kode mengambil data:
```javascript
const tugasList = JSON.parse(localStorage.getItem("tugas")) || [];
