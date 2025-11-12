import { useState, useEffect } from "react";

/**
 @param {string} storageKey
 @param {*} initialData
 */
export function useLocalStorage(storageKey, initialData) {
  const [persistedData, setPersistedData] = useState(() => { 
    try {
      const storedData = localStorage.getItem(storageKey); 
      if (storedData != null) {
        return JSON.parse(storedData);
      }
    } catch (error) {
      console.error("Gagal memuat data dari LocalStorage:", error, "Kunci:", storageKey);
    }

    return typeof initialData === "function" ? initialData() : initialData;
  });

  useEffect(() => {
    // Effect untuk menyimpan data
    try {
      localStorage.setItem(storageKey, JSON.stringify(persistedData)); 
    } catch (error) {
      console.error("Gagal menyimpan data ke LocalStorage:", error, "Kunci:", storageKey);
    }
  }, [storageKey, persistedData]); 

  return [persistedData, setPersistedData]; 
}