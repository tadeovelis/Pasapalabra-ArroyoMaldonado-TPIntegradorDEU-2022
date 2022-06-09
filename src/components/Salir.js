
import { Button } from "@mui/material"


export default function Salir(props) {
    return (
        <div>
            <h4>Salir</h4>
            <Button
                variant="contained"
                onClick={props.salir}
                sx={{
                    background: "red"
                }}
            >X</Button>
        </div>
    )
}