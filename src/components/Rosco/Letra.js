import { Typography } from "@mui/material";
import { useEffect } from "react";


export default function Letra(props) {

    const palabra = props.palabra;

    // Le doy un color rápido para identificar el estado
    function getColor() {
        switch(palabra.estado) {
            case 1:
                return 'green'
            case 2:
                return 'red'
            case 3:
                return 'yellow'
            default:
                return 'black'
        }
    }

    return (
        <span style={{color: getColor()}}>{palabra.letra}{" "}</span>
    )
}