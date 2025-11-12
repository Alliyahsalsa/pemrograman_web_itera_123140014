import { useMemo } from "react";
import { useReadingList } from "../context/BookContext"; 

export function useBookStats() {
  const { inventory } = useReadingList(); 

  const metrics = useMemo(() => {
    if (!inventory || inventory.length === 0) {
        return { totalCount: 0, ownedCount: 0, readingCount: 0, purchaseCount: 0 };
    }

    // Menggunakan fungsi reduce untuk menghitung semua status dalam satu iterasi
    const counts = inventory.reduce((acc, item) => {
        acc.totalCount += 1;
        if (item.status === "milik") {
            acc.ownedCount += 1;
        } else if (item.status === "baca") {
            acc.readingCount += 1;
        } else if (item.status === "beli") {
            acc.purchaseCount += 1;
        }
        return acc;
    }, { totalCount: 0, ownedCount: 0, readingCount: 0, purchaseCount: 0 }); 

    // Mengubah nama variabel output
    return counts;
  }, [inventory]); 

  return metrics; 
}