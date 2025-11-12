import React, { createContext, useContext, useState, useEffect } from "react";
const BookContext = createContext();

export function useReadingList() {
  const context = useContext(BookContext); // Menggunakan BookContext
  if (!context) {
    throw new Error("useReadingList must be used within a BookProvider");
  }
  return context;
}

export function BookProvider({ children }) {
  const [inventoryState, setInventoryState] = useState(() => {
    const savedData = localStorage.getItem("my_book_inventory");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("my_book_inventory", JSON.stringify(inventoryState));
  }, [inventoryState]);

  const addItemToList = (newItem) => {
    const uniqueId =
      Date.now().toString(36) + Math.random().toString(36).substring(2);
    setInventoryState((prevList) => [
      ...prevList,
      { ...newItem, id: uniqueId },
    ]);
  };

  const modifyEntry = (updatedEntry) => {
    if (!updatedEntry || !updatedEntry.id) return;

    setInventoryState((prevList) =>
      prevList.map((item) =>
        item.id === updatedEntry.id ? updatedEntry : item
      )
    );
  };

  const removeEntry = (idToRemove) => {
    setInventoryState((prevList) =>
      prevList.filter((item) => item.id !== idToRemove)
    );
  };

  const addItem = addItemToList;
  const modifyItem = modifyEntry;
  const removeItem = removeEntry;

  return (
    <BookContext.Provider
      value={{
        inventory: inventoryState,
        addItemToList,
        modifyEntry,
        removeEntry,
        addItem,
        modifyItem,
        removeItem,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
