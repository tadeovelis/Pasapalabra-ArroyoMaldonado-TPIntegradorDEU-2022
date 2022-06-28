import SeccionComplementaria from "./SeccionComplementaria"

import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import BoxItemSeccionComplementaria from "./BoxItemSeccionComplementaria"

import palabras from '../../data/palabras.json'
import { Typography } from "@mui/material";


const espacioIconos = 2;

export default function Glosario() {
    return (
        <SeccionComplementaria
            titulo="Glosario"
            icono={<ImportContactsIcon sx={{ mr: espacioIconos, fontSize: 30 }} />}
            contenido={
                /* Algunas palabras hardcodeadas a modo de ejemplo */
                palabras.map(l =>
                    <>
                        <Typography gutterBottom variant="h2" sx={{ textAlign: 'left' }}>
                            {l.letra}
                        </Typography>
                        {l.palabras.map(p =>
                            <BoxItemSeccionComplementaria
                                p={p.palabra}
                                titulo={p.palabra ? p.palabra : '[Por definir]'}
                                contenido={p.definicion}
                            />
                        )
                        }
                    </>
                )
            }
        />
    )
}