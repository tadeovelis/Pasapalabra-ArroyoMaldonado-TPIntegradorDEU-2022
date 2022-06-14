import { Box, Typography } from "@mui/material";

export default function PalabraActual(props) {

    const palabra = props.palabra;

    return (
        <Box mb={3}>
            <Typography gutterBottom variant="body1">
                {palabra.formato} {palabra.letra}
            </Typography>
            <Typography>
                {palabra.definicion}
            </Typography>
        </Box>
    )
}