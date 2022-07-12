import { useTheme } from "@emotion/react";
import { Typography, Box, useMediaQuery } from "@mui/material";
import { useEffect } from "react";


export default function Letra(props) {

    const theme = useTheme();
    const esMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const palabra = props.palabra;
    const angle = props.indice / 26 * 2 * Math.PI - Math.PI / 2;
    const radius = esMobile ? 123 : 182;
    const symbolSize = esMobile ? 25 : 38;

    const x = radius + radius * Math.cos(angle);
    const y = radius + radius * Math.sin(angle);

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
                minWidth: symbolSize + "px",
                minHeight: symbolSize + "px",
                borderRadius: "50%",
                top: y,
                left: x,
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                display: "flex"
            }}
        >
            <Typography sx={{ fontWeight: "bold", color: "primary.contrastText" }}>
                {palabra.letra}
            </Typography>
        </Box>
    )
}