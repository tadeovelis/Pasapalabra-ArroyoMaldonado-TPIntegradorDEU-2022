import { Typography } from "@mui/material"
import { useEffect } from "react"
import InputUsuario from "./InputUsuario"
import Letras from "./Letras"
import PalabraActual from "./PalabraActual"

export default function Rosco(props) {

    return (
        <div>
            <Typography
                variant="h2"
            >
                Rosco
            </Typography>
            {props.palabras.length ?
                <>
                    <Letras
                        palabras={props.palabras}
                    />

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