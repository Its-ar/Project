import kesiapanLahan from "../models/kesiapanLahan.js";

export const getAllKesiapanLahan = async (req, res) => {
  try {
    // Query ke basis data untuk mengambil semua data KesiapanLahan
    const AllKesiapanLahan = await kesiapanLahan.findAll();

    // Kirim data KesiapanLahan sebagai respons ke aplikasi frontend
    res.status(200).json({ message: "Data KesiapanLahan berhasil ditemukan", data: AllKesiapanLahan });
  } catch (error) {
    console.error("Gagal mengambil data KesiapanLahan:", error);
    res.status(500).json({ message: "Gagal mengambil data KesiapanLahan" });
  }
};

export const createKesiapanLahan = async (req, res) => {
  try {
    // Ambil data KesiapanLahan dari body permintaan
    const {
      selectedItem,
      selectedItem2,
      keterangan,
      kondisiCuaca,
      dokumentasiCuacaDiAmp,
      gpsDokumentasiCuacaDiAmp,
      waktuDokumentasiCuacaDiAmp,
      kondisiCuaca2,
      dokumentasiCuacaDiLahanPenghamparan,
      gpsDokumentasicuacaDiLahanPenghamparan,
      waktuDokumentasiCuacaDiLahanPenghamparan,
      kondisiCuaca3,
      DokumentasiKondisiLahan,
      gpsDokumentasiPengukuranTebal,
      waktuDokumentasiPengukurantebal,
    } = req.body;

    // Simpan data KesiapanLahan ke dalam basis data menggunakan model KesiapanLahan
    const newKesiapanLahan = await kesiapanLahan.create({
      selectedItem,
      selectedItem2,
      keterangan,
      kondisiCuaca,
      dokumentasiCuacaDiAmp,
      gpsDokumentasiCuacaDiAmp,
      waktuDokumentasiCuacaDiAmp,
      kondisiCuaca2,
      dokumentasiCuacaDiLahanPenghamparan,
      gpsDokumentasicuacaDiLahanPenghamparan,
      waktuDokumentasiCuacaDiLahanPenghamparan,
      kondisiCuaca3,
      DokumentasiKondisiLahan,
      gpsDokumentasiPengukuranTebal,
      waktuDokumentasiPengukurantebal,
    });

    // Beri respons ke aplikasi frontend
    res.status(201).json({ message: "Data KesiapanLahan berhasil disimpan", data: newKesiapanLahan });
  } catch (error) {
    console.error("Gagal menyimpan data KesiapanLahan:", error);
    res.status(500).json({ message: "Gagal menyimpan data KesiapanLahan" });
  }
};
