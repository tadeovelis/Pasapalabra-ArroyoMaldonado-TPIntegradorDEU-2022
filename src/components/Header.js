import { Box } from "@mui/system"
import { Drawer, Grid, Typography, useMediaQuery, Divider, Fab } from "@mui/material"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

import MenuIcon from '@mui/icons-material/Menu';

import '../App.css'
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import React, { useState } from "react";
import HeaderMobile from "./HeaderMobile";

import cargarSeccionesComplementarias from "../helpers/cargarSeccionesComplementarias";

const EntradaMenuMobile = (titulo, icono, ruta) => {
    return (
        <Grid item container
            component="li"
        >
            <Grid item container
                component={Link}
                to={ruta}
                sx={{
                    textDecoration: 'none',
                    '&:hover, &:focus': {
                        transform: 'translatex(-4px)'
                    },
                    transition: 'transform .1s ease-in-out'
                }}
                justifyContent='flex-end'
                alignItems='center'
                spacing={1}
                color="primary.contrastText"
            >
                <Grid item>
                    <Typography variant="h3">
                        {titulo}
                    </Typography>
                </Grid>
                <Grid item>
                    {icono}
                </Grid>
            </Grid>
        </Grid>
    )
}

const HeaderButton = styled(Button)({
    fontSize: '1.5em',
    padding: '15px 35px',
    borderRadius: '0 0 10px 10px',
    fontWeight: 'bold',
    "&:hover, &:focus": {
        transform: 'translatey(-2px) rotate(1deg)'
    }
});

const MyDivider = (
    <Grid item sx={{ width: '100%' }}>
        <Divider sx={{ width: '100%', borderBottomWidth: 0.3, bgcolor: 'primary.contrastText' }} />
    </Grid>
)


const espacioIconos = 1;

export default function Header(props) {

    const theme = useTheme();
    const esMobile = useMediaQuery(theme.breakpoints.down('lg'));
    const esLandscape = useMediaQuery('(orientation: landscape)');

    const [headerMobileAbierto, setHeaderMobileAbierto] = useState(false);

    const secciones = cargarSeccionesComplementarias();

    const buttonHeaderMobile = (
        <Fab
            variant="contained"
            color="primary"
            size="large"
            sx={{
                position: 'fixed',
                top: 0,
                right: 0,
                m: 2,
                zIndex: 99
            }}
            aria-label="Abrir menú de navegación"
            onClick={() => setHeaderMobileAbierto(!headerMobileAbierto)}
        >
            <MenuIcon fontSize="large" />
        </Fab>
    )

    return (
        <>
            {!esMobile ? (
                <nav>
                    <Grid
                        container
                        spacing={5}
                        justifyContent="center"
                        wrap={false}
                        sx={{
                            mb: 2,
                            listStyle: 'none'
                        }}
                        component="ul"
                    >
                        {secciones.map(sc =>
                            <Grid item component="li">
                                <HeaderButton
                                    variant="contained"
                                    size="large"
                                    startIcon={sc.icono}
                                    onClick={() => props.renderSeccionComplementaria(sc)}
                                >
                                    {sc.titulo}
                                </HeaderButton>
                            </Grid>
                        )}
                    </Grid>
                </nav>

            ) : (
                <HeaderMobile
                    esLandscape={esLandscape}
                    renderSeccionComplementaria={props.renderSeccionComplementaria}
                    pausar={props.pausar}
                    sacarPausa={props.sacarPausa}
                />
            )
            }
        </>
    )
}