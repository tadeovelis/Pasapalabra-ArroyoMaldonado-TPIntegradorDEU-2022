import Paper from '@mui/material/Paper'
import Header from './Header'
import { Grid } from '@mui/material'
import Salir from './Salir'
import TiempoRestante from './TiempoRestante'
import Rosco from './Rosco/Rosco'
import Pausar from './Pausar'
import RespuestasCorrectas from './RespuestasCorrectas'
import { Container } from '@mui/system'
import { useEffect, useState } from 'react'
import data from '../data/palabras.json'


/* Estados palabras/letras

0: no respondió
1: respondió BIEN
2: respondió MAL
3: respondió PASAPALABRA
4: es la actual

*/

export default function Juego(props) {

    const [palabras, setPalabras] = useState(data);
    const [posPalabraActual, setPosPalabraActual] = useState(0);
    const [respuestasCorrectas, setRespuestasCorrectas] = useState(0);
    const [tiempoRestante, setTiempoRestante] = useState(120);

    // Método para agregar el estado 0 (sin responder) a todas las palabras
    useEffect(() => {
        palabras.map(p => {
            p.estado = 0
        })
    }, [])

    // Tiempo restante
    useEffect(() => {
        const timer =
          tiempoRestante > 0 && setInterval(() => setTiempoRestante(tiempoRestante - 1), 1000);
        return () => clearInterval(timer);
      }, [tiempoRestante]);

    function respondioBien() {
        palabras[posPalabraActual].estado = 1;
        setRespuestasCorrectas(respuestasCorrectas + 1);
        proximaPalabra();
    }
    function respondioMal() {
        palabras[posPalabraActual].estado = 2;
        proximaPalabra();
    }
    function respondioPasapalabra() {
        palabras[posPalabraActual].estado = 3;
        proximaPalabra();
    }

    function proximaPalabra() {
        setPosPalabraActual(posPalabraActual + 1);
    }

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
                            <TiempoRestante
                                tiempoRestante={tiempoRestante}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid item>
                            <Rosco
                                palabras={palabras}
                                posPalabraActual={posPalabraActual}
                                respondioBien={respondioBien}
                                respondioMal={respondioMal}
                                respondioPasapalabra={respondioPasapalabra}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid item>
                            <Pausar />
                        </Grid>
                        <Grid item>
                            <RespuestasCorrectas
                                respuestasCorrectas={respuestasCorrectas}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}