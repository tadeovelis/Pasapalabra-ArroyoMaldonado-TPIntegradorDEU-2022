import { useTheme } from "@emotion/react"
import { Typography, Box, useMediaQuery, Grid } from "@mui/material"
import { useEffect } from "react"
import InputUsuario from "./InputUsuario"
import Letras from "./Letras"
import PalabraActual from "./PalabraActual"

export default function Rosco(props) {

    const theme = useTheme();
    const esMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const sizeRosco = !esMobile ? 350 : 250; // en pixeles

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
                            height: sizeRosco +'px',
                            justifyContent: 'center',
                            my: 4
                        }}>
                            <Letras
                                palabras={props.palabras}
                                sizeRosco={sizeRosco}
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