import { Divider, Drawer, Fab, Grid, Typography } from "@mui/material";
import { useState } from "react";

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";


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




export default function HeaderMobile(props) {

    const [headerMobileAbierto, setHeaderMobileAbierto] = useState(false);
    const esLandscape = props.esLandscape;

    const buttonHeaderMobile = (
        <Fab
            variant="contained"
            color="primary"
            size="large"
            sx={{
                position: (esLandscape && headerMobileAbierto) ? 'absolute' : 'fixed',
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

    const HeaderMobileDivider = (
        <Grid item sx={{ width: !esLandscape ? '100%' : '0' }}>
            <Divider sx={{ width: '100%', borderBottomWidth: 0.3, bgcolor: 'primary.contrastText' }} />
        </Grid>
    )

    return (
        <>
            {buttonHeaderMobile}

            <Drawer
                anchor='right'
                open={headerMobileAbierto}
                onClose={() => setHeaderMobileAbierto(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        height: !esLandscape ? 'fit-content' : '80vh',
                        borderRadius: '0px 0px 0px 50px'
                    },

                }}

            >
                <Grid
                    container
                    sx={{
                        width: !esLandscape ? '80vw' : 'fit-content',
                        color: 'primary.contrastText',

                    }}
                >
                    <Grid container item
                        sx={{
                            bgcolor: 'primary.oscuro',
                            pl: 5,
                            pr: 3,
                            py: 4,
                        }}>
                        <Grid item>
                            <Typography variant="h1" sx={{ textTransform: 'uppercase' }}>
                                Menú
                            </Typography>
                        </Grid>
                        {buttonHeaderMobile}
                    </Grid>

                    <Grid item container
                        component="nav"
                    >
                        <Grid container item
                            spacing={1.5}
                            direction="column"
                            alignItems="flex-end"
                            sx={{
                                bgcolor: 'primary.medio', px: 3, pb: 3, pt: 1, m: 0
                            }}
                            component="ul"
                        >
                            {EntradaMenuMobile("Ir a la bienvenida", <HomeIcon fontSize="large" />, "/")}
                            {HeaderMobileDivider}
                            {EntradaMenuMobile("¿Cómo jugar?", <HelpOutlineIcon fontSize="large" />, "/como-jugar")}
                            {HeaderMobileDivider}
                            {EntradaMenuMobile("Glosario", <ImportContactsIcon fontSize="large" />, "/glosario")}
                            {HeaderMobileDivider}
                            {EntradaMenuMobile("Acerca del juego", <PeopleOutlineIcon fontSize="large" />, "/acerca-de-la-app")}
                            {HeaderMobileDivider}
                            {EntradaMenuMobile("Configuración", <SettingsIcon fontSize="large" />, "/configuracion")}
                        </Grid>
                    </Grid>
                </Grid>
            </Drawer>
        </>
    )
}