import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import BotonesFlotantes from "./BotonesFlotantes";
import HeaderAbajo from "./HeaderAbajo";


import '../App.css'

export default function SeccionComplementaria(props) {
    return (
        <div>
            <BotonesFlotantes />
            <Container
                sx={{
                    marginX: 10
                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'primary.main',
                        color: 'white'
                    }}
                >
                    <Box
                        sx={{
                            p: 4,
                            position: 'sticky',
                            top: 0,
                            zIndex: 99,
                            backgroundColor: 'primary.medio'
                        }}
                    >
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
                    <Box sx={{p: 4}}>
                        {props.contenido}
                    </Box>
                </Box>

                <HeaderAbajo />
            </Container>

        </div>
    )
}