import { Typography } from "@mui/material"
import SeccionComplementaria from "../SeccionComplementaria"

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BoxItemSeccionComplementaria from "./BoxItemSeccionComplementaria"

const espacioIconos = 2;


export default function ComoJugar() {
    return (
        <SeccionComplementaria
            titulo="Cómo jugar"
            icono={<HelpOutlineIcon sx={{ mr: espacioIconos, fontSize: 30 }}/>}
            contenido={
                <BoxItemSeccionComplementaria
                    titulo="¿Cuáles son las reglas?"
                    contenido="Para jugar hay que..."
                />
            }
        />
    )
}