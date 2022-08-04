import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SettingsIcon from '@mui/icons-material/Settings';

import AcercaDeLaApp from '../components/SeccionesComplementarias/AcercaDeLaApp';
import ComoJugar from '../components/SeccionesComplementarias/ComoJugar';
import Configuracion from '../components/SeccionesComplementarias/Configuracion';
import Glosario from '../components/SeccionesComplementarias/Glosario';

const espacioIconos = 1;


export default function cargarSeccionesComplementarias() {
    
    const seccionesComplementarias = [
        {
            id: 1,
            ruta: "como-jugar",
            titulo: "Cómo jugar",
            icono: <HelpOutlineIcon sx={{ mr: espacioIconos, fontSize: 30 }} />,
            componente: <ComoJugar />
        },
        {
            id: 2,
            ruta: "glosario",
            titulo: "Glosario",
            icono: <ImportContactsIcon sx={{ mr: espacioIconos, fontSize: 30 }} />,
            componente: <Glosario />
        },
        {
            id: 3,
            ruta: "acerca-de-la-app",
            titulo: "Acerca del juego",
            icono: <PeopleOutlineIcon sx={{ mr: espacioIconos, fontSize: 30 }} />,
            componente: <AcercaDeLaApp />
        }
    ]

    return seccionesComplementarias
}

export function cargarSeccionComplementariaConfiguracion() {
    return {
        id: 4,
        titulo: "Configuración",
        icono: <SettingsIcon fontSize="large" />,
        componente: <Configuracion />
    }
}