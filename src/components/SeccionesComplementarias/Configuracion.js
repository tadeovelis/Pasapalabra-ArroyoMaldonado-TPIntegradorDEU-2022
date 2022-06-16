import SeccionComplementaria from "./SeccionComplementaria"

import SettingsIcon from '@mui/icons-material/Settings';
import { Grid, Slider, Switch, Typography, Button, Divider, FormControl, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

import configuracion from '../../data/configuracion.json'
import { useTheme } from "@emotion/react";

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

    const setters = props.settersConfiguraciones;
    const c = props.configuraciones;

    const [hayCambiosDeTamañoDeLetraAAplicar, setHayCambiosDeTamañoDeLetraAAplicar] = useState(false);

    const theme = useTheme();

    // Se ejecuta cuando se mueve el slider
    const cambiarTamañoLetra = (e) => {
        setters.tamañoLetra(e.target.value);
    };

    const chequearSiHayCambiosDeTamañoLetraAAplicar = () => {
        if (c.tamañoLetra !== theme.typography.fontSize)
            setHayCambiosDeTamañoDeLetraAAplicar(true)
        else setHayCambiosDeTamañoDeLetraAAplicar(false)
    }

    useEffect(() => {
        chequearSiHayCambiosDeTamañoLetraAAplicar();
    }, [c.tamañoLetra])

    const cambiarTemaDeColores = (e) => {
        setters.tema(e.target.value);
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
                        color="primary.main"
                        spacing={2}
                    >
                        <Grid item container alignItems="center" spacing={2}>
                            <Grid item><Typography variant="h3">Música</Typography></Grid>
                            <Grid item>
                                <Switch
                                    name="musica"
                                    size="large"
                                    checked={c.musica}
                                    onChange={e => setters.musica(e.target.checked)}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </Grid>
                        </Grid>

                        {divider}

                        <Grid item container alignItems="center" spacing={2}>
                            <Grid item><Typography variant="h3">Lectura de preguntas</Typography></Grid>
                            <Grid item>
                                <Switch
                                    name="lectura-preguntas"
                                    size="large"
                                    checked={c.lecturaPreguntas}
                                    onChange={e => setters.lecturaPreguntas(e.target.checked)}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </Grid>
                        </Grid>

                        {divider}

                        <Grid item container alignItems="center" spacing={2}>
                            <Grid item><Typography variant="h3">Contraste de colores</Typography></Grid>
                            <Grid item>
                                <Switch
                                    name="contraste-colores"
                                    size="large"
                                    checked={c.contrasteColores}
                                    onChange={e => setters.contrasteColores(e.target.checked)}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </Grid>
                        </Grid>

                        {divider}

                        <Grid item container alignItems="center" spacing={2}>
                            <Grid item><Typography variant="h3">Efectos de sonido</Typography></Grid>
                            <Grid item>
                                <Switch
                                    name="efectos-sonidos"
                                    size="large"
                                    checked={c.efectosSonidos}
                                    onChange={e => setters.efectosSonidos(e.target.checked)}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </Grid>
                        </Grid>

                        {divider}

                        <Grid item container alignItems="center" spacing={2}>
                            <Grid item><Typography variant="h3">Respuesta por voz</Typography></Grid>
                            <Grid item>
                                <Switch
                                    name="respuesta-por-voz"
                                    size="large"
                                    checked={c.respuestaPorVoz}
                                    onChange={e => setters.respuestaPorVoz(e.target.checked)}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </Grid>
                        </Grid>

                        {divider}

                        <Grid item container alignItems="center" spacing={2}>
                            <Grid item><Typography variant="h3">Tamaño de letra</Typography></Grid>
                            <Grid item>
                                <Slider
                                    aria-label="Tamaño letra"
                                    value={c.tamañoLetra}
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

                        {divider}

                        <Grid item container alignItems="center" spacing={2}>
                            <Grid item><Typography variant="h3">Tema de colores</Typography></Grid>
                            <Grid item>
                                <FormControl fullWidth>
                                    <Select
                                        disabled={c.contrasteColores}
                                        labelId="tema"
                                        id="tema"
                                        value={c.tema}
                                        label="Tema"
                                        onChange={cambiarTemaDeColores}
                                    >
                                        <MenuItem value="claro">Claro (predeterminado)</MenuItem>
                                        <MenuItem value="oscuro">Oscuro</MenuItem>
                                        <MenuItem value="extra">Extra</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                    </Grid>

                </>
            }
        />
    )
}