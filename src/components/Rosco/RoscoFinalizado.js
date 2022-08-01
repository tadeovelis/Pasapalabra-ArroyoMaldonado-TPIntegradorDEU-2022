import { useTheme } from "@emotion/react"
import { Button, Typography, Box, useMediaQuery, Grid } from "@mui/material"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import InputUsuario from "./InputUsuario"
import Letras from "./Letras"
import PalabraActual from "./PalabraActual"

export default function RoscoFinalizado(props) {

    const palabras = props.resultados.palabras;
    const respuestasCorrectas = props.resultados.respuestasCorrectas;
    const respuestasIncorrectas = props.resultados.respuestasIncorrectas;
    const tiempoRestante = props.resultados.tiempoRestante;
    const gano = props.gano;

    const theme = useTheme();
    const esMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const sizeRosco = !esMobile ? 330 : 250; // en pixeles

    return (
        <div>
            <Grid
                sx={{
                    position: "relative",
                    height: sizeRosco+30 + 'px',
                    justifyContent: 'center',
                    mb: 3
                }}>
                <Letras
                    palabras={palabras}
                    sizeRosco={sizeRosco}
                    roscoEnResultado={true}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '65%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                    <Typography
                        variant="h3"
                        color={gano ? 'success.main' : 'error.main'}
                        gutterBottom
                    >
                        {gano ? '¡Felicitaciones!' : '¡Casi!'}
                    </Typography>
                    <Typography
                        variant="body2"
                        gutterBottom
                    >
                        {gano ? '¡Intentá ganar otro más!' : 'No te rindas, intentá de vuelta'}
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            mb: 3
                        }}
                        component={Link}
                        to="/preparacion"
                    >
                        ¡Jugar otro!
                    </Button>
                </Box>
            </Grid>
            <Grid>
                <Typography variant="body2" gutterBottom>
                    Respondiste <b>{respuestasCorrectas}</b> de {palabras.length} palabras correctamente
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Tiempo restante: <b>{tiempoRestante}</b>
                </Typography>
            </Grid>
        </div>
    )
}