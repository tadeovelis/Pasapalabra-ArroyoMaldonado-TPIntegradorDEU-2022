
import { Button } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';


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
            >
                <CloseIcon />
            </Button>
        </div>
    )
}