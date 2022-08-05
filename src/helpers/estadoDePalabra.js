import BienIcon from '@mui/icons-material/ThumbUp';
import MalIcon from '@mui/icons-material/ThumbDown';
import PasapalabraIcon from '@mui/icons-material/RestartAlt';

// Devuelve el color dependiendo el estado de la palabra
export function getColor(estado) {
    switch (estado) {
        case 1:
            return 'success.main'
        case 2:
            return 'error.main'
        case 3:
            return 'pasapalabra.main'
        case 4:
            return 'current.main'
        default:
            return 'primary.main'
    }
}

// Devuelve el icono dependiendo el estado de la palabra.
// además, necesita un transform para ubicarlo bien
export function getIcon(estado, transform) {
    const icons = {
        bien: BienIcon,
        mal: MalIcon,
        pasapalabra: PasapalabraIcon
    };

    let tipoIcono = "";
    switch (estado) {
        case 1:
            tipoIcono = "bien";
            break;
        case 2:
            tipoIcono = "mal";
            break;
        case 3:
            tipoIcono = "pasapalabra";
            break;
        default:
            return false
    };

    const Icon = icons[tipoIcono];
    return (
        <Icon
            sx={{
                transform: transform,
                color: getColor(estado)
            }}
        />
    )
}