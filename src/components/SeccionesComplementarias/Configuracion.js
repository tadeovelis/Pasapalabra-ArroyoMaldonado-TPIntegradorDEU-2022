import SeccionComplementaria from "./SeccionComplementaria"

import SettingsIcon from '@mui/icons-material/Settings';
import { Grid, Slider, Switch, Typography, Button, Divider, FormControl, MenuItem, Select, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

import configuracion from '../../data/configuracion.json'
import { useTheme } from "@emotion/react";

import InfoIcon from '@mui/icons-material/Info';


const espacioIconos = 2;

const divider = (
    <Grid item sx={{ width: '100%' }}>
        <Divider sx={{ width: '100%', borderBottomWidth: 2 }} />
    </Grid>
)

// Devuelve el texto para los tamaños de letra
const valueLabelFormat = (value) => {
    return configuracion.tamañosLetra.find(t => t.value === value).texto
}


export default function Configuracion(props) {

    const opcionesConfigurables = props.opcionesConfigurables;

    const [hayCambiosDeTamañoDeLetraAAplicar, setHayCambiosDeTamañoDeLetraAAplicar] = useState(false);

    const theme = useTheme();
    const esMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const colorMobileDetalles = (!esMobile ? 'primary.oscuro' : 'primary.contrastText');

    // Se ejecuta cuando se mueve el slider
    const cambiarTamañoLetra = (e) => {
        opcionesConfigurables.tamañoLetra.setter(e.target.value);
    };

    const cambiarTemaDeColores = (e) => {
        opcionesConfigurables.tema.setter(e.target.value);
    }

    const chequearSiHayCambiosDeTamañoLetraAAplicar = () => {
        if (opcionesConfigurables.tamañoLetra.value !== theme.typography.fontSize)
            setHayCambiosDeTamañoDeLetraAAplicar(true)
        else setHayCambiosDeTamañoDeLetraAAplicar(false)
    }

    useEffect(() => {
        chequearSiHayCambiosDeTamañoLetraAAplicar();
    }, [opcionesConfigurables.tamañoLetra.value])

    const DetallesOpcion = (props) => {
        return (
            <Grid item container spacing={1} xs={6} wrap="nowrap">
                <Grid item><InfoIcon color={colorMobileDetalles}></InfoIcon></Grid>
                <Grid item><Typography color={colorMobileDetalles} variant="body2" sx={{ textAlign: 'left' }}>
                    {props.texto}
                </Typography>
                </Grid>
            </Grid>
        )
    }


    return (
        <SeccionComplementaria
            titulo="Configuración"
            icono={<SettingsIcon sx={{ mr: espacioIconos, fontSize: 30 }} />}
            backgroundColor="white"
            contenido={
                <>
                    <Grid
                        container
                        display="flex"
                        color={!esMobile ? "primary.main" : "primary.contrastText"}
                        spacing={2}
                    >

                        {opcionesConfigurables.switchers.map(s => {
                            return (
                                <>
                                    <Grid item container alignItems="center" justifyContent="space-between"
                                        spacing={2}
                                    >
                                        <Grid item container alignItems="center" xs={6}
                                            spacing={2}
                                            sx={{
                                                textAlign: 'left'
                                            }}
                                        >
                                            <Grid item xs={12} lg='auto'><Typography variant="h3">{s.titulo}</Typography></Grid>
                                            <Grid item>
                                                <Switch
                                                    name={s.name}
                                                    size="large"
                                                    checked={s.value}
                                                    onChange={e => s.setter(e.target.checked)}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />
                                            </Grid>
                                        </Grid>
                                        <DetallesOpcion
                                            texto={s.textoDetalle}
                                        />
                                    </Grid>
                                    {divider}
                                </>
                            )
                        })}

                        <Grid item container alignItems="center" justifyContent="space-between"
                            spacing={{
                                xs: 2,
                                sm: 2,
                                lg: 2
                            }}
                        >
                            <Grid item container alignItems="center" spacing={2} xs={6}
                                sx={{
                                    textAlign: 'left'
                                }}
                            >
                                <Grid item><Typography variant="h3">{opcionesConfigurables.tamañoLetra.titulo}</Typography></Grid>
                                <Grid item>
                                    <Slider
                                        name={opcionesConfigurables.tamañoLetra.name}
                                        aria-label={opcionesConfigurables.tamañoLetra.titulo}
                                        value={opcionesConfigurables.tamañoLetra.value}
                                        onChange={cambiarTamañoLetra}
                                        max={configuracion.tamañosLetra[configuracion.tamañosLetra.length - 1].value}
                                        min={configuracion.tamañosLetra[0].value}
                                        step={null}
                                        marks={configuracion.tamañosLetra}
                                        valueLabelDisplay="auto"
                                        valueLabelFormat={valueLabelFormat}
                                        sx={{
                                            minWidth: 100
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        disabled={!hayCambiosDeTamañoDeLetraAAplicar}
                                        onClick={props.aplicarCambioTamañoLetra}
                                    >¡Aplicar!
                                    </Button>
                                </Grid>
                            </Grid>
                            <DetallesOpcion
                                texto={opcionesConfigurables.tamañoLetra.textoDetalle}
                            />
                        </Grid>
                        {divider}

                        <Grid item container alignItems="center" justifyContent="space-between"
                            spacing={{
                                xs: 3,
                                sm: 2,
                                lg: 2
                            }}
                        >
                            <Grid item container alignItems="center" spacing={2} xs={6}
                                sx={{
                                    textAlign: 'left'
                                }}
                            >
                                <Grid item><Typography variant="h3">{opcionesConfigurables.tema.titulo}</Typography></Grid>
                                <Grid item>
                                    <FormControl fullWidth
                                        sx={{
                                            maxWidth: {
                                                xs: 150,
                                                lg: 'inherit'
                                            }
                                        }}
                                    >
                                        <Select
                                            name={opcionesConfigurables.tema.name}
                                            disabled={opcionesConfigurables.tema.estado}
                                            labelId={opcionesConfigurables.tema.name}
                                            id={opcionesConfigurables.tema.name}
                                            value={opcionesConfigurables.tema.value}
                                            label={opcionesConfigurables.tema.titulo}
                                            onChange={cambiarTemaDeColores}
                                            sx={{
                                                color: {
                                                    xs: 'white',
                                                    sm: 'inherit',
                                                    lg: 'inherit'
                                                },
                                                '.MuiOutlinedInput-notchedOutline': {
                                                    borderColor: {
                                                        xs: 'white',
                                                        sm: 'inherit',
                                                        lg: 'inherit'
                                                    }
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: {
                                                        xs: 'white',
                                                        sm: 'inherit',
                                                        lg: 'inherit'
                                                    }
                                                },
                                                '.MuiSelect-icon': {
                                                    fill: {
                                                        xs: 'white',
                                                        sm: 'inherit',
                                                        lg: 'inherit'
                                                    }
                                                }
                                            }}
                                        >
                                            {opcionesConfigurables.tema.temas.map(t =>
                                                <MenuItem value={t.value}>{t.texto}</MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <DetallesOpcion
                                texto={opcionesConfigurables.tema.textoDetalle}
                            />
                        </Grid>
                        {divider}

                    </Grid>
                </>
            }
        />
    )
}