import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function BotonHome(props) {

    return (
        <Button
            variant="contained"
            component={Link}
            to={props.ruta}
            sx={{
                px: 6,
                fontSize: '1.5em',
                fontWeight: 900,
                letterSpacing: 1,
                borderRadius: 2.5,
                minWidth: '25vw',
                '&:hover, &:focus': {
                    transform: 'scalex(.98)',
                    transition: 'transform .1s ease-in-out'
                }
            }}
        >
            {props.texto}
        </Button>
    )
}