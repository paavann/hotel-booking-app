import sequelize from "../config/dbConfig.js"
import Markup from "./models/markup.js"
import Hotel from "./models/hotel.js"

export async function syncDb() {
    try {
        await sequelize.authenticate()
        console.log("db authenticated successfully.")
        await sequelize.sync({ alter: true })
        console.log("db synchronized successfully.")
    } catch(err) {
        console.log("failed to sync db:", err)
        throw err
    }
}