import app from './app.js'
import dotenv from 'dotenv'
import { syncDb } from './db/sync.js'
dotenv.config()

const PORT = process.env.PORT || 5000
const startServer = async () => {
    try {
        await syncDb()
        app.listen(PORT, () => console.log`server running on http://localhost:${PORT}`)
    } catch(err) {
        console.error("failed to start server:", err)
        process.exit(1)
    }
}
startServer()