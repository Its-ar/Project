import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";

const DimensiPekerjaan = db.define(
  "dimensi_pekerjaan",
  {
    selectedItem: DataTypes.STRING,
    selectedItem2: DataTypes.STRING,
    peruntukan: DataTypes.STRING,
    panjangPekerjaan: DataTypes.STRING,
    pengukuranPanjang: DataTypes.STRING,
    dokumentasiPanjang: DataTypes.STRING,
    gpsDokumentasiPanjang: DataTypes.STRING,
    waktuDokumentasiPanjang: DataTypes.STRING,
    lebarPekerjaan: DataTypes.STRING,
    pengukuranLebar: DataTypes.STRING,
    dokumentasiLebar: DataTypes.STRING,
    gpsDokumentasiLebar: DataTypes.STRING,
    waktuDokumentasiLebar: DataTypes.STRING,
    tebalPekerjaan: DataTypes.STRING,
    pengukuranTebal: DataTypes.STRING,
    dokumentasiTebal: DataTypes.STRING,
    gpsDokumentasiTebal: DataTypes.STRING,
    waktuDokumentasiTebal: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default DimensiPekerjaan;
