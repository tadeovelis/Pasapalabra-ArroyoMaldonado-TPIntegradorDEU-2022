import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Letra from "../Rosco/Letra";
import { Link } from "react-router-dom";

export default function ModalPasapalabra(props) {

    const abierto = props.abierto;
    const cerrar = props.cerrar;
    const palabra = props.palabra;
    const respuestasCorrectas = props.respuestasCorrectas;

    return (
        <Dialog
            open={abierto}
            onClose={cerrar}
            aria-labelledby="titulo-dialog"
            PaperProps={{ sx: { borderRadius: 8 } }}
        >
            <Box
                sx={{
                    textAlign: 'center',
                    minWidth: '450px',
                    maxWidth: '450px'
                }}>
                <Box
                    p={5}
                    sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                    }}>
                    <Typography
                        id="titulo-dialog"
                        variant="h2"
                        mb={2}
                        sx={{
                            textTransform: 'uppercase',
                        }}
                    >
                        ¡Se acabó el tiempo!
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            textTransform: 'none',
                            fontWeight: 600,
                            lineHeight: 1
                        }}>
                        ¡Bien jugado! Vamos a ver los resultados.
                    </Typography>
                </Box>
                <Box
                    p={3}
                    sx={{

                    }}>
                    <Grid
                        container
                        justifyContent="center"
                        spacing={4}
                        p={3}
                    >
                        <Grid item>
                            <Button
                                variant="outlined"
                                color="negro"
                                onClick={() => props.irALosResultados()}
                            >
                                Ver los resultados
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button component={Link} to="/" variant="contained" color="error">Salir</Button>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </Dialog>
    )
}