import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import SettingsIcon from '@mui/icons-material/Settings';


export default function BotonConfiguracion(props) {
    return (
        <Button
            variant="contained"
            component={Link}
            sx={{
                fontWeight: '500',
                borderRadius: 100,
                height: '1em',
                width: '1em',
                p: 4,
                transform: 'rotate(0deg)',
                transition: 'transform .1s ease-in-out',
                '&:hover': {
                    transform: 'rotate(180deg)',
                    transition: 'transform .5s ease-in-out'
                }
            }}
            to="/configuracion"
        >
            <SettingsIcon sx={{
                fontSize: '3em'
            }}/>
        </Button>
    )
}