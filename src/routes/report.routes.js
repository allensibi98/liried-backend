import express from "express";
import { getReport } from "../controllers/report.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();
router.get("/", authMiddleware, getReport);

export default router;
