
export default function PalabraActual(props) {

    const palabra = props.palabra;

    return (
        <div>
            <p>{palabra.formato} {palabra.letra}</p>
            <p>
                {palabra.definicion}
            </p>
        </div>
    )
}