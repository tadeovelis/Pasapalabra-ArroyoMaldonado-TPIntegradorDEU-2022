import SeccionComplementaria from "./SeccionComplementaria"

import SettingsIcon from '@mui/icons-material/Settings';
import { FormControlLabel, Grid, Slider, Switch, Typography, Button, Divider, FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { useEffect, useState } from "react";

import configuracion from '../../data/configuracion.json'
import { useTheme } from "@emotion/react";

const espacioIconos = 2;

const configuraciones = {

}

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

    const [musica, setMusica] = useState(true);
    const [lecturaPreguntas, setLecturaPreguntas] = useState(false);
    const [contrasteColores, setContrasteColores] = useState(false);
    const [tamañoLetra, setTamañoLetra] = useState(configuracion.tamañoLetraPredeterminado);
    const [efectosSonidos, setEfectosSonidos] = useState(false);
    const [respuestaPorVoz, setRespuestaPorVoz] = useState(false);
    const [tema, setTema] = useState("claro");

    const [hayCambiosDeTamañoDeLetraAAplicar, setHayCambiosDeTamañoDeLetraAAplicar] = useState(false);

    const theme = useTheme();

    // Se ejecuta cuando se mueve el slider
    const cambiarTamañoLetra = (e) => {
        setTamañoLetra(e.target.value);
    };

    // Lo ejecuta el botón "Aplicar"
    const aplicarCambioTamañoLetra = () => {
        aplicarConfiguraciones();
    }

    const chequearSiHayCambiosDeTamañoLetraAAplicar = () => {
        if (tamañoLetra !== theme.typography.fontSize)
            setHayCambiosDeTamañoDeLetraAAplicar(true)
        else setHayCambiosDeTamañoDeLetraAAplicar(false)
    }

    useEffect(() => {
        chequearSiHayCambiosDeTamañoLetraAAplicar();
    }, [tamañoLetra])

    const cambiarTemaDeColores = (e) => {
        setTema(e.target.value);
    }

    // Cuando se cambia alguno, aplico los cambios (excepto el tamaño de letra que es manual)
    useEffect(() => {
        aplicarConfiguraciones();
    }, [musica, tema, lecturaPreguntas, contrasteColores, efectosSonidos, respuestaPorVoz])

    const aplicarConfiguraciones = () => {
        props.cambiarTema((
            {
                'musica': musica,
                'lecturaPreguntas': lecturaPreguntas,
                'contrasteColores': contrasteColores,
                'tamañoLetra': tamañoLetra,
                'efectosSonidos': efectosSonidos,
                'respuestaPorVoz': respuestaPorVoz,
                'tema': tema
            }
        ));
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
                                    checked={musica}
                                    onChange={e => setMusica(e.target.checked)}
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
                                    checked={lecturaPreguntas}
                                    onChange={e => setLecturaPreguntas(e.target.checked)}
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
                                    checked={contrasteColores}
                                    onChange={e => setContrasteColores(e.target.checked)}
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
                                    checked={efectosSonidos}
                                    onChange={e => setEfectosSonidos(e.target.checked)}
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
                                    checked={respuestaPorVoz}
                                    onChange={e => setRespuestaPorVoz(e.target.checked)}
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
                                    value={tamañoLetra}
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
                                    onClick={aplicarCambioTamañoLetra}
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
                                        labelId="tema"
                                        id="tema"
                                        value={tema}
                                        label="Tema"
                                        onChange={cambiarTemaDeColores}
                                    >
                                        <MenuItem value="claro">Claro (predeterminado)</MenuItem>
                                        <MenuItem value="oscuro">Oscuro</MenuItem>
                                        <MenuItem value="raro">Raro</MenuItem>
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