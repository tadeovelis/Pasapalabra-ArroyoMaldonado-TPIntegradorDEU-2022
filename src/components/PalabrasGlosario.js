import { Box } from "@mui/system"
import { Typography } from "@mui/material"


const palabras = [
    { 'titulo': 'Inundación', 'definicion': 'Las inundaciones son desbordamientos de agua temporales hacia terrenos que normalmente están secos. Las inundaciones son el tipo de desastre natural más común en los Estados Unidos. El no desalojar las zonas inundadas o entrar en las aguas de inundación pueden causar lesiones o muerte.' },
    { 'titulo': 'Inundación', 'definicion': 'Las inundaciones son desbordamientos de agua temporales hacia terrenos que normalmente están secos. Las inundaciones son el tipo de desastre natural más común en los Estados Unidos. El no desalojar las zonas inundadas o entrar en las aguas de inundación pueden causar lesiones o muerte.' },
    { 'titulo': 'Inundación', 'definicion': 'Las inundaciones son desbordamientos de agua temporales hacia terrenos que normalmente están secos. Las inundaciones son el tipo de desastre natural más común en los Estados Unidos. El no desalojar las zonas inundadas o entrar en las aguas de inundación pueden causar lesiones o muerte.' },
    { 'titulo': 'Inundación', 'definicion': 'Las inundaciones son desbordamientos de agua temporales hacia terrenos que normalmente están secos. Las inundaciones son el tipo de desastre natural más común en los Estados Unidos. El no desalojar las zonas inundadas o entrar en las aguas de inundación pueden causar lesiones o muerte.' },
    { 'titulo': 'Inundación', 'definicion': 'Las inundaciones son desbordamientos de agua temporales hacia terrenos que normalmente están secos. Las inundaciones son el tipo de desastre natural más común en los Estados Unidos. El no desalojar las zonas inundadas o entrar en las aguas de inundación pueden causar lesiones o muerte.' },
    { 'titulo': 'Inundación', 'definicion': 'Las inundaciones son desbordamientos de agua temporales hacia terrenos que normalmente están secos. Las inundaciones son el tipo de desastre natural más común en los Estados Unidos. El no desalojar las zonas inundadas o entrar en las aguas de inundación pueden causar lesiones o muerte.' },
]

export default function PalabrasGlosario() {
    return (
        <Box class="contenedor-seccion-texto">

            {/* Algunas palabras hardcodeadas a modo de ejemplo */}
            {palabras.map(p =>
                <Box class="palabra-glosario">
                    <Typography class="titulo-palabra-glosario" variant="h3">
                        {p.titulo}
                    </Typography>
                    <Typography class="definicion-palabra-glosario" variant="body1">
                        {p.definicion}
                    </Typography>
                </Box>
            )}
        </Box>
    )
}