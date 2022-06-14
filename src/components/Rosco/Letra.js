import { Typography } from "@mui/material";
import { useEffect } from "react";


export default function Letra(props) {

    const palabra = props.palabra;

    // Le doy un color rápido para identificar el estado
    function getColor() {
        switch(palabra.estado) {
            case 1:
                return 'success.main'
            case 2:
                return 'error.main'
            case 3:
                return 'pasapalabra.main'
            default:
                return 'black'
        }
    }

    return (
        <Typography
            variant="string"
            sx={{
                color: getColor(),
            }}
        >
            {palabra.letra}{" "}
        </Typography>
    )
}