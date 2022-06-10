import InputUsuario from "./InputUsuario"
import Letras from "./Letras"
import PalabraActual from "./PalabraActual"

export default function Rosco(props) {
    return(
        <div>
            <h3>Rosco</h3>
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
        </div>
    )
}