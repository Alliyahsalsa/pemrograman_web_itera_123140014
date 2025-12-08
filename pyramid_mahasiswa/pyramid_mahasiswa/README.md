Tentu, saya mengerti. Anda ingin bagian **API Endpoints** dibuat sangat detail, menampilkan setiap *endpoint* satu per satu lengkap dengan contoh **Request** (perintah `curl`) dan **Response** (JSON)-nya, persis seperti contoh gambar yang Anda kirimkan.

Berikut adalah revisi lengkap **`README.md`** yang sudah disesuaikan agar rapi dan siap *copy-paste* ke GitHub:

````markdown
# Pyramid Mahasiswa API

Proyek ini adalah aplikasi web RESTful API sederhana yang dibangun menggunakan **Pyramid Framework**. Aplikasi ini berfungsi untuk mengelola data Mahasiswa (CRUD) menggunakan database **PostgreSQL** dan ORM **SQLAlchemy**.

---

## 1. Deskripsi Proyek

Aplikasi ini menyediakan layanan backend untuk manajemen data mahasiswa.
Teknologi yang digunakan:
* **Framework:** Pyramid
* **Database:** PostgreSQL
* **ORM:** SQLAlchemy
* **Migration:** Alembic
* **Server:** Waitress / Pserve

Fitur utama meliputi:
* Melihat daftar semua mahasiswa.
* Melihat detail mahasiswa berdasarkan ID.
* Menambahkan data mahasiswa baru.
* Memperbarui data mahasiswa.
* Menghapus data mahasiswa.

---

## 2. Cara Instalasi

### Langkah membuat virtual environment

Pastikan Anda berada di direktori root proyek, lalu jalankan perintah berikut di terminal (PowerShell/CMD):

```bash
# Membuat virtual environment
python -m venv venv

# Mengaktifkan virtual environment (Windows)
.\venv\Scripts\Activate
````

### Instalasi dependensi

Setelah *virtual environment* aktif, instal paket-paket yang dibutuhkan:

```bash
pip install --upgrade pip setuptools
pip install -e .
pip install pyramid sqlalchemy alembic psycopg2-binary pyramid_tm pyramid_retry pyramid_beaker zope.sqlalchemy
```

### Konfigurasi database

1.  Pastikan **PostgreSQL** sudah berjalan.
2.  Buka file `development.ini`.
3.  Sesuaikan URL koneksi database pada baris `sqlalchemy.url`:

<!-- end list -->

```ini
sqlalchemy.url = postgresql://username:password@localhost:5432/nama_database
```

-----

## 3\. Cara Menjalankan

### Menjalankan migrasi

Gunakan Alembic untuk menerapkan struktur tabel ke database:

```bash
# Menerapkan migrasi (membuat tabel)
alembic -c development.ini upgrade head
```

### Inisialisasi Data (Optional)

Jika ingin mengisi database dengan data awal:

```bash
python -m pyramid_mahasiswa.scripts.initialize_db development.ini
```

### Menjalankan server

Jalankan server aplikasi menggunakan `pserve`:

```bash
pserve development.ini --reload
```

Aplikasi akan berjalan di `http://localhost:6543`.

-----

## 4\. API Endpoints

Berikut adalah dokumentasi lengkap untuk setiap endpoint yang tersedia.

### 1\. Get All Mahasiswa

Mengambil daftar semua data mahasiswa.

**Request:**

```bash
curl -X GET http://localhost:6543/api/mahasiswa
```

**Response:**

```json
{
  "mahasiswas": [
    {
      "id": 1,
      "nim": "12345",
      "nama": "Budi Santoso",
      "jurusan": "Teknik Informatika",
      "tanggal_lahir": "2000-05-15",
      "alamat": "Jl. Merdeka No. 123, Bandung"
    },
    {
      "id": 2,
      "nim": "54321",
      "nama": "Siti Aminah",
      "jurusan": "Sistem Informasi",
      "tanggal_lahir": "2001-08-22",
      "alamat": "Jl. Mawar No. 45, Jakarta"
    }
  ]
}
```

### 2\. Get Mahasiswa By ID

Mengambil data detail satu mahasiswa berdasarkan ID.

**Request:**

```bash
curl -X GET http://localhost:6543/api/mahasiswa/1
```

**Response:**

```json
{
  "id": 1,
  "nim": "12345",
  "nama": "Budi Santoso",
  "jurusan": "Teknik Informatika",
  "tanggal_lahir": "2000-05-15",
  "alamat": "Jl. Merdeka No. 123, Bandung"
}
```

### 3\. Create New Mahasiswa

Menambahkan data mahasiswa baru ke dalam database.

**Request:**

```bash
curl -X POST http://localhost:6543/api/mahasiswa \
-H "Content-Type: application/json" \
-d '{
  "nim": "67890",
  "nama": "Ahmad Fadli",
  "jurusan": "Teknik Elektro",
  "tanggal_lahir": "2001-11-05",
  "alamat": "Jl. Mawar No. 10, Surabaya"
}'
```

**Response:**

```json
{
  "message": "Mahasiswa created successfully",
  "id": 3,
  "nama": "Ahmad Fadli"
}
```

### 4\. Update Mahasiswa

Memperbarui data mahasiswa yang sudah ada berdasarkan ID.

**Request:**

```bash
curl -X PUT http://localhost:6543/api/mahasiswa/1 \
-H "Content-Type: application/json" \
-d '{
  "jurusan": "Teknik Informatika (Pindahan)",
  "alamat": "Jl. Baru No. 99, Bandung"
}'
```

**Response:**

```json
{
  "message": "Mahasiswa updated successfully",
  "id": 1
}
```

### 5\. Delete Mahasiswa

Menghapus data mahasiswa berdasarkan ID.

**Request:**

```bash
curl -X DELETE http://localhost:6543/api/mahasiswa/3
```

**Response:**

```json
{
  "message": "Mahasiswa deleted successfully"
}
```

-----

## 5\. Testing

Untuk pengujian cepat menggunakan terminal, Anda dapat menggunakan perintah `curl` seperti di atas.

Jika Anda menggunakan **PowerShell** (Windows), Anda dapat menggunakan perintah berikut sebagai pengganti `curl`:

**Contoh Get All Data (PowerShell):**

```powershell
Invoke-RestMethod -Method GET -Uri "http://localhost:6543/api/mahasiswa"
```

**Contoh Create Data (PowerShell):**

```powershell
$body = @{
    nim = "99999"
    nama = "Test User"
    jurusan = "DKV"
    tanggal_lahir = "2002-01-01"
    alamat = "Jakarta"
} | ConvertTo-Json

Invoke-RestMethod -Method POST -Uri "http://localhost:6543/api/mahasiswa" -Headers @{"Content-Type"="application/json"} -Body $body
```

```
```