import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function BoxItemSeccionComplementaria(props) {
    return (
        <Box sx={{ textAlign: 'left', mb: 3 }} tabIndex={0}>
            <Typography
                variant='h3'
                sx={{
                    textTransform: 'uppercase',
                    mt: 0,
                    mb: 1
                }}
            >
                {props.titulo}
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    lineHeight: 1.2,
                    m: 0
                }}    
            >
                {props.contenido}
            </Typography>
            {props.extra}
        </Box>
    )
}