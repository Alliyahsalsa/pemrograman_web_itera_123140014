# 🧭 Personal Productivity Dashboard

## 📌 Deskripsi Singkat
Aplikasi Personal Productivity Dashboard membantu pengguna mengelola aktivitas harian dengan lebih efisien.  
Pengguna dapat menambah, mengedit, dan menghapus tugas atau to-do list, serta memantau waktu melalui jam digital dan kalender otomatis.  
Seluruh data pengguna tersimpan menggunakan LocalStorage, sehingga informasi tetap tersimpan meskipun halaman ditutup.

---

## 🖼️ Screenshot Aplikasi
![Personal Dashboard Screenshot](A_personal_productivity_dashboard_in_a_2D_digital_.png)

---

## ⚙️ Implementasi Persyaratan

### 🧩 Interaktif
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
