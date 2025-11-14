import abc

# --- 1. ABSTRACT CLASS: LibraryItem ---

class LibraryItem(abc.ABC):
    """Kelas Abstrak dasar untuk semua item di perpustakaan."""
    
    def __init__(self, title, item_id):
        # Menerapkan Encapsulation (protected access modifier)
        self._title = title 
        self._item_id = item_id
        self._is_available = True

    @property
    def title(self):
        """Property Decorator untuk mengakses judul (read-only)."""
        return self._title

    @property
    def item_id(self):
        """Property Decorator untuk mengakses ID (read-only)."""
        return self._item_id

    @abc.abstractmethod
    def display_info(self):
        """Method abstrak (Polymorphism) untuk detail info item."""
        pass

    @abc.abstractmethod
    def check_status(self):
        """Method abstrak untuk implementasi status."""
        pass

    def get_status(self):
        """Mengembalikan status ketersediaan item."""
        return "Tersedia" if self._is_available else "Dipinjam"

    def set_availability(self, status):
        """Mengubah status ketersediaan item."""
        self._is_available = status


# --- 2. SUBCLASS 1: Book (Buku) ---

class Book(LibraryItem):
    """Subclass untuk item bertipe Buku."""
    def __init__(self, title, item_id, author, isbn):
        super().__init__(title, item_id)
        self._author = author
        self._isbn = isbn
        
        # Contoh property decorator read/write
        self._penerbit = "Unassigned" 

    @property
    def penerbit(self):
        """Mendapatkan nilai penerbit."""
        return self._penerbit
    
    @penerbit.setter
    def penerbit(self, new_penerbit):
        """Mengatur nilai penerbit."""
        self._penerbit = new_penerbit
        
    def display_info(self):
        """Menampilkan info spesifik Buku."""
        print(f"\n[📚 Buku]")
        print(f"  ID: {self._item_id}")
        print(f"  Judul: {self._title}")
        print(f"  Penulis: {self._author}")
        print(f"  ISBN: {self._isbn}")
        print(f"  Penerbit: {self.penerbit}")
        print(f"  Status: {self.get_status()}")

    def check_status(self):
        return self.get_status()

# --- 3. SUBCLASS 2: Magazine (Majalah) ---

class Magazine(LibraryItem):
    """Subclass untuk item bertipe Majalah."""
    def __init__(self, title, item_id, issue_number, year):
        super().__init__(title, item_id)
        self._issue_number = issue_number
        self._year = year

    def display_info(self):
        """Menampilkan info spesifik Majalah."""
        print(f"\n[📰 Majalah]")
        print(f"  ID: {self._item_id}")
        print(f"  Judul: {self._title}")
        print(f"  Edisi: {self._issue_number}")
        print(f"  Tahun: {self._year}")
        print(f"  Status: {self.get_status()}")

    def check_status(self):
        return self.get_status()

# --- 4. CLASS: Library (Manajemen Koleksi) ---

class Library:
    """Kelas untuk mengelola koleksi LibraryItem."""
    def __init__(self):
        # Menerapkan Encapsulation (private access modifier)
        self.__collection = []
        self.__next_id = 101 # ID awal untuk item baru

    @property
    def next_id(self):
        return self.__next_id
        
    def add_item(self, item):
        """Menambahkan item ke dalam koleksi."""
        if isinstance(item, LibraryItem):
            self.__collection.append(item)
            self.__next_id += 1
            print(f"\n✅ Item '{item.title}' (ID: {item.item_id}) berhasil ditambahkan.")
        else:
            print("\n❌ Gagal menambahkan item.")

    def display_all_items(self):
        """Menampilkan daftar semua item yang tersedia dalam koleksi."""
        if not self.__collection:
            print("\n[!] Koleksi perpustakaan kosong. Silakan tambahkan item baru terlebih dahulu.")
            return

        print("\n==============================================")
        print("     📚 DAFTAR KOLEKSI PERPUSTAKAAN")
        print("==============================================")
        
        # Menerapkan Polymorphism
        for item in self.__collection:
            item.display_info()
            print("-" * 40)

    def search_item(self, query):
        """Mencari item berdasarkan Judul atau ID."""
        found_items = []
        query_lower = str(query).lower()

        for item in self.__collection:
            if query_lower in item.title.lower() or query_lower == str(item.item_id).lower():
                found_items.append(item)

        if found_items:
            print(f"\n--- Hasil Pencarian untuk '{query}' ({len(found_items)} item ditemukan) ---")
            # Polymorphism digunakan untuk menampilkan info yang benar
            for item in found_items:
                item.display_info()
                print("-" * 40)
        else:
            print(f"\n[!] Item dengan Judul/ID '{query}' tidak ditemukan.")
            
