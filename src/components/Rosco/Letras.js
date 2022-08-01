import LetraRosco from "./LetraRosco";

export default function Letras(props) {

    const palabras = props.palabras;

    return (
        <div>
            {palabras.map((p, i) =>
                <LetraRosco
                    key={p.letra}
                    palabra={p}
                    indice={i}
                    roscoEnResultado={props.roscoEnResultado ? props.roscoEnResultado : false}
                />
            )}
        </div>
    )
}