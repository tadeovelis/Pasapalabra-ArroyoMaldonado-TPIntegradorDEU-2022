import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Letra from "../Rosco/Letra";

export default function ModalIncorrecto(props) {

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
                        background: 'linear-gradient(to right, #D8513F, #D13722)',
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
                        ¡Incorrecto!
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            textTransform: 'none',
                            fontSize: 17,
                            fontWeight: 300
                        }}>
                        No pasa nada, el juego sigue.
                    </Typography>
                </Box>
                <Box
                    p={3}
                    sx={{

                    }}>
                    <p>
                        Ahora toca una palabra que <br/>
                        <span style={{textTransform: 'uppercase'}}>{palabra.formato}</span>
                    </p>
                    {/* Letra */}
                    <b><Letra palabra={palabra} /></b>
                    <p>Seguimos en 3...</p>
                </Box>
            </Box>
        </Dialog>
    )
}