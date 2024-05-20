import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";

const Proyek = db.define(
  "proyek",
  {
    NomorKontrak: DataTypes.STRING,
    NamaPaket: DataTypes.STRING,
    NamaSATKER: DataTypes.STRING,
    NamaPPK: DataTypes.STRING,
    NilaiKontrak: DataTypes.STRING,
    LokasiPekerjaan: DataTypes.STRING,
    TanggalKontrak: DataTypes.STRING,
    MasaPelaksanaan: DataTypes.STRING,
    TanggalPHO: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Proyek;
