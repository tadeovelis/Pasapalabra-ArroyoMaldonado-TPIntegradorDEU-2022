import { Container } from "@mui/system"
import BotonesFlotantes from "./BotonesFlotantes"
import { Box } from "@mui/system"
import { Button, Typography } from "@mui/material"

export default function Glosario() {
    return (
        <div>
            <BotonesFlotantes />
            <Container class="contenedor-general-seccion-texto">
                <Box class="header-seccion-texto">
                    <Typography variant="h1" color="white"
                        sx={{
                            textAlign: 'left',
                            textTransform: 'uppercase'
                        }}
                    >
                        Acerca de la app
                    </Typography>
                </Box>
                <Box class="contenedor-seccion-texto">
                    <Box class="tema-acerca-de-la-app">
                        <Typography class="titulo-tema-acerca-de-la-app" variant="h3">
                            ¿Quiénes somos?
                        </Typography>
                        <Typography class="contenido-tema-acerca-de-la-app" variant="body1">
                            Somos...<br />
                            <b>Tadeo Velis, Sebastián Perri y Mariano Gandin</b>.
                        </Typography>
                    </Box>

                    <Box class="tema-acerca-de-la-app">
                        <Typography class="titulo-tema-acerca-de-la-app" variant="h3">
                            ¿Cómo surgió?
                        </Typography>
                        <Typography class="contenido-tema-acerca-de-la-app" variant="body1">
                            Esta aplicación la diseñamos y desarrollamos para la materia Diseño de Experiencia de Usuario de la Facultad de Informática, UNLP, en 2022. En esta materia se prioriza el desarrollo de aplicaciones pensando en el usuario para lograr la mejor experiencia posible. Esto no solo incluye interfaces más simples y fáciles de entender, sino también interacciones más intuitivas y accesibilidad para todas las personas, de todas las edades y de todas las condiciones.
                            <br /><br />
                            La aplicación se diseñó en el marco del proyecto de difusión y educación promovido por distintas facultades de la UNLP, sobre las inundaciones de la región de La Plata. Específicamente, nos centramos en la de 2013 y en la región del Arroyo Maldonado.
                            <br /><br />
                            Se ha realizado un extenso y muy valioso trabajo de investigación. Si estás interesado y querés saber más, hacé click en el botón.
                        </Typography>
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
                    </Box>

                    <Box class="tema-acerca-de-la-app">
                        <Typography class="titulo-tema-acerca-de-la-app" variant="h3">
                            Información de contacto
                        </Typography>
                        <Typography class="contenido-tema-acerca-de-la-app" variant="body1">
                            Si encontraste algún error, querés sugerir alguna palabra, alguna corrección o por cualquier otro motivo que te quieras contactar con nosotros, no dudes en escribirnos un mail. Te dejamos nuestras direcciones de correo electrónico, nos podés enviar un mail a los tres:
                            <br /><br />
                            Tadeo Velis: <b>tadeo.velis@gmail.com</b><br />
                            Sebastián Perri: <b>srperri@gmail.com</b><br />
                            Mariano Gandin: <b>mariano.rng@hotmail.com</b>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}