import express from "express";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ CREATE ORDER
router.post("/", protect, async (req, res) => {
  res.json({ message: "Order placed successfully" });
});

// ✅ GET ORDERS
router.get("/", protect, async (req, res) => {
  res.json([]);
});

export default router;
