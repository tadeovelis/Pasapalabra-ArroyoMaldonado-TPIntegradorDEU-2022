import SeccionComplementaria from "./SeccionComplementaria"

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BoxItemSeccionComplementaria from "./BoxItemSeccionComplementaria"
import { Grid, Typography } from "@mui/material";

import pasapalabraImg from "../../img/PasapalabraButton.png";
import confirmarImg from "../../img/ConfirmarButton.png";
import inputImg from "../../img/Input.png";
import { Box } from "@mui/system";

const espacioIconos = 2;


export default function ComoJugar() {
    return (
        <SeccionComplementaria
            titulo="Cómo jugar"
            icono={<HelpOutlineIcon sx={{ mr: espacioIconos, fontSize: 30 }} />}
            contenido={<>
                <BoxItemSeccionComplementaria
                    titulo="¿Cuál es la mecánica del juego?"
                    contenido={
                        <>
                            <p>
                                Se presentarán las letras del abecedario, en orden y dispuestas en forma de círculo. Cada letra tendrá asignada una palabra.
                                Tu tarea es acertar las palabras leyendo o escuchando sus definiciones. ¡Tendrás [X] segundos!
                            </p>
                            <p>
                                En cada letra, si tenés una palabra en mente, la vas a ingresar en el campo de texto:
                                <br></br>
                                <Box sx={{ mt: 2, mb: 4 }}>
                                    <img
                                        src={inputImg}
                                        width="250px"
                                    />
                                </Box>
                                Pero podés tomar alguna de las dos siguientes decisiones:
                                <Grid container sx={{ my: 3 }} >
                                    <Grid item container spacing={3} sx={{ mb: 1 }} alignItems="center">
                                        <Grid item>
                                            <img
                                                src={pasapalabraImg}
                                                width="70px"
                                            />
                                        </Grid>
                                        <Grid item>
                                            <b>¡Pasapalabra!</b>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <span>No necesitás responder, pasás directamente a la siguiente. De todas formas, cuando el rosco dé toda la vuelta, te va a tocar de nuevo, así que ¡recordá la definición!</span>
                                    </Grid>
                                </Grid>
                                <Grid container sx={{ my: 3 }} >
                                    <Grid item container spacing={3} sx={{ mb: 1 }} alignItems="center">
                                        <Grid item>
                                            <img
                                                src={confirmarImg}
                                                width="70px"
                                            />
                                        </Grid>
                                        <Grid item>
                                            <b>Confirmar</b>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <span>Confirmás lo que ingresaste en el campo de texto. ¡Si es correcta acertás! Si no, es un error.</span>
                                    </Grid>
                                </Grid>
                            </p>
                            <p>
                                Si llegás a la Z y todavía tenés alguna letra por responder, el rosco vuelve a comenzar.
                            </p>
                        </>
                    }
                />
                <BoxItemSeccionComplementaria
                    titulo="¿Cuándo termina? ¿Cómo se gana?"
                    contenido={<>
                        <p>
                            El juego puede terminar por alguna de las siguientes dos razones:
                        </p>
                        <ul>
                            <li>
                                Contestás bien todas las palabras
                            </li>
                            <li>
                                Se termina el tiempo
                            </li>
                        </ul>
                        <p>
                            Para ganar deberías responder bien todas las preguntas, pero si no respondiste todas, ¡no pasa nada! Vas a poder ver cuántas respondiste bien, lo importante es aprender y divertirse jugando.
                        </p>
                    </>}
                />
            </>}
        />
    )
}