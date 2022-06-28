import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Letra from "../Rosco/Letra";

export default function ModalPausa(props) {

    const abierto = props.abierto;
    const cerrar = props.cerrar;
    const palabra = props.palabra;

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
                        ¡Pausa!
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            textTransform: 'none',
                            fontWeight: 600,
                            lineHeight: 1
                        }}>
                        Te esperamos. Cuando estés listo hacé click en el botón para continuar.
                    </Typography>
                </Box>
                <Box
                    p={3}
                >
                    <Typography variant="body1">
                        Ahora toca una palabra que <br />
                        <span style={{ textTransform: 'uppercase' }}>{palabra.formato}</span>
                    </Typography>
                    {/* Letra */}
                    <Box my={2}><b><Letra palabra={palabra} /></b></Box>

                    <Button
                        variant="contained"
                        onClick={cerrar}
                        color="primary"
                    >
                        Continuar
                    </Button>
                </Box>
            </Box>
        </Dialog>
    )
}