import { useState } from "react"
import { Box, Card, CardContent, Button, TextField, MenuItem, Typography, CircularProgress } from "@mui/material"
import AppContainer from "../components/appContainer"
import axios from "axios"

const CITY_LIST = [
    "Delhi",
    "Mumbai",
    "Banglore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Goa",
    "Jaipur",
    "Ahmedabad",
]

const BASE_URL = import.meta.env.VITE_BASE_URL

export default function SearchPage() {
    const [city, setCity] = useState("")
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [results, setResults] = useState([])

    const handleSearch = async () => {
        setError("")
        if(!city || !checkIn, !checkOut) return setError("All fields are required.")
        if(new Date(checkOut) <= new Date(checkIn)) return setError("Check-out date must be after Check-in")

        setLoading(true)
        try {
            const res = await axios.post(`${BASE_URL}/api/hotels/search`, { city, checkIn, checkOut })
            setResults(res.data || [])
        } catch(err) {
            setError(err.response?.data?.message || "Failed to fetch hotels.")
        } finally {
            setLoading(false)
        }
    }


    return (
        <AppContainer sx={{ mt: 6 }}>
            <Typography variant="h2" sx={{ mb:4 }}>
                Find Hotels
            </Typography>

            <Card>
                <CardContent sx={{ background: "#e4e4e4ff" }}>
                    <Box
                        className="grid grid-cols-1 md:grid-cols-4 gap-4"
                        sx={{ mb: 2 }}
                    >
                        <TextField
                            select
                            label="City"
                            fullWidth
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        >
                            {CITY_LIST.map((c) => (
                                <MenuItem key={c} value={c}>
                                    {c}
                                </MenuItem>
                            ))}                        
                        </TextField>

                        <TextField
                            type="date"
                            label="Check-in"
                            fullWidth
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            slotProps={{
                                inputLabel: {
                                    shrink: true
                                }
                            }}
                        />

                        <TextField
                            type="date"
                            label="Check-out"
                            fullWidth
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            slotProps={{
                                inputLabel: {
                                    shrink: true
                                }
                            }}
                        />

                        <Box className="flex items-end">
                            <Button
                                style={{ background: "#0f172a" }}
                                variant="contained"
                                size="large"
                                fullWidth
                                onClick={handleSearch}
                                disabled={loading}
                            >
                                {loading ? (
                                    <CircularProgress size={24} sx={{ color: "white" }} />
                                ) : (
                                    "Search"
                                )}
                            </Button>
                        </Box>
                    </Box>

                    {error && (
                        <Typography color="error" sx={{ mt: 1 }}>
                            {error}
                        </Typography>
                    )}
                </CardContent>


                {results.length > 0 && (
                    <Box sx={{ mt: 6 }}>
                        <Typography variant="h3" sx={{ mb: 3 }}>
                            Available Hotels
                        </Typography>

                        <Box className="space-y-4">
                            {results.map((hotel, idx) => (
                                <Card key={idx}>
                                    <CardContent sx={{ background: "#e4e4e4ff" }}>
                                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                            {hotel.name}
                                        </Typography>

                                        <Typography color="text.secondary">
                                            {hotel.city} • Rating: {hotel.rating}
                                        </Typography>

                                        <Box sx={{ mt: 1 }}>
                                            <Typography>
                                                Base Price: ₹{hotel.basePrice}
                                            </Typography>

                                            <Typography fontWeight={600}>
                                                Final Price: ₹{hotel.finalPrice}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    </Box>
                )}                
            </Card>
        </AppContainer>
    )
}