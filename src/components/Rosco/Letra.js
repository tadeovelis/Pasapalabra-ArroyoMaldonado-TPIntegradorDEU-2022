import { Box, Typography } from "@mui/material";
import { useEffect } from "react";


export default function Letra(props) {

    const palabra = props.palabra;

    // Le doy un color rápido para identificar el estado
    function getColor() {
        switch (palabra.estado) {
            case 1:
                return 'success.main'
            case 2:
                return 'error.main'
            case 3:
                return 'pasapalabra.main'
            default:
                return 'primary.main'
        }
    }

    return (
        <Box
            sx={{
                bgcolor: getColor(),
                width: '50px',
                height: '50px',
                borderRadius: "50%",
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Typography sx={{ fontWeight: "bold", color: "primary.contrastText" }}>
                {palabra.letra}
            </Typography>
        </Box>
    )
}