import express from "express";
import { createProyek, getAllProyek } from "../controllers/inpoControler.js";

const router = express.Router();

router.post("/proyect", createProyek);
router.get("/proyect", getAllProyek);

export default router;
