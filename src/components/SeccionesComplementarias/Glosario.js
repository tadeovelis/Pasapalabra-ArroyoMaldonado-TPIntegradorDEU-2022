import { Container } from "@mui/system"
import BotonesFlotantes from "../BotonesFlotantes"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import HeaderAbajo from "../HeaderAbajo"
import SeccionComplementaria from "../SeccionComplementaria"

import ImportContactsIcon from '@mui/icons-material/ImportContacts';

const espacioIconos = 2;

const palabras = [
    { 'titulo': 'Inundación', 'definicion': 'Las inundaciones son desbordamientos de agua temporales hacia terrenos que normalmente están secos. Las inundaciones son el tipo de desastre natural más común en los Estados Unidos. El no desalojar las zonas inundadas o entrar en las aguas de inundación pueden causar lesiones o muerte.' },
    { 'titulo': 'Inundación', 'definicion': 'Las inundaciones son desbordamientos de agua temporales hacia terrenos que normalmente están secos. Las inundaciones son el tipo de desastre natural más común en los Estados Unidos. El no desalojar las zonas inundadas o entrar en las aguas de inundación pueden causar lesiones o muerte.' },
    { 'titulo': 'Inundación', 'definicion': 'Las inundaciones son desbordamientos de agua temporales hacia terrenos que normalmente están secos. Las inundaciones son el tipo de desastre natural más común en los Estados Unidos. El no desalojar las zonas inundadas o entrar en las aguas de inundación pueden causar lesiones o muerte.' },
    { 'titulo': 'Inundación', 'definicion': 'Las inundaciones son desbordamientos de agua temporales hacia terrenos que normalmente están secos. Las inundaciones son el tipo de desastre natural más común en los Estados Unidos. El no desalojar las zonas inundadas o entrar en las aguas de inundación pueden causar lesiones o muerte.' },
    { 'titulo': 'Inundación', 'definicion': 'Las inundaciones son desbordamientos de agua temporales hacia terrenos que normalmente están secos. Las inundaciones son el tipo de desastre natural más común en los Estados Unidos. El no desalojar las zonas inundadas o entrar en las aguas de inundación pueden causar lesiones o muerte.' },
    { 'titulo': 'Inundación', 'definicion': 'Las inundaciones son desbordamientos de agua temporales hacia terrenos que normalmente están secos. Las inundaciones son el tipo de desastre natural más común en los Estados Unidos. El no desalojar las zonas inundadas o entrar en las aguas de inundación pueden causar lesiones o muerte.' },
]

export default function Glosario() {
    return (
        <SeccionComplementaria
            titulo="Glosario"
            icono={<ImportContactsIcon sx={{ mr: espacioIconos, fontSize: 30 }}/>}
            contenido={
                /* Algunas palabras hardcodeadas a modo de ejemplo */
                palabras.map(p =>
                    <Box class="item-seccion-texto">
                        <Typography class="titulo-item-seccion-texto" variant="h3">
                            {p.titulo}
                        </Typography>
                        <Typography class="contenido-item-seccion-texto" variant="body1">
                            {p.definicion}
                        </Typography>
                    </Box>
                )
            }
        />
    )
}