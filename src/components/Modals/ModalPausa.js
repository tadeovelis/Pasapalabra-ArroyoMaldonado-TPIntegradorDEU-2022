import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import LetraModal from "../Rosco/LetraModal";

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
                    <Typography variant="body2">
                        Ahora toca una palabra que <br />
                        <span style={{ textTransform: 'uppercase' }}>{palabra.formato}</span>
                    </Typography>
                    {/* Letra */}
                    <Box my={2}><b><LetraModal palabra={palabra} /></b></Box>

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