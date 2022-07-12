
import { ButtonBase, Typography } from "@mui/material"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Salir(props) {
    return (
        <div>
            <Typography variant="body2"
                sx={{
                    textTransform: 'uppercase',
                    color: 'error.main',
                    mb: 1,
                    letterSpacing: 1
                }}
            >Salir
            </Typography>
            <ButtonBase
                variant="contained"
                onClick={props.salir}
                aria-label="Salir"
                sx={{
                    '&:focus, &:hover': {
                        transform: 'scale(1.03)'
                    },
                    transition: 'transform .1s ease-in-out',
                    fontSize: '3em',
                    color: 'white',
                    bgcolor: 'error.main',
                    borderRadius: 3,
                    px: 3,
                    py: 2
                }}
            >
                <FontAwesomeIcon icon={faXmark} />
            </ButtonBase>
        </div>
    )
}