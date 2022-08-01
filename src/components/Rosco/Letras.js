import { Box, Grid } from "@mui/material";
import LetraRosco from "./LetraRosco";

export default function Letras(props) {

    const palabras = props.palabras;

    return (
        <Grid
            container item
            sx={{
                width: props.sizeRosco,
                height: props.sizeRosco,
            }}>
            {palabras.map((p, i) =>
                <LetraRosco
                    key={p.letra}
                    palabra={p}
                    indice={i}
                    roscoEnResultado={props.roscoEnResultado ? props.roscoEnResultado : false}
                    sizeRosco={props.sizeRosco}
                />
            )}
        </Grid>
    )
}