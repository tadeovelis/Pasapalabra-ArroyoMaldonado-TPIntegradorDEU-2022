import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import LetraModal from "../Rosco/LetraModal";

export default function ModalIncorrecto(props) {

    const abierto = props.abierto;
    const cerrar = props.cerrar;
    const palabra = props.palabra;
    const tiempoReanudacion = props.tiempoReanudacion;

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
                width: {
                    xs: '80vw',
                    sm: '450px',
                    lg: '450px'
                }
            }}>
                <Box
                    sx={{
                        backgroundColor: 'error.main',
                        color: 'white',
                        p: {
                            xs: 4,
                            sm: 3,
                            lg: 5
                        },
                    }}>
                    <Typography
                        variant="h2"
                        id="alert-dialog-title"
                        mb={2}
                        sx={{
                            textTransform: 'uppercase',
                        }}
                    >
                        ¡Incorrecto!
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            textTransform: 'none',
                            fontWeight: 600
                        }}>
                        No pasa nada, el juego sigue.
                    </Typography>
                </Box>
                <Box
                    p={3}
                    sx={{

                    }}>
                    <Typography variant="body2">
                        Ahora toca una palabra que <br/>
                        <span style={{textTransform: 'uppercase'}}>{palabra.formato}</span>
                    </Typography>
                    {/* Letra */}
                    <Box my={2}><b><LetraModal palabra={palabra} /></b></Box>
                    <Typography variant="body1">Seguimos en <b>{tiempoReanudacion}</b>...</Typography>
                </Box>
            </Box>
        </Dialog>
    )
}