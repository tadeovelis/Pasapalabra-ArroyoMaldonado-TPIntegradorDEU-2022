import { Input } from "@mui/material"
import { Button } from "@mui/material"
import { Grid } from "@mui/material"

export default function InputUsuario(props) {
    return (
        <div>
            <Grid container px={10}>
                <Grid item xs={12}>
                    <Input
                        placeholder="¡Ingresá aquí la palabra!"
                    >
                        Asdas
                    </Input>
                </Grid>
                <Grid item xs={4}>
                    <Button
                        variant="contained"
                        onClick={props.respondioPasapalabra}
                        sx={{
                            background: "yellow"
                        }}>
                        Pasapalabra
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button
                        variant="contained"
                        onClick={props.respondioBien}
                    >
                        Bien
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button
                        variant="contained"
                        onClick={props.respondioMal}
                    >
                        Mal
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}