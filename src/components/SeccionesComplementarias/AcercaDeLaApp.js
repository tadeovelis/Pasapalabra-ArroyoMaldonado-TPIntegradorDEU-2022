import { Button } from "@mui/material"
import BoxItemSeccionComplementaria from "./BoxItemSeccionComplementaria";

const espacioIconos = 2;

export default function AcercaDeLaApp() {
    return (
        <>
            <BoxItemSeccionComplementaria
                titulo="¿De qué trata?"
                contenido={<>
                    <p>
                        Este juego está basado en el formato del programa de televisión
                        <i> "Pasapalabras"</i>, el cual, a su vez, es una versión adaptada del original británico
                        <i> "The Alphabet Game"</i>. Este formato de juego pone a prueba tus conocimientos sobre la lengua utilizada en concreto y sobre
                        conceptos de cualquier índole, de una forma dinámica y muy entretenida.
                    </p>
                    <p>
                        La versión original se juega de a dos, pero nosotros la adaptamos para poder jugarlo individualmente.
                    </p>
                </>
                }
            />
            <BoxItemSeccionComplementaria
                titulo="¿Quiénes somos?"
                contenido={
                    <>
                        <p>
                            "Somos..."<br />
                            <b>Tadeo Velis, Sebastián Perri y Mariano Gandin</b>.
                        </p>
                    </>
                }
            />

            <BoxItemSeccionComplementaria
                titulo="¿Cómo surgió?"
                contenido={
                    <>
                        <p>
                            Esta aplicación fue diseñada y desarrollada para la materia Diseño de Experiencia de Usuario de la Facultad de Informática, UNLP, en 2022. En esta materia se prioriza el desarrollo de aplicaciones pensando en el usuario para lograr la mejor experiencia posible. Esto no solo incluye interfaces más simples y fáciles de entender, sino también interacciones más intuitivas y accesibilidad para todas las personas, de todas las edades y de todas las condiciones.
                        </p>
                        <p>
                            La aplicación se diseñó en el marco del proyecto de difusión y educación promovido por distintas facultades de la UNLP, sobre las inundaciones de la región de La Plata. Específicamente, nos centramos en la de 2013 y en la región del Arroyo Maldonado.
                        </p>
                        <p>
                            Se ha realizado un extenso y muy valioso trabajo de investigación. Si estás interesado y querés saber más, hacé click en el botón.
                        </p>
                    </>
                }
                extra={
                    <Button
                        variant="contained"
                        href="http://sedici.unlp.edu.ar/handle/10915/59633"
                        target="_blank"
                        sx={{
                            my: 2,
                            bgcolor: 'primary.contrastText',
                            color: 'primary.main',
                            '&:hover': {
                                color: 'primary.contrastText'
                            }
                        }}
                    >
                        Ver trabajo
                    </Button>
                }
            />

            <BoxItemSeccionComplementaria
                titulo="Información de contacto"
                contenido={
                    <>
                        <p>Si encontraste algún error, querés sugerir alguna palabra, alguna corrección o por cualquier otro motivo que te quieras contactar con nosotros, no dudes en escribirnos un mail. Te dejamos nuestras direcciones de correo electrónico, nos podés enviar un mail a los tres:</p>
                        Tadeo Velis: <b>tadeo.velis@gmail.com</b><br />
                        Sebastián Perri: <b>srperri@gmail.com</b><br />
                        Mariano Gandin: <b>mariano.rng@hotmail.com</b>
                    </>
                }
            />
        </>
    )
}