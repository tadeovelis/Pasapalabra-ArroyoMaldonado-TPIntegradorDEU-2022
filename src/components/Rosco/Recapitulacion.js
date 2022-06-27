import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BoxItemSeccionComplementaria from '../SeccionesComplementarias/BoxItemSeccionComplementaria'
import Letra from "./Letra";

export default function Recapitulacion(props) {

    const palabras = props.palabras;

    return (
        <>
            <Grid item>
                <Box
                    sx={{
                        p: 4,
                        top: 0,
                        zIndex: 99,
                        backgroundColor: 'primary.medio',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25);',
                    }}
                >
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <Typography variant="h1"
                                sx={{
                                    textAlign: 'left',
                                    textTransform: 'uppercase'
                                }}
                            >
                                Terminó el juego
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2"
                                sx={{
                                    textAlign: 'left',
                                }}
                            >
                                Vamos a repasar el rosco que jugaste...
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

            <Grid
                className="scrollbarCustom"
                item
                sx={{
                    overflowY: 'scroll',
                    p: 4
                }}
            >
                {palabras.map(p => {
                    return (
                        <BoxItemSeccionComplementaria
                            key={p.letra}
                            titulo={
                                <>
                                    <Letra palabra={p} />
                                    <span>{p.palabra}</span>
                                </>
                            }
                            contenido={
                                p.definicion
                            }
                        />
                    )
                })}
            </Grid>

            {/*
            <Grid
                item
                sx={{
                    overflowY: 'scroll',
                    
                }}
            >
                {palabras.map(p => {
                    return (
                        <BoxItemSeccionComplementaria
                            titulo={p.palabra}
                            contenido={
                                p.definicion
                            }
                        />
                    )
                })}
            </Grid>
            */}
        </>

    )

}