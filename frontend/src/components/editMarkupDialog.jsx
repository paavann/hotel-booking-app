import { useState } from "react"
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    Button, TextField, Box,
} from "@mui/material"



export default function EditMarkupDialog({ open, onClose, data, onSave}) {
    if(!data) return null
    const [markup, setMarkup] = useState(data.markup)
    const handleSave = () => onSave({ city: data.city, markup: Number(markup) })

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edit Markup</DialogTitle>

            <DialogContent>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
                    <TextField label="City" value={data.city} disabled fullWidth />
                    <TextField
                        label="Markup %"
                        type="number"
                        value={markup}
                        onChange={(e) => setMarkup(e.target.value)}
                        fullWidth
                    />
                </Box>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button variant="contained" onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>        
    )
}