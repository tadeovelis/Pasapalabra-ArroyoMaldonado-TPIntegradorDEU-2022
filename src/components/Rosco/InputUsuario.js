import { IconButton, Input, TextField } from "@mui/material"
import { Button } from "@mui/material"
import { Grid } from "@mui/material"
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'
import { useState } from "react"
import styled from "@emotion/styled"


const CssTextField = styled(TextField)(({ theme }) => ({
    input: {
        color: theme.palette.input.contrastText,
    },
    '& .MuiOutlinedInput-root': {
        color: theme.palette.input.contrastText,
        '& fieldset': {
            borderColor: theme.palette.input.contrastText
        },
        '&:hover fieldset': {
            borderColor: theme.palette.input.contrastText
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.input.contrastText
        }
    },
    '& label': {
        color: theme.palette.input.contrastText,
    },
    '& label.Mui-focused': {
        color: theme.palette.input.contrastText,
    }
}));

export default function InputUsuario(props) {

    const [palabra, setPalabra] = useState('');

    const handleChange = (e) => {
        setPalabra(e.target.value)
    }

    const respondio = () => {
        props.respondio(palabra)
    }

    return (
        <div>
            <Grid container px={10} spacing={2}>
                <Grid container item xs={12}>
                    <Grid item xs={10}>
                        <CssTextField
                            id="palabra"
                            type="text"
                            onChange={handleChange}
                            placeholder="¡Ingresá aquí la palabra!"
                            label="¡Ingresá aquí la palabra!"
                        />
                    </Grid>

                    {/* Reconocimiento de voz */}
                    <Grid item xs={2}>
                        <Button
                            variant="outlined"
                            sx={{
                                borderWidth: 4,
                                borderColor: '#1976d2'
                            }}
                        >
                            <KeyboardVoiceIcon
                                sx={{ color: "#1976d2" }}
                            />
                        </Button>
                    </Grid>
                </Grid>

                <Grid container item xs={12}>
                    <Grid item xs={3}>
                        <Button
                            variant="contained"
                            onClick={props.respondioPasapalabra}
                            color="pasapalabra"
                        >
                            Pasapalabra
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            variant="contained"
                            onClick={props.respondioBien}
                            color="primary"
                        >
                            Bien
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            variant="contained"
                            onClick={props.respondioMal}
                            color="error"
                        >
                            Mal
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            variant="contained"
                            onClick={respondio}
                            color="primary"
                        >
                            Confirmar (usar este para testear el input)
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}