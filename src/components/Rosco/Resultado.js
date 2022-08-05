import { useTheme } from "@emotion/react";
import { cloneElement, useEffect, useState } from 'react'
import { Grid, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import { useLocation } from "react-router-dom";
import BotonesFlotantes from "../BotonesFlotantes";
import Header from "../Header";
import Recapitulacion from "./Recapitulacion";
import RoscoFinalizado from "./RoscoFinalizado";
import SeccionComplementaria from "../SeccionesComplementarias/SeccionComplementariaNuevo";

import cargarSeccionesComplementarias from "../../helpers/cargarSeccionesComplementarias";


const offsetScroll = -70;


export default function ResultadoNuevo(props) {

    const location = useLocation();

    const theme = useTheme();
    const esMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const resultados = location.state;

    const secciones = cargarSeccionesComplementarias();

    const window = document.querySelector('.scrollbarCustom');


    // Render logical para las secciones complementarias y rosco
    const [showSeccionComplementaria, setShowSeccionComplementaria] = useState(false);
    const [seccionComplementariaActual, setSeccionComplementariaActual] = useState(null);

    const chequearResultado = () => {
        return (resultados.respuestasCorrectas === resultados.palabras.length)
    }

    const gano = chequearResultado();

    /* Renders de las secciones complementarias */
    const renderSeccionComplementaria = (seccionComplementaria) => {
        setSeccionComplementariaActual(seccionComplementaria);
        setShowSeccionComplementaria(true);
    }

    const mostrarEnGlosario = (p) => {
        const newGlosario = secciones[1];
        newGlosario.componente = cloneElement(secciones[1].componente, {revelar: true});
        setSeccionComplementariaActual(newGlosario);
        setShowSeccionComplementaria(true);
        setTimeout(() => {
            const el = document.getElementById(p.palabra);
            scrollWithOffset(el)
        }, 700)
    }

    const scrollWithOffset = (el) => {
        const elementPosition = el.offsetTop - offsetScroll;
        document.querySelector('.scrollbarCustom').scroll({
            top: elementPosition,
            left: 0,
            behavior: 'smooth'
        });
    }

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
                    lg: 0
                }
            }}
        >

            {!showSeccionComplementaria ? <>

                <Header
                    renderSeccionComplementaria={renderSeccionComplementaria}
                />

                {!esMobile ? (
                    <>
                        <BotonesFlotantes
                            renderSeccionComplementaria={renderSeccionComplementaria}
                        />

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
                                    p: 2,
                                    maxHeight: 'inherit',
                                    borderTop: 10,
                                    borderBottom: 10,
                                    borderColor: gano ? 'success.main' : 'error.main',
                                    color: 'textoPaper.main',
                                    overflow: 'auto'
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
                                    border: theme.modoContrasteActivado && '3px solid #fff'
                                }}
                            >
                                <Recapitulacion
                                    palabras={resultados.palabras}
                                    mostrarEnGlosario={mostrarEnGlosario}
                                    glosario={secciones[1]}
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
                                mb: 2,
                                border: theme.modoContrasteActivado && '3px solid #fff'
                            }}
                        >
                            <Recapitulacion
                                palabras={resultados.palabras}
                                mostrarEnGlosario={mostrarEnGlosario}
                                glosario={secciones[1]}
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
                )}
            </> : <>
                {/* Secciones complementarias */}
                <SeccionComplementaria
                    seccionComplementaria={seccionComplementariaActual}
                    renderSeccionComplementaria={renderSeccionComplementaria}
                    irAtras={() => setShowSeccionComplementaria(false)}
                />
            </>

            }
        </Container>
    )
}