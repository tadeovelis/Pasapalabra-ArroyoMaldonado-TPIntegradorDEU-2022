import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import BotonesFlotantes from "./BotonesFlotantes";
import HeaderAbajo from "./HeaderAbajo";


import '../App.css'

export default function SeccionComplementaria(props) {
    return (
        <div>
            <BotonesFlotantes />
            <Container class="contenedor-general-seccion-texto">
                <Box class="contenedor-seccion-headerytexto">
                    <Box class="header-seccion-texto">
                        <Grid container alignItems="center" direction="row">
                            <Grid item sx={{position: 'relative', top: '4px'}}>{props.icono}</Grid>
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
                    <Box class="contenedor-seccion-texto">
                        {props.contenido}
                    </Box>
                </Box>

                <HeaderAbajo />
            </Container>

        </div>
    )
}