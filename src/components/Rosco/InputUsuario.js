import { Input } from "@mui/material"
import { Button } from "@mui/material"
import { Grid } from "@mui/material"

export default function InputUsuario() {
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
                <Grid item xs={6}>
                    <Button variant="contained"
                        sx={{
                            background: "yellow"
                        }}>
                        Pasapalabra
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained">
                        Enter
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}