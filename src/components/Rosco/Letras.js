import Letra from "./Letra";

export default function Letras(props) {

    const palabras = props.palabras;

    return (
        <div>
            <h4>
                {palabras.map(p =>
                    <Letra
                        key={p.letra}
                        palabra={p}
                    />
                )}
            </h4>
        </div>
    )
}