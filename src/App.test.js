import { render, screen, fireEvent } from "@testing-library/react";
import { BookProvider, useReadingList } from "./context/BookContext";
import App from "./App";
import HomePageContent from "./pages/Home/Home";
import Stats from "./pages/Stats/Stats";
import { useBookStats } from "./hooks/useBookStats";

// Mock react-router-dom menggunakan manual mock dari __mocks__/react-router-dom.js
jest.mock("react-router-dom");

// Mock data dan state
const mockInventory = [
  { id: "1", title: "Bumi", author: "Tere Liye", status: "milik" },
  { id: "2", title: "Laskar Pelangi", author: "Andrea Hirata", status: "baca" },
  { id: "3", title: "Atomic Habits", author: "James Clear", status: "beli" },
];

// Mock kustom hook useReadingList
jest.mock("./context/BookContext", () => ({
  ...jest.requireActual("./context/BookContext"),
  useReadingList: jest.fn(),
}));

// Mock kustom hook useBookStats
jest.mock("./hooks/useBookStats", () => ({
  useBookStats: jest.fn(),
}));

const renderWithProviders = (ui, { providerProps, ...renderOptions } = {}) => {
  return render(
    <BookProvider {...providerProps}>{ui}</BookProvider>,
    renderOptions
  );
};

describe("Aplikasi Manajemen Inventaris Buku", () => {
  // Setup mock sebelum setiap tes
  beforeEach(() => {
    useReadingList.mockReturnValue({
      inventory: mockInventory,
      addItemToList: jest.fn(),
      removeEntry: jest.fn(),
      modifyEntry: jest.fn(),
    });

    useBookStats.mockReturnValue({
      totalCount: 3,
      ownedCount: 1,
      readingCount: 1,
      purchaseCount: 1,
    });
  });

  // Test 1: Render Halaman Home dan tampilkan buku
  test("Render Halaman Home dan tampilkan daftar buku", () => {
    renderWithProviders(<HomePageContent />);

    // Cek apakah judul buku tampil
    expect(screen.getByText("Bumi")).toBeInTheDocument();
    expect(screen.getByText("Laskar Pelangi")).toBeInTheDocument();
    expect(screen.getByText("Atomic Habits")).toBeInTheDocument();
  });

  // Test 2: Pencarian (Search)
  test("Filter pencarian berfungsi di Halaman Home", () => {
    renderWithProviders(<HomePageContent />);

    const searchInput = screen.getByPlaceholderText(
      "Ketik judul atau penulis..."
    );

    fireEvent.change(searchInput, { target: { value: "Bumi" } });

    expect(screen.getByText("Bumi")).toBeInTheDocument();
    expect(screen.queryByText("Laskar Pelangi")).not.toBeInTheDocument();
    expect(screen.queryByText("Atomic Habits")).not.toBeInTheDocument();
  });

  // Test 3: Filter Status
  test("Filter status berfungsi di Halaman Home", () => {
    renderWithProviders(<HomePageContent />);

    const statusSelect = screen.getByLabelText("Pilih Status");

    // Mengubah nilai select ke 'baca'
    fireEvent.change(statusSelect, { target: { value: "baca" } });

    expect(screen.queryByText("Bumi")).not.toBeInTheDocument();
    expect(screen.getByText("Laskar Pelangi")).toBeInTheDocument();
    expect(screen.queryByText("Atomic Habits")).not.toBeInTheDocument();
  });

  // Test 4: Render Halaman Statistik
  test("Render Halaman Statistik dan tampilkan data metrik", () => {
    renderWithProviders(<Stats />);

    // Cek apakah judul kartu tampil
    expect(screen.getByText("Total Koleksi")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument(); // totalCount

    // Cek item lain
    expect(screen.getByText("Buku Dimiliki")).toBeInTheDocument();
    // Menggunakan getAllByText karena angka "1" muncul berulang kali
    const ownedValue = screen.getAllByText("1")[0];
    expect(ownedValue).toBeInTheDocument();

    expect(screen.getByText("Aktif Dibaca")).toBeInTheDocument();
  });

  // Test 5: Navigasi aplikasi
  test("Navigasi antar halaman berfungsi", () => {
    render(
      <BookProvider>
        <App />
      </BookProvider>
    );

    expect(screen.getByText("📖 Catatan Buku Saya")).toBeInTheDocument(); // Judul Navbar

    // Klik link 'Statistik'
    const statsLink = screen.getByText("Statistik");
    expect(statsLink).toBeInTheDocument();
  });
});
