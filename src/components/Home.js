import { Button, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { Box } from "@mui/system"
import { Grid } from "@mui/material"
import { Link } from "react-router-dom"

import mapa from '../img/Mapa.png'
import BotonHome from "./BotonHome"
import BotonConfiguracion from "./BotonConfiguracion"


export default function Home() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: `linear-gradient(0deg, rgba(6, 30, 52, 0.88), rgba(6, 30, 52, 0.88)), url(${mapa})`,
                p: 10,
                mx: '-7vw',
                mb: '-30px',
            }}
        >
            <Typography
                variant="h3"
                component="h1"
                color="primary.contrastText"
                sx={{
                    letterSpacing: 8,
                    fontWeight: 800
                }}
            >
                <span style={{ fontSize: '.7em' }}>¡Bienvenido al </span>
                <span>pasapalabras </span><span style={{ fontSize: '.7em' }}>del </span><br />
                <span style={{ fontSize: '1.5em' }}>Arroyo Maldonado</span>
                <span>!</span>
            </Typography>
            <Typography
                variant="h4"
                component="p"
                color="primary.contrastText"
                sx={{
                    fontSize: '1.2em',
                    mt: 2,
                    letterSpacing: 2,
                    maxWidth: '40vw',
                    mx: 'auto'
                }}
            >
                Juego educativo en el marco de difusión de las inundaciones de la zona del Arroyo Maldonado
            </Typography>
            <Grid
                mt={3}
                container
                spacing={2}
                direction="column"
            >
                <Grid item>
                    <BotonHome texto="Jugar" ruta="/preparacion" />
                </Grid>
                <Grid item>
                    <BotonHome texto="¿Cómo jugar?" ruta="/como-jugar" />
                </Grid>
                <Grid item>
                    <BotonHome texto="Glosario" ruta="/glosario" />
                </Grid>
                <Grid item>
                    <BotonHome texto="Acerca del juego" ruta="/acerca-de-la-app" />
                </Grid>
                <Grid item>
                    <BotonConfiguracion />
                </Grid>
            </Grid>
        </Box>
    )
}