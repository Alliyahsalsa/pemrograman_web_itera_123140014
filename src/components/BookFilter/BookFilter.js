import React from "react";
import "./BookFilter.css";

// Mengubah urutan dan nama prop
function BookFilter({ setFilterStatus, filterStatus, setSearchTerm, searchTerm }) {
  
  // Handler untuk status
  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value);
  };

  // Handler untuk pencarian
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Status opsi untuk di-render di dropdown
  const statusOptions = [
    { value: "semua", label: "Semua Buku" },
    { value: "milik", label: "Dimiliki" },
    { value: "baca", label: "Sedang Dibaca" },
    { value: "beli", label: "Akan Dibeli" },
  ];

  return (
    <div className="filter-panel-wrapper">
      <div className="filter-control-area">

        {/* Filter Status Menggunakan Dropdown */}
        <div className="input-group-field status-field">
          <label htmlFor="status-select">Pilih Status</label>
          <select 
            id="status-select"
            value={filterStatus}
            onChange={handleStatusChange}
            className="custom-select-input"
          >
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Pencarian */}
        <div className="input-group-field search-field">
          <label htmlFor="book-search">Cari Judul/Penulis</label>
          <input
            type="text"
            id="book-search"
            placeholder="Ketik judul atau penulis..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="text-search-input"
          />
        </div>
      </div>
    </div>
  );
}

export default BookFilter;