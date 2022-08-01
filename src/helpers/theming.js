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
    'h1': {
        'xs': '1.7em !important',
        'sm': '2em !important',
        'lg': '2.3em !important'
    },
    'h2': {
        'xs': '1.6em !important',
        'sm': '1.9em !important',
        'lg': '2.2em !important'
    },
    'h3': {
        'xs': '1.2em !important',
        'sm': '1.3em !important',
        'lg': '1.5em !important'
    },
    'body1': {
        'xs': '1em !important',
        'sm': '1.1em !important',
        'lg': '1.2em !important'
    },
    'body2': {
        'xs': '1em !important',
        'sm': '1.1em !important',
        'lg': '1.2em !important'
    },
    'button': {
        'xs': '1.1em !important',
        'sm': '1.3em !important',
        'lg': '1.5em !important'
    }
}

const breakpoints = {
    'xs': '0px',
    'sm': '600px',
    'md': '900px',
    'lg': '1200px',
    'xl': '1536px'
}


const paletteClaro = {
    primary: {
        main: '#2f74c2',
        medio: '#2761a7',
        oscuro: '#225386',
    },
    error: {
        main: '#d81b00',
    },
    pasapalabra: {
        main: '#f2e100',
        contrastText: 'white',
        dark: '#ddd027'
    },
    success: {
        main: '#7fcc30'
    },
    current: {
        main: '#83B8F6'
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
    input: {
        main: '#337dd2'
    },
    textoPaper: {
        main: '#000',
    },
    tiempoRestante: {
        main: '#ce5c8c'
    },
    respuestasCorrectas: {
        main: '#e27600'
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
    current: {
        main: '#386190'
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
    textoPaper: {
        main: '#fff'
    },
    input: {
        contrastText: '#fff'
    },
    tiempoRestante: {
        main: '#ce5c8c'
    },
    respuestasCorrectas: {
        main: '#e27600'
    },
    contrastThreshold: 3
};

const paletteExtra = {
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
    current: {
        main: '#56BEBF'
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
    input: {
        main: '#1e9b9c'
    },
    textoPaper: {
        main: '#fff'
    },
    tiempoRestante: {
        main: '#ce5c8c'
    },
    respuestasCorrectas: {
        main: '#e27600'
    },
};

const paletteContrasteColores = {
    primary: {
        main: '#000',
        medio: '#000',
        oscuro: '#000',
    },
    error: {
        main: '#eb1705'
    },
    pasapalabra: {
        main: '#ffec2a',
        contrastText: 'white',
        dark: '#fff'
    },
    success: {
        main: '#38ef0b'
    },
    current: {
        main: '#373737'
    },
    negro: {
        main: '#000000',
        dark: '#fff'
    },
    backgroundGeneral: {
        main: '#000'
    },
    backgroundPaper: {
        main: '#000'
    },
    textoPaper: {
        main: '#fff',
        contrastText: '#fff'
    },
    input: {
        main: '#fff',
        contrastText: '#fff'
    },
    tiempoRestante: {
        main: '#ce5c8c'
    },
    respuestasCorrectas: {
        main: '#e27600'
    },
};



export default function crearTema(configuraciones) {

    const tamañoLetra = configuraciones.tamañoLetra;

    // Chequea qué paleta de colores usar
    const getPalette = () => {
        if (configuraciones.contrasteColores) {
            return paletteContrasteColores
        }
        else {
            switch (configuraciones.tema) {
                case "claro":
                    return paletteClaro
                case "oscuro":
                    return paletteOscuro
                case "extra":
                    return paletteExtra
            }
        }
    }

    const getComponents = () => {
        let borderBotones = {};
        if (configuraciones.contrasteColores) {
            borderBotones = '3px solid #fff';
        }

        return {
            MuiCssBaseline: {
                styleOverrides: {
                    '@font-face': {
                        fontFamily: 'Rowdies',
                        src: `url(${RowdiesFontLight}), url(${RowdiesFontRegular}), url(${RowdiesFontBold}) format('ttf')`
                    },
                    h1: {
                        [`@media (max-width:${breakpoints.lg})`]: {
                            fontSize: tamañosLetrasVariantes.h1.sm,
                        },
                        [`@media (max-width:${breakpoints.sm})`]: {
                            fontSize: tamañosLetrasVariantes.h1.xs,
                        },
                        fontSize: tamañosLetrasVariantes.h1.lg
                    },
                    h2: {
                        [`@media (max-width:${breakpoints.lg})`]: {
                            fontSize: tamañosLetrasVariantes.h2.sm,
                        },
                        [`@media (max-width:${breakpoints.sm})`]: {
                            fontSize: tamañosLetrasVariantes.h2.xs,
                        },
                        fontSize: tamañosLetrasVariantes.h2.lg
                    },
                    h3: {
                        [`@media (max-width:${breakpoints.lg})`]: {
                            fontSize: tamañosLetrasVariantes.h3.sm,
                        },
                        [`@media (max-width:${breakpoints.sm})`]: {
                            fontSize: tamañosLetrasVariantes.h3.xs,
                        },
                        fontSize: tamañosLetrasVariantes.h3.lg
                    },
                    'p.MuiTypography-body1': {
                        [`@media (max-width:${breakpoints.lg})`]: {
                            fontSize: tamañosLetrasVariantes.body1.sm,
                        },
                        [`@media (max-width:${breakpoints.sm})`]: {
                            fontSize: tamañosLetrasVariantes.body1.xs,
                        },
                        fontSize: tamañosLetrasVariantes.body1.lg,
                    },
                    'p.MuiTypography-body2': {
                        [`@media (max-width:${breakpoints.lg})`]: {
                            fontSize: tamañosLetrasVariantes.body2.sm,
                        },
                        [`@media (max-width:${breakpoints.sm})`]: {
                            fontSize: tamañosLetrasVariantes.body2.xs,
                        },
                        fontSize: tamañosLetrasVariantes.body2.lg,
                    },
                    'a.MuiButton-root': {
                        [`@media (max-width:${breakpoints.lg})`]: {
                            fontSize: tamañosLetrasVariantes.button.sm,
                        },
                        [`@media (max-width:${breakpoints.sm})`]: {
                            fontSize: tamañosLetrasVariantes.button.xs,
                        },
                        fontSize: tamañosLetrasVariantes.button.lg,
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        border: borderBotones
                    }
                }
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        border: borderBotones
                    }
                }
            }
        }
    }

    // Cambiar theme global de la app
    const opcionesTema = {

        // Colores
        palette: getPalette(),

        // Tipografías
        typography: {
            fontSize: tamañoLetra,
            fontFamily: 'Rowdies, Roboto',

            // Acá, por X razón, no funciona el fontSize con rem o em, así que están abajo de todo (en components).
            h2: {
                fontWeight: 800
            },
            h3: {
                textTransform: 'uppercase'
            },
            body1: {
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 500
            },
        },

        components: getComponents(),
    };

    return opcionesTema
}