import { Typography, Box } from "@mui/material"
import { useEffect } from "react"
import InputUsuario from "./InputUsuario"
import Letras from "./Letras"
import PalabraActual from "./PalabraActual"

export default function Rosco(props) {

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
                    <Box sx={{justifyContent:"center", display:"flex", mb: 2}}>
                        <Box sx={{width:"270px", height:"270px", position: "relative"}}>
                            <Letras
                                palabras={props.palabras}
                            />
                        </Box>
                    </Box>
                    <PalabraActual
                        palabra={props.palabras[props.posPalabraActual]}
                    />
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