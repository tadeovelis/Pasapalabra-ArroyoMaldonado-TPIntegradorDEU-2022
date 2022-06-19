import Paper from '@mui/material/Paper'
import Header from './Header'
import { Alert, Grid, Snackbar } from '@mui/material'
import Salir from './Salir'
import TiempoRestante from './TiempoRestante'
import Rosco from './Rosco/Rosco'
import Pausar from './Pausar'
import RespuestasCorrectas from './RespuestasCorrectas'
import { Container } from '@mui/system'
import { useEffect, useState } from 'react'
import data from '../data/palabrasNuevas.json'
import ModalIncorrecto from './Modals/ModalIncorrecto'
import ModalPasapalabra from './Modals/ModalPasapalabra'
import ModalPausa from './Modals/ModalPausa'
import ModalSalir from './Modals/ModalSalir'
import ModalTimeOut from './Modals/ModalTimeOut'
import { compareTwoStrings } from 'string-similarity'
import BotonesFlotantes from './BotonesFlotantes'


/* Estados palabras/letras

0: no respondió
1: respondió BIEN
2: respondió MAL
3: respondió PASAPALABRA
4: es la actual

*/

// Si la función de comparación de strings da mayor a este nro la respuesta es correcta.
const exactitudComparacion = 0.75;

const tiempoDeJuego = 350;

const tiempoReanudacionPredeterminado = 5;

