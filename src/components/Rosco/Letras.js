import LetraRosco from "./LetraRosco";

export default function Letras(props) {

    const palabras = props.palabras;

    return (
        <div>
            <h4>
                {palabras.map((p,i) =>
                    <LetraRosco
                        key={p.letra}
                        palabra={p}
                        indice={i}
                    />
                )}
            </h4>
        </div>
    )
}