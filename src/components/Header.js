import { Box } from "@mui/system"
import { Grid } from "@mui/material"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div>
            <Grid container spacing={5} justifyContent="center">
                <Grid
                    item
                >
                    <Button
                        component={Link}
                        variant="contained"
                        to="/como-jugar"
                    >
                        ¿Cómo jugar?
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        component={Link}
                        variant="contained"
                        to="/glosario"
                    >
                        Glosario
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        component={Link}
                        variant="contained"
                        to="/acerca-de-la-app"
                    >
                        Acerca de la app
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}