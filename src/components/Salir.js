
import { ButtonBase, Typography } from "@mui/material"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"


export default function Salir(props) {
    return (
        <motion.div
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ delay: .7 }}
        >
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
                    '&:hover': {
                        transform: 'scale(1.05)'
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
        </motion.div>
    )
}