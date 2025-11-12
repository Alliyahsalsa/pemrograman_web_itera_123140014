// Navigasi halaman
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
  document.querySelectorAll(".sidebar a").forEach(a => a.classList.remove("active"));
  event.target.classList.add("active");
}

// Jam real-time
function setDateStatic() {
  const now = new Date();
  const hari = now.toLocaleDateString('id-ID', { weekday: 'long' });
  const tanggalLengkap = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  document.getElementById("clock").innerHTML = `
    <span id="staticDate">${hari}, ${tanggalLengkap}</span> 
    <span id="liveTime"></span>
  `;
}

function updateTime() {
  const waktu = new Date().toLocaleTimeString('id-ID');
  const timeEl = document.getElementById("liveTime");
  if (timeEl) timeEl.textContent = ` ${waktu}`;
}

// Inisialisasi
setDateStatic();
setInterval(updateTime, 1000);
updateTime();

// ===== To-Do List =====
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";
  todos.forEach((todo, i) => {
    const li = document.createElement("li");
    li.innerHTML = `${todo} <button onclick="hapusTodo(${i})">❌</button>`;
    list.appendChild(li);
  });
}

function addTodo() {
  const input = document.getElementById("todoInput");
  if (input.value.trim() === "") return;
  todos.push(input.value);
  input.value = "";
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

function hapusTodo(i) {
  todos.splice(i, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

renderTodos();

// ===== Jadwal Kuliah =====
let jadwal = JSON.parse(localStorage.getItem("jadwal")) || [];

document.getElementById("jadwalForm").addEventListener("submit", e => {
  e.preventDefault();
  const mk = document.getElementById("mataKuliah").value;
  const hari = document.getElementById("hariKuliah").value;
  const mulai = document.getElementById("waktuMulai").value;
  const selesai = document.getElementById("waktuSelesai").value;
  const ruangan = document.getElementById("ruanganKuliah").value;

  jadwal.push({ mk, hari, mulai, selesai, ruangan });
  localStorage.setItem("jadwal", JSON.stringify(jadwal));
  renderJadwal();
  e.target.reset();
});

function renderJadwal() {
  const list = document.getElementById("jadwalList");
  list.innerHTML = "";
  jadwal.forEach((j, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${j.hari} - ${j.mk} (${j.mulai} - ${j.selesai}) | Ruangan: ${j.ruangan}</span>
      <button onclick="hapusJadwal(${index})">Hapus</button>
    `;
    list.appendChild(li);
  });
}

function hapusJadwal(index) {
  jadwal.splice(index, 1);
  localStorage.setItem("jadwal", JSON.stringify(jadwal));
  renderJadwal();
}

renderJadwal();

// ===== Daftar Tugas =====
let tugas = JSON.parse(localStorage.getItem("tugas")) || [];
let indexEdit = null;
let modeTambah = false;

function renderTugas() {
  const list = document.getElementById("tugasList");
  list.innerHTML = "";
  tugas.forEach((t, i) => {
    const div = document.createElement("div");
    div.className = "tugas-item";
    div.innerHTML = `
      <strong>${t.matkul}</strong> - ${t.nama} (${t.tanggal})
      <br>Status: <em>${t.selesai ? "Selesai ✅" : "Belum ❌"}</em>
      <div>
        <button onclick="selesaiTugas(${i})">Selesai</button>
        <button onclick="editTugas(${i})">Edit</button>
        <button onclick="hapusTugas(${i})">Hapus</button>
      </div>
    `;
    list.appendChild(div);
  });
  updateStatistik();
}

function tampilkanFormTambah() {
  modeTambah = true;
  indexEdit = null;
  document.getElementById("formTitle").innerText = "Tambah Tugas";
  document.getElementById("editMatkul").value = "";
  document.getElementById("editNama").value = "";
  document.getElementById("editTanggal").value = "";
  document.getElementById("editFormContainer").classList.remove("hidden");
}

function hapusTugas(i) {
  tugas.splice(i, 1);
  localStorage.setItem("tugas", JSON.stringify(tugas));
  renderTugas();
}

function selesaiTugas(i) {
  tugas[i].selesai = !tugas[i].selesai;
  localStorage.setItem("tugas", JSON.stringify(tugas));
  renderTugas();
}

function editTugas(i) {
  modeTambah = false;
  indexEdit = i;
  const t = tugas[i];
  document.getElementById("formTitle").innerText = "Edit Tugas";
  document.getElementById("editMatkul").value = t.matkul;
  document.getElementById("editNama").value = t.nama;
  document.getElementById("editTanggal").value = t.tanggal;
  document.getElementById("editFormContainer").classList.remove("hidden");
}

function simpanTugas() {
  const matkul = document.getElementById("editMatkul").value;
  const nama = document.getElementById("editNama").value;
  const tanggal = document.getElementById("editTanggal").value;

  if (!matkul || !nama || !tanggal) return alert("Lengkapi semua data!");

  if (modeTambah) {
    tugas.push({ matkul, nama, tanggal, selesai: false });
  } else if (indexEdit !== null) {
    tugas[indexEdit] = { ...tugas[indexEdit], matkul, nama, tanggal };
  }

  localStorage.setItem("tugas", JSON.stringify(tugas));
  renderTugas();
  batalEdit();
}

function batalEdit() {
  document.getElementById("editFormContainer").classList.add("hidden");
  indexEdit = null;
  modeTambah = false;
}

function updateStatistik() {
  const total = tugas.length;
  const selesai = tugas.filter(t => t.selesai).length;
  document.getElementById("totalTugas").innerText = total;
  document.getElementById("tugasSelesai").innerText = selesai;
  document.getElementById("tugasBelum").innerText = total - selesai;
}

renderTugas();

// Hanya halaman dashboard yang tampil saat pertama kali dibuka
document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
document.getElementById("dashboard").classList.add("active");
