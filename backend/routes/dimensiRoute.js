import express from "express";
import { createDimensiPekerjaan, getAllDimensiPekerjaan } from "../controllers/dimensiController.js";
const router = express.Router();

// Rute untuk membuat data dimensi pekerjaan baru
router.post("/dimensiPekerjaan", createDimensiPekerjaan);
// Rute untuk mendapatkan semua data dimensi pekerjaan
router.get("/dimensiPekerjaan", getAllDimensiPekerjaan);

export default router;
