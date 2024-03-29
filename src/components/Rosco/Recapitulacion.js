import { Button, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BoxItemSeccionComplementaria from '../SeccionesComplementarias/BoxItemSeccionComplementaria'
import LetraRecapitulacion from "./LetraRecapitulacion";

import { getIcon } from '../../helpers/estadoDePalabra';
import { useTheme } from "@emotion/react";
import { cloneElement } from "react";

export default function Recapitulacion(props) {

    const theme = useTheme();

    const glosario = props.glosario;

    const palabras = props.palabras;

    return (
        <>
            <Grid item>
                <Box
                    sx={{
                        pl: 4,
                        pr: {
                            xs: 7,
                            sm: 2,
                            lg: 4
                        },
                        py: {
                            xs: 2,
                            sm: 2,
                            lg: 4
                        },
                        top: 0,
                        zIndex: 99,
                        backgroundColor: 'primary.medio',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25);',
                        borderBottom: theme.modoContrasteActivado && '3px solid #fff'
                    }}
                >
                    <Grid container direction="column" spacing={{ xs: 0, sm: 0, lg: 1 }}>
                        <Grid item>
                            <Typography variant="h1"
                                sx={{
                                    textAlign: 'left',
                                    textTransform: 'uppercase'
                                }}
                            >
                                ¡Terminó el juego!
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
                    p: 4,
                    mb: 2
                }}
            >
                {palabras.map(p =>
                    <Grid container mb={4} spacing={1}>
                        <Grid container item
                            justifyContent="left"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid item>{getIcon(p.estado)}</Grid>
                            <Grid item><LetraRecapitulacion palabra={p} /></Grid>
                            <Grid item>
                                <Typography
                                    variant='h3'
                                    sx={{
                                        textTransform: 'uppercase',
                                        mt: 0
                                    }}
                                >{p.palabra}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Tooltip
                                    title={
                                        <Typography
                                            sx={{
                                                fontSize: '2em'
                                            }}
                                        >
                                            Ver en glosario
                                        </Typography>
                                    }
                                    placement="right"
                                    arrow
                                >
                                    <IconButton
                                        component="span"
                                        size="medium"
                                        sx={{
                                            p: 1.3,
                                            m: 0,
                                            color: 'primary.contrastText',
                                            '&:hover': {
                                                bgcolor: 'primary.oscuro'
                                            },
                                        }}
                                        onClick={() => props.mostrarEnGlosario(p)}
                                    >
                                        {cloneElement(glosario.icono, {sx: {m: 0}})}
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="body1"
                                sx={{
                                    lineHeight: 1.2,
                                    m: 0,
                                    textAlign: "left"
                                }}
                            >
                                {p.definicion}
                            </Typography>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </>
    )

}