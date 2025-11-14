# 📚 Program Pengelolaan Data Nilai Mahasiswa

Program ini merupakan aplikasi konsol yang dikembangkan menggunakan Python untuk mengelola dan menganalisis data nilai mahasiswa. Aplikasi ini dirancang untuk menyediakan fungsionalitas komprehensif dalam pengolahan data akademik, mencakup perhitungan nilai, penentuan grade, hingga fitur analisis data sederhana.

---

## A. Spesifikasi dan Fungsionalitas

### 1. Struktur Data

Data mahasiswa disimpan dalam struktur **List of Dictionaries**. Setiap entri data mencakup informasi:
* `nama` (String)
* `NIM` (String)
* `nilai_uts` (Integer)
* `nilai_uas` (Integer)
* `nilai_tugas` (Integer)

Data awal telah diinisialisasi dalam program untuk tujuan demonstrasi.

### 2. Fungsi Perhitungan dan Penentuan

| Fungsi | Deskripsi | Kriteria Perhitungan |
| :--- | :--- | :--- |
| **`hitung_nilai_akhir`** | Menghitung Nilai Akhir mahasiswa berdasarkan pembobotan nilai komponen. | **UTS (30%) + UAS (40%) + Tugas (30%)** |
| **`tentukan_grade`** | Menentukan Grade (huruf) berdasarkan Nilai Akhir yang diperoleh. | A ($\ge 80$), B ($\ge 70$), C ($\ge 60$), D ($\ge 50$), E ($< 50$) |

### 3. Fungsionalitas Pengelolaan Data

* **Tampilan Data (Tabel):** Modul untuk menampilkan seluruh data mahasiswa secara terstruktur dalam format tabel di konsol.
* **Pencarian Nilai Ekstrem:** Berfungsi mengidentifikasi dan menampilkan mahasiswa dengan Nilai Akhir **tertinggi** dan **terendah** di kelas.

---

## B. Fitur Tambahan dan Interaktif

Program ini juga dilengkapi dengan fitur-fitur interaktif berikut:

* **Input Data Mahasiswa Baru:** Menyediakan modul untuk memasukkan data mahasiswa baru secara *real-time* ke dalam basis data.
* **Filter Berdasarkan Grade:** Memungkinkan pengguna untuk menyaring dan menampilkan data mahasiswa hanya pada grade tertentu (A, B, C, D, atau E).
* **Perhitungan Rata-rata Kelas:** Menghitung dan menyajikan rata-rata Nilai Akhir dari keseluruhan mahasiswa, berguna untuk analisis performa kelas.

---

## C. Panduan Penggunaan

### Persyaratan Sistem

Program ini membutuhkan instalasi **Python 3.x**.

### Langkah Eksekusi

1.  Simpan seluruh kode Python ke dalam satu file (misalnya, `nilai_mahasiswa.py`).
2.  Akses terminal/Command Prompt dan navigasikan ke direktori penyimpanan file tersebut.
3.  Jalankan program dengan perintah:

    ```bash
    python nilai_mahasiswa.py
    ```

4.  Silakan pilih opsi (1-6) pada menu interaktif untuk mengakses fitur yang tersedia.

---

## D. Dokumentasi Output

Berikut adalah hasil eksekusi program untuk memberikan gambaran antarmuka dan output:

- ### Tampilan Menu Utama dan Data Lengkap
<img width="932" height="626" alt="Screenshot 2025-11-15 001132" src="https://github.com/user-attachments/assets/eb6c6dca-ef04-46f4-a050-7bed9d3fcd0e" />

- ### Tampilan Tambah Data Mahasiswa Baru
<img width="1349" height="853" alt="Screenshot 2025-11-15 001433" src="https://github.com/user-attachments/assets/7e33256a-a8d3-42be-90b2-136910e6e205" />

- ### Hasil Mencari Nilai Tertinggi/Terendah
<img width="872" height="377" alt="Screenshot 2025-11-15 001521" src="https://github.com/user-attachments/assets/76640120-9bac-402c-91ba-1b000465e590" />

- ### Tampilan Hasil Filter Grade
<img width="990" height="461" alt="Screenshot 2025-11-15 001543" src="https://github.com/user-attachments/assets/e7fbbadb-5524-49ae-8de9-c8d1601d4f6d" />

- ### Tampilan Hasil Rata-rata Nilai Kelas
<img width="819" height="313" alt="Screenshot 2025-11-15 002811" src="https://github.com/user-attachments/assets/6934e4a1-949a-4571-b42f-e6a313c01731" />

- ### Tampilan Keluar Dari Program
<img width="878" height="264" alt="Screenshot 2025-11-15 002834" src="https://github.com/user-attachments/assets/df5177dc-ff2c-42b3-9ec2-efad9303e3ca" />