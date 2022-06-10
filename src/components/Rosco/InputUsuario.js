import { IconButton, Input } from "@mui/material"
import { Button } from "@mui/material"
import { Grid } from "@mui/material"
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'
import { useState } from "react"

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
                        <Input
                            id="palabra"
                            type="text"
                            onChange={handleChange}
                            placeholder="¡Ingresá aquí la palabra!"
                        >

                            
                        </Input>
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
                            sx={{
                                background: "yellow"
                            }}>
                            Pasapalabra
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            variant="contained"
                            onClick={props.respondioBien}
                        >
                            Bien
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            variant="contained"
                            onClick={props.respondioMal}
                        >
                            Mal
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            variant="contained"
                            onClick={respondio}
                        >
                            Confirmar (usar este para testear el input)
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}