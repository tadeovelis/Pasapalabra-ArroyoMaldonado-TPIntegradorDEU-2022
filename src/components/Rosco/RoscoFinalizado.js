import { useTheme } from "@emotion/react"
import { Button, Typography, Box, useMediaQuery, Grid } from "@mui/material"
import { Link } from "react-router-dom"
import Letras from "./Letras"
import configuracionPredeterminada from '../../data/configuracion.json'


export default function RoscoFinalizado(props) {

    const palabras = props.resultados.palabras;
    const respuestasCorrectas = props.resultados.respuestasCorrectas;
    const respuestasIncorrectas = props.resultados.respuestasIncorrectas;
    const tiempoRestante = props.resultados.tiempoRestante;
    const gano = props.gano;

    const theme = useTheme();
    const esMobile = useMediaQuery(theme.breakpoints.down('lg'));

    //const sizeRosco = !esMobile ? 330 : 250; // en pixeles
    const sizeRosco = !esMobile ? configuracionPredeterminada.tamañoRosco.enResultado.desktop : configuracionPredeterminada.tamañoRosco.enResultado.mobile;

    return (
        <>
            <Grid item xs={12} sx={{mt: 3, mb: 4}}>
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
                    component={Link}
                    to="/preparacion"
                >
                    ¡Jugar otro!
                </Button>
            </Grid>
            <Grid item xs={12}
                sx={{
                    position: "relative",
                    height: sizeRosco + 'px',
                    justifyContent: 'center',
                    top: 10,
                    mb: 7
                }}>
                <Letras
                    palabras={palabras}
                    sizeRosco={sizeRosco}
                    usarPixeles={true}
                    roscoEnResultado={true}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        width: '40%',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <Typography variant="body2" gutterBottom
                        sx={{
                            lineHeight: 1.2
                        }}
                    >
                        Respondiste <b>{respuestasCorrectas}</b> de {palabras.length} palabras correctamente
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Tiempo restante: <b>{tiempoRestante}</b>
                    </Typography>
                </Box>
            </Grid>
        </>
    )
}