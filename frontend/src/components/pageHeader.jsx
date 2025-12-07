import { useNavigate } from "react-router"
import { Button } from "@mui/material"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"


export default function PageHeader({ title }) {
    const navigate = useNavigate()
    

    return (
        <Box mb={3} padding={2} bgcolor="#0f172a" display="flex" justifyContent="space-between" alignItems="center">
            <Box>
                <Typography variant="h2" color="white">{title}</Typography>
            </Box>

            <Box className="flex items-end">
                <Button
                    style={{ background: "#ffffff" }}
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={() => navigate("/admin/markups")}
                    endIcon={<ArrowForwardIcon sx={{ color: "black" }}/>}
                >
                    <Typography variant="h4" color="black">Admin Panel</Typography>
                </Button>
            </Box>
        </Box>
    )
}