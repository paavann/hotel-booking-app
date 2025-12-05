import Hotel from "../db/models/hotel"
import Markup from "../db/models/markup"


export async function searchHotels(city) {
    const markupRecord = await Markup.findOne({ where:{ city } })
    const markup = markupRecord ? markupRecord.markup : 0

    const hotels = await Hotel.findAll({
        where: { city },
        raw: true,
    })

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