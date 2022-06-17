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
    input: {
        main: '#337dd2'
    }
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
    textoPaper: {
        main: '#fff'
    },
    input: {
        contrastText: '#fff'
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
    }
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
    }
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
        components: getComponents()
    };

    return opcionesTema
}