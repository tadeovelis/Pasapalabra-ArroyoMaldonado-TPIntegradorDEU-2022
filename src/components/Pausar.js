
import { Button } from "@mui/material"

export default function Pausar(props) {
    return (
        <div>
            <h4>Pausar</h4>
            <Button
                variant="contained"
                onClick={props.pausar}
                color="primary"
                aria-label="Pausar"
                sx={{
                    '&:focus': {
                        transform: 'scale(1.1)'
                    }
                }}
            >||
            </Button>
        </div>
    )
}