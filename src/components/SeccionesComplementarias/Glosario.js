import BoxItemSeccionComplementaria from "./BoxItemSeccionComplementaria"

import palabras from '../../data/palabras.json'
import { Button, Divider, Fab, Grid, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTheme } from "@emotion/react";


const espacioIconos = 2;
const offsetScroll = -70;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 1 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const divider = (
    <Grid item sx={{ width: '100%' }}>
        <Divider sx={{ width: '100%', borderBottomWidth: 2, borderColor: 'primary.contrastText', my: 4 }} />
    </Grid>
)

export default function Glosario(props) {

    const [revelar, setRevelar] = useState(props.revelar ? props.revelar : false);
    const [tabActual, setTabActual] = useState(0);

    const window = document.querySelector('.scrollbarCustom');

    const theme = useTheme();
    const esMobile = useMediaQuery(theme.breakpoints.down('lg'));

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleChange = (e, value) => {
        setTabActual(value);
    };

    const scrollWithOffset = (el) => {
        const elementPosition = el.offsetTop - offsetScroll;
        document.querySelector('.scrollbarCustom').scrollBy({
            top: elementPosition,
            left: 0,
            behavior: 'smooth'
        });
    }

    const scrollToTop = () => {
        document.querySelector('.scrollbarCustom').scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <Box
                sx={{
                    textAlign: 'center',
                    mb: 4
                }}
            >
                <Button
                    variant="contained"
                    onClick={() => setRevelar(!revelar)}
                    sx={{
                        bgcolor: 'primary.contrastText',
                        color: 'primary.main',
                        '&:hover': {
                            transform: 'rotate(.7deg)',
                            bgcolor: 'primary.contrastText',
                            color: 'primary.main',
                        }
                    }}
                >
                    {revelar ? 'Ocultar palabras' : 'Revelar palabras'}
                </Button>
            </Box>

            <Grid container sx={{ position: 'relative', filter: !revelar && 'blur(10px)'}}>
                <Grid item xs={12}>
                    {/* ÍNDICE */}
                    <Box sx={{ borderColor: 'divider', overflowY: 'visible' }}>
                        <Typography variant="h2" sx={{mb :2}}>Índice</Typography>
                        <Tabs value={tabActual} onChange={handleChange} aria-label="Índice de letras"
                            variant="scrollable"
                            indicatorColor="primary.oscuro"
                            allowScrollButtonsMobile
                            sx={{
                                overflowY: 'visible',
                                height: 'auto',
                                p: 1,
                                bgcolor: 'primary',
                                border: 0,
                                '.MuiTabs-scroller': {
                                    overflowY: 'visible'
                                },
                                '.MuiTabs-scrollButtons': {
                                    mx:2,
                                    bgcolor: 'primary.oscuro',
                                    borderRadius: 3
                                },
                                '.MuiTabs-scrollButtons.Mui-disabled': {
                                    opacity: 0.6
                                }
                            }}
                        >
                            {palabras.map((l, i) =>
                                <Tab
                                    label={l.letra}
                                    {...a11yProps(i)}
                                    sx={{
                                        borderWidth: i == tabActual && 3,
                                        borderRadius: 10,
                                        borderStyle: 'outset',
                                        borderColor: 'primary.oscuro',
                                        fontSize: '1.2em',
                                        color: 'primary.main',
                                        //bgcolor: i == tabActual ? 'primary.oscuro' : 'primary.contrastText',
                                        bgcolor: 'primary.contrastText',
                                        mx: .5,
                                        minHeight: 'auto',
                                        minWidth: 'auto',
                                        width: '2.3em',
                                        height: '2.3em',
                                        '&:hover': {
                                            transform: 'scale(.95)'
                                        }
                                    }}
                                />
                            )}
                        </Tabs>
                    </Box>
                    {palabras.map((l, i) =>
                        <TabPanel value={tabActual} index={i}>
                            {l.palabras.map((p, j) =>
                                <Typography variant="body2" component="span"
                                    sx={{
                                        'a': {
                                            color: 'primary.contrastText',
                                            fontSize: '2em',
                                        },
                                        '&:hover': {
                                            transform: 'translatey(-3px)'
                                        },
                                        display: 'inline-block',
                                    }}
                                >
                                    <HashLink
                                        smooth
                                        scroll={el => scrollWithOffset(el)}
                                        to={"#" + p.palabra}
                                    >
                                        {(j ? ', ' : "") + p.palabra}
                                    </HashLink>
                                </Typography>
                            )}
                        </TabPanel>
                    )}
                </Grid>

                {divider}
                <Grid item xs={12}>
                    {palabras.map(l =>
                        <Box>
                            <Typography id={l.letra} gutterBottom variant="h2" sx={{ textAlign: 'left' }}>
                                {l.letra}
                            </Typography>
                            {l.palabras.map(p =>
                                <BoxItemSeccionComplementaria
                                    p={p.palabra}
                                    titulo={p.palabra ? p.palabra : '[Por definir]'}
                                    contenido={p.definicion + "."}
                                />
                            )
                            }
                        </Box>
                    )}
                </Grid>
            </Grid>

            <Fab
                sx={{
                    position: !esMobile ? 'absolute' : 'fixed',
                    right: 0,
                    bottom: 0,
                    m: 4,
                    zIndex: 99,
                }}
                arial-label="Volver arriba de todo"
                onClick={scrollToTop}
            >
                <KeyboardArrowUpIcon sx={{ fontSize: '4em', color: 'primary.main' }} />
            </Fab>





        </>
    )
}