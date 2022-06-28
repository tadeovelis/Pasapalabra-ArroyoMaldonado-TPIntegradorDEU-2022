
import { Button } from "@mui/material"


export default function Salir(props) {
    return (
        <div>
            <h4>Salir</h4>
            <Button
                variant="contained"
                onClick={props.salir}
                color="error"
                aria-label="Salir"
                sx={{
                    '&:focus': {
                        transform: 'scale(1.1)'
                    }
                }}
            >X</Button>
        </div>
    )
}