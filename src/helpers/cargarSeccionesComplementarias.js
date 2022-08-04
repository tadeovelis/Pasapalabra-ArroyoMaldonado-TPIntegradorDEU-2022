import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

import AcercaDeLaApp from '../components/SeccionesComplementarias/AcercaDeLaApp';
import ComoJugar from '../components/SeccionesComplementarias/ComoJugar';
import Glosario from '../components/SeccionesComplementarias/Glosario';

const espacioIconos = 1;


export default function cargarSeccionesComplementarias() {
    
    const seccionesComplementarias = [
        {
            id: 0,
            titulo: "Cómo jugar",
            icono: <HelpOutlineIcon sx={{ mr: espacioIconos, fontSize: 30 }} />,
            componente: <ComoJugar />
        },
        {
            id: 1,
            titulo: "Glosario",
            icono: <ImportContactsIcon sx={{ mr: espacioIconos, fontSize: 30 }} />,
            componente: <Glosario />
        },
        {
            id: 2,
            titulo: "Acerca del juego",
            icono: <PeopleOutlineIcon sx={{ mr: espacioIconos, fontSize: 30 }} />,
            componente: <AcercaDeLaApp />
        }
    ]

    return seccionesComplementarias
}