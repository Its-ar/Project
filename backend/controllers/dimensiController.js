import DimensiPekerjaan from "../models/DimensiPekerjaan.js";

export const getAllDimensiPekerjaan = async (req, res) => {
  try {
    // Query ke basis data untuk mengambil semua data DimensiPekerjaan
    const AllDimensiPekerjaan = await DimensiPekerjaan.findAll();

    // Kirim data DimensiPekerjaan sebagai respons ke aplikasi frontend
    res.status(200).json({ message: "Data DimensiPekerjaan berhasil ditemukan", data: AllDimensiPekerjaan });
  } catch (error) {
    console.error("Gagal mengambil data DimensiPekerjaan:", error);
    res.status(500).json({ message: "Gagal mengambil data DimensiPekerjaan" });
  }
};

export const createDimensiPekerjaan = async (req, res) => {
  try {
    // Ambil data DimensiPekerjaan dari body permintaan
    const {
      selectedItem,
      selectedItem2,
      peruntukan,
      panjangPekerjaan,
      pengukuranPanjang,
      dokumentasiPanjang,
      gpsDokumentasiPanjang,
      waktuDokumentasiPanjang,
      lebarPekerjaan,
      pengukuranLebar,
      dokumentasiLebar,
      gpsDokumentasiLebar,
      waktuDokumentasiLebar,
      tebalPekerjaan,
      pengukuranTebal,
      dokumentasiTebal,
      gpsDokumentasiTebal,
      waktuDokumentasiTebal,
    } = req.body;

    // Simpan data DimensiPekerjaan ke dalam basis data menggunakan model DimensiPekerjaan
    const newDimensiPekerjaan = await DimensiPekerjaan.create({
      selectedItem,
      selectedItem2,
      peruntukan,
      panjangPekerjaan,
      pengukuranPanjang,
      dokumentasiPanjang,
      gpsDokumentasiPanjang,
      waktuDokumentasiPanjang,
      lebarPekerjaan,
      pengukuranLebar,
      dokumentasiLebar,
      gpsDokumentasiLebar,
      waktuDokumentasiLebar,
      tebalPekerjaan,
      pengukuranTebal,
      dokumentasiTebal,
      gpsDokumentasiTebal,
      waktuDokumentasiTebal,
    });

    // Beri respons ke aplikasi frontend
    res.status(201).json({ message: "Data DimensiPekerjaan berhasil disimpan", data: newDimensiPekerjaan });
  } catch (error) {
    console.error("Gagal menyimpan data DimensiPekerjaan:", error);
    res.status(500).json({ message: "Gagal menyimpan data DimensiPekerjaan" });
  }
};
