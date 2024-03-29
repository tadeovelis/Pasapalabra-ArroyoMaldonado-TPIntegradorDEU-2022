import Header from './Header'
import { Alert, Grid, Snackbar, Typography, useMediaQuery } from '@mui/material'
import Salir from './Salir'
import TiempoRestante from './TiempoRestante'
import Rosco from './Rosco/Rosco'
import Pausar from './Pausar'
import RespuestasCorrectas from './RespuestasCorrectas'
import { useEffect, useState } from 'react'
import data from '../data/palabras.json'
import ModalIncorrecto from './Modals/ModalIncorrecto'
import ModalPasapalabra from './Modals/ModalPasapalabra'
import ModalPausa from './Modals/ModalPausa'
import ModalSalir from './Modals/ModalSalir'
import ModalTimeOut from './Modals/ModalTimeOut'
import { compareTwoStrings } from 'string-similarity'
import BotonesFlotantes from './BotonesFlotantes'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@emotion/react'
import SeccionComplementaria from './SeccionesComplementarias/SeccionComplementariaNuevo'

import configuracionPredeterminada from '../data/configuracion.json'


/* Estados palabras/letras

0: no respondió
1: respondió BIEN
2: respondió MAL
3: respondió PASAPALABRA
4: es la actual

*/

// Si la función de comparación de strings da mayor a este nro la respuesta es correcta.
// NO USADO POR AHORA
const exactitudComparacion = 0.75;

const tiempoDeJuego = configuracionPredeterminada.tiempoDeJuego;

const tiempoReanudacionPredeterminado = configuracionPredeterminada.tiempoReanudacion;

