import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Letra from "../Rosco/Letra";

export default function ModalPasapalabra(props) {

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
                        backgroundColor: 'pasapalabra.main',
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
                        ¡Pasapalabra!
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            textTransform: 'none',
                            fontWeight: 600,
                            lineHeight: 1
                        }}>
                        Bien, mejor no arriesgar. Recordá la definición para después.
                    </Typography>
                </Box>
                <Box
                    p={3}
                    sx={{

                    }}>
                    <Typography variant="body1">
                        Ahora toca una palabra que <br/>
                        <span style={{textTransform: 'uppercase'}}>{palabra.formato}</span>
                    </Typography>
                    {/* Letra */}
                    <Box my={2}><b><Letra palabra={palabra} /></b></Box>
                    <Typography variant="body1">Seguimos en 3...</Typography>
                </Box>
            </Box>
        </Dialog>
    )
}