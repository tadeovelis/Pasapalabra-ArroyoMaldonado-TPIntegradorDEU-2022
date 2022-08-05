import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function BotonHome(props) {

    return (
        <>
            {!props.ruta ?
                <Button
                    variant="contained"
                    //component={Link}
                    //to={props.ruta}
                    sx={{
                        fontSize: '1.7em',
                        fontWeight: 900,
                        letterSpacing: 1,
                        borderRadius: 2.5,
                        width: '100%',
                        '&:hover, &:focus': {
                            transform: 'scalex(.98)',
                            transition: 'transform .1s ease-in-out'
                        }
                    }}
                    onClick={props.renderSeccionComplementaria}
                >
                    {props.texto}
                </Button>
                :
                <Button
                    variant="contained"
                    component={Link}
                    to={props.ruta}
                    sx={{
                        fontSize: '1.7em',
                        fontWeight: 900,
                        letterSpacing: 1,
                        borderRadius: 2.5,
                        width: '100%',
                        '&:hover, &:focus': {
                            transform: 'scalex(.98)',
                            transition: 'transform .1s ease-in-out'
                        }
                    }}
                    //onClick={props.renderSeccionComplementaria}
                >
                    {props.texto}
                </Button>
            }
        </>
    )
}