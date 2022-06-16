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
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
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
                        backgroundColor: 'green',
                        color: 'white',
                    }}>
                    <Typography
                        variant="h2"
                        id="alert-dialog-title"
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
                        ¡Bien jugado! Veamos los resultados.
                    </Typography>
                </Box>
                <Box
                    p={3}
                    sx={{

                    }}>
                    {/* Letra */}
                    <Typography variant="body1">
                        Cantidad de palabras que acertaste:  <br />

                    </Typography><Box my={2}><b>{respuestasCorrectas}</b></Box>
                    <Typography variant="body1">¿Quéres volver a jugar?</Typography>
                    <Grid
                        container
                        justifyContent="center"
                        spacing={4}
                        p={3}
                    >

                        <Grid item>
                            <Link to="/" style = {{ textDecoration: 'none' }}>
                            <Button variant="contained" color="error">Salir</Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="negro" onClick={() => window.location.reload(false)} >Volver a jugar</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Dialog>
    )
}