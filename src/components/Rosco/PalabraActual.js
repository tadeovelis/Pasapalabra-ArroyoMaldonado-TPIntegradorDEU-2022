import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material";

export default function PalabraActual(props) {

    const theme = useTheme();
    const esMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const palabra = props.palabra;

    const sxProps = esMobile ? (
        {}
    ) : (
        {
            position: 'absolute',
            top: '50%',
            width: '55%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }
    )

    return (
        <Box mb={3}
            sx={sxProps}>
            <Typography gutterBottom variant="body2">
                {palabra.formato} {palabra.letra}
            </Typography>
            <Typography sx={{lineHeight: 1.3}}>
                {palabra.definicion}
            </Typography>
        </Box>
    )
}