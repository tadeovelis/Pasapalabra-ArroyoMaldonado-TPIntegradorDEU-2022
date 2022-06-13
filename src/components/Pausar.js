
import { Button } from "@mui/material"

export default function Pausar(props) {
    return (
        <div>
            <h4>Pausar</h4>
            <Button
                variant="contained"
                onClick={props.pausar}
                color="primary"
            >||
            </Button>
        </div>
    )
}