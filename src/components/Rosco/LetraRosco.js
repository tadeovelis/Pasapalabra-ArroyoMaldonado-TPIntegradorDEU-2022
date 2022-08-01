import { useTheme } from "@emotion/react";
import { Typography, Box, useMediaQuery } from "@mui/material";
import { useEffect } from "react";


export default function Letra(props) {

    const theme = useTheme();
    const esMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const sizeRosco = props.sizeRosco;
    const radio = sizeRosco/2;
    const sizeFondoLetra = sizeRosco / 10;
    const negMargin = Math.round(sizeFondoLetra/2)*(-1);

    const palabra = props.palabra;
    //const transformBox = 'rotate(calc(-90deg + ' + props.indice + ' * (360deg / 26))) translate(calc(' + sizeRosco + '/ 2))';
    const transformBox = 'rotate(calc(-90deg + ' + props.indice + ' * (360deg / 26))) translate('+radio+'px)';
    const transformTypo = 'rotate(calc(90deg - ' + props.indice + ' * (360deg / 26)))';

    

    // Le doy un color rápido para identificar el estado
    function getColor() {
        switch (palabra.estado) {
            case 1:
                return 'success.main'
            case 2:
                return 'error.main'
            case 3:
                return 'pasapalabra.main'
            default:
                return 'primary.main'
        }
    }

    return (
        <Box
            sx={{
                width: sizeFondoLetra +'px',
                height: sizeFondoLetra +'px',
                bgcolor: getColor(),
                borderRadius: "50%",
                left: '50%',
                top: '50%',
                marginLeft: negMargin +'px',
                marginTop: negMargin +'px',
                position: "absolute",
                transform: transformBox,
            }}
        >
            <Typography
                sx={{
                    fontWeight: "bold",
                    color: "primary.contrastText",
                    transform: transformTypo,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%'
                }}>
                {palabra.letra}
            </Typography>
        </Box>
    )
}