export default function Juego() {

    const theme = useTheme();
    const esMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const [palabras, setPalabras] = useState([]);
    const [indicesPalabrasAResponder, setIndicesPalabrasAResponder] = useState(
        Array.from(Array(data.length).keys())
    );
    const [posIndicesPalabrasAResponder, setPosIndicesPalabrasAResponder] = useState(0);
    const [respuestasCorrectas, setRespuestasCorrectas] = useState(0);
    const [respuestasIncorrectas, setRespuestasIncorrectas] = useState(0);
    const [tiempoRestante, setTiempoRestante] = useState(tiempoDeJuego);

    // Modals
    const [modalErrorAbierto, setModalErrorAbierto] = useState(false);
    const [modalPasapalabraAbierto, setModalPasapalabraAbierto] = useState(false);
    const [modalPausaAbierto, setModalPausaAbierto] = useState(false);
    const [modalSalirAbierto, setModalSalirAbierto] = useState(false);
    const [modalTimeOutAbierto, setModalTimeOutAbierto] = useState(false);
    const [alertCorrectoAbierto, setAlertCorrectoAbierto] = useState(false);
    const [alertPausaAbierto, setAlertPausaAbierto] = useState(false);
    const [alertPausaTexto, setAlertPausaTexto] = useState("");

    const [pausa, setPausa] = useState(false);
    const [termino, setTermino] = useState(false);

    const [tiempoReanudacion, setTiempoReanudacion] = useState(tiempoReanudacionPredeterminado);

    // Render logical para las secciones complementarias y rosco
    const [showSeccionComplementaria, setShowSeccionComplementaria] = useState(false);
    const [seccionComplementariaActual, setSeccionComplementariaActual] = useState(null);

    const navigate = useNavigate();


    useEffect(() => {
    }, [indicesPalabrasAResponder])


    useEffect(() => {
        elegirPalabrasRosco();
    }, [])

    useEffect(() => {
        // Método para agregar el estado 0 (sin responder) a todas las palabras
        palabras.map(p => {
            p.estado = 0
        });
        setPrimeraComoActual();
    }, [palabras])

    const setPrimeraComoActual = () => {
        if (palabras.length) palabras[0].estado = 4
    }

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
                terminoPorTiempo();   
            }

            return () => clearInterval(timer);
        }
    }, [tiempoRestante, pausa, termino]);

    function terminoPorTiempo() {
        setModalTimeOutAbierto(true);
        setTermino(true);

        // Las que me quedaron responder las pongo como incorrectas
        indicesPalabrasAResponder.map(i => {
            palabras[i].estado = 2;
        })
    }


    function respondioBien() {
        palabras[indicesPalabrasAResponder[posIndicesPalabrasAResponder]].estado = 1;
        setRespuestasCorrectas(respuestasCorrectas + 1);
        // Mostrar alert
        setAlertCorrectoAbierto(true);
    }


    function respondioMal() {
        palabras[indicesPalabrasAResponder[posIndicesPalabrasAResponder]].estado = 2;
        setRespuestasIncorrectas(respuestasIncorrectas + 1);
        // Abrir modal
        setModalErrorAbierto(true);
        setTiempoReanudacion(tiempoReanudacionPredeterminado);

        setPausa(true);
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
        palabras[indicesPalabrasAResponder[posIndicesPalabrasAResponder]].estado = 3;

        // Abrir modal
        setModalPasapalabraAbierto(true);
        setTiempoReanudacion(tiempoReanudacionPredeterminado);

        setPausa(true);

        if (posIndicesPalabrasAResponder === indicesPalabrasAResponder.length - 1) {
            setPosIndicesPalabrasAResponder(0);
        }
        else setPosIndicesPalabrasAResponder(posIndicesPalabrasAResponder + 1);
    }


    function removerIndice(i) {
        setIndicesPalabrasAResponder(indicesPalabrasAResponder => indicesPalabrasAResponder.filter(item => item !== i))
    }

    // Confirmar el input de la palabra
    function respondio(palabra) {
        /*
        if (palabraCorrecta(palabra) > exactitudComparacion) {
            respondioBien();
        }
        */
        if (palabraCorrecta(palabra)) {
            respondioBien();
        }
        else {
            respondioMal();
        }

        if (indicesPalabrasAResponder.length === 1) {
            setTermino(true);
        }
        else if (posIndicesPalabrasAResponder === indicesPalabrasAResponder.length - 1) {
            setPosIndicesPalabrasAResponder(0);
            removerIndice(indicesPalabrasAResponder[indicesPalabrasAResponder.length - 1]);
        }
        else removerIndice(indicesPalabrasAResponder[posIndicesPalabrasAResponder]);
    }


    useEffect(() => {
        // Al comenzar una nueva vuelta al rosco...
        if (palabras.length && posIndicesPalabrasAResponder === 0) {
            setearALasPasapalabrasSinResponder();
        }
    }, [posIndicesPalabrasAResponder])

    useEffect(() => {
        if (palabras.length) palabras[indicesPalabrasAResponder[posIndicesPalabrasAResponder]].estado = 4;
    }, [indicesPalabrasAResponder, posIndicesPalabrasAResponder])

    // A las pasapalabras las pone en estado sin responder para dar otra vuelta al rosco
    function setearALasPasapalabrasSinResponder() {
        indicesPalabrasAResponder.map(i => {
            palabras[i].estado = 0
        })
    }

    function quitarAcentos(s) {
        const acentos = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U' };
        return s.split('').map(letra => acentos[letra] || letra).join('').toString();
    }

    function quitarEspacios(s) {
        return s.replace(/\s+/g, '');
    }

    // Se fija si es correcta la palabra ingresada 
    function palabraCorrecta(palabra) {
        //return compareTwoStrings(palabra, palabras[indicesPalabrasAResponder[posIndicesPalabrasAResponder]].palabra.toLowerCase())
        const pIngresada = quitarAcentos(quitarEspacios(palabra)).toLowerCase();
        const pOriginal = quitarAcentos(palabras[indicesPalabrasAResponder[posIndicesPalabrasAResponder]].palabra).toLowerCase();
        return pIngresada === pOriginal
    }


    // Código cuando termina
    useEffect(() => {
        if (termino && tiempoRestante !== 0) {
            irALosResultados();
        }
    }, [termino])

    const irALosResultados = () => {
        navigate("/rosco/resultado", {
            state: {
                palabras: palabras,
                respuestasCorrectas: respuestasCorrectas,
                respuestasIncorrectas: respuestasIncorrectas,
                tiempoRestante: tiempoRestante
            }
        })
    }


    /* Métodos modals */
    const cerrarModalError = () => {
        setModalErrorAbierto(false);
        setPausa(false);
    }
    const cerrarModalPasapalabra = () => {
        setModalPasapalabraAbierto(false);
        setPausa(false);
    }
    const cerrarModalPausa = () => {
        setModalPausaAbierto(false);
        sacarPausa();
    }
    const cerrarModalSalir = () => {
        setModalSalirAbierto(false);
        setPausa(false);
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
        setPausa(true);
        setModalSalirAbierto(true);
    }

    /* Renders de las secciones complementarias */
    const renderSeccionComplementaria = (seccionComplementaria) => {
        setSeccionComplementariaActual(seccionComplementaria);
        setShowSeccionComplementaria(true);
    }

    // Se pausa el tiempo cuando abre alguna sección complementaria
    useEffect(() => {
        if (!showSeccionComplementaria && alertPausaTexto != "") {
            setAlertPausaAbierto(true);
            setAlertPausaTexto("¡Sigue el juego!");
            setPausa(false);
        }
        else {
            setAlertPausaTexto("Pausamos el tiempo");
            setPausa(showSeccionComplementaria);
            setAlertPausaAbierto(showSeccionComplementaria);
        }
    }, [showSeccionComplementaria])


    return (
        <>
            {!esMobile &&
                <BotonesFlotantes
                    renderSeccionComplementaria={renderSeccionComplementaria}
                    pausar={() => setPausa(true)}
                    sacarPausa={sacarPausa}
                />
            }

            <Grid container justifyContent="center"
                sx={{
                    background: "backgroundGeneral.main",
                    minHeight: '100vh',
                    margin: 0,
                }}
            >

                {!showSeccionComplementaria ? <>

                    <Header
                        renderSeccionComplementaria={renderSeccionComplementaria}
                        pausar={() => setPausa(true)}
                        sacarPausa={sacarPausa}
                    />

                    <Grid
                        container
                        justifyContent="center"
                        sx={{
                            m: 3,
                            p: {
                                xs: 3,
                                sm: 3,
                                lg: 3
                            },
                            bgcolor: "backgroundPaper.main",
                            color: "textoPaper.main",
                            borderRadius: 2,
                            border: theme.modoContrasteActivado && '3px solid #fff',
                        }}
                        spacing={1}
                    >
                        <Grid container spacing={3} item xs={6} sm={6} lg={3} order={{ xs: 2, sm: 2, lg: 1 }}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item xs={12}>
                                <Salir
                                    salir={salir}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TiempoRestante
                                    tiempoRestante={tiempoRestante}
                                />
                            </Grid>
                        </Grid>
                        <Grid justifyContent="center" container item xs={12} sm={12} lg={6} order={{ xs: 1, sm: 1, lg: 2 }}>
                            <Grid item>
                                <Rosco
                                    palabras={palabras}
                                    posPalabraActual={indicesPalabrasAResponder[posIndicesPalabrasAResponder]}
                                    respondioBien={respondioBien}
                                    respondioMal={respondioMal}
                                    respondioPasapalabra={respondioPasapalabra}
                                    respondio={respondio}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} item xs={6} sm={6} lg={3} order={{ xs: 3, sm: 3, lg: 3 }}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item xs={12}>
                                <Pausar
                                    pausar={pausar}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <RespuestasCorrectas
                                    respuestasCorrectas={respuestasCorrectas}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </>

                    : <>
                        {/* Secciones complementarias */}
                        <SeccionComplementaria
                            seccionComplementaria={seccionComplementariaActual}
                            renderSeccionComplementaria={renderSeccionComplementaria}
                            irAtras={() => setShowSeccionComplementaria(false)}
                        />
                    </>

                }

                {/* Modals */}
                {palabras.length &&
                    <>
                        <ModalIncorrecto
                            abierto={modalErrorAbierto}
                            cerrar={cerrarModalError}
                            palabra={palabras[indicesPalabrasAResponder[posIndicesPalabrasAResponder]]}
                            tiempoReanudacion={tiempoReanudacion}
                        />
                        <ModalPasapalabra
                            abierto={modalPasapalabraAbierto}
                            cerrar={cerrarModalPasapalabra}
                            palabra={palabras[indicesPalabrasAResponder[posIndicesPalabrasAResponder]]}
                            tiempoReanudacion={tiempoReanudacion}
                        />
                        <ModalPausa
                            abierto={modalPausaAbierto}
                            cerrar={cerrarModalPausa}
                            palabra={palabras[indicesPalabrasAResponder[posIndicesPalabrasAResponder]]}
                        />
                        <ModalSalir
                            abierto={modalSalirAbierto}
                            cerrar={cerrarModalSalir}
                            palabra={palabras[indicesPalabrasAResponder[posIndicesPalabrasAResponder]]}
                        />
                        <ModalTimeOut
                            abierto={modalTimeOutAbierto}
                            cerrar={cerrarModalTimeOut}
                            palabra={palabras[indicesPalabrasAResponder[posIndicesPalabrasAResponder]]}
                            respuestasCorrectas={respuestasCorrectas}
                            irALosResultados={irALosResultados}
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
                        <Snackbar
                            open={alertPausaAbierto}
                            autoHideDuration={2000}
                            onClose={() => setAlertPausaAbierto(false)}
                            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                            message={alertPausaTexto}
                            ContentProps={{
                                sx: {
                                    bgcolor: 'success.main',
                                    fontSize: '1.7em',
                                    textAlign: 'center',
                                    justifyContent: 'center'
                                }
                            }}
                        />
                    </>
                }

            </Grid>
        </>
    )
}