import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import adminRoutes from './routes/admin.js'
import hotelRoutes from './routes/hotel.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api/admin', adminRoutes)
app.use('/api/hotels', hotelRoutes)

app.get('/', (req, res) => res.json({ ok: true, message: 'Goodweeks API.' }))

export default app