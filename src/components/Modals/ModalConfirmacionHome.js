import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ModalConfirmacionHome(props) {

    const abierto = props.abierto;
    const cerrar = props.cerrar;

    return (
        <Dialog
            open={abierto}
            onClose={cerrar}
            aria-labelledby="titulo-dialog"
            aria-describedby="descripcion-dialog"
            PaperProps={{ sx: { borderRadius: 8 } }}
        >
            <Box
                sx={{
                    textAlign: 'center',
                    width: {
                        xs: '80vw',
                        sm: '450px',
                        lg: '450px'
                    }
                }}>
                <Box
                    sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        p: {
                            xs: 4,
                            sm: 3,
                            lg: 5
                        },
                    }}>
                    <Typography
                        id="titulo-dialog"
                        variant="h2"
                        mb={2}
                        sx={{
                            textTransform: 'uppercase',
                        }}
                    >
                        ¿Estás seguro de salir?
                    </Typography>
                    <Typography
                        id="descripcion-dialog"
                        variant="body2"
                        sx={{
                            textTransform: 'none',
                            fontWeight: 600,
                            lineHeight: 1
                        }}>
                        Ir al home implica abandonar la partida (se pierde el progreso actual).
                    </Typography>
                </Box>
                <Grid
                    container
                    justifyContent="center"
                    spacing={4}
                    p={3}
                >
                    <Grid item>
                        <Button variant="contained" color="primary" component={Link} to="/">Ir al home</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="negro" onClick={cerrar}>Terminar la partida</Button>
                    </Grid>
                </Grid>
            </Box>
        </Dialog>
    )
}