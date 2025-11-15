# Sistem Manajemen Perpustakaan Sederhana

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

### 3. Tampilan Program

Berikut adalah tampilan dari program saat dijalankan, yang menunjukkan berbagai fungsionalitas utama:

#### **Menu Utama dan Tampilan Koleksi**
<img width="886" height="563" alt="image" src="https://github.com/user-attachments/assets/04f09d0d-edcb-4215-b055-5f176b2a9e40" />

#### **Penambahan Item Baru (Contoh Buku)**
<img width="1003" height="561" alt="image" src="https://github.com/user-attachments/assets/ea29c02a-1707-47be-9849-407f7dc64a00" />

#### **Penambahan Item Baru (Contoh Majalah)**
<img width="881" height="565" alt="image" src="https://github.com/user-attachments/assets/fa671cc8-177a-4cf6-a924-c172f936b4de" />

#### **Pencarian Item Berdasarkan Judul/ID**
- **Berdasarkan ID**
<img width="950" height="681" alt="image" src="https://github.com/user-attachments/assets/9760516c-33fa-4c14-b091-4dece5667edc" />

- **Berdasarkan Judul**
<img width="935" height="646" alt="image" src="https://github.com/user-attachments/assets/2636185c-61c2-4c8b-8146-844f7354950b" />

#### **Perubahan Status Ketersediaan**
<img width="952" height="577" alt="image" src="https://github.com/user-attachments/assets/84596535-1045-4e6b-91e9-962602d28ff6" />

---

### 4. Diagram Kelas (Class Diagram)

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
