import { useTheme } from "@emotion/react";
import { Typography, Box, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import BienIcon from '@mui/icons-material/ThumbUp';
import MalIcon from '@mui/icons-material/ThumbDown';
import PasapalabraIcon from '@mui/icons-material/RestartAlt';


export default function Letra(props) {

    const theme = useTheme();
    const esMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const unidad = props.usarPixeles ? 'px' : 'em';

    const sizeRosco = props.sizeRosco;
    const radio = sizeRosco / 2;
    const sizeFondoLetra = sizeRosco / 10;
    const negMargin = Math.round(sizeFondoLetra / 2) * (-1);
    const shiftRadioIcon = props.usarPixeles ? 30 : 2.4;
    const shiftNegMarginLeftIcon = props.usarPixeles ? 7 : 0.5;
    const shiftNegMarginTopIcon = props.usarPixeles ? 3 : 0.3;

    const palabra = props.palabra;
    //const transformBox = 'rotate(calc(-90deg + ' + props.indice + ' * (360deg / 26))) translate(calc(' + sizeRosco + '/ 2))';
    const transformBox = 'rotate(calc(-90deg + ' + props.indice + ' * (360deg / 26))) translate(' + radio + unidad + ')';
    const transformTypo = 'rotate(calc(90deg - ' + props.indice + ' * (360deg / 26)))';
    const transformIcon = 'rotate(calc(-90deg + ' + props.indice + ' * (360deg / 26))) translate(' + (radio - shiftRadioIcon) + unidad + ') scale(.8)';


    // Le doy un color rápido para identificar el estado
    function getColor() {
        switch (palabra.estado) {
            case 1:
                return 'success.main'
            case 2:
                return 'error.main'
            case 3:
                return 'pasapalabra.main'
            case 4:
                return 'current.main'
            default:
                return 'primary.main'
        }
    }

    // Devuelve el icono correspondiente
    function getIcon() {
        console.log(palabra.estado);
        const icons = {
            bien: BienIcon,
            mal: MalIcon,
            pasapalabra: PasapalabraIcon
        };

        let tipoIcono = "";
        switch (palabra.estado) {
            case 1:
                tipoIcono = "bien";
                break;
            case 2:
                tipoIcono = "mal";
                break;
            case 3:
                tipoIcono = "pasapalabra";
                break;
            default:
                return false
        };

        const Icon = icons[tipoIcono];
        return (
            <Icon
                sx={{
                    transform: transformTypo,
                    color: getColor()
                }}
            />
        )
    }

    return (
        <div>
            <Box
                sx={{
                    width: sizeFondoLetra + unidad,
                    height: sizeFondoLetra + unidad,
                    bgcolor: getColor(),
                    borderRadius: "50%",
                    left: '50%',
                    top: '50%',
                    marginLeft: negMargin + unidad,
                    marginTop: negMargin + unidad,
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
                        position: 'relative',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%'
                    }}>
                    {palabra.letra}
                </Typography>
            </Box>
            <Box
                sx={{
                    left: '50%',
                    top: '50%',
                    marginLeft: (negMargin + shiftNegMarginLeftIcon) + unidad,
                    marginTop: (negMargin + shiftNegMarginTopIcon) + unidad,
                    position: "absolute",
                    transform: transformIcon,
                }}
            >
                {getIcon()}
            </Box>
        </div>
    )
}