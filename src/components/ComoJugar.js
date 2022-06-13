import { Container } from "@mui/system"
import {BotonesFlotantes} from "./BotonesFlotantes"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"

export default function ComoJugar() {
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
                        ¿Cómo jugar?
                    </Typography>
                </Box>
                <Box class="contenedor-seccion-texto">

                </Box>
            </Container>
        </div>
    )
}