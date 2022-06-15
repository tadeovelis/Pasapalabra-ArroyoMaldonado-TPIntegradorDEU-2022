import RowdiesFontLight from '../fonts/Rowdies-Light.ttf'
import RowdiesFontRegular from '../fonts/Rowdies-Regular.ttf'
import RowdiesFontBold from '../fonts/Rowdies-Bold.ttf'

/*

Se crea el tema. Recibe algunos parámetros customizables:

- tamañoLetra
- ?
- ?

*/

// Acá se cambia la relación de tamaño de todas las tipografías,
// con respecto al fontSize del theme (definido en App.js)
const tamañosLetrasVariantes = {
    'h1': '2.3em !important',
    'h2': '2.5em !important',
    'h3': '1.5em !important',
    'body1': '1.2em !important',
    'body2': '1.2em !important'
}


const paletteClaro = {
    primary: {
        main: '#337dd2',
        medio: '#2a6ab7',
        oscuro: '#225386',
    },
    error: {
        main: '#d81b00',
    },
    pasapalabra: {
        main: '#eee138',
        contrastText: 'white',
        dark: '#ddd027'
    },
    success: {
        main: '#7fcc30'
    },
    negro: {
        main: '#000000',
        dark: '#222222'
    },
    backgroundGeneral: {
        main: '#08274a'
    },
    backgroundPaper: {
        main: 'white'
    },
};

const paletteOscuro = {
    primary: {
        main: '#16385e',
        medio: '#0e233c',
        oscuro: '#060f1a',
    },
    error: {
        main: '#d81b00',
    },
    pasapalabra: {
        main: '#eee138',
        contrastText: 'white',
        dark: '#ddd027'
    },
    success: {
        main: '#7fcc30'
    },
    negro: {
        main: '#000000',
        dark: '#222222'
    },
    backgroundGeneral: {
        main: '#08274a'
    },
    backgroundPaper: {
        main: '#0a1929'
    },
    contrastThreshold: 3
};

const paletteRaro = {
    primary: {
        main: '#1e9b9c',
        medio: '#14696a',
        oscuro: '#092f2f',
    },
    error: {
        main: '#d81b00',
    },
    pasapalabra: {
        main: '#eee138',
        contrastText: 'white',
        dark: '#ddd027'
    },
    success: {
        main: '#7fcc30'
    },
    negro: {
        main: '#000000',
        dark: '#222222'
    },
    backgroundGeneral: {
        main: '#08274a'
    },
    backgroundPaper: {
        main: 'white'
    }
};



export default function crearTema(configuraciones) {

    const tamañoLetra = configuraciones.tamañoLetra;

    // Chequea qué paleta de colores usar
    const getPalette = (paleta) => {
        switch (paleta) {
            case "claro":
                return paletteClaro
            case "oscuro":
                return paletteOscuro
            case "raro":
                return paletteRaro
        }
    }

    // Cambiar theme global de la app
    const opcionesTema = {

        // Colores
        palette: getPalette(configuraciones.tema),

        typography: {
            fontSize: tamañoLetra,
            fontFamily: 'Rowdies, Roboto',

            // Acá, por X razón, no funciona el fontSize con rem o em, así que están abajo de todo.
            h2: {
                fontWeight: 800
            },
            h3: {
                textTransform: 'uppercase'
            },
            body1: {
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400
            },
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    '@font-face': {
                        fontFamily: 'Rowdies',
                        src: `url(${RowdiesFontLight}), url(${RowdiesFontRegular}), url(${RowdiesFontBold}) format('ttf')`
                    },
                    h1: {
                        fontSize: tamañosLetrasVariantes.h1
                    },
                    h2: {
                        fontSize: tamañosLetrasVariantes.h2
                    },
                    h3: {
                        fontSize: tamañosLetrasVariantes.h3
                    },
                    'p.MuiTypography-body1': {
                        fontSize: tamañosLetrasVariantes.body1
                    },
                    'p.MuiTypography-body2': {
                        fontSize: tamañosLetrasVariantes.body2
                    },
                },

            },
        },
    };

    return opcionesTema
}