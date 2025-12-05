import { createOrUpdateMarkup, getAllMarkups, updateMarkupByCity, deleteMarkupByCity,  } from "../services/markupService"




export async function listMarkups(req, res) {
    try {
        const list = await getAllMarkups(city, markup)
        return res.status(201).json(list)
    } catch(err) {
        console.error("error getting markups: ", err)
        return res.status(500).json({ error: "server error." })
    }
}


export async function createMarkup(req, res) {
    const { city, markup } = req.body
    try {
        await createOrUpdateMarkup(city, markup)
        return res.status(201).json({ message: "markup saved successfully." })
    } catch(err) {
        console.error("error creating markup: ", err)
        return res.status(500).json({ error: "server error." })
    }
}


export async function deleteMarkup(req, res) {
    const { city } = req.params
    try {
        const rows = await deleteMarkupByCity(city)
        if(!rows) return res.status(404).json({ message: "city not found." })
        
        return res.status(201).json({ message: "markup deleted successfully." })
    } catch(err) {
        console.error("error deleting markup: ", err)
        return res.status(500).json({ error: "server error." })
    }
}


export async function updateMarkup(req, res) {
    const { city } = req.params
    const { markup } = req.body
    try {
        const rows = await updateMarkupByCity(city, markup)
        if(!rows[0]) return res.status(404).json({ message: "city not found." })
        
        return res.status(201).json({ message: "markup updated successfully." })
    } catch(err) {
        console.error("error updating markup: ", err)
        return res.status(500).json({ error: "server error." })
    }
}