import express from "express"
import { validate } from "../middleware/validate"
import { searchHotelsValidator } from "../utils/validators/hotelValidator"
import { handleHotelSearch } from "../controllers/hotelController"

const router = express.Router()

router.post('/search', searchHotelsValidator, validate, handleHotelSearch)

export default router