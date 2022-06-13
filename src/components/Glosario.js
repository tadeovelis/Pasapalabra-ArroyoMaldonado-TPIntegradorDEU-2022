import { Container } from "@mui/system"
import {BotonesFlotantes} from "./BotonesFlotantes"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import PalabrasGlosario from "./PalabrasGlosario"


export default function Glosario() {
    return (
        <div>
            <BotonesFlotantes texto = 'Atrás' />
            <Container class="contenedor-general-seccion-texto">
                <Box class="header-seccion-texto">
                    <Typography variant="h1" color="white"
                        sx={{
                            textAlign: 'left',
                            textTransform: 'uppercase'
                        }}
                    >
                        Glosario
                    </Typography>
                </Box>
                <PalabrasGlosario />
            </Container>
        </div>
    )
}