export default function Juego(props) {

    const [palabras, setPalabras] = useState([]);
    const [posPalabraActual, setPosPalabraActual] = useState(0);
    const [respuestasCorrectas, setRespuestasCorrectas] = useState(0);
    const [tiempoRestante, setTiempoRestante] = useState(tiempoDeJuego);

    // Modals
    const [modalErrorAbierto, setModalErrorAbierto] = useState(false);
    const [modalPasapalabraAbierto, setModalPasapalabraAbierto] = useState(false);
    const [modalPausaAbierto, setModalPausaAbierto] = useState(false);
    const [modalSalirAbierto, setModalSalirAbierto] = useState(false);
    const [modalTimeOutAbierto, setModalTimeOutAbierto] = useState(false);
    const [alertCorrectoAbierto, setAlertCorrectoAbierto] = useState(false);

    const [pausa, setPausa] = useState(false);
    const [termino, setTermino] = useState(false);

    const [tiempoReanudacion, setTiempoReanudacion] = useState(tiempoReanudacionPredeterminado);

    
    useEffect(() => {
        elegirPalabrasRosco();
    }, [])
    
    useEffect(() => {
        // Método para agregar el estado 0 (sin responder) a todas las palabras
        palabras.map(p => {
            p.estado = 0
        });
    }, [palabras])

    // Elegir las palabras para el rosco
    const elegirPalabrasRosco = () => {
        let palabras = [];
        data.map(l => {
            // Elegir al azar la palabra
            const palabra = l.palabras[Math.floor(Math.random() * l.palabras.length)];
            palabras.push({
                "letra": l.letra,
                "palabra": palabra.palabra,
                "definicion": palabra.definicion,
                "formato": palabra.formato
            })
        })
        setPalabras(palabras)
    }

    // Tiempo restante
    useEffect(() => {
        if (!pausa && !termino) {
            const timer = tiempoRestante > 0 && setInterval(() => setTiempoRestante(tiempoRestante - 1), 1000);
            if (tiempoRestante === 0) {
                setModalTimeOutAbierto(true);
                setTermino(true);
            }

            return () => clearInterval(timer);
        }
    }, [tiempoRestante, pausa]);

    function respondioBien() {
        setAlertCorrectoAbierto(true);
        palabras[posPalabraActual].estado = 1;
        setRespuestasCorrectas(respuestasCorrectas + 1);
        proximaPalabra();
    }

    function respondioMal() {
        palabras[posPalabraActual].estado = 2;

        proximaPalabra();

        // Abrir modal
        setModalErrorAbierto(true);
        setTiempoReanudacion(tiempoReanudacionPredeterminado);

    }

    useEffect(() => {
        const timer = tiempoReanudacion > 0 && setInterval(() => setTiempoReanudacion(tiempoReanudacion - 1), 1000)
        if (tiempoReanudacion === 0) {
            cerrarModalError();
            cerrarModalPasapalabra();
        }

        return () => clearInterval(timer);
    }, [tiempoReanudacion])

    function respondioPasapalabra() {
        palabras[posPalabraActual].estado = 3;
        proximaPalabra();

        // Abrir modal
        setModalPasapalabraAbierto(true);
        setTiempoReanudacion(tiempoReanudacionPredeterminado);
    }

    // Confirmar el input de la palabra
    function respondio(palabra) {

        if (palabraCorrecta(palabra) > exactitudComparacion) {
            respondioBien();
        }
        else {
            respondioMal();
        }

    }

    // Compara los strings con una librería: string-similarity 
    function palabraCorrecta(palabra) {
        return compareTwoStrings(palabra, palabras[posPalabraActual].palabra.toLowerCase())
    }

    function proximaPalabra() {
        setPosPalabraActual(posPalabraActual + 1);
    }

    /* Métodos modals */
    const cerrarModalError = () => {
        setModalErrorAbierto(false);
    }
    const cerrarModalPasapalabra = () => {
        setModalPasapalabraAbierto(false);
    }
    const cerrarModalPausa = () => {
        setModalPausaAbierto(false);
        sacarPausa();
    }
    const cerrarModalSalir = () => {
        setModalSalirAbierto(false);
    }
    const cerrarModalTimeOut = () => {
        setModalTimeOutAbierto(false);
    }

    /* Pausar juego */
    const pausar = () => {
        setPausa(true);

        // Abrir modal
        setModalPausaAbierto(true)
    }
    const sacarPausa = () => {
        setPausa(false);
    }

    /* Salir */
    const salir = () => {
        // Abrir modal
        setModalSalirAbierto(true);
    }

    return (
        <>
            <BotonesFlotantes />
            <Container maxWidth={false}
                sx={{
                    background: "backgroundGeneral.main",
                    minHeight: '100vh',
                    margin: 0
                }}
            >
                <Header />
                <Paper
                    sx={{
                        marginX: 5,
                        mt: 5,
                        mb: 0,
                        p: 10,
                        bgcolor: "backgroundPaper.main",
                        color: "textoPaper.main",
                    }}
                >
                    <Grid container>
                        <Grid item xs={3}>
                            <Grid item xs={6}>
                                <Salir
                                    salir={salir}
                                />
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
                                    respondio={respondio}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Grid item>
                                <Pausar
                                    pausar={pausar}
                                />
                            </Grid>
                            <Grid item>
                                <RespuestasCorrectas
                                    respuestasCorrectas={respuestasCorrectas}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>

                {/* Modals */}
                <ModalIncorrecto
                    abierto={modalErrorAbierto}
                    cerrar={cerrarModalError}
                    palabra={palabras[posPalabraActual]}
                    tiempoReanudacion={tiempoReanudacion}
                />
                <ModalPasapalabra
                    abierto={modalPasapalabraAbierto}
                    cerrar={cerrarModalPasapalabra}
                    palabra={palabras[posPalabraActual]}
                    tiempoReanudacion={tiempoReanudacion}
                />
                <ModalPausa
                    abierto={modalPausaAbierto}
                    cerrar={cerrarModalPausa}
                    palabra={palabras[posPalabraActual]}
                />
                <ModalSalir
                    abierto={modalSalirAbierto}
                    cerrar={cerrarModalSalir}
                    palabra={palabras[posPalabraActual]}
                />
                <ModalTimeOut
                    abierto={modalTimeOutAbierto}
                    cerrar={cerrarModalTimeOut}
                    palabra={palabras[posPalabraActual]}
                    respuestasCorrectas={respuestasCorrectas}
                />
                <Snackbar
                    open={alertCorrectoAbierto}
                    autoHideDuration={2000}
                    onClose={() => setAlertCorrectoAbierto(false)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    message="¡Correcto!"
                    ContentProps={{
                        sx: {
                            bgcolor: 'success.main',
                            fontSize: '1.7em',
                            textAlign: 'center',
                            justifyContent: 'center'
                        }
                    }}
                />

            </Container>
        </>
    )
}