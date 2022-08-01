import { useTheme } from "@emotion/react"
import { Typography, Box, useMediaQuery, Grid } from "@mui/material"
import { useEffect } from "react"
import InputUsuario from "./InputUsuario"
import Letras from "./Letras"
import PalabraActual from "./PalabraActual"
import configuracionPredeterminada from '../../data/configuracion.json'

export default function Rosco(props) {

    const theme = useTheme();
    const esMobile = useMediaQuery(theme.breakpoints.down('lg'));

    //const sizeRosco = !esMobile ? 350 : 250; // en pixeles
    const sizeRosco = !esMobile ? configuracionPredeterminada.tamañoRosco.enJuego.desktop : configuracionPredeterminada.tamañoRosco.enJuego.mobile;
    const usarPixeles = esMobile;

    const unidad = usarPixeles ? 'px' : 'em';

    return (
        <Grid>
            <Typography
                variant="h2"
                mb={2}
            >
                Rosco
            </Typography>
            {props.palabras.length ?
                <>
                    <Grid
                        container
                        sx={{
                            position: "relative",
                            height: sizeRosco +unidad,
                            justifyContent: 'center',
                            mt: 4,
                            mb: '3em'
                        }}>
                            <Letras
                                palabras={props.palabras}
                                sizeRosco={sizeRosco}
                                usarPixeles={usarPixeles}
                            />
                            {!esMobile &&
                                <PalabraActual
                                    palabra={props.palabras[props.posPalabraActual]}
                                />
                            }
                    </Grid>
                    {esMobile &&
                        <PalabraActual
                            palabra={props.palabras[props.posPalabraActual]}
                        />
                    }
                    <InputUsuario
                        respondioBien={props.respondioBien}
                        respondioMal={props.respondioMal}
                        respondioPasapalabra={props.respondioPasapalabra}
                        respondio={props.respondio}
                    />
                </>
                :
                <Typography>
                    Preparando rosco...
                </Typography>
            }
        </Grid>
    )
}