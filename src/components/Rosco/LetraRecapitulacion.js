import { Box, Typography } from "@mui/material";

import {getColor} from '../../helpers/estadoDePalabra';


export default function Letra(props) {

    const palabra = props.palabra;

    return (
        <Box
            sx={{
                bgcolor: getColor(palabra.estado),
                width: '35px',
                height: '35px',
                borderRadius: "50%",
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Typography sx={{ fontWeight: "bold", color: "primary.contrastText" }}>
                {palabra.letra}
            </Typography>
        </Box>
    )
}