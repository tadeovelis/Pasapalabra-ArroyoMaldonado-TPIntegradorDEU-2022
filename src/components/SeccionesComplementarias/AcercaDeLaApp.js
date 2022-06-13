import { Button } from "@mui/material"
import SeccionComplementaria from "./SeccionComplementaria"

import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import BoxItemSeccionComplementaria from "./BoxItemSeccionComplementaria";

const espacioIconos = 2;

export default function AcercaDeLaApp() {
    return (
        <SeccionComplementaria
            titulo="Acerca de la app"
            icono={<PeopleOutlineIcon sx={{ mr: espacioIconos, fontSize: 30 }} />}
            contenido={
                <>
                    <BoxItemSeccionComplementaria
                        titulo="¿Quiénes somos?"
                        contenido={
                            <>
                                "Somos..."<br />
                                <b>Tadeo Velis, Sebastián Perri y Mariano Gandin</b>.
                            </>
                        }
                    />

                    <BoxItemSeccionComplementaria
                        titulo="¿Cómo surgió?"
                        contenido={
                            <>
                                Esta aplicación la diseñamos y desarrollamos para la materia Diseño de Experiencia de Usuario de la Facultad de Informática, UNLP, en 2022. En esta materia se prioriza el desarrollo de aplicaciones pensando en el usuario para lograr la mejor experiencia posible. Esto no solo incluye interfaces más simples y fáciles de entender, sino también interacciones más intuitivas y accesibilidad para todas las personas, de todas las edades y de todas las condiciones.
                                <br /><br />
                                La aplicación se diseñó en el marco del proyecto de difusión y educación promovido por distintas facultades de la UNLP, sobre las inundaciones de la región de La Plata. Específicamente, nos centramos en la de 2013 y en la región del Arroyo Maldonado.
                                <br /><br />
                                Se ha realizado un extenso y muy valioso trabajo de investigación. Si estás interesado y querés saber más, hacé click en el botón.
                            </>
                        }
                        extra={
                            <Button
                                variant="contained"
                                href="http://sedici.unlp.edu.ar/handle/10915/59633"
                                target="_blank"
                                sx={{
                                    background: 'white',
                                    color: '#2491CF',
                                    my: 2
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
                                Si encontraste algún error, querés sugerir alguna palabra, alguna corrección o por cualquier otro motivo que te quieras contactar con nosotros, no dudes en escribirnos un mail. Te dejamos nuestras direcciones de correo electrónico, nos podés enviar un mail a los tres:
                                <br /><br />
                                Tadeo Velis: <b>tadeo.velis@gmail.com</b><br />
                                Sebastián Perri: <b>srperri@gmail.com</b><br />
                                Mariano Gandin: <b>mariano.rng@hotmail.com</b>
                            </>
                        }
                    />
                </>
            }
        />
    )
}