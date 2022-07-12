
import { ButtonBase, Typography } from "@mui/material"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause } from '@fortawesome/free-solid-svg-icons'

export default function Pausar(props) {
    return (
        <div>
            <Typography variant="body2"
                sx={{
                    textTransform: 'uppercase',
                    color: 'primary.main',
                    mb: 1,
                    letterSpacing: 1
                }}
            >Pausar
            </Typography>
            <ButtonBase
                variant="contained"
                onClick={props.pausar}
                color="primary"
                aria-label="Pausar"
                sx={{
                    '&:focus, &:hover': {
                        transform: 'scale(1.03)'
                    },
                    transition: 'transform .1s ease-in-out',
                    fontSize: '3em',
                    color: 'white',
                    bgcolor: 'primary.main',
                    borderRadius: 3,
                    px: 3,
                    py: 2
                }}
            >
                <FontAwesomeIcon icon={faPause}/>
            </ButtonBase>
        </div>
    )
}