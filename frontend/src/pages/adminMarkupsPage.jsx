import { useEffect, useState } from "react"
import { Container, Typography, CircularProgress, Box, Snackbar, Alert } from "@mui/material"
import axios from "axios"
import MarkupTable from "../components/markupTable"
import EditMarkupDialog from "../components/editMarkupDialog"
import AddMarkupForm from "../components/addMarkupForm"



const BASE_URL = import.meta.env.VITE_BASE_URL

export default function AdminMarkupsPage() {
    const [markups, setMarkups] = useState([])
    const [loading, setLoading] = useState(true)
    const [editData, setEditData] = useState(null)
    const [editOpen, setEditOpen] = useState(false)
    const [msg, setMsg] = useState(null)

    const fetchMarkups = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${BASE_URL}/api/admin/markup`)
            setMarkups(res.data)
        } catch(err) {
            console.error(err)
            setMsg("Failed to fetch markups.")
        } finally {
            setLoading(false)
        }
    }

    const handleAdd = async (payload) => {
        try {
            await axios.post(`${BASE_URL}/api/admin/markup`, payload)
            setMsg("Markup added.")
            fetchMarkups()
        } catch(err) {
            console.error(err)
            setMsg("Error adding mrkup.")
        }
    }

    const handleDelete = async (city) => {
        try {
            await axios.delete(`${BASE_URL}/api/admin/markup/${city}`)
            setMsg("Markup deleted.")
            fetchMarkups()
        } catch(err) {
            console.error(err)
            setMsg("Error deleting markup.")
        }
    }

    const handleEditStart = (data) => {
        setEditData(data)
        setEditOpen(true)
    }

    const handleEditSave = async (updated) => {
        const { city } = updated
        try {
            await axios.patch(`${BASE_URL}/api/admin/markup/${city}`, updated)
            setMsg("Markup updated.")
            setEditOpen(false)
            fetchMarkups()
        } catch(err) {
            console.error(err)
            setMsg("Error updating markup.")
        }
    }


    useEffect(() => {
        fetchMarkups()
    }, [])

    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h4" fontWeight={600} mb={3}>
                City Markups
            </Typography>

            <AddMarkupForm onAdd={handleAdd} />

            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <MarkupTable
                    markups={markups}
                    onEdit={handleEditStart}
                    onDelete={handleDelete}
                />
            )}

            <EditMarkupDialog
                open={editOpen}
                onClose={() => setEditOpen(false)}
                data={editData}
                onSave={handleEditSave}
            />

            <Snackbar
                open={!!msg}
                autoHideDuration={2000}
                onClose={() => setMsg(null)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert severity="info" onClose={() => setMsg(null)}>
                    {msg}
                </Alert>
            </Snackbar> 
        </Container>
    )
}