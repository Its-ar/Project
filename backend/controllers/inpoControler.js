import Proyek from "../models/proyect.js";

export const getAllProyek = async (req, res) => {
  try {
    // Query ke basis data untuk mengambil semua data proyek
    const allProyek = await Proyek.findAll();

    // Kirim data proyek sebagai respons ke aplikasi frontend
    res.status(200).json({ message: "Data proyek berhasil ditemukan", data: allProyek });
  } catch (error) {
    console.error("Gagal mengambil data proyek:", error);
    res.status(500).json({ message: "Gagal mengambil data proyek" });
  }
};

export const createProyek = async (req, res) => {
  try {
    // Ambil data proyek dari body permintaan
    const { NomorKontrak, NamaPaket, NamaSATKER, NamaPPK, NilaiKontrak, LokasiPekerjaan, TanggalKontrak, MasaPelaksanaan, TanggalPHO } = req.body;

    // Simpan data proyek ke dalam basis data menggunakan model Proyek
    const newProyek = await Proyek.create({
      NomorKontrak,
      NamaPaket,
      NamaSATKER,
      NamaPPK,
      NilaiKontrak,
      LokasiPekerjaan,
      TanggalKontrak,
      MasaPelaksanaan,
      TanggalPHO,
    });

    // Beri respons ke aplikasi frontend
    res.status(201).json({ message: "Data proyek berhasil disimpan", data: newProyek });
  } catch (error) {
    console.error("Gagal menyimpan data proyek:", error);
    res.status(500).json({ message: "Gagal menyimpan data proyek" });
  }
};
