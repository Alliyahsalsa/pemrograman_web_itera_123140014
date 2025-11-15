# 📚 README.md: Sistem Manajemen Perpustakaan Sederhana (OOP Python)

### 1. Deskripsi Program dan Fitur Utama

Dokumen ini menjelaskan implementasi dari Sistem Manajemen Perpustakaan Sederhana yang dibangun menggunakan bahasa pemrograman Python. Program ini dirancang untuk mendemonstrasikan penerapan konsep *Object-Oriented Programming* (OOP) yang terstruktur dan interaktif.

#### **Fungsi Program:**
Program ini berfungsi sebagai *back-end* sederhana untuk mengelola koleksi buku dan majalah dalam sebuah perpustakaan, memungkinkan pengguna untuk melakukan operasi dasar manajemen inventaris.

#### **Fitur-Fitur yang Tersedia:**
* **Penambahan Item Baru:** Pengguna dapat menambahkan item baru, baik **Buku** maupun **Majalah**, melalui menu interaktif. ID item akan dibuat secara otomatis dengan *prefix* unik (`B` untuk Buku, `M` untuk Majalah).
* **Tampilan Koleksi Ringkas:** Menampilkan daftar seluruh item yang tersimpan dalam koleksi, hanya mencakup **ID Item, Judul, dan Status** ketersediaan, serta **Total Item** yang ada.
* **Pencarian Detail:** Fitur untuk mencari item berdasarkan Judul atau ID, di mana hasilnya akan menampilkan informasi item secara lengkap (detail Penulis, Halaman, Edisi, dll.).
* **Manajemen Status:** Memungkinkan pengguna untuk mengubah status ketersediaan item dari "Tersedia" menjadi "Dipinjam" atau sebaliknya.

---

### 2. Implementasi Konsep Object-Oriented Programming (OOP)

Program ini berfokus pada penerapan konsep OOP Python sebagai berikut:

| Konsep OOP | Implementasi | Keterangan |
| :--- | :--- | :--- |
| **Abstract Class** | Kelas `LibraryItem` | Kelas dasar yang mendefinisikan *blueprint* untuk semua item. Kelas ini tidak dapat diinstansiasi secara langsung. |
| **Inheritance** | Kelas `Book` dan `Magazine` | Kedua kelas ini mewarisi properti dan metode dari kelas induk `LibraryItem`. |
| **Encapsulation** | Penggunaan *protected attributes* (`self._title`, dll.) dan *private attribute* (`self.__collection`) di kelas `Library`. | Melindungi integritas data internal dan membatasi akses langsung dari luar kelas. |
| **Polymorphism** | Metode `display_info()` | Metode yang sama dipanggil pada objek yang berbeda (Buku atau Majalah), menghasilkan *output* yang berbeda sesuai dengan tipe objek tersebut. |
| **Property Decorator** | Digunakan pada atribut `title`, `item_id`, dan `penerbit`. | Memungkinkan kontrol akses yang lebih baik dan penulisan kode yang lebih *Pythonic* untuk mendapatkan atau mengatur nilai atribut. |

---

### 3. Screenshot Hasil Running Program

Berikut adalah tampilan dari program saat dijalankan, yang menunjukkan berbagai fungsionalitas utama:

#### **3.1 Menu Utama dan Tampilan Koleksi**

#### **3.2 Penambahan Item Baru (Contoh Buku)**

#### **3.3 Perubahan Status Ketersediaan**

---

### 4. Diagram Kelas (Class Diagram)

*(Bagian ini bersifat opsional dan dapat Anda buat menggunakan alat seperti PlantUML atau draw.io jika Anda ingin menambah nilai tugas.)*

Program ini terdiri dari struktur tiga kelas utama:

* **`LibraryItem` (Abstract)**
    * *Attributes*: `_title`, `_item_id`, `_is_available`
    * *Methods*: `get_status()`, `set_availability()`, `display_info()` (abstract), `check_status()` (abstract)
* **`Book` (Subclass)**
    * *Attributes*: `_author`, `_pages`, `_penerbit`
    * *Methods*: `display_info()` (implemented), `check_status()` (implemented)
* **`Magazine` (Subclass)**
    * *Attributes*: `_issue_number`, `_year`
    * *Methods*: `display_info()` (implemented), `check_status()` (implemented)
* **`Library`**
    * *Attributes*: `__collection`, `__next_book_num`, `__next_magazine_num`
    * *Methods*: `generate_book_id()`, `generate_magazine_id()`, `add_item()`, `display_all_items()`, `search_item()`
```