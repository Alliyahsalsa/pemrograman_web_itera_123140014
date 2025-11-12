import React, { useState, useEffect } from "react";
import { useReadingList } from "../../context/BookContext";
import "./BookForm.css";

function BookForm({ initialBook, onSubmissionComplete }) {
  // Menggunakan satu state object
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    status: "milik",
  });

  const [validationErrors, setValidationErrors] = useState({});

  // Menggunakan hook dan fungsi baru
  const { addItem, modifyItem } = useReadingList();

  useEffect(() => {
    // Memuat data buku saat dalam mode edit (menggunakan initialBook)
    if (initialBook) {
      setFormData({
        title: initialBook.title || "",
        author: initialBook.author || "",
        status: initialBook.status || "milik",
      });
    } else {
      setFormData({ title: "", author: "", status: "milik" });
    }
  }, [initialBook]);

  // Handler universal untuk semua input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear error saat input berubah
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Handler khusus untuk segmented status
  const handleStatusSelect = (statusVal) => {
    setFormData((prev) => ({ ...prev, status: statusVal }));
    if (validationErrors.status) {
      setValidationErrors((prev) => ({ ...prev, status: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = "⚠️ Judul wajib diisi.";
    }
    if (!formData.author.trim()) {
      newErrors.author = "⚠️ Nama penulis tidak boleh kosong.";
    }
    setValidationErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    if (initialBook) {
      // Menggunakan fungsi modifyItem
      modifyItem({ ...formData, id: initialBook.id });
    } else {
      addItem(formData); // Menggunakan fungsi addItem
    }

    onSubmissionComplete();
  };

  return (
    <form onSubmit={handleSubmit} className="entry-card-form">
      {" "}
      <h3 className="form-header-title">
        {initialBook ? "🖊️ Modifikasi Detail Buku" : "✨ Daftarkan Buku Baru"}
      </h3>
      <div className="input-field-grid">
        <div className="form-element-wrapper">
          {" "}
          <label htmlFor="title">Judul Buku</label>
          <input
            type="text"
            id="title"
            name="title" // Penting untuk state object
            value={formData.title}
            onChange={handleChange}
            placeholder="Contoh: Laut Bercerita"
            aria-invalid={validationErrors.title ? "true" : "false"}
          />
          {validationErrors.title && (
            <span className="input-error-tip">{validationErrors.title}</span>
          )}{" "}
        </div>

        <div className="form-element-wrapper">
          <label htmlFor="author">Penulis</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Contoh: Leila S. Chudori"
            aria-invalid={validationErrors.author ? "true" : "false"}
          />
          {validationErrors.author && (
            <span className="input-error-tip">{validationErrors.author}</span>
          )}
        </div>
      </div>
      <div className="form-element-wrapper status-selector">
        <label>Status Buku</label>
        <div className="segmented-radio-group">
          {["milik", "baca", "beli"].map((statusVal) => (
            <button
              key={statusVal}
              type="button"
              onClick={() => handleStatusSelect(statusVal)}
              className={`status-radio-btn ${
                formData.status === statusVal ? "active-pink" : ""
              }`}
              aria-pressed={formData.status === statusVal}
            >
              {statusVal.charAt(0).toUpperCase() +
                statusVal
                  .slice(1)
                  .replace("milik", "Dimiliki")
                  .replace("baca", "Sedang Dibaca")
                  .replace("beli", "Akan Dibeli")}
            </button>
          ))}
        </div>
      </div>
      {/* Tombol Aksi */}
      <div className="form-controls-actions">
        {" "}
        <button
          type="button"
          className="btn-action-cancel"
          onClick={onSubmissionComplete}
        >
          Batalkan
        </button>
        <button type="submit" className="btn-action-submit">
          {initialBook ? "Update Detail" : "Tambahkan"}
        </button>
      </div>
    </form>
  );
}

export default BookForm;