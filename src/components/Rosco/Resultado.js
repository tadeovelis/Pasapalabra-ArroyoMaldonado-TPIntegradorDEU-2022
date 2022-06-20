import { Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BotonesFlotantes from "../BotonesFlotantes";
import Header from "../Header";
import Letra from "./Letra";
import Letras from "./Letras";


export default function Resultado(props) {

    const location = useLocation();

    const resultados = location.state;

    return (
        <>
            <BotonesFlotantes />
            <Container maxWidth={false}
                sx={{
                    background: "backgroundGeneral.main",
                    minHeight: '100vh',
                    margin: 0
                }}
            >
                <Header />
                <Paper
                    sx={{
                        marginX: 5,
                        mt: 5,
                        mb: 0,
                        p: 10,
                        bgcolor: "backgroundPaper.main",
                        color: "textoPaper.main",
                    }}
                >
                    <Typography variant="h1" mb={5} sx={{fontStyle: 'italic'}}>Sección en desarrollo</Typography>

                    <Typography variant="h2" gutterBottom>
                        {resultados.respuestasIncorrectas === 0 ? "¡Ganaste!" : "¡Casi!"}
                    </Typography>

                    <Letras palabras={resultados.palabras} />

                    <Typography variant="body2" gutterBottom>
                        Respondiste <b>{resultados.respuestasCorrectas}</b> de {resultados.palabras.length} palabras correctamente
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        <b>Tiempo restante:</b> {resultados.tiempoRestante} segundos
                    </Typography>

                    <br></br>

                    <Typography variant="h3">
                        Vamos a repasar el rosco...
                    </Typography>
                    <br></br>

                    <Grid container>
                        {resultados.palabras.map(p => {
                            return (
                                <Grid item container justifyContent="center" mb={2}>
                                    <Grid item container justifyContent="center" spacing={2} alignItems="center">
                                        <Grid item><Typography variant="h3" color={p.estado === 1 ? "success.main" : "error"}>{p.letra}</Typography></Grid>
                                        <Grid item><Typography variant="h4" color={p.estado === 1 ? "success.main" : "error"}>{p.palabra}</Typography></Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" color={p.estado === 1 ? "success.main" : "error"}>
                                            {p.definicion}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Paper>
            </Container>
        </>
    )
}