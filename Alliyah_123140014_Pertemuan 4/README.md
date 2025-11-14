# 📚 Program Pengelolaan Data Nilai Mahasiswa (Python)

Program ini merupakan implementasi perangkat lunak konsol yang dikembangkan menggunakan bahasa pemrograman Python untuk mengelola data nilai mahasiswa. Aplikasi ini dirancang untuk memenuhi persyaratan fungsionalitas inti dalam pengolahan data akademik, termasuk perhitungan nilai, penentuan grade, hingga analisis data sederhana.

---

## I. Spesifikasi dan Fitur Utama

Aplikasi ini mencakup fungsionalitas lengkap sesuai dengan kriteria tugas yang telah ditetapkan.

### 1. Struktur Data

Data mahasiswa disimpan dalam struktur **List of Dictionaries**, di mana setiap entri (*dictionary*) memiliki elemen sebagai berikut:
* `nama` (String)
* `NIM` (String)
* `nilai_uts` (Integer)
* `nilai_uas` (Integer)
* `nilai_tugas` (Integer)

Data awal telah diinisialisasi dalam program untuk tujuan demonstrasi.

### 2. Fungsi Perhitungan dan Penentuan

| Fungsi | Deskripsi | Kriteria |
| :--- | :--- | :--- |
| **`hitung_nilai_akhir`** | Melakukan perhitungan Nilai Akhir berdasarkan pembobotan nilai komponen. | **UTS (30%) + UAS (40%) + Tugas (30%)** |
| **`tentukan_grade`** | Bertugas menentukan Grade (huruf) berdasarkan Nilai Akhir yang dicapai. | A ($\ge 80$), B ($\ge 70$), C ($\ge 60$), D ($\ge 50$), E ($< 50$) |

### 3. Fungsionalitas Pengelolaan Data

* **Tampilan Data (Tabel):** Modul untuk menampilkan keseluruhan data mahasiswa secara terstruktur dan rapi dalam format tabel konsol.
* **Pencarian Ekstrem:** Memiliki kemampuan untuk mengidentifikasi dan menampilkan mahasiswa dengan Nilai Akhir **tertinggi** dan **terendah** di kelas.

---

## II. Fitur Tambahan (Analisis dan Input)

Sebagai pelengkap, program ini menyertakan fitur interaktif untuk analisis dan *input* data:

* **Input Data Mahasiswa Baru:** Menyediakan modul interaktif untuk memasukkan data mahasiswa baru, yang akan langsung ditambahkan ke dalam basis data.
* **Filter Berdasarkan Grade:** Memungkinkan pengguna untuk menyaring dan menampilkan data mahasiswa hanya pada grade tertentu (A, B, C, D, atau E).
* **Perhitungan Rata-rata Kelas:** Bertanggung jawab menghitung dan menyajikan rata-rata Nilai Akhir keseluruhan kelas.

---

## III. Panduan Penggunaan

### Persyaratan Sistem

Program ini memerlukan instalasi **Python 3.x**.

### Langkah Eksekusi

1.  Simpan seluruh kode Python ke dalam satu file (misalnya, `nilai_mahasiswa.py`).
2.  Buka terminal/Command Prompt dan navigasikan ke direktori penyimpanan file.
3.  Jalankan program dengan perintah berikut:

    ```bash
    python nilai_mahasiswa.py
    ```

4.  Program akan menampilkan menu interaktif. Silakan pilih opsi (1-6) untuk mengakses fitur yang tersedia.

---

## IV. Dokumentasi Visual (Screenshots)

Untuk memberikan gambaran mengenai antarmuka dan *output* program, berikut disertakan tangkapan layar hasil eksekusi:

### Tampilan Menu Utama dan Data Lengkap

*(Silakan tempatkan tangkapan layar Menu Utama dan Tampilan Data Tabel di sini)*
`![Tampilan Menu Utama dan Output Data Lengkap](path/ke/gambar_menu_tabel.png)`

### Hasil Filter Grade dan Rata-rata Kelas

*(Silakan tempatkan tangkapan layar hasil fitur Filter dan Rata-rata Kelas di sini)*
`![Hasil Filter dan Perhitungan Rata-Rata](path/ke/gambar_filter_rata2.png)`