# --- 5. FUNGSI INTERAKTIF DAN MENU ---

def input_book(library):
    """Fungsi untuk input data Buku baru."""
    print("\n--- ➕ Tambah Buku Baru ---")
    title = input("Masukkan Judul Buku: ")
    author = input("Masukkan Penulis: ")
    isbn = input("Masukkan ISBN: ")
    
    # ID otomatis
    item_id = library.next_id
    
    # Buat objek dan tambahkan
    new_book = Book(title, item_id, author, isbn)
    
    # Input tambahan untuk Property Decorator
    penerbit = input("Masukkan Penerbit (kosongkan jika tidak tahu): ")
    if penerbit:
        new_book.penerbit = penerbit
        
    library.add_item(new_book)


def input_magazine(library):
    """Fungsi untuk input data Majalah baru."""
    print("\n--- ➕ Tambah Majalah Baru ---")
    title = input("Masukkan Judul Majalah: ")
    
    try:
        issue = int(input("Masukkan Nomor Edisi: "))
        year = int(input("Masukkan Tahun Terbit: "))
    except ValueError:
        print("\n❌ Input Edisi dan Tahun harus berupa angka.")
        return

    # ID otomatis
    item_id = library.next_id
    
    # Buat objek dan tambahkan
    new_magazine = Magazine(title, item_id, issue, year)
    library.add_item(new_magazine)


def search_and_modify_status(library):
    """Fungsi untuk mencari item dan mengubah status pinjam/tersedia."""
    query = input("\nMasukkan Judul atau ID item yang ingin diubah statusnya: ")
    found_items = []

    # Cari item
    for item in library._Library__collection: # Mengakses atribut private untuk pencarian internal
        if query.lower() in item.title.lower() or query.lower() == str(item.item_id).lower():
            found_items.append(item)
    
    if not found_items:
        print(f"\n[!] Item dengan query '{query}' tidak ditemukan.")
        return

    # Jika hanya satu item ditemukan
    if len(found_items) == 1:
        item = found_items[0]
        item.display_info()
        
        current_status = item.get_status()
        new_status_input = input(f"Status saat ini: {current_status}. Ubah menjadi (Tersedia/Pinjam): ").lower()
        
        if new_status_input == 'tersedia':
            item.set_availability(True)
            print(f"\n✅ Status '{item.title}' berhasil diubah menjadi TERSISA.")
        elif new_status_input == 'pinjam':
            item.set_availability(False)
            print(f"\n✅ Status '{item.title}' berhasil diubah menjadi DIPINJAM.")
        else:
            print("\n❌ Input status tidak valid. Gunakan 'Tersedia' atau 'Pinjam'.")
    else:
        print("\n[!] Ditemukan lebih dari satu item. Mohon gunakan query yang lebih spesifik.")


def main():
    """Fungsi utama untuk menjalankan menu interaktif."""
    
    my_library = Library()

    while True:
        print("\n==============================================")
        print(" 🏛️  SISTEM MANAJEMEN PERPUSTAKAAN (OOP)")
        print("==============================================")
        print("Pilih Menu:")
        print("1. Tampilkan Semua Koleksi")
        print("2. Tambah Item Baru (Buku)")
        print("3. Tambah Item Baru (Majalah)")
        print("4. Cari Item (Judul/ID)")
        print("5. Ubah Status Ketersediaan Item")
        print("6. Keluar")
        print("----------------------------------------------")
        
        pilihan = input("Masukkan pilihan (1-6): ")
        
        if pilihan == '1':
            my_library.display_all_items()
        elif pilihan == '2':
            input_book(my_library)
        elif pilihan == '3':
            input_magazine(my_library)
        elif pilihan == '4':
            query = input("\nMasukkan Judul atau ID item yang dicari: ")
            my_library.search_item(query)
        elif pilihan == '5':
            search_and_modify_status(my_library)
        elif pilihan == '6':
            print("\nTerima kasih, program selesai.")
            break
        else:
            print("\n[!] Pilihan tidak valid. Silakan masukkan angka 1 sampai 6.")

if __name__ == "__main__":
    main()