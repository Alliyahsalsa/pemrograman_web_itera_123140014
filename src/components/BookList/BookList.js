import React from "react";
import { useReadingList } from "../../context/BookContext";
import "./BookList.css";

// Fungsi helper untuk status badge (Diambil dari BookItem)
const renderStatusLabel = (status) => {
    switch (status) {
        case "milik":
            return <span className="status-label status-milik">Dimiliki</span>; 
        case "baca":
            return <span className="status-label status-baca">Sedang Dibaca</span>;
        case "beli":
            return <span className="status-label status-beli">Akan Dibeli</span>;
        default:
            return <span className="status-label">{status}</span>;
    }
};

function BookList({ books, handleEdit }) { 
  const { removeItem } = useReadingList(); 

  if (books.length === 0) {
    return (
        <p className="no-result-msg">
            Tidak ada buku yang ditemukan berdasarkan kriteria Anda. 🤷‍♀️
        </p>
    );
  }

  return (
    <div className="list-table-wrapper"> {/* Kontainer untuk tabel */}
        <table className="book-data-table">
            <thead>
                <tr>
                    <th className="col-title">Judul Buku</th>
                    <th className="col-author">Penulis</th>
                    <th className="col-status">Status</th>
                    <th className="col-actions">Aksi</th>
                </tr>
            </thead>
            <tbody>
            {books.map((book) => (
                <tr key={book.id} className="book-table-row"> {/* Baris tabel */}
                    <td data-label="Judul">{book.title}</td>
                    <td data-label="Penulis">{book.author}</td>
                    <td data-label="Status">{renderStatusLabel(book.status)}</td>
                    <td data-label="Aksi" className="action-button-cell">
                        <button 
                            onClick={() => handleEdit(book)} // Menggunakan handleEdit
                            className="btn-icon-edit"
                            title="Edit"
                        >
                            <span role="img" aria-label="edit">✏️</span>
                        </button>
                        <button 
                            onClick={() => removeItem(book.id)} // Menggunakan removeItem
                            className="btn-icon-delete"
                            title="Hapus"
                        >
                            <span role="img" aria-label="hapus">❌</span>
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
}

export default BookList;