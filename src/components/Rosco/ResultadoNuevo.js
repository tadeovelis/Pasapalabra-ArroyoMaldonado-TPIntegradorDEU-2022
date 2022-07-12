import { useTheme } from "@emotion/react";
import { Grid, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import { useLocation } from "react-router-dom";
import BotonesFlotantes from "../BotonesFlotantes";
import Header from "../Header";
import Recapitulacion from "./Recapitulacion";
import RoscoFinalizado from "./RoscoFinalizado";


export default function ResultadoNuevo(props) {

    const location = useLocation();

    const theme = useTheme();
    const esMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const resultados = location.state;

    const chequearResultado = () => {
        return (resultados.respuestasCorrectas === resultados.palabras.length)
    }

    const gano = chequearResultado();

    return (
        <Container
            maxWidth={false}
            sx={{
                backgroundColor: "backgroundGeneral",
                minHeight: '100vh',
                px: {
                    xs: 0,
                    sm: 0,
                    lg: 1
                },
                pt: {
                    xs: 2,
                    sm: 2,
                    lg: 3
                }
            }}
        >
            <Header />

            {!esMobile ? (
                <>
                    <BotonesFlotantes />

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
                                gano={gano}
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
                </>

            ) : (
                <>
                    {/* Recapitulación de palabras */}
                    <Grid
                        container
                        item
                        wrap="nowrap"
                        flexDirection="column"
                        xs={12}
                        sx={{
                            bgcolor: 'primary.main',
                            maxHeight: '50vh',
                            color: "white",
                            mb: 2
                        }}
                    >
                        <Recapitulacion
                            palabras={resultados.palabras}
                        />
                    </Grid>

                    {/* Rosco */}
                    <Grid
                        container
                        item
                        justifyContent="center"
                        alignContent="center"
                        xs={12}
                        sx={{
                            bgcolor: "backgroundPaper.main",
                            p: 5,
                            maxHeight: 'inherit',
                            border: 10,
                            borderColor: gano ? 'success.main' : 'error.main',
                            color: 'textoPaper.main'
                        }}
                    >
                        <RoscoFinalizado
                            resultados={resultados}
                            gano={gano}
                        />
                    </Grid>
                </>
            )
            }
        </Container>
    )
}