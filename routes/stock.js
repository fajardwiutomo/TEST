import express from "express";
import { postStock } from "../controllers/stockController/postStock.js";
import { getStock } from "../controllers/stockController/getStock.js";
import { updateStock } from "../controllers/stockController/updateStock.js";
import { deleteStock } from "../controllers/stockController/deleteStock.js";
import { getStockById } from "../controllers/stockController/getStockById.js";

const router = express.Router();

router.post("/stock", postStock);
router.get("/stock", getStock)
router.get("/stock/:id", getStockById)
router.patch("/stock/:id", updateStock)
router.delete("/stock/:id", deleteStock)

export default router;
