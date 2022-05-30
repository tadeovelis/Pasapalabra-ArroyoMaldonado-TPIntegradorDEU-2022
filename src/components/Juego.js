import Paper from '@mui/material/Paper'
import Header from './Header'
import { Grid } from '@mui/material'
import Salir from './Salir'
import TiempoRestante from './TiempoRestante'
import Rosco from './Rosco/Rosco'
import Pausar from './Pausar'
import RespuestasCorrectas from './RespuestasCorrectas'
import { Container } from '@mui/system'

export default function Juego() {
    return (
        <Container maxWidth={false}
            sx={{
                background: "#08274a",
                minHeight: "100vh"
            }}
        >
            <Header />
            <Paper
                sx={{
                    m: 5,
                    p: 10
                }}
            >
                <Grid container>
                    <Grid item xs={3}>
                        <Grid item xs={6}>
                            <Salir />
                        </Grid>
                        <Grid item xs={6}>
                            <TiempoRestante />
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid item>
                            <Rosco />
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid item>
                            <Pausar />
                        </Grid>
                        <Grid item>
                            <RespuestasCorrectas />
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}