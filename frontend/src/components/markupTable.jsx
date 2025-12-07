import {
    Paper, IconButton,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"



export default function MarkupTable({ markups, onEdit, onDelete }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>City</TableCell>
                        <TableCell>Markup (%)</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {markups.map((item) => (
                        <TableRow key={item.city}>
                            <TableCell>{item.city}</TableCell>
                            <TableCell>{item.markup}</TableCell>

                            <TableCell align="right">
                                <IconButton onClick={() => onEdit(item)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => onDelete(item.city)}>
                                    <DeleteIcon color="error" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}

                    {markups.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={3} align="center" sx={{ py: 3 }}>
                                No markups found
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}