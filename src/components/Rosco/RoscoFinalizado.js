import { Button, Typography } from "@mui/material"
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

    return (
        <div>
            <Letras
                palabras={palabras}
            />
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
            <Typography variant="body2" gutterBottom>
                Respondiste <b>{respuestasCorrectas}</b> de {palabras.length} palabras correctamente
            </Typography>
            <Typography variant="body2" gutterBottom>
                Tiempo restante: <b>{tiempoRestante}</b>
            </Typography>
        </div>
    )
}