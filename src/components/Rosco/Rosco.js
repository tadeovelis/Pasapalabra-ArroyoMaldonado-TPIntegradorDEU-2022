import { useTheme } from "@emotion/react"
import { Typography, Box, useMediaQuery } from "@mui/material"
import { useEffect } from "react"
import InputUsuario from "./InputUsuario"
import Letras from "./Letras"
import PalabraActual from "./PalabraActual"

export default function Rosco(props) {

    const theme = useTheme();
    const esMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const tamañoRosco = esMobile ? '270px' : '400px';

    return (
        <div>
            <Typography
                variant="h2"
                mb={2}
            >
                Rosco
            </Typography>
            {props.palabras.length ?
                <>
                    <Box sx={{ justifyContent: "center", display: "flex", mb: 4 }}>
                        <Box sx={{ width: tamañoRosco, height: tamañoRosco, position: "relative" }}>
                            <Letras
                                palabras={props.palabras}
                            />
                            {!esMobile &&
                                <PalabraActual
                                    palabra={props.palabras[props.posPalabraActual]}
                                />
                            }
                        </Box>
                    </Box>
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
        </div>
    )
}