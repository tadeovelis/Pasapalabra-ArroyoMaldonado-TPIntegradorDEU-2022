import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion"


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
            width: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }
    )

    return (
        <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ ease: "easeInOut", duration: .5, delay: 1 }}
        >
            <Box mb={3}
                sx={sxProps}>
                <Typography gutterBottom variant="body2">
                    {palabra.formato} {palabra.letra}
                </Typography>
                <Typography sx={{ lineHeight: 1.3 }}>
                    {palabra.definicion}
                </Typography>
            </Box>
        </motion.div>
    )
}