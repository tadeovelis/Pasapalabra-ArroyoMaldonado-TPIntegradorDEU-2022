import { Button, Slider } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";

import { cargarSeccionComplementariaConfiguracion } from '../helpers/cargarSeccionesComplementarias';

import ModalConfirmacionConfiguracion from './Modals/ModalConfirmacionConfiguracion'
import ModalConfirmacionHome from "./Modals/ModalConfirmacionHome";


export default function BotonesFlotantes(props) {

    const [modalConfiguracionAbierto, setModalConfiguracionAbierto] = useState(false);
    const [modalSalirAbierto, setModalSalirAbierto] = useState(false);

    const navigate = useNavigate();

    const [tamañoLetra, setTamañoLetra] = useState(0);
    const theme = useTheme();

    useEffect(() => {
        setTamañoLetra(theme.typography.fontSize)
    }, [])

    const cambiarTamañoLetra = (e) => {
        setTamañoLetra(e.target.value);
        theme.typography.fontSize = e.target.value;
    }

    const seccionConfiguracion = cargarSeccionComplementariaConfiguracion();

    const irAConfiguracion = () => {
        setModalConfiguracionAbierto(true);
        props.pausar();
    }
    const cerrarModalConfiguracion = () => {
        setModalConfiguracionAbierto(false);
        props.sacarPausa();
    }

    const irAlHome = () => {
        setModalSalirAbierto(true);
        props.pausar();
    }
    const cerrarModalSalir = () => {
        setModalSalirAbierto(false);
        props.sacarPausa();
    }

    return (
        <div>
            {/* Botón HOME */}
            <Button
                variant="contained"
                aria-label="Inicio"
                sx={{
                    position: 'fixed',
                    fontWeight: '500',
                    left: 0,
                    top: 0,
                    mt: 10,
                    ml: 2,
                    borderRadius: 100
                }}
                onClick={irAlHome}
            >
                <HomeIcon fontSize="large" />
            </Button>

            {/* Botón CONFIGURACIÓN */}
            <Button
                variant="contained"
                aria-label="Configuración"
                sx={{
                    position: 'fixed',
                    fontWeight: '500',
                    left: 0,
                    bottom: 80,
                    mb: 0,
                    ml: 2,
                    borderRadius: 100
                }}
                onClick={irAConfiguracion}
            >
                {seccionConfiguracion.icono}
            </Button>


            <ModalConfirmacionConfiguracion
                abierto={modalConfiguracionAbierto}
                cerrar={cerrarModalConfiguracion}
            />
            <ModalConfirmacionHome
                abierto={modalSalirAbierto}
                cerrar={cerrarModalSalir}
            />

        </div>
    )
}