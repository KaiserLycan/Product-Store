import express from "express";
import {createProducts, deleteProducts, getProducts, updateProducts} from "../controllers/product.controller.js";

const router = express.Router();


router.get("/", getProducts)
router.post("/", createProducts)
//put for all resource - patch for some fields
router.put("/:id", updateProducts)
router.delete("/:id", deleteProducts)

export default router;