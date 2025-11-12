# 1. Data Mahasiswa
data_mahasiswa = [
    {
        'nama': 'Andi Susanto',
        'NIM': '210101001',
        'nilai_uts': 50,
        'nilai_uas': 40,
        'nilai_tugas': 55
    },
    {
        'nama': 'Budi Cahyadi',
        'NIM': '210101002',
        'nilai_uts': 60,
        'nilai_uas': 70,
        'nilai_tugas': 80
    },
    {
        'nama': 'Citra Kirana',
        'NIM': '210101003',
        'nilai_uts': 95,
        'nilai_uas': 88,
        'nilai_tugas': 92
    },
    {
        'nama': 'Dewi Sari',
        'NIM': '210101004',
        'nilai_uts': 60,
        'nilai_uas': 65,
        'nilai_tugas': 78
    },
    {
        'nama': 'Eko Prasetyo',
        'NIM': '210101005',
        'nilai_uts': 45,
        'nilai_uas': 55,
        'nilai_tugas': 60
    }
]

# --- 2. Fungsi yang Harus Dibuat ---

def hitung_nilai_akhir(uts, uas, tugas):
    """Menghitung Nilai Akhir dengan bobot: 30% UTS + 40% UAS + 30% Tugas."""
    nilai_akhir = (0.30 * uts) + (0.40 * uas) + (0.30 * tugas)
    return round(nilai_akhir, 2)

def tentukan_grade(nilai_akhir):
    """Menentukan Grade berdasarkan Nilai Akhir."""
    if nilai_akhir >= 80:
        return 'A'
    elif nilai_akhir >= 70:
        return 'B'
    elif nilai_akhir >= 60:
        return 'C'
    elif nilai_akhir >= 50:
        return 'D'
    else:
        return 'E'

def tampilkan_data_tabel(data):
    """Menampilkan data mahasiswa dalam format tabel (manual formatting)."""
    if not data:
        print("\n[!] Data mahasiswa kosong.")
        return

    print("\n--- 📊 Data Nilai Mahasiswa ---")

    # Tentukan lebar kolom untuk formatting yang rapi
    HEADER = f"{'NIM':<12} | {'Nama':<18} | {'UTS':>4} | {'UAS':>4} | {'Tugas':>6} | {'Akhir':>6} | {'Grade':>5}"
    SEPARATOR = "-" * len(HEADER)
    
    print(SEPARATOR)
    print(HEADER)
    print(SEPARATOR)

    for mhs in data:
        nilai_akhir = hitung_nilai_akhir(mhs['nilai_uts'], mhs['nilai_uas'], mhs['nilai_tugas'])
        grade = tentukan_grade(nilai_akhir)
        
        # Tampilkan data per baris
        ROW = (
            f"{mhs['NIM']:<12} | "
            f"{mhs['nama']:<18} | "
            f"{mhs['nilai_uts']:>4} | "
            f"{mhs['nilai_uas']:>4} | "
            f"{mhs['nilai_tugas']:>6} | "
            f"{nilai_akhir:>6.2f} | "  # .2f untuk 2 angka di belakang koma
            f"{grade:>5}"
        )
        print(ROW)

    print(SEPARATOR)


def cari_mahasiswa_ekstrem(data, tipe='tertinggi'):
    """Mencari mahasiswa dengan nilai akhir tertinggi atau terendah."""
    if not data:
        print("\n[!] Data mahasiswa kosong.")
        return

    # Hitung nilai akhir untuk semua mahasiswa
    data_dengan_nilai_akhir = []
    for mhs in data:
        nilai_akhir = hitung_nilai_akhir(mhs['nilai_uts'], mhs['nilai_uas'], mhs['nilai_tugas'])
        data_dengan_nilai_akhir.append({
            'nama': mhs['nama'],
            'nilai_akhir': nilai_akhir
        })

    if tipe == 'tertinggi':
        mahasiswa_ekstrem = max(data_dengan_nilai_akhir, key=lambda x: x['nilai_akhir'])
        print(f"\n Mahasiswa dengan Nilai Akhir **TERTINGGI**:")
    elif tipe == 'terendah':
        mahasiswa_ekstrem = min(data_dengan_nilai_akhir, key=lambda x: x['nilai_akhir'])
        print(f"\n Mahasiswa dengan Nilai Akhir **TERENDAH**:")
    else:
        return

    print(f"  Nama: {mahasiswa_ekstrem['nama']}")
    print(f"  Nilai Akhir: {mahasiswa_ekstrem['nilai_akhir']:.2f}")


# --- 3. Fitur Tambahan ---

