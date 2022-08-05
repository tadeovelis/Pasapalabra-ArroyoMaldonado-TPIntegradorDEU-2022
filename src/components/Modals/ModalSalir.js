import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export default function ModalSalir(props) {

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
                        backgroundColor: 'error.main',
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
                        <Button variant="contained" color="error" component={Link} to="/">Salir</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="negro" onClick={cerrar}>No salir</Button>
                    </Grid>
                </Grid>
            </Box>
        </Dialog>
    )
}