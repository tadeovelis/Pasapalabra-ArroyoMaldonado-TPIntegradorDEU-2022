import { Box, Button, FormControlLabel, Grid, Switch, Zoom } from "@mui/material";
import { useState } from "react";
import LetraRosco from "./LetraRosco";
import { motion } from "framer-motion"

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
                <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ ease: "easeInOut", duration: .5, delay: i/40 }}
                >
                    <LetraRosco
                        key={p.letra}
                        palabra={p}
                        indice={i}
                        roscoEnResultado={props.roscoEnResultado ? props.roscoEnResultado : false}
                        sizeRosco={props.sizeRosco}
                        usarPixeles={props.usarPixeles ? true : false}
                    />
                </motion.div>
            )}
        </Grid>
    )
}
