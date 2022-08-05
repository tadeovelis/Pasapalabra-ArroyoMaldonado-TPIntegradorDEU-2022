import { useTheme } from "@emotion/react";
import { Typography, Box, useMediaQuery } from "@mui/material";
import { useEffect } from "react";


export default function Letra(props) {

    const theme = useTheme();
    const esMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const palabra = props.palabra;

    const sizeLetra = 40;

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
                width: sizeLetra +'px',
                height: sizeLetra +'px',
                bgcolor: getColor(),
                borderRadius: "50%",
                margin:'0 auto'
            }}
        >
            <Typography
                sx={{
                    fontWeight: "bold",
                    color: "primary.contrastText",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%'
                }}>
                {palabra.letra}
            </Typography>
        </Box>
    )
}