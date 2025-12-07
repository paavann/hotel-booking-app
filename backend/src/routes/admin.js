import express from "express"
import { validate } from "../middleware/validate.js"
import { createMarkupValidator, deleteMarkupValidator } from "../utils/validators/adminValidators.js"
import { listMarkups, createMarkup, updateMarkup, deleteMarkup } from "../controllers/adminController.js"

const router = express.Router()

router.get("/markup", listMarkups)
router.post("/markup", createMarkupValidator, validate, createMarkup)
router.patch("/markup/:city", deleteMarkupValidator, validate, updateMarkup)
router.delete("/markup/:city", deleteMarkupValidator, validate, deleteMarkup)

export default router