def input_data_mahasiswa_baru(data):
    """Input data mahasiswa baru."""
    print("\n--- ➕ Input Data Mahasiswa Baru ---")
    nama = input("Masukkan Nama: ")
    nim = input("Masukkan NIM: ")
    
    # Input dan validasi nilai
    while True:
        try:
            uts = int(input("Masukkan Nilai UTS (0-100): "))
            uas = int(input("Masukkan Nilai UAS (0-100): "))
            tugas = int(input("Masukkan Nilai Tugas (0-100): "))
            if 0 <= uts <= 100 and 0 <= uas <= 100 and 0 <= tugas <= 100:
                break
            else:
                print("[!] Nilai harus berada dalam rentang 0-100.")
        except ValueError:
            print("[!] Masukkan harus berupa angka.")

    mahasiswa_baru = {
        'nama': nama,
        'NIM': nim,
        'nilai_uts': uts,
        'nilai_uas': uas,
        'nilai_tugas': tugas
    }
    data.append(mahasiswa_baru)
    print(f"\n✅ Data mahasiswa **{nama}** berhasil ditambahkan!")

def filter_mahasiswa_grade(data):
    """Filter mahasiswa berdasarkan grade tertentu."""
    if not data:
        print("\n[!] Data mahasiswa kosong. Tidak bisa melakukan filter.")
        return

    grade_filter = input("\nMasukkan Grade yang ingin difilter (A/B/C/D/E): ").upper()
    if grade_filter not in ['A', 'B', 'C', 'D', 'E']:
        print("[!] Grade tidak valid. Pilih A, B, C, D, atau E.")
        return

    hasil_filter = []
    for mhs in data:
        nilai_akhir = hitung_nilai_akhir(mhs['nilai_uts'], mhs['nilai_uas'], mhs['nilai_tugas'])
        grade = tentukan_grade(nilai_akhir)
        if grade == grade_filter:
            # Buat dictionary baru untuk hasil filter, tambahkan nilai akhir dan grade
            mhs_copy = mhs.copy()
            mhs_copy['nilai_akhir'] = nilai_akhir
            mhs_copy['grade'] = grade
            hasil_filter.append(mhs_copy)
    
    if hasil_filter:
        print(f"\n--- 🔍 Hasil Filter Mahasiswa Grade **{grade_filter}** ---")
        tampilkan_data_tabel(hasil_filter)
    else:
        print(f"\n[!] Tidak ada mahasiswa dengan Grade **{grade_filter}**.")


def hitung_rata_rata_nilai_kelas(data):
    """Menghitung rata-rata nilai akhir kelas."""
    if not data:
        print("\n[!] Data mahasiswa kosong. Rata-rata tidak dapat dihitung.")
        return
    
    total_nilai_akhir = 0
    jumlah_mahasiswa = len(data)

    for mhs in data:
        nilai_akhir = hitung_nilai_akhir(mhs['nilai_uts'], mhs['nilai_uas'], mhs['nilai_tugas'])
        total_nilai_akhir += nilai_akhir

    rata_rata = total_nilai_akhir / jumlah_mahasiswa
    
    print("\n--- 📈 Rata-rata Nilai Kelas ---")
    print(f"Total Mahasiswa: **{jumlah_mahasiswa}**")
    print(f"Rata-rata Nilai Akhir Kelas: **{rata_rata:.2f}**")


# --- Implementasi Program Utama ---

def main():
    """Fungsi utama untuk menjalankan program secara keseluruhan."""
    
    # Tampilkan menu interaktif
    while True:
        print("\n==============================================")
        print("  PROGRAM PENGELOLAAN DATA NILAI MAHASISWA")
        print("==============================================")
        print("Pilih Menu:")
        print("1. Tampilkan Semua Data Nilai")
        print("2. Tambah Data Mahasiswa Baru")
        print("3. Cari Nilai Tertinggi/Terendah")
        print("4. Filter Mahasiswa Berdasarkan Grade")
        print("5. Hitung Rata-rata Nilai Kelas")
        print("6. Keluar")
        print("----------------------------------------------")
        
        pilihan = input("Masukkan pilihan (1-6): ")
        
        if pilihan == '1':
            tampilkan_data_tabel(data_mahasiswa)
        elif pilihan == '2':
            input_data_mahasiswa_baru(data_mahasiswa)
        elif pilihan == '3':
            cari_mahasiswa_ekstrem(data_mahasiswa, tipe='tertinggi')
            cari_mahasiswa_ekstrem(data_mahasiswa, tipe='terendah')
        elif pilihan == '4':
            filter_mahasiswa_grade(data_mahasiswa)
        elif pilihan == '5':
            hitung_rata_rata_nilai_kelas(data_mahasiswa)
        elif pilihan == '6':
            print("\nTerima kasih, program selesai.")
            break
        else:
            print("\n[!] Pilihan tidak valid. Silakan masukkan angka 1 sampai 6.")

# Panggil fungsi utama
if __name__ == "__main__":
    main()