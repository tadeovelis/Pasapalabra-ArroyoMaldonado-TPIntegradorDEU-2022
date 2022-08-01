import { Box, Grid } from "@mui/material";
import LetraRosco from "./LetraRosco";

export default function Letras(props) {

    const palabras = props.palabras;

    const unidad = props.usarPixeles ? 'px' : 'em';

    return (
        <Grid
            container item
            sx={{
                width: props.sizeRosco + unidad,
                height: props.sizeRosco + unidad,
            }}>
            {palabras.map((p, i) =>
                <LetraRosco
                    key={p.letra}
                    palabra={p}
                    indice={i}
                    roscoEnResultado={props.roscoEnResultado ? props.roscoEnResultado : false}
                    sizeRosco={props.sizeRosco}
                    usarPixeles={props.usarPixeles ? true : false}
                />
            )}
        </Grid>
    )
}