import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Grid } from "@mui/material"

import mapa from '../img/Mapa.png'
import BotonHome from "./BotonHome"
import BotonConfiguracion from "./BotonConfiguracion"
import SeccionComplementaria from "./SeccionesComplementarias/SeccionComplementariaNuevo"
import { useState } from "react"
import cargarSeccionesComplementarias from "../helpers/cargarSeccionesComplementarias"


export default function Home() {

    // Render logical para las secciones complementarias y rosco
    const [showSeccionComplementaria, setShowSeccionComplementaria] = useState(false);
    const [seccionComplementariaActual, setSeccionComplementariaActual] = useState(null);

    const secciones = cargarSeccionesComplementarias();

    /* Renders de las secciones complementarias */
    const renderSeccionComplementaria = (seccionComplementaria) => {
        setSeccionComplementariaActual(seccionComplementaria);
        setShowSeccionComplementaria(true);
    }

    return (
        <>
            {!showSeccionComplementaria ? <>
                <Box
                    sx={{
                        minHeight: '100vh',
                        background: `linear-gradient(0deg, rgba(6, 30, 52, 0.88), rgba(6, 30, 52, 0.88)), url(${mapa})`,
                        p: {
                            xs: 5,
                            sm: 6,
                            lg: 10,
                        },
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
                            fontWeight: 800,
                            mx: {
                                xs: 0,
                                sm: 10,
                                lg: 25
                            }
                        }}
                    >
                        <span style={{ fontSize: '50%' }}>¡Bienvenido al </span>
                        <span>pasapalabras </span><span style={{ fontSize: '50%' }}>del </span>
                        <span style={{ fontSize: '150%' }}>Arroyo Maldonado</span>
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
                            maxWidth: {
                                sm: '60vw',
                                lg: '40vw',
                            },
                            mx: 'auto'
                        }}
                    >
                        Juego educativo en el marco de difusión de las inundaciones de la zona del Arroyo Maldonado
                    </Typography>
                    <Grid
                        container
                        spacing={2}
                        direction="column"
                        sx={{
                            mt: 3,
                            px: {
                                xs: '8vw',
                                sm: '20vw',
                                lg: '30vw'
                            },
                        }}
                    >

                        <Grid item>
                            <BotonHome texto="Jugar" ruta="/preparacion" />
                        </Grid>

                        {secciones.map(sc =>
                            <Grid item>
                                <BotonHome
                                    texto={sc.titulo}
                                    renderSeccionComplementaria={() => renderSeccionComplementaria(sc)}
                                />
                            </Grid>
                        )}

                        <Grid item>
                            <BotonConfiguracion />
                        </Grid>
                    </Grid>
                </Box>
            </>

                : <>
                    {/* Secciones complementarias */}
                    <SeccionComplementaria
                        seccionComplementaria={seccionComplementariaActual}
                        renderSeccionComplementaria={renderSeccionComplementaria}
                        irAtras={() => setShowSeccionComplementaria(false)}
                    />
                </>
            }
        </>
    )
}