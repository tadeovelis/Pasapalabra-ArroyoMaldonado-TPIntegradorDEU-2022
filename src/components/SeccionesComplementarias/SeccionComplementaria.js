import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import BotonesFlotantes from "../BotonesFlotantes";
import { Link } from "react-router-dom"
import HeaderAbajo from "../HeaderAbajo";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import '../../App.css'



export default function SeccionComplementaria(props) {

    const backgroundColor = (props.backgroundColor === undefined) ? 'primary.main' : props.backgroundColor;

    return (
        <div>
            {/* Botón ATRÁS */}
            <Button
                variant="contained"
                component={Link}
                aria-label="Ir atrás"
                sx={{
                    position: 'fixed',
                    fontWeight: '500',
                    left: 0,
                    top: 0,
                    mt: 10,
                    ml: 2,
                    borderRadius: 100
                }}
                to="/rosco"
            >
                <ArrowBackIosNewIcon fontSize="large" />
            </Button>
            <Container
                sx={{
                    position: 'relative',
                }}>
                <Box
                    sx={{
                        backgroundColor: backgroundColor,
                        color: 'white',
                        zIndex: 1,
                        position: 'relative',
                        pb: 2
                    }}>
                    <Box
                        sx={{
                            p: 4,
                            position: 'sticky',
                            top: 0,
                            zIndex: 99,
                            backgroundColor: 'primary.medio',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25);',
                        }}
                    >
                        <Grid container alignItems="center" direction="row">
                            <Grid item sx={{ position: 'relative', top: '4px' }}>{props.icono}</Grid>
                            <Grid item>
                                <Typography variant="h1" color="white"
                                    sx={{
                                        textAlign: 'left',
                                        textTransform: 'uppercase'
                                    }}
                                >
                                    {props.titulo}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className="scrollbarCustom" tabIndex={0}
                        sx={{
                            px: 4,
                            pt: 4,
                            maxHeight: '70vh',
                            overflowY: 'scroll',
                        }}
                    >
                        {props.contenido}
                    </Box>

                </Box>
                <HeaderAbajo />


            </Container>

        </div >
    )
}