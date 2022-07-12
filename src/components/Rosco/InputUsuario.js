import { IconButton, Input, TextField } from "@mui/material"
import { Button } from "@mui/material"
import { Grid } from "@mui/material"
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'
import AutorenewIcon from '@mui/icons-material/Autorenew';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useState } from "react"
import styled from "@emotion/styled"


const CssTextField = styled(TextField)(({ theme }) => ({
    input: {
        color: theme.palette.input.contrastText
    },
    '& .MuiOutlinedInput-root': {
        color: theme.palette.input.contrastText,
        '& fieldset': {
            borderColor: theme.palette.input.contrastText,
            borderRadius: '10px 0px 0px 10px',
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

    const respondio = (e) => {
        props.respondio(palabra);
        setPalabra('');
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={respondio}>
                <Grid container spacing={2}>
                    <Grid container item xs={12} alignItems="stretch" justifyContent="center" wrap={false}>
                        <Grid item>
                            <CssTextField
                                id="palabra"
                                type="text"
                                onChange={handleChange}
                                value={palabra}
                                placeholder="¡Ingresá aquí la palabra!"
                                label="¡Ingresá aquí la palabra!"
                                autoComplete="off"
                            />
                        </Grid>

                        {/* Reconocimiento de voz */}
                        <Grid item>
                            <Button
                                variant="outlined"
                                aria-label="Ingresar palabra con reconocimiento de voz"
                                onClick={() => alert("Todavía no implementado")}
                                sx={{
                                    borderWidth: 3,
                                    borderRadius: '0px 10px 10px 0px',
                                    borderColor: '#1976d2',
                                    height: '100%',
                                    '&:hover, &:focus': {
                                        borderWidth: 5
                                    }
                                }}
                            >
                                <KeyboardVoiceIcon
                                    sx={{
                                        color: "#1976d2",
                                        fontSize: '2em',
                                    }}
                                />
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container item xs={12} spacing={2} justifyContent="center">
                        <Grid item>
                            <Button
                                variant="contained"
                                onClick={props.respondioPasapalabra}
                                color="pasapalabra"
                                aria-label="Pasapalabra"
                            >
                                <AutorenewIcon />
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                aria-label="Confirmar palabra"
                            >
                                <KeyboardReturnIcon />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}