import { Box, Typography } from "@mui/material";


export default function RespuestasCorrectas(props) {
    return (
        <div>
            <Typography variant="body2"
                sx={{
                    textTransform: 'uppercase',
                    color: 'respuestasCorrectas.main',
                    mb: 1,
                    letterSpacing: 1,
                    lineHeight: 1.2
                }}
            >Respuestas<br></br> correctas
            </Typography>
            <Box
                variant="contained"
                aria-label="Respuestas correctas"
                sx={{
                    fontSize: '2em',
                    color: 'white',
                    bgcolor: 'respuestasCorrectas.main',
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
                    {props.respuestasCorrectas}
                </Typography>
            </Box>
        </div>
    )
}