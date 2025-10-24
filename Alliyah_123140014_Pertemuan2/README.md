# 🧭 Personal Productivity Dashboard

## 📌 Deskripsi Singkat
Aplikasi Personal Productivity Dashboard membantu pengguna mengelola aktivitas harian dengan lebih efisien.  
Pengguna dapat menambah, mengedit, dan menghapus tugas atau to-do list, serta memantau waktu melalui jam digital dan kalender otomatis. Seluruh data pengguna tersimpan menggunakan LocalStorage, sehingga informasi tetap tersimpan meskipun halaman ditutup.

---

## 🖼️ Screenshot Aplikasi
- **Halaman Dashboard**
<img width="1919" height="991" alt="image" src="https://github.com/user-attachments/assets/df90d5a0-f6dc-4061-a794-3cc21f3751a6" />

- **Halaman Jadwal Kuliah**
<img width="1919" height="991" alt="image" src="https://github.com/user-attachments/assets/3a7fd35b-06a5-4f8a-9588-fb9718e6f202" />

- **Halaman Daftar Tugas**
<img width="1919" height="995" alt="image" src="https://github.com/user-attachments/assets/0f9db908-3956-468e-84df-efc310ecd671" />

---

## ⚙️ Implementasi Persyaratan
- Pengguna bisa:
  - Menambahkan tugas baru.
  - Mengedit tugas yang sudah ada.
  - Menghapus tugas.
- Semua perubahan langsung diperbarui di tampilan secara real-time tanpa refresh halaman.
  ```js
  function tambahTugas() {
    const matkul = document.getElementById("matkul").value;
    const nama = document.getElementById("nama").value;
    const tanggal = document.getElementById("tanggal").value;

    if (matkul && nama && tanggal) {
      tugas.push({ matkul, nama, tanggal });
      localStorage.setItem("tugas", JSON.stringify(tugas));
      renderTugas();
    }
  }

---

## 💾 Penyimpanan Lokal
- Data tugas dan to-do list disimpan menggunakan LocalStorage, sehingga data tidak hilang setelah halaman ditutup.
  ```js
  let tugas = JSON.parse(localStorage.getItem("tugas")) || [];

  localStorage.setItem("tugas", JSON.stringify(tugas));

---

## 🚀 Fitur ES6+ yang Diimplementasikan
1. let & const
Digunakan untuk deklarasi variabel modern yang lebih aman dan terkontrol.
    ```js
    const now = new Date();
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

2. Arrow Functions (≥ 3)
Digunakan untuk membuat fungsi yang lebih ringkas dan efisien.
    ```js
    const updateTime = () => {
      const now = new Date();
      const waktu = now.toLocaleTimeString();
      const hari = now.toLocaleDateString("id-ID", { weekday: "long" });
      const tanggal = now.toLocaleDateString();
      document.getElementById("clock").innerText = `${hari}, ${tanggal} | ${waktu}`;
    };

    todos.forEach((todo, i) => { ... });

    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

3. Template Literals
Digunakan untuk menyisipkan variabel secara dinamis ke dalam elemen HTML.
    ```js
    li.innerHTML = `${todo} <button onclick="hapusTodo(${i})">❌</button>`;
    document.getElementById("clock").innerText = `${hari}, ${tanggal} | ${waktu}`;

4. Fungsi Asinkron (Async/Await)
Digunakan untuk menunda proses secara asinkron (contohnya: simulasi pengambilan data dari localStorage).
    ```js
    async function loadData() {
      const data = await JSON.parse(localStorage.getItem("tugas")) || [];
      console.log("Data tugas berhasil dimuat:", data);
      return data;
    }

5. Classes
Digunakan untuk membuat struktur data tugas agar lebih terorganisir.
    ```js
    class Tugas {
      constructor(matkul, nama, tanggal) {
        this.matkul = matkul;
        this.nama = nama;
        this.tanggal = tanggal;
      }
    }

    const tambahTugasBaru = () => {
      const matkul = document.getElementById("matkul").value;
      const nama = document.getElementById("nama").value;
      const tanggal = document.getElementById("tanggal").value;
      const tugasBaru = new Tugas(matkul, nama, tanggal);
      tugas.push(tugasBaru);
      localStorage.setItem("tugas", JSON.stringify(tugas));
      renderTugas();
    };
