import InputUsuario from "./InputUsuario"
import Letras from "./Letras"
import PalabraActual from "./PalabraActual"

export default function Rosco() {
    return(
        <div>
            <h3>Rosco</h3>
            <Letras />
            <PalabraActual />
            <InputUsuario />
        </div>
    )
}