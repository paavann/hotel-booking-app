import { validationResult } from "express-validator"
import { searchHotels } from "../services/hotelService"


export async function handleHotelSearch(req, res) {
    const { city } = req.body
    try {
        const hotels = await searchHotels(city)
        return res.json(hotels)
    } catch(err) {
        console.log("error fetching hotels: ", err)
        return res.status(500).sjon({ error: "server error." })
    }
}