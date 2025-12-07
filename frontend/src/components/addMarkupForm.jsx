import { useState } from "react"
import { Box, TextField, Button, Paper } from "@mui/material"


export default function AddMarkupForm({ onAdd }) {
    const [city, setCity] = useState("")
    const [markup, setMarkup] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!city || !markup) return

        onAdd({ city, markup: Number(markup) })
        setCity("")
        setMarkup("")
    }

    return (
        <Paper sx={{ p: 2, mb: 3 }}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", gap: 2 }}
            >
                <TextField
                    label="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    fullWidth
                />

                <TextField
                    label="Markup %"
                    type="number"
                    value={markup}
                    onChange={(e) => setMarkup(e.target.value)}
                    fullWidth
                />

                <Button type="submit" variant="contained">
                    Add
                </Button>
            </Box>
        </Paper>
    )
}