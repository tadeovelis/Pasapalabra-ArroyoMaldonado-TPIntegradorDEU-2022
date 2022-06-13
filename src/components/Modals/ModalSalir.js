import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Letra from "../Rosco/Letra";

export default function ModalSalir(props) {

    const abierto = props.abierto;
    const cerrar = props.cerrar;
    const palabra = props.palabra;

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
                        backgroundColor: 'error.main',
                        color: 'white',
                    }}>
                    <Typography
                        variant="h2"
                        id="alert-dialog-title"
                        mb={2}
                        sx={{
                            fontSize: 30,
                            textTransform: 'uppercase',
                        }}
                    >
                        ¿Estás seguro?
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            textTransform: 'none',
                            fontSize: 17,
                            fontWeight: 300,
                            lineHeight: 1
                        }}>
                        Si querés terminar el rosco hacé click en "Salir". ¡Se pierde el progreso actual!
                    </Typography>
                </Box>
                <Grid
                    container
                    justifyContent="center"
                    spacing={4}
                    p={3}
                >
                    <Grid item>
                        <Button variant="contained" color="error" onClick={() => alert("Todavía no implementado")}>Salir</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="negro" onClick={cerrar}>No salir</Button>
                    </Grid>
                </Grid>
            </Box>
        </Dialog>
    )
}