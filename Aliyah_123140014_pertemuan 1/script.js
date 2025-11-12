const taskForm = document.getElementById("taskForm");
const taskName = document.getElementById("taskName");
const subject = document.getElementById("subject");
const deadline = document.getElementById("deadline");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");
const taskCount = document.getElementById("taskCount");

const errorTaskName = document.getElementById("errorTaskName");
const errorSubject = document.getElementById("errorSubject");
const errorDeadline = document.getElementById("errorDeadline");

// Modal
const editModal = document.getElementById("editModal");
const editTaskName = document.getElementById("editTaskName");
const editSubject = document.getElementById("editSubject");
const editDeadline = document.getElementById("editDeadline");
const saveEdit = document.getElementById("saveEdit");
const cancelEdit = document.getElementById("cancelEdit");
const editErrorTaskName = document.getElementById("editErrorTaskName");
const editErrorSubject = document.getElementById("editErrorSubject");
const editErrorDeadline = document.getElementById("editErrorDeadline");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editIndex = null;

function showError(input, errorElem, message) {
  errorElem.textContent = message;
  if (message) input.style.borderColor = "red";
  else input.style.borderColor = "#ccc";
}

function validateForm(nameInput, subjectInput, deadlineInput, errorName, errorSubject, errorDeadline) {
  let valid = true;
  
  if (nameInput.value.trim() === "") {
    showError(nameInput, errorName, "Nama tugas harus diisi");
    valid = false;
  } else {
    showError(nameInput, errorName, "");
  }

  if (subjectInput.value.trim() === "") {
    showError(subjectInput, errorSubject, "Mata kuliah harus diisi");
    valid = false;
  } else {
    showError(subjectInput, errorSubject, "");
  }

  if (deadlineInput.value === "") {
    showError(deadlineInput, errorDeadline, "Deadline harus diisi");
    valid = false;
  } else {
    const today = new Date();
    today.setHours(0,0,0,0);
    const selected = new Date(deadlineInput.value);
    if (selected < today) {
      showError(deadlineInput, errorDeadline, "Deadline tidak boleh tanggal yang sudah lewat");
      valid = false;
    } else {
      showError(deadlineInput, errorDeadline, "");
    }
  }

  return valid;
}

function renderTasks() {
  taskList.innerHTML = "";
  const keyword = searchInput.value.toLowerCase();
  const filterValue = filterSelect.value;

  const filteredTasks = tasks.filter(task => {
    const matchKeyword =
      task.name.toLowerCase().includes(keyword) ||
      task.subject.toLowerCase().includes(keyword);

    let matchFilter = true;
    if (filterValue === "completed") matchFilter = task.completed;
    if (filterValue === "pending") matchFilter = !task.completed;

    return matchKeyword && matchFilter;
  });

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = `task-item ${task.completed ? "completed" : ""}`;
    li.innerHTML = `
      <div class="task-info">
        <strong>${task.name}</strong><br>
        ${task.subject} - <em>${task.deadline}</em>
      </div>
      <div class="task-actions">
        <button onclick="toggleTask(${index})">${task.completed ? "Batal" : "Selesai"}</button> |
        <button onclick="openEdit(${index})">Edit</button> |
        <button onclick="deleteTask(${index})">Hapus</button>
      </div>
    `;
    taskList.appendChild(li);
  });

  const remaining = tasks.filter(t => !t.completed).length;
  taskCount.textContent = `Tugas belum selesai: ${remaining}`;
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateForm(taskName, subject, deadline, errorTaskName, errorSubject, errorDeadline)) return;

  const newTask = {
    name: taskName.value.trim(),
    subject: subject.value.trim(),
    deadline: deadline.value,
    completed: false
  };

  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskForm.reset();
  renderTasks();
});

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function openEdit(index) {
  editIndex = index;
  const task = tasks[index];
  editTaskName.value = task.name;
  editSubject.value = task.subject;
  editDeadline.value = task.deadline;
  editModal.style.display = "flex";
}

saveEdit.addEventListener("click", () => {
  if (!validateForm(editTaskName, editSubject, editDeadline, editErrorTaskName, editErrorSubject, editErrorDeadline)) return;

  tasks[editIndex].name = editTaskName.value.trim();
  tasks[editIndex].subject = editSubject.value.trim();
  tasks[editIndex].deadline = editDeadline.value;

  localStorage.setItem("tasks", JSON.stringify(tasks));
  editModal.style.display = "none";
  renderTasks();
});

cancelEdit.addEventListener("click", () => {
  editModal.style.display = "none";
});

searchInput.addEventListener("input", renderTasks);
filterSelect.addEventListener("change", renderTasks);
renderTasks();
