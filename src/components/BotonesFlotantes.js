import { Button, Slider } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
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
        console.log(theme.typography.fontSize);
    }

    return (
        <div>
            <Button
                variant="contained"
                component={Link}
                sx={{
                    position: 'fixed',
                    fontWeight: '500',
                    left: 0,
                    top: 0,
                    mt: 10,
                    ml: 2,
                    borderRadius: 100
                }}
                to="/rosco"
            >
                <ArrowBackIosNewIcon fontSize="large" />
            </Button>
            
        </div>
    )
}