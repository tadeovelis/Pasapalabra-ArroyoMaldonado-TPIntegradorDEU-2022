import './App.css'
import Home from './components/Home'
import Juego from './components/Juego'
import ComoJugar from './components/SeccionesComplementarias/ComoJugar'
import Glosario from './components/SeccionesComplementarias/Glosario'
import AcercaDeLaApp from './components/SeccionesComplementarias/AcercaDeLaApp'
import Configuracion from './components/SeccionesComplementarias/Configuracion'
import Resultado from './components/Rosco/ResultadoNuevo'

import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { CssBaseline } from '@mui/material'
import { useEffect, useState } from 'react'

import crearTema from './helpers/theming';

import configuracionPredeterminada from './data/configuracion.json'
import PreJuego from './components/PreJuego'


function App() {

  // Ajustes de configuración
  const [musica, setMusica] = useState(true);
  const [escucharDefiniciones, setEscucharDefiniciones] = useState(false);
  const [contrasteColores, setContrasteColores] = useState(false);
  const [modoDaltonico, setModoDaltonico] = useState(false);
  const [tamañoLetra, setTamañoLetra] = useState(configuracionPredeterminada.tamañoLetraPredeterminado);
  const [efectosSonidos, setEfectosSonidos] = useState(false);
  const [respuestaPorVoz, setRespuestaPorVoz] = useState(false);
  const [tema, setTema] = useState("claro");

  /* Opciones configurables */
  // El checked se completa después
  const opcionesConfigurables = {
    'switchers': [
      {
        'name': 'musica',
        'titulo': 'Música',
        'textoDetalle': 'Aún no implementado.',
        'value': musica,
        'setter': setMusica
      },
      {
        'name': 'escuchar-definiciones',
        'titulo': 'Escuchar definiciones',
        'textoDetalle': 'Si activás esta opción una voz artificial te leerá las preguntas. Aún no implementado.',
        'value': escucharDefiniciones,
        'setter': setEscucharDefiniciones
      },
      {
        'name': 'contraste-colores',
        'titulo': 'Contraste de colores',
        'textoDetalle': 'Si activás esta opción los colores de los textos contrastarán mucho más con los fondos.',
        'value': contrasteColores,
        'setter': setContrasteColores
      },
      {
        'name': 'modo-daltonico',
        'titulo': 'Modo daltónico',
        'textoDetalle': 'Aún no implementado.',
        'value': modoDaltonico,
        'setter': setModoDaltonico
      },
      {
        'name': 'efectos-sonido',
        'titulo': 'Efectos de sonido',
        'textoDetalle': 'Aún no implementado.',
        'value': efectosSonidos,
        'setter': setEfectosSonidos
      },
      {
        'name': 'respuesta-por-voz',
        'titulo': 'Respuesta por voz',
        'textoDetalle': 'Aún no implementado.',
        'value': respuestaPorVoz,
        'setter': setRespuestaPorVoz
      }
    ],
    'tamañoLetra': {
      'name': 'tamaño-letra',
      'titulo': 'Tamaño de letra',
      'textoDetalle': 'Podés elegir entre 5 tamaños de letra distintos. Mové el círculo y hacé click en "Aplicar".',
      'value': tamañoLetra,
      'setter': setTamañoLetra
    },
    'tema': {
      'name': 'tema',
      'titulo': 'Tema de colores',
      'textoDetalle': !contrasteColores ? '¡Cambiá los colores de la interfaz del juego!' : 'Para cambiar los temas primero tenés que desactivar la opción "Contraste de colores".',
      'value': tema,
      'setter': setTema,
      'estado': contrasteColores,
      'temas': [
        {
          'texto': 'Claro (predeterminado)',
          'value': 'claro'
        },
        {
          'texto': 'Oscuro',
          'value': 'oscuro'
        },
        {
          'texto': 'Extra',
          'value': 'extra'
        },
      ]
    }
  }


  const [theme, setTheme] = useState(createTheme(crearTema(tamañoLetra)));

  // Crea y asigna un nuevo tema basado en las configuraciones seteadas en el panel de configuración
  const cambiarTema = () => {
    setTheme(createTheme(crearTema({
      'contrasteColores': contrasteColores,
      'tamañoLetra': tamañoLetra,
      'tema': tema
    })));
  }

  // Cuando se cambia alguno, aplico los cambios (excepto el tamaño de letra que es manual con "Aplicar")
  useEffect(() => {
    aplicarConfiguraciones();
  }, [musica, tema, escucharDefiniciones, contrasteColores, efectosSonidos, respuestaPorVoz])

  const aplicarConfiguraciones = () => {
    cambiarTema()
  }

  // Lo ejecuta el botón "Aplicar" de Configuración
  const aplicarCambioTamañoLetra = () => {
    aplicarConfiguraciones();
  }


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header>
        </header>
        <BrowserRouter>
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/preparacion' element={<PreJuego />} />
            <Route path="/rosco" element={<Juego />} />
            <Route path="/rosco/resultado" element={<Resultado />} />
            <Route path="/como-jugar" element={<ComoJugar />} />
            <Route path="/glosario" element={<Glosario />} />
            <Route path="/acerca-de-la-app" element={<AcercaDeLaApp />} />
            <Route path="/configuracion" element={
              <Configuracion
                cambiarTema={cambiarTema}
                opcionesConfigurables={opcionesConfigurables}
                aplicarCambioTamañoLetra={aplicarCambioTamañoLetra}
              />
            } />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
