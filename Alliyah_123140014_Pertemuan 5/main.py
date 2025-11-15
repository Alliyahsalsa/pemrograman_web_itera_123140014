import abc

# --- 1. ABSTRACT CLASS: LibraryItem ---
class LibraryItem(abc.ABC):
    """Kelas Abstrak dasar yang mendefinisikan struktur item perpustakaan."""
    
    def __init__(self, title, item_id):
        self._title = title 
        self._item_id = item_id
        self._is_available = True

    @property
    def title(self):
        """Property Decorator untuk Judul."""
        return self._title

    @property
    def item_id(self):
        """Property Decorator untuk ID."""
        return self._item_id

    @abc.abstractmethod
    def display_info(self):
        """Method abstrak untuk detail info item (Polymorphism)."""
        pass

    @abc.abstractmethod
    def check_status(self):
        """Method abstrak."""
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
    
    def __init__(self, title, item_id, author, pages): 
        super().__init__(title, item_id)
        self._author = author
        self._pages = pages
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
        """Method ini tetap ada untuk Polymorphism, menampilkan info lengkap."""
        print(f"\n[📚 Buku]")
        print(f"  ID: {self._item_id}")
        print(f"  Judul: {self._title}")
        print(f"  Penulis: {self._author}")
        print(f"  Halaman: {self._pages}")
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
        """Method ini tetap ada untuk Polymorphism, menampilkan info lengkap."""
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
        self.__collection = []
        self.__next_book_num = 101 
        self.__next_magazine_num = 201

    def generate_book_id(self):
        """Membuat ID Buku dengan prefix 'B'."""
        book_id = f"B{self.__next_book_num}"
        self.__next_book_num += 1
        return book_id

    def generate_magazine_id(self):
        """Membuat ID Majalah dengan prefix 'M'."""
        magazine_id = f"M{self.__next_magazine_num}"
        self.__next_magazine_num += 1
        return magazine_id
        
    def add_item(self, item):
        """Menambahkan item ke dalam koleksi."""
        if isinstance(item, LibraryItem):
            self.__collection.append(item)
            print(f"\n✅ Item '{item.title}' (ID: {item.item_id}) berhasil ditambahkan.")
        else:
            print("\n❌ Gagal menambahkan item.")

    def display_all_items(self):
        """Menampilkan daftar semua item dalam koleksi (ID, Judul, Status, dan Total Item)."""
        if not self.__collection:
            print("\nKoleksi perpustakaan kosong. Silakan tambahkan item baru terlebih dahulu!")
            return

        print("\n=================================================")
        print("         📚 DAFTAR KOLEKSI PERPUSTAKAAN")
        print("=================================================")
        
        # Header List
        print(f"{'ID':<8} | {'Judul':<35} | Status")
        print("-" * 60)
        
        for item in self.__collection:
            # Tampilkan dalam format list sederhana
            print(f"{item.item_id:<8} | {item.title:<35} | {item.get_status()}")
            
        print("-" * 60)
        # Menampilkan Total Item
        print(f"Total Item: {len(self.__collection)}") 


    def search_item(self, query):
        """Mencari item berdasarkan Judul atau ID."""
        found_items = []
        query_lower = str(query).lower()

        for item in self.__collection:
            if query_lower in item.title.lower() or query_lower == item.item_id.lower():
                found_items.append(item)

        if found_items:
            print(f"\n--- Hasil Pencarian untuk '{query}' ({len(found_items)} item ditemukan) ---")
            for item in found_items:
                item.display_info()
                print("-" * 40)
        else:
            print(f"\nItem dengan Judul/ID '{query}' tidak ditemukan!")
            

# --- 5. FUNGSI INTERAKTIF DAN MENU ---

def input_book(library):
    """Fungsi untuk input data Buku baru."""
    print("\n--- ➕ Tambah Buku Baru ---")
    title = input("Masukkan Judul Buku: ")
    author = input("Masukkan Penulis: ")
    
    try:
        pages = int(input("Masukkan Jumlah Halaman: "))
    except ValueError:
        print("\n❌ Input Jumlah Halaman harus berupa angka.")
        return
    
    item_id = library.generate_book_id()
    print(f"ID Item: {item_id}")
    
    new_book = Book(title, item_id, author, pages)
    
    penerbit = input("Masukkan Penerbit: ")
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

    item_id = library.generate_magazine_id()
    print(f"ID Item: {item_id}")

    new_magazine = Magazine(title, item_id, issue, year)
    library.add_item(new_magazine)


def search_and_modify_status(library):
    """Fungsi untuk mencari item dan mengubah status pinjam/tersedia."""
    query = input("\nMasukkan Judul atau ID item yang ingin diubah statusnya: ")
    found_items = []

    for item in library._Library__collection: 
        if query.lower() in item.title.lower() or query.lower() == item.item_id.lower():
            found_items.append(item)
    
    if not found_items:
        print(f"\nItem dengan query '{query}' tidak ditemukan!")
        return

    if len(found_items) == 1:
        item = found_items[0]
        item.display_info()
        
        current_status = item.get_status()
        new_status_input = input(f"Status saat ini: {current_status}. Ubah menjadi (Tersedia/Pinjam): ").lower()
        
        if new_status_input == 'tersedia':
            item.set_availability(True)
            print(f"\n✅ Status '{item.title}' ({item.item_id}) berhasil diubah menjadi TERSEDIA.")
        elif new_status_input == 'pinjam':
            item.set_availability(False)
            print(f"\n✅ Status '{item.title}' ({item.item_id}) berhasil diubah menjadi DIPINJAM.")
        else:
            print("\n❌ Input status tidak valid. Gunakan 'Tersedia' atau 'Pinjam'.")
    else:
        print("\nDitemukan lebih dari satu item. Mohon gunakan query yang lebih spesifik!")


def main():
    """Fungsi utama untuk menjalankan program."""
    
    my_library = Library()

    while True:
        print("\n==============================================")
        print("🏛️  SISTEM MANAJEMEN PERPUSTAKAAN")
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
            print("\nPilihan tidak valid. Silakan masukkan angka 1 sampai 6!")

if __name__ == "__main__":
    main()