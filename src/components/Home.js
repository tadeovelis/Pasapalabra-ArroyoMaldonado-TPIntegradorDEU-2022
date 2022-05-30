import { Button, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { Box } from "@mui/system"
import { Grid } from "@mui/material"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <Box
            p={10}
        >
            <Typography
                variant="h3"
                component="h1"
            >
                ¡Bienvenido al pasapalabras del Arroyo Maldonado!
            </Typography>
            <Grid
                mt={5}
                container
                spacing={2}
                direction="column"
            >
                <Grid item>
                    <Button
                        variant="contained"
                        component={Link}
                        to="/rosco"
                    >
                        Jugar
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        component={Link}
                        to="/como-jugar"
                    >
                        Cómo jugar
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        component={Link}
                        to="/glosario"
                    >
                        Glosario
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        component={Link}
                        to="/acerca-de-la-app"
                    >
                        Acerca de la app
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        component={Link}
                        to="/configuracion"
                    >
                        Configuración
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}