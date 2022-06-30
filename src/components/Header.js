import { Box } from "@mui/system"
import { Drawer, Grid, Typography, useMediaQuery, Divider } from "@mui/material"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import MenuIcon from '@mui/icons-material/Menu';

import '../App.css'
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { useState } from "react";

const HeaderButton = styled(Button)({
    fontSize: '1.5em',
    padding: '15px 35px',
    borderRadius: '0 0 10px 10px',
    fontWeight: 'bold',
    "&:hover, &:focus": {
        transform: 'translatey(-2px) rotate(1deg)'
    }
});

const divider = (
    <Grid item sx={{ width: '100%' }}>
        <Divider sx={{ width: '100%', borderBottomWidth: 0.3, bgcolor: 'primary.contrastText' }} />
    </Grid>
)


const espacioIconos = 1;

export default function Header() {

    const theme = useTheme();
    const esMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [headerMobileAbierto, setHeaderMobileAbierto] = useState(false);

    const buttonHeaderMobile = (
        <Button
            variant="contained"
            sx={{
                borderRadius: '20px',
                position: 'fixed',
                top: 0,
                right: 0,
                m: 2,
                zIndex: 99
            }}
            aria-label="Abrir menú de navegación"
            onClick={() => setHeaderMobileAbierto(!headerMobileAbierto)}
        >
            <MenuIcon />
        </Button>
    )

    return (
        <>
            {!esMobile ? (
                <Grid
                    container
                    spacing={5}
                    justifyContent="center"
                    wrap={false}
                    sx={{
                        mb: 2
                    }}
                >
                    <Grid item>
                        <HeaderButton
                            component={Link}
                            variant="contained"
                            to="/como-jugar"
                            size="large"
                            startIcon={<HelpOutlineIcon sx={{ mr: espacioIconos }} />}
                        >
                            ¿Cómo jugar?
                        </HeaderButton>
                    </Grid>
                    <Grid item>
                        <HeaderButton
                            component={Link}
                            size="large"
                            variant="contained"
                            to="/glosario"
                            startIcon={<ImportContactsIcon sx={{ mr: espacioIconos }} />}
                        >
                            Glosario
                        </HeaderButton>
                    </Grid>
                    <Grid item>
                        <HeaderButton
                            component={Link}
                            variant="contained"
                            size="large"
                            to="/acerca-de-la-app"
                            startIcon={<PeopleOutlineIcon sx={{ mr: espacioIconos }} />}
                        >
                            Acerca del juego
                        </HeaderButton>
                    </Grid>
                </Grid>

            ) : (

                <>
                    {buttonHeaderMobile}

                    <Drawer
                        anchor='right'
                        open={headerMobileAbierto}
                        onClose={() => setHeaderMobileAbierto(false)}
                        sx={{
                            '& .MuiDrawer-paper': {
                                height: 'fit-content',
                                borderRadius: '0px 0px 0px 50px'
                            },

                        }}

                    >
                        <Grid
                            container
                            sx={{
                                width: '70vw',
                                color: 'primary.contrastText',

                            }}
                        >
                            <Grid container item sx={{ bgcolor: 'primary.oscuro', pl: 5, pr: 3, py: 3 }}>
                                <Grid item>
                                    <Typography variant="h1">
                                        Menú
                                    </Typography>
                                </Grid>
                                {buttonHeaderMobile}
                            </Grid>
                            <Grid container item
                                spacing={1.5}
                                direction="column"
                                alignItems="flex-end"
                                sx={{
                                    bgcolor: 'primary.medio', px: 3, pb: 3, pt: 1, m: 0
                                }}
                            >
                                <Grid item>
                                    <Typography variant="h3">
                                        Ir a la bienvenida
                                    </Typography>
                                </Grid>
                                {divider}
                                <Grid item>
                                    <Typography variant="h3">
                                        ¿Cómo jugar?
                                    </Typography>
                                </Grid>
                                {divider}
                                <Grid item>
                                    <Typography variant="h3">
                                        Glosario
                                    </Typography>
                                </Grid>
                                {divider}
                                <Grid item>
                                    <Typography variant="h3">
                                        Acerca del juego
                                    </Typography>
                                </Grid>
                                {divider}
                                <Grid item>
                                    <Typography variant="h3">
                                        Opciones
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Drawer>
                </>
            )
            }
        </>
    )
}