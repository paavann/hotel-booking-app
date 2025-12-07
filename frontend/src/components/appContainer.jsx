import React from "react"
import Container from "@mui/material/Container"


export default function AppContainer({ children, sx }) {
    return (
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 }, ...sx }}>
            {children}
        </Container>
    )
}