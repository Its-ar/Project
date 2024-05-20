import express from "express";
import { createKesiapanLahan, getAllKesiapanLahan } from "../controllers/kesiapanController.js";
const router = express.Router();

// Rute untuk membuat data dimensi pekerjaan baru
router.post("/kesiapanLahan", createKesiapanLahan);
// Rute untuk mendapatkan semua data dimensi pekerjaan
router.get("/kesiapanLahan", getAllKesiapanLahan);

export default router;
