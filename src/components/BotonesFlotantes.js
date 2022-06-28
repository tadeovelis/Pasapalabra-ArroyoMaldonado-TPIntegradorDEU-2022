import { Button, Slider } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";


export default function BotonesFlotantes() {

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

    return (
        <div>
            {/* Botón HOME */}
            <Button
                variant="contained"
                component={Link}
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
                to="/"
            >
                <HomeIcon fontSize="large" />
            </Button>

            {/* Botón CONFIGURACIÓN */}
            <Button
                variant="contained"
                component={Link}
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
                to="/configuracion"
            >
                <SettingsIcon fontSize="large" />
            </Button>

        </div>
    )
}