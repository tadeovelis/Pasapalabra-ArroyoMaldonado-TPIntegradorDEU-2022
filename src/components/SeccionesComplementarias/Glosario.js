import SeccionComplementaria from "./SeccionComplementaria"

import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import BoxItemSeccionComplementaria from "./BoxItemSeccionComplementaria"

import palabras from '../../data/palabras.json'


const espacioIconos = 2;

export default function Glosario() {
    return (
        <SeccionComplementaria
            titulo="Glosario"
            icono={<ImportContactsIcon sx={{ mr: espacioIconos, fontSize: 30 }}/>}
            contenido={
                /* Algunas palabras hardcodeadas a modo de ejemplo */
                palabras.map(p =>
                    <BoxItemSeccionComplementaria
                        titulo={p.palabra}
                        contenido={p.definicion}
                    />
                )
            }
        />
    )
}