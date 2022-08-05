
import { ButtonBase, Typography } from "@mui/material"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause } from '@fortawesome/free-solid-svg-icons'

import { motion } from "framer-motion"


export default function Pausar(props) {
    return (
        <motion.div
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ delay: .9 }}
        >
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
        </motion.div>
    )
}