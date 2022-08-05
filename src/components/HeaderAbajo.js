import { Grid } from "@mui/material"
import { Button } from "@mui/material"

import '../App.css'
import styled from "@emotion/styled";

import cargarSeccionesComplementarias from "../helpers/cargarSeccionesComplementarias";
import { useTheme } from "@emotion/react";


const HeaderButton = styled(Button)(({ theme }) => ({
    fontSize: '1.5em',
    padding: '15px 35px',
    borderRadius: '0 0 10px 10px',
    //backgroundColor: theme.palette.primary.oscuro,
    zIndex: 0,
    transition: 'transform .1s ease-in-out',
    '&:hover, &:focus': {
        transform: 'translatey(-5px) rotate(1deg)'
    }
}));

const espacioIconos = 1;

export default function HeaderAbajo(props) {

    const secciones = cargarSeccionesComplementarias();

    const theme = useTheme();

    return (
        <Grid
            container
            justifyContent="space-between"
            spacing={6}
        >
            {secciones.map(sc => {
                const bgColor = (sc.id == props.seccionComplementariaActual.id)
                    ? theme.palette.primary.main
                    : theme.palette.primary.oscuro;
                return (
                    <Grid item>
                        <HeaderButton
                            variant="contained"
                            size="large"
                            startIcon={sc.icono}
                            onClick={() => props.renderSeccionComplementaria(sc)}
                            sx={{
                                backgroundColor: bgColor
                            }}
                        >
                            {sc.titulo}
                        </HeaderButton>
                    </Grid>
                )
            })}
        </Grid>
    )
}