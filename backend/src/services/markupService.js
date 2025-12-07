import Markup from "../db/models/markup.js"


export async function createOrUpdateMarkup(city, markup) {
    return await Markup.upsert({ city, markup })
}

export async function getAllMarkups() {
    return await Markup.findAll()
}

export async function deleteMarkupByCity(city) {
    return await Markup.destroy({ where: { city } })
}

export async function updateMarkupByCity(city, markup) {
    return await Markup.update({ markup }, { where: { city } })
}