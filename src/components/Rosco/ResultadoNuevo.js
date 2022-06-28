import { Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BotonesFlotantes from "../BotonesFlotantes";
import Header from "../Header";
import Letra from "./Letra";
import Letras from "./Letras";
import Recapitulacion from "./Recapitulacion";
import Rosco from "./Rosco";
import RoscoFinalizado from "./RoscoFinalizado";


export default function ResultadoNuevo(props) {

    const location = useLocation();

    const resultados = location.state;

    const chequearResultado = () => {
        return (resultados.respuestasCorrectas === resultados.palabras.length)
    }

    const gano = chequearResultado();

    return (
        <>
            <BotonesFlotantes />
            <Container
                maxWidth={false}
                sx={{
                    backgroundColor: "backgroundGeneral",
                    minHeight: '100vh',
                }}
            >
                <Header />

                <Grid
                    container
                    sx={{
                        bgcolor: "backgroundPaper.main",
                        mt: 5,
                        mb: 0,
                        mx: 5,
                        width: 'auto',
                        maxHeight: '80vh',
                        borderRadius: 4,
                        overflow: 'hidden'
                    }}
                >

                    {/* Rosco */}
                    <Grid
                        container
                        item
                        justifyContent="center"
                        alignContent="center"
                        xs={5}
                        sx={{
                            bgcolor: "backgroundPaper.main",
                            p: 5,
                            maxHeight: 'inherit',
                            borderTop: 10,
                            borderBottom: 10,
                            borderColor: gano ? 'success.main' : 'error.main',
                            color: 'textoPaper.main'
                        }}
                    >
                        <RoscoFinalizado
                            resultados={resultados}
                        />
                    </Grid>

                    {/* Recapitulación de palabras */}
                    <Grid
                        container
                        item
                        wrap="nowrap"
                        flexDirection="column"
                        xs={7}
                        sx={{
                            bgcolor: 'primary.main',
                            maxHeight: 'inherit',
                            color: "white",
                        }}
                    >
                        <Recapitulacion
                            palabras={resultados.palabras}
                        />
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}