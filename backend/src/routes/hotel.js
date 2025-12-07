import express from "express"
import { validate } from "../middleware/validate.js"
import { searchHotelsValidator } from "../utils/validators/hotelValidator.js"
import { handleHotelSearch } from "../controllers/hotelController.js"

const router = express.Router()

router.post('/search', searchHotelsValidator, validate, handleHotelSearch)

export default router