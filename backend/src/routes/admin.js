import express from "express"
import { validate } from "../middleware/validate"
import { createMarkupValidator, deleteMarkupValidator } from "../utils/validators/adminValidators"
import { listMarkups, createMarkup, updateMarkup, deleteMarkup } from "../controllers/adminController"

const router = express.Router()

router.get("/markup", listMarkups)
router.post("/markup", createMarkupValidator, validate, createMarkup)
router.delete("/markup/:city", deleteMarkupValidator, validate, updateMarkup)
router.delete("/markup/:city", deleteMarkupValidator, validate, deleteMarkup)

export default router