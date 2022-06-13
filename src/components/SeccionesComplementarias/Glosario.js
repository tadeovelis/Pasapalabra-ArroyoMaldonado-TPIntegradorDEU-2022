import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import SeccionComplementaria from "./SeccionComplementaria"

import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import BoxItemSeccionComplementaria from "./BoxItemSeccionComplementaria"

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
                    <BoxItemSeccionComplementaria
                        titulo={p.titulo}
                        contenido={p.definicion}
                    />
                )
            }
        />
    )
}