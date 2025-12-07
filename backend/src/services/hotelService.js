import Markup from "../db/models/markup.js"
import { HOTELS } from "../utils/hotelData.js"


export async function searchHotels(city) {
    const markupRecord = await Markup.findOne({ where:{ city } })
    const markup = markupRecord ? markupRecord.markup : 0

    const hotels = HOTELS.filter(
        (h) => h.city.toLowerCase() === city.toLowerCase()
    )

    const results = hotels.map((hotel) => {
        const finalPrice = Math.round(
            hotel.basePrice + hotel.basePrice * (markup/100)
        )
        return {
            ...hotel,
            finalPrice,
        }
    })
    return results
}