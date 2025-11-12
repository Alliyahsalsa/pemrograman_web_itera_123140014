import React, { useState, useMemo } from "react";
import { useReadingList } from "../../context/BookContext"; 
import BookList from "../../components/BookList/BookList";
import BookFilter from "../../components/BookFilter/BookFilter";
import BookForm from "../../components/BookForm/BookForm";
import "./Home.css";

function DialogContainer({ isOpen, onClose, children }) { 
    if (!isOpen) return null;

    return (
        <>
            <div className="dialog-backdrop-overlay" onClick={onClose} />
            <div className="dialog-window-content">
                <button className="dialog-close-button" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </>
    );
}

function HomePageContent() { 
  const { inventory } = useReadingList(); 
  
  const [currentSearch, setCurrentSearch] = useState("");
  const [currentFilter, setCurrentFilter] = useState("semua");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [entryToModify, setEntryToModify] = useState(null);

  const filteredInventory = useMemo(() => {
    return inventory.filter((item) => {
      const statusMatch = currentFilter === "semua" || item.status === currentFilter;
      const searchMatch = item.title.toLowerCase().includes(currentSearch.toLowerCase()) || item.author.toLowerCase().includes(currentSearch.toLowerCase());
      return statusMatch && searchMatch;
    });
  }, [inventory, currentSearch, currentFilter]);

  const handleNewEntryClick = () => { setEntryToModify(null); setIsDialogOpen(true); };
  const handleStartModification = (item) => { setEntryToModify(item); setIsDialogOpen(true); };
  const handleCloseDialog = () => { setIsDialogOpen(false); setEntryToModify(null); };

  return (
    <div className="main-content-area">
        <div className="page-section-header"> 
            <h2 className="section-title">Koleksi Buku</h2>
            <button className="btn-add-new-entry" onClick={handleNewEntryClick}>
              ➕ Tambah Item Baru
            </button>
        </div>

        <BookFilter
            searchTerm={currentSearch}
            setSearchTerm={setCurrentSearch}
            filterStatus={currentFilter}
            setFilterStatus={setCurrentFilter}
        />

        <BookList books={filteredInventory} handleEdit={handleStartModification} /> 

        <DialogContainer isOpen={isDialogOpen} onClose={handleCloseDialog}>
            <BookForm initialBook={entryToModify} onSubmissionComplete={handleCloseDialog} /> 
        </DialogContainer>
    </div>
  );
}

export default HomePageContent;