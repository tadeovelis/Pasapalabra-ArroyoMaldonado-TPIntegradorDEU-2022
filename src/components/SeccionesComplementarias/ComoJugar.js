import SeccionComplementaria from "./SeccionComplementaria"

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BoxItemSeccionComplementaria from "./BoxItemSeccionComplementaria"
import { Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";

import pasapalabraImg from "../../img/PasapalabraButton.png";
import confirmarImg from "../../img/ConfirmarButton.png";
import salirImg from "../../img/SalirButton.png";
import pausaImg from "../../img/PausaButton.png";
import inputImg from "../../img/Input.png";
import ingresarPorVozImg from "../../img/IngresarPorVozButton.png";
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

const espacioIconos = 2;


export default function ComoJugar() {
    return (
        <SeccionComplementaria
            titulo="Cómo jugar"
            icono={<HelpOutlineIcon sx={{ mr: espacioIconos, fontSize: 30 }} />}
            contenido={<>
                <BoxItemSeccionComplementaria
                    titulo="¿Cómo es la mecánica del juego?"
                    contenido={
                        <>
                            <p>
                                Se presentarán las letras del abecedario, en orden y dispuestas en forma de círculo (lo llamamos <b>"Rosco"</b>). Cada letra tendrá asignada una palabra relacionada con las inundaciones.
                                Tu tarea es acertar las palabras leyendo o escuchando sus definiciones. ¡Tendrás [X] segundos!
                            </p>
                            <p>
                                En cada letra, la palabra que pensás que es la vas a ingresar en el campo de texto:
                            </p>
                            <Box sx={{ my: 2 }}>
                                <img
                                    src={inputImg}
                                    width="250px"
                                />
                            </Box>
                            <p>
                                No son necesarias mayúsculas ni tildes, pero sí el resto de las reglas ortográficas.
                            </p>

                            <Box sx={{ mt: 4 }}>
                                En cada letra, podés tomar alguna de las dos siguientes decisiones:
                            </Box>
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
                                    <span>No necesitás responder, pasás directamente a la siguiente. De todas formas, cuando el rosco dé toda la vuelta, te va a tocar de nuevo, así que... ¡Recordá la definición!</span>
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
                                    <span>Confirmás lo que ingresaste en el campo de texto. ¡Si es correcta acertás! Si no, cuenta como un error.</span>
                                </Grid>
                            </Grid>
                            <p>
                                Si respondés incorrectamente o decidís utilizar el "Pasapalabras", te daremos unos 5 segundos hasta la próxima palabra.
                            </p>
                            <p>
                                Si llegás a la Z y todavía tenés alguna letra por responder, el rosco vuelve a comenzar sólo con las que te faltan. Y así sucesivamente hasta que termine la partida.
                            </p>
                        </>
                    }
                />
                <BoxItemSeccionComplementaria
                    titulo="¿Cuándo termina? ¿Cómo se gana?"
                    contenido={<>
                        <p>
                            El juego puede <b>terminar</b> por alguna de las siguientes tres razones:
                            <List dense={true}>
                                <ListItem>
                                    <ListItemIcon
                                        sx={{minWidth: '0px', mr: 2, color: 'primary.contrastText'}}
                                    >
                                        <CheckBoxIcon sx={{fontSize: '1.7em'}}/>
                                    </ListItemIcon>
                                    <ListItemText
                                        disableTypography
                                        primary="Porque contestás bien todas las palabras"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon sx={{minWidth: '0px', mr: 2, color: 'primary.contrastText'}}>
                                        <AccessTimeFilledIcon sx={{fontSize: '1.7em'}}/>
                                    </ListItemIcon>
                                    <ListItemText
                                        disableTypography
                                        primary="Porque se termina el tiempo"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon sx={{minWidth: '0px', mr: 2, color: 'primary.contrastText'}}>
                                        <DisabledByDefaultIcon sx={{fontSize: '1.7em'}}/>
                                    </ListItemIcon>
                                    <ListItemText
                                        disableTypography
                                        primary="Porque te cansaste y cerrás el juego"
                                    />
                                </ListItem>
                            </List>
                        </p>
                        <p>
                            Para <b>ganar</b> deberías responder bien todas las preguntas, pero si no acertaste en todas, ¡no pasa nada! Lo importante es aprender y divertirse jugando.
                        </p>
                        <p>
                            Al finalizar la partida, vas a poder ver un resumen de la partida, con todas las palabras jugadas junto con sus definiciones, el tiempo restante y la cantidad que respondiste bien.
                            ¡Leelo al resumen! Es muy divertido aprender las palabras que no pudiste responder o respondiste incorrectamente. En esta parte,
                            podés hacer click en cualquiera de las palabras para verla en el "Glosario", con más detalles e información.
                        </p>
                    </>}
                />
                <BoxItemSeccionComplementaria
                    titulo="Pausar y salir"
                    contenido={<>
                        En cualquier momento de la partida podés:
                        <Grid container sx={{ my: 3 }} >
                            <Grid item container spacing={3} sx={{ mb: 1 }} alignItems="center">
                                <Grid item>
                                    <img
                                        src={pausaImg}
                                        width="70px"
                                    />
                                </Grid>
                                <Grid item>
                                    <b>¡Pausar!</b>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <span>En el juego original no se puede, pero en nuestra versión te damos la posibilidad.</span>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ my: 3 }} >
                            <Grid item container spacing={3} sx={{ mb: 1 }} alignItems="center">
                                <Grid item>
                                    <img
                                        src={salirImg}
                                        width="70px"
                                    />
                                </Grid>
                                <Grid item>
                                    <b>Salir</b>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <span>Salís a la pantalla de bienvenida. ¡El progreso de la partida en curso no se guarda!</span>
                            </Grid>
                        </Grid>
                    </>}
                />
                <BoxItemSeccionComplementaria
                    titulo="Opciones de accesibilidad"
                    contenido={<>
                        Incluimos dos funciones muy útiles:
                        <Grid container sx={{ my: 3 }} >
                            <Grid item container spacing={3} sx={{ mb: 1 }} alignItems="center">
                                <Grid item>
                                    <img
                                        src={ingresarPorVozImg}
                                        width="60px"
                                    />
                                </Grid>
                                <Grid item>
                                    <b>Ingresar palabra mediante voz</b>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <span>Mediante esta opción podés utilizar el micrófono para ingresar la palabra, sin necesidad de escribir por teclado.</span>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ my: 3 }} >
                            <Grid item container spacing={3} sx={{ mb: 1 }} alignItems="center">
                                <Grid item>
                                    <RecordVoiceOverIcon fontSize="large" />
                                </Grid>
                                <Grid item>
                                    <b>Escuchar definiciones</b>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <span>Con esta opción activada, una voz artificial te leerá las definiciones de las palabras. Esta función se puede activar en la sección de "Configuración".</span>
                            </Grid>
                        </Grid>
                    </>}
                />
            </>}
        />
    )
}