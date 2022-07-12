import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

export default function TiempoRestante(props) {
    
    const [tiempoTotal, setTiempoTotal] = useState();

    useEffect(() => {
        setTiempoTotal(props.tiempoRestante)
    }, [])

    return (
        <div>
            <Typography variant="body2"
                sx={{
                    textTransform: 'uppercase',
                    color: 'tiempoRestante.main',
                    mb: 1,
                    letterSpacing: 1,
                    lineHeight: 1.2
                }}
            >Tiempo<br></br> restante
            </Typography>
            <Box
                variant="contained"
                aria-label="Tiempo restante"
                sx={{
                    position: 'relative',
                    fontSize: '2em',
                    color: 'white',
                    bgcolor: 'tiempoRestante.main',
                    borderRadius: 100,
                    border: 5,
                    borderColor: 'lightgray',
                    px: 4,
                    py: 2,
                    width: 'fit-content',
                    m: '0 auto',
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: 700,
                        letterSpacing: -2
                    }}
                >
                    {props.tiempoRestante}
                </Typography>
            </Box>
        </div>
    )
}