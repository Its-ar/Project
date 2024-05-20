import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";

const kesiapanLahan = db.define(
  "kesiapanLahan",
  {
    selectedItem: DataTypes.STRING,
    selectedItem2: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    kondisiCuaca: DataTypes.STRING,
    dokumentasiCuacaDiAmp: DataTypes.STRING,
    gpsDokumentasiCuacaDiAmp: DataTypes.STRING,
    waktuDokumentasiCuacaDiAmp: DataTypes.STRING,
    kondisiCuaca2: DataTypes.STRING,
    dokumentasiCuacaDiLahanPenghamparan: DataTypes.STRING,
    gpsDokumentasicuacaDiLahanPenghamparan: DataTypes.STRING,
    waktuDokumentasiCuacaDiLahanPenghamparan: DataTypes.STRING,
    kondisiCuaca3: DataTypes.STRING,
    DokumentasiKondisiLahan: DataTypes.STRING,
    gpsDokumentasiPengukuranTebal: DataTypes.STRING,
    waktuDokumentasiPengukurantebal: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default kesiapanLahan;
