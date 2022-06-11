import { Container } from "@mui/system"
import BotonesFlotantes from "../BotonesFlotantes"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import SeccionComplementaria from "../SeccionComplementaria"

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const espacioIconos = 2;


export default function ComoJugar() {
    return (
        <SeccionComplementaria
            titulo="Cómo jugar"
            icono={<HelpOutlineIcon sx={{ mr: espacioIconos, fontSize: 30 }}/>}
            contenido={
                <Box class="item-seccion-texto">
                    <Typography class="titulo-item-seccion-texto" variant="h3">
                        ¿Cuáles son las reglas?
                    </Typography>
                    <Typography class="contenido-item-seccion-texto" variant="body1">
                        Para jugar hay que...
                    </Typography>
                </Box>
            }
        />
    )
}