import { useTheme } from "@emotion/react";
import { Typography, Box, useMediaQuery } from "@mui/material";

import { getColor, getIcon } from '../../helpers/estadoDePalabra';

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


    return (
        <div>
            <Box
                sx={{
                    width: sizeFondoLetra + unidad,
                    height: sizeFondoLetra + unidad,
                    bgcolor: getColor(palabra.estado),
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
                {getIcon(palabra.estado, transformTypo)}
            </Box>
        </div>
